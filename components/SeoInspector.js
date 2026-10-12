"use client";

// "Modo profe": al pasar el mouse sobre un elemento con data-seo,
// muestra su etiqueta HTML, el requisito que cumple y sus conteos.
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const countWords = (t) => (t.match(/[\p{L}\p{N}][\p{L}\p{N}.\-@]*/gu) || []).length;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const cut = (s, n) => (s.length > n ? s.slice(0, n).trimEnd() + "…" : s);

function range(n, min, max) {
  if (min == null) return "";
  const ok = n >= min && n <= max;
  return `<span class="si-${ok ? "ok" : "bad"}">${ok ? "✓" : "✗"} rango ${min}–${max}</span>`;
}

function describe(el) {
  const d = el.dataset;
  const tag = el.tagName.toLowerCase();
  const rows = [];
  let code = "";

  if (tag === "img") {
    const src = (el.getAttribute("src") || "").split("?")[0];
    const file = decodeURIComponent(d.seoSrc || src).split("/").pop();
    code = `<img\n  src="/img/${file}"\n  alt="${el.alt}"\n  width="${el.getAttribute("width")}" height="${el.getAttribute("height")}"\n/>`;
    rows.push(["alt", `"${el.alt}"`]);
    rows.push(["Formato", `${file.split(".").pop().toUpperCase()} · ${el.getAttribute("width")}×${el.getAttribute("height")} · next/image`]);
  } else if (tag === "a") {
    const href = el.getAttribute("href");
    const external = /^https?:/.test(href);
    code = external
      ? `<a href="${href}"\n   target="_blank" rel="noopener noreferrer">\n  ${el.textContent.trim()}\n</a>`
      : `<Link href="${href}">${el.textContent.trim()}</Link>`;
    rows.push(["Tipo", external ? "Backlink externo" : "Backlink interno"]);
    rows.push(["Destino", href]);
  } else {
    const text = el.textContent.replace(/\s+/g, " ").trim();
    const words = countWords(text);
    const kws = [...new Set([...el.querySelectorAll("strong")].map((s) => s.textContent.trim()))];
    if (tag === "h4") {
      const first = el.querySelector("strong")?.textContent.trim() || "keyword";
      code = `<h4 className="seo-text">\n  ${cut(text, 70)}\n  …<strong>${first}</strong>…\n</h4>`;
    } else if (tag === "div") {
      code = `<p>\n  …<strong>${kws[0] || "keyword"}</strong>…\n</p>\n<h2>…</h2>\n<p>…</p>`;
    } else {
      code = `<${tag}>${cut(text, 90)}</${tag}>`;
    }
    rows.push(["Palabras", `${words} ${range(words, num(d.seoMin), num(d.seoMax))}`]);
    if (d.seoKwMin) rows.push(["Keywords", `${kws.length} en negritas ${range(kws.length, num(d.seoKwMin), num(d.seoKwMax))}`]);
    if (d.seoKwMin && kws.length) rows.push(["Lista", kws.map((k) => `<b>${esc(k)}</b>`).join(", ")]);
    if (d.seoKw) rows.push(["Keyword", `<b>${esc(d.seoKw)}</b>`]);
  }

  return { title: d.seo, tag, code: esc(code), rows };
}
const num = (v) => (v == null ? null : Number(v));

export default function SeoInspector() {
  const [on, setOn] = useState(true);
  const [serpOpen, setSerpOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [serp, setSerp] = useState({ title: "", url: "", desc: "" });
  const tipRef = useRef(null);
  const current = useRef(null);
  const pathname = usePathname();

  // Recordar si el modo está activo
  useEffect(() => {
    try { if (localStorage.getItem("modo-profe") === "off") setOn(false); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("modo-profe", on ? "on" : "off"); } catch {}
    document.body.classList.toggle("modo-profe", on);
    if (!on) clear();
  }, [on]);

  // Datos de SERP de la página actual
  useEffect(() => {
    const t = setTimeout(() => {
      setSerp({
        title: document.title,
        url: window.location.host + (pathname === "/" ? "" : pathname),
        desc: document.querySelector('meta[name="description"]')?.content || "",
      });
    }, 50);
    clear();
    return () => clearTimeout(t);
  }, [pathname]);

  const mouse = useRef({ clientX: 0, clientY: 0 });
  function position(e) {
    if (e) mouse.current = { clientX: e.clientX, clientY: e.clientY };
    const tip = tipRef.current;
    if (!tip) return;
    const { clientX, clientY } = mouse.current;
    const pad = 16, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = clientX + pad, y = clientY + pad;
    if (x + w > window.innerWidth - 8) x = clientX - w - pad;
    if (y + h > window.innerHeight - 8) y = clientY - h - pad;
    tip.style.transform = `translate(${Math.max(8, x)}px, ${Math.max(8, y)}px)`;
    tip.style.visibility = "visible";
  }
  // Coloca la ventanita en cuanto aparece o cambia de contenido
  useLayoutEffect(() => { if (info) position(); }, [info]);

  function clear() {
    current.current?.classList.remove("si-target");
    current.current = null;
    setInfo(null);
  }

  useEffect(() => {
    if (!on) return;
    const over = (e) => {
      if (tipRef.current?.contains(e.target)) return;
      const el = e.target.closest?.("[data-seo]");
      if (!el) return clear();
      if (el !== current.current) {
        current.current?.classList.remove("si-target");
        el.classList.add("si-target");
        current.current = el;
        setInfo(describe(el));
      }
      position(e);
    };
    document.addEventListener("mousemove", over);
    document.addEventListener("mouseleave", clear);
    return () => {
      document.removeEventListener("mousemove", over);
      document.removeEventListener("mouseleave", clear);
    };
  }, [on]);

  const tLen = serp.title.length, dLen = serp.desc.length;

  return (
    <>
      {on && info && (
        <div className="si-tip" ref={tipRef} role="tooltip">
          <div className="si-head">
            <span className="si-tag">&lt;{info.tag}&gt;</span>
            <span className="si-title">{info.title}</span>
          </div>
          <pre className="si-code" dangerouslySetInnerHTML={{ __html: info.code }} />
          <dl className="si-rows">
            {info.rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd dangerouslySetInnerHTML={{ __html: v }} />
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="si-dock">
        {serpOpen && (
          <div className="si-serp">
            <div className="si-serp-label">Así se ve en Google (SERP)</div>
            <div className="si-serp-url">{serp.url}</div>
            <div className="si-serp-title">{serp.title}</div>
            <div className="si-serp-desc">{serp.desc}</div>
            <pre className="si-code">{`<title>${serp.title}</title>\n<meta name="description"\n      content="${cut(serp.desc, 60)}" />`}</pre>
            <div className="si-serp-meta">
              Título: {tLen} caracteres {tLen <= 60 ? "✓" : "(largo)"} · Meta: {dLen} caracteres {dLen <= 160 ? "✓" : "(larga)"}
            </div>
          </div>
        )}
        <button type="button" className="si-btn" onClick={() => setSerpOpen((v) => !v)} aria-expanded={serpOpen}>
          {serpOpen ? "Cerrar SERP" : "Ver SERP"}
        </button>
        <button type="button" className={`si-btn ${on ? "si-btn-on" : ""}`} onClick={() => setOn((v) => !v)} aria-pressed={on}>
          Modo profe: {on ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
}
