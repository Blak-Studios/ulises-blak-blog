import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role} · Zapopan, Jalisco
        </p>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          Instagram {site.instagramUser}
        </a>
      </div>
    </footer>
  );
}
