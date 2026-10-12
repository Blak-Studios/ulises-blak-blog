import Image from "next/image";
import Link from "next/link";

// Página optimizada para SERP #1
// Keyword: "programador web en Jalisco" → título y URL (1 KW)
export const metadata = {
  title: "Programador web en Jalisco: conoce a Ulises Blak",
  description:
    "Soy Ulises Blak, programador web en Jalisco e ingeniero en software interactivo y videojuegos. Ofrezco desarrollo web en Zapopan y Guadalajara.",
  alternates: { canonical: "/programador-web-jalisco" },
};

export default function SobreMi() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Sobre mí</span>

            {/* Título → H1 */}
            <h1 data-seo="Título → H1">Sobre mí: Ulises Blak, programador web en Jalisco</h1>

            {/* Título de entrada (10–15 palabras) → H3 */}
            <h3 data-seo="Título de entrada → H3" data-seo-min="10" data-seo-max="15">De Degollado a Zapopan: mi camino entre el código, los videojuegos y la guitarra</h3>

            {/* SEO text (100–150 palabras, 5–10 keywords en negritas) → H4 */}
            <h4 className="seo-text" data-seo="SEO text → H4" data-seo-min="100" data-seo-max="150" data-seo-kw-min="5" data-seo-kw-max="10">
              Me llamo Ulises Blak y soy <strong>programador web en Jalisco</strong>. Crecí en Degollado, un
              pueblo de Jalisco, y ahí empezó mi curiosidad por saber cómo funcionaban los juegos y las páginas
              que usaba todos los días. Esa curiosidad me llevó a estudiar{" "}
              <strong>ingeniería en software interactivo y videojuegos</strong>, donde aprendí{" "}
              <strong>programación</strong>, diseño de experiencias y <strong>desarrollo de videojuegos</strong>.
              Hoy vivo en Zapopan y me dedico al <strong>desarrollo web en Zapopan</strong> y Guadalajara,
              creando <strong>sitios web</strong> a la medida. También estudio una{" "}
              <strong>maestría en administración de empresas</strong>, porque creo que un buen proyecto digital
              necesita estrategia además de código. Fuera del trabajo, la <strong>guitarra</strong> es mi forma
              de desconectarme: tocar me enseñó paciencia y práctica constante, dos cosas que también aplico
              cuando programo.
            </h4>
          </div>

          <div className="hero-img">
            <Image
              src="/img/ulises-blak-desarrollador-web-guadalajara.webp"
              alt="Ulises Blak, programador web en Jalisco"
              data-seo="Imagen con alt-text de keyword"
              data-seo-src="ulises-blak-desarrollador-web-guadalajara.webp"
              width={900}
              height={1000}
              sizes="(max-width: 820px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">En resumen</span>
          <div className="cards">
            <div className="card">
              <div className="k">Ingeniería</div>
              <p>Ingeniero en Software Interactivo y Videojuegos.</p>
            </div>
            <div className="card">
              <div className="k">Maestría</div>
              <p>Estudiante de la Maestría en Administración de Empresas.</p>
            </div>
            <div className="card">
              <div className="k">Música</div>
              <p>Guitarrista por gusto; la práctica diaria también me hace mejor programador.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section closing">
        <div className="wrap">
          {/* Título de salida (10–15 palabras) → H3 */}
          <h3 data-seo="Título de salida → H3" data-seo-min="10" data-seo-max="15">¿Quieres conocer cómo trabajo? Lee en mi blog cómo construí este sitio desde cero</h3>
          <Link href="/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs" className="btn">
            Leer la entrada
          </Link>
        </div>
      </section>
    </>
  );
}
