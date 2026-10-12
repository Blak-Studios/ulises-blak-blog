import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/programador-web-jalisco", label: "Sobre mí" },
  { href: "/blog-desarrollo-web", label: "Blog" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="Ulises Blak, inicio">
          <span className="logo-mark">UB</span>
          <span className="logo-text">Ulises Blak</span>
        </Link>
        <nav aria-label="Principal">
          <ul className="nav">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
