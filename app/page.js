import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ulises Blak | Desarrollador web en Guadalajara",
  description:
    "Soy Ulises Blak, desarrollador web en Guadalajara e ingeniero en software interactivo y videojuegos. Diseño de páginas web con Next.js y SEO.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Blog personal · Zapopan, Jalisco</span>

            {/* Título → H1 */}
            <h1 data-seo="Título → H1">Ulises Blak, desarrollador web en Guadalajara</h1>

            {/* Título de entrada (10–15 palabras) → H3 */}
            <h3 data-seo="Título de entrada → H3" data-seo-min="10" data-seo-max="15">Hola, soy Ulises: programo sitios web, creo videojuegos y toco guitarra en Jalisco</h3>

            {/* SEO text (100–150 palabras, 5–10 keywords en negritas) → H4 */}
            <h4 className="seo-text" data-seo="SEO text → H4" data-seo-min="100" data-seo-max="150" data-seo-kw-min="5" data-seo-kw-max="10">
              Soy <strong>desarrollador web en Guadalajara</strong> e{" "}
              <strong>ingeniero en software interactivo y videojuegos</strong>. Nací en Degollado y hoy vivo
              en Zapopan, donde trabajo en <strong>desarrollo web</strong> para personas y negocios que quieren
              un sitio rápido, claro y fácil de encontrar en Google. Me especializo en el{" "}
              <strong>diseño de páginas web</strong> modernas con tecnologías como <strong>Next.js</strong> y{" "}
              <strong>React</strong>, cuidando el <strong>SEO</strong> desde la primera línea de código. Además,
              estudio una maestría en <strong>administración de empresas</strong>, lo que me ayuda a entender lo
              que un proyecto necesita para crecer, no solo cómo programarlo. Cuando no estoy frente a la
              computadora, estoy tocando guitarra o pensando en el próximo videojuego que quiero crear. En este{" "}
              <strong>blog personal</strong> comparto lo que aprendo, mis proyectos y el proceso detrás de cada uno.
            </h4>

            <Link href="/blog-desarrollo-web" className="btn">Leer el blog</Link>
            <Link href="/programador-web-jalisco" className="btn btn-ghost">Sobre mí</Link>
          </div>

          {/* Imagen en Home con alt-text de keyword */}
          <div className="hero-img">
            <Image
              src="/img/ulises-blak-desarrollador-web-guadalajara.webp"
              alt="Ulises Blak, desarrollador web en Guadalajara"
              data-seo="Imagen en Home con alt-text de keyword"
              data-seo-src="ulises-blak-desarrollador-web-guadalajara.webp"
              width={900}
              height={1000}
              priority
              sizes="(max-width: 820px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Lo que hago</span>
          <div className="cards">
            <div className="card">
              <div className="k">Sitios web</div>
              <p>Páginas rápidas, responsivas y listas para aparecer en Google.</p>
            </div>
            <div className="card">
              <div className="k">Videojuegos</div>
              <p>Experiencias interactivas, desde la idea hasta el prototipo jugable.</p>
            </div>
            <div className="card">
              <div className="k">Estrategia</div>
              <p>Visión de negocio para que cada proyecto tenga un objetivo claro.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section closing">
        <div className="wrap">
          {/* Título de salida (10–15 palabras) → H3 */}
          <h3 data-seo="Título de salida → H3" data-seo-min="10" data-seo-max="15">Si buscas un desarrollador web en Guadalajara, escríbeme y hagamos tu proyecto juntos</h3>
          <Link href="/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs" className="btn">
            Ver cómo hice este sitio
          </Link>
        </div>
      </section>
    </>
  );
}
