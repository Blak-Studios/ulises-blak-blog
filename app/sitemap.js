import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/programador-web-jalisco",
    "/blog-desarrollo-web",
    "/blog-desarrollo-web/como-crear-un-sitio-web-con-nextjs",
  ];
  return routes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: new Date() }));
}
