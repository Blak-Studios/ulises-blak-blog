# Ulises Blak · Blog personal

Sitio personal hecho con **Next.js**, listo para subir a **GitHub** y publicar en **Vercel**.

## Correr en tu PC

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Subir a GitHub y Vercel

1. Crea un repositorio vacío en GitHub (por ejemplo `ulises-blak-blog`).
2. En la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primer commit: blog personal"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/ulises-blak-blog.git
   git push -u origin main
   ```
3. Entra a https://vercel.com → **Add New → Project** → importa el repo → **Deploy**.
4. Cuando tengas tu dominio, cámbialo en `lib/site.js` (`SITE_URL`) y vuelve a hacer push.

## Páginas

| Página | URL |
|---|---|
| Inicio | `/` |
| Sobre mí (SERP #1) | `/programador-web-jalisco` |
| Blog (SERP #2) | `/blog-desarrollo-web` |
| Entrada de blog | `/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs` |

Revisa `CHECKLIST-SEO.md` para ver dónde se cumple cada requisito de la tarea.

## Cambiar imágenes

Reemplaza los archivos de `public/img/` por fotos tuyas **con el mismo nombre** (formato `.webp`).
