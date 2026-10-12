import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// Entrada de blog: 250–500 palabras, 10–15 keywords en negritas,
// imagen optimizada, título con 1 keyword ("crear un sitio web"),
// backlink interno + backlink externo.
export const metadata = {
  title: "Cómo crear un sitio web con Next.js y Vercel | Ulises Blak",
  description:
    "Te cuento paso a paso cómo crear un sitio web con Next.js, GitHub y Vercel, cuidando el SEO desde el inicio. Por Ulises Blak, desarrollador web en Guadalajara.",
  alternates: { canonical: "/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs" },
  openGraph: {
    type: "article",
    images: ["/img/crear-un-sitio-web-con-nextjs-y-vercel.webp"],
  },
};

export default function Post() {
  return (
    <article className="article">
      <span className="eyebrow">Blog · Desarrollo web</span>

      {/* Título con 1 keyword → H1 */}
      <h1 data-seo="Título de la entrada con 1 keyword → H1" data-seo-kw="crear un sitio web">Cómo crear un sitio web con Next.js y Vercel: así hice el mío</h1>
      <p className="meta">Por Ulises Blak · 11 de octubre de 2026 · Lectura de 3 minutos</p>

      {/* Imagen optimizada: WebP, dimensiones fijas, alt con keyword, next/image */}
      <figure>
        <Image
          src="/img/crear-un-sitio-web-con-nextjs-y-vercel.webp"
          alt="Cómo crear un sitio web con Next.js y Vercel"
          data-seo="Imagen optimizada"
          data-seo-src="crear-un-sitio-web-con-nextjs-y-vercel.webp"
          width={1200}
          height={630}
          priority
          sizes="(max-width: 760px) 100vw, 720px"
        />
        <figcaption>El flujo que usé: código en Next.js, repositorio en GitHub y publicación en Vercel.</figcaption>
      </figure>

      <div
        className="post-body"
        data-seo="Entrada de blog (250–500 palabras, 10–15 keywords)"
        data-seo-min="250" data-seo-max="500" data-seo-kw-min="10" data-seo-kw-max="15"
      >
      <p>
        Cuando decidí tener mi propio <strong>blog personal</strong>, quería algo más que una plantilla:
        quería entender cada línea. Por eso elegí <strong>crear un sitio web</strong> desde cero con{" "}
        <strong>Next.js</strong>, subir el código a <strong>GitHub</strong> y publicarlo en{" "}
        <strong>Vercel</strong>. Aquí te cuento cómo lo hice, paso a paso.
      </p>

      <h2>1. Planear antes de programar</h2>
      <p>
        Antes de escribir código hice una <strong>investigación de keywords</strong> para saber cómo me
        buscaría la gente. Mi palabra clave principal es <strong>desarrollador web en Guadalajara</strong>, y
        alrededor de ella armé las páginas: Inicio, Sobre mí y este blog. Mi maestría en administración de
        empresas me ayudó a verlo como un proyecto con objetivo, público y estrategia.
      </p>

      <h2>2. Construir con Next.js y React</h2>
      <p>
        Usé Next.js con <strong>React</strong> porque genera páginas rápidas y permite definir el título y la
        meta-descripción de cada una. Cada página tiene un solo H1, subtítulos claros y textos con las palabras
        clave en negritas. Mi formación como ingeniero en software interactivo y videojuegos me enseñó a pensar
        en la experiencia del usuario, así que cuidé que el sitio se leyera bien en el celular.
      </p>

      <h2>3. Optimizar para SEO</h2>
      <p>
        El <strong>SEO on-page</strong> fue clave: URLs con palabras clave, como la de mi página de{" "}
        <strong>programador web en Jalisco</strong>, imágenes en formato WebP con texto alternativo y enlaces
        internos entre páginas. También usé el componente <code>next/image</code>, que entrega cada imagen en el
        tamaño justo y mejora la <strong>velocidad de carga</strong>.
      </p>

      <h2>4. Publicar con GitHub y Vercel</h2>
      <p>
        Subí el proyecto a un repositorio en GitHub y lo conecté con Vercel. Desde entonces, cada vez que hago
        un cambio y lo subo, Vercel publica la nueva versión en segundos, sin configurar servidores. Es el{" "}
        <strong>despliegue continuo</strong> que usan muchos equipos profesionales.
      </p>

      <h2>Lo que aprendí</h2>
      <p>
        Hacer mi propio sitio me recordó a aprender guitarra: al principio todo cuesta, pero con práctica cada
        parte encaja. Si quieres saber más de mi historia, visita mi página{" "}
        {/* Backlink interno */}
        <Link href="/programador-web-jalisco" data-seo="Backlink interno">sobre mí</Link>, y si te interesa ver el día a día de mis
        proyectos y mi música, sígueme en{" "}
        {/* Backlink externo */}
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" data-seo="Backlink externo">
          mi Instagram {site.instagramUser}
        </a>
        .
      </p>
      </div>
    </article>
  );
}
