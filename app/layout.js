import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoInspector from "@/components/SeoInspector";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ulises Blak | Desarrollador web en Guadalajara",
    template: "%s",
  },
  description:
    "Blog personal de Ulises Blak, desarrollador web en Guadalajara e ingeniero en software interactivo y videojuegos.",
  openGraph: { locale: "es_MX", type: "website", siteName: "Ulises Blak" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SeoInspector />
      </body>
    </html>
  );
}
