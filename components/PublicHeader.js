import Link from "next/link";

import { CartButton } from "@/components/CartButton";

export function PublicHeader() {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-meta">
            <a href="tel:+420607622746">+420 607 622 746</a>
            <a href="mailto:lanovin.sklepecek@lanovin.cz">lanovin.sklepecek@lanovin.cz</a>
          </div>
          <div className="shipping-pill">Víno odesíláme 1x za 14 dní</div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="Vinařství Lanovín">
            <span>Vinařství</span>
            <strong>Lanovín</strong>
          </Link>
          <nav className="main-nav" aria-label="Hlavní navigace">
            <Link href="/">Domů</Link>
            <Link href="/about">O nás</Link>
            <Link href="/shop">Ceník</Link>
            <Link href="/accommodation">Ubytování</Link>
            <Link href="/gallery">Galerie</Link>
            <Link href="/contact">Kontakt</Link>
          </nav>
          <CartButton />
        </div>
      </header>
    </>
  );
}