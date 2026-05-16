import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span>Rodinné vinařství</span>
            <strong>Lanovín</strong>
          </div>
          <p>Rodinné vinařství a ubytování.</p>
          <p className="footer-note">Víno odesíláme jednou za 14 dní.</p>
        </div>
        <div className="footer-card">
          <strong>Rychlé odkazy</strong>
          <div className="footer-links">
            <Link href="/">Domů</Link>
            <Link href="/shop">Ceník vín</Link>
            <Link href="/accommodation">Ubytování</Link>
            <Link href="/gallery">Galerie</Link>
            <Link href="/contact">Kontakt</Link>
            <Link href="/login">Admin</Link>
          </div>
        </div>
        <div className="footer-card">
          <strong>Kontakt</strong>
          <p>Náměstí Republiky 102<br />Moravská Nová Ves</p>
          <p>
            <a href="tel:+420607622746">+420 607 622 746</a>
            <br />
            <a href="mailto:lanovin.sklepecek@lanovin.cz">lanovin.sklepecek@lanovin.cz</a>
          </p>
        </div>
        <div className="footer-card">
          <strong>Předání vín</strong>
          <p>Pro dostupnost a předání nám napište nebo zavolejte.</p>
        </div>
      </div>
    </footer>
  );
}