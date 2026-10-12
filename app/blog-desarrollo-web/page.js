import Image from "next/image";
import Link from "next/link";

// Página optimizada para SERP #2
// Keyword: "desarrollo web" → título y URL (1 KW)
export const metadata = {
  title: "Blog de desarrollo web | Ulises Blak",
  description:
    "Blog de desarrollo web de Ulises Blak: programación, Next.js y SEO explicados paso a paso para crear sitios rápidos desde Guadalajara, Jalisco.",
  alternates: { canonical: "/blog-desarrollo-web" },
};

const posts = [
  {
    href: "/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs",
    title: "Cómo crear un sitio web con Next.js y Vercel: así hice el mío",
    date: "11 de octubre de 2026",
    img: "/img/crear-un-sitio-web-con-nextjs-y-vercel.webp",
    alt: "Cómo crear un sitio web con Next.js y Vercel",
  },
];

export default function Blog() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Blog</span>

          {/* Título → H1 */}
          <h1 data-seo="Título → H1">Blog de desarrollo web y programación</h1>

          {/* Título de entrada (10–15 palabras) → H3 */}
          <h3 data-seo="Título de entrada → H3" data-seo-min="10" data-seo-max="15">Aquí documento lo que aprendo creando sitios web, videojuegos y proyectos personales</h3>

          {/* SEO text (100–150 palabras, 5–10 keywords en negritas) → H4 */}
          <h4 className="seo-text" data-seo="SEO text → H4" data-seo-min="100" data-seo-max="150" data-seo-kw-min="5" data-seo-kw-max="10">
            Este es mi <strong>blog de desarrollo web</strong>, un espacio donde comparto lo que voy aprendiendo
            como programador en Guadalajara. Aquí encontrarás <strong>tutoriales de programación</strong>,
            explicaciones sobre herramientas como <strong>Next.js</strong>, <strong>React</strong> y{" "}
            <strong>Vercel</strong>, y consejos de <strong>SEO</strong> para que un sitio aparezca en Google.
            Escribo de forma sencilla, pensando en estudiantes y en personas que quieren{" "}
            <strong>crear un sitio web</strong> por primera vez, porque así me hubiera gustado aprender a mí.
            También hablo del proceso detrás de mis proyectos: cómo los planeo, qué errores cometo y qué haría
            diferente. De vez en cuando aparecerán temas de <strong>videojuegos</strong>, de negocio y hasta de
            guitarra, porque todo eso forma parte de cómo trabajo. Si te interesa el{" "}
            <strong>desarrollo web en Jalisco</strong>, este blog es para ti.
          </h4>

          <ul className="post-list">
            {posts.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="post-card">
                  <Image src={p.img} alt={p.alt} width={1200} height={630} sizes="(max-width: 640px) 100vw, 260px" />
                  <div>
                    <div className="title">{p.title}</div>
                    <div className="meta">{p.date} · Lectura de 3 minutos</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section closing">
        <div className="wrap">
          {/* Título de salida (10–15 palabras) → H3 */}
          <h3 data-seo="Título de salida → H3" data-seo-min="10" data-seo-max="15">Pronto publicaré más entradas sobre programación, videojuegos y proyectos que estoy construyendo</h3>
          <Link href="/programador-web-jalisco" className="btn">Conóceme</Link>
        </div>
      </section>
    </>
  );
}
