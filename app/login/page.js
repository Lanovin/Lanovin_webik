import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";

export const metadata = {
  title: "Přihlášení – Vinařství Lanovín",
  description: "Přihlášení do administrace vinařství Lanovín.",
};

export default async function LoginPage({ searchParams }) {
  const session = await getSession();

  if (session?.role === "admin") {
    redirect("/admin");
  }

  if (session) {
    redirect("/");
  }

  const params = (await searchParams) ?? {};
  const hasError = params.error === "1";

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span>Vinařství</span>
            <strong>Lanovín</strong>
          </div>
          <nav className="main-nav" aria-label="Hlavní navigace">
            <Link href="/">Domů</Link>
            <Link href="/shop">Obchod</Link>
            <Link href="/contact">Kontakt</Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <section className="section">
          <div className="container">
            <p className="eyebrow">Přihlášení</p>
            <h2>Vstup do administrace</h2>
            <form className="contact-panel" method="post" action="/api/login">
              <label>
                Uživatelské jméno
                <input type="text" name="username" required />
              </label>
              <label>
                Heslo
                <input type="password" name="password" required />
              </label>
              {hasError ? <p className="contact-note">Neplatné přihlašovací údaje.</p> : null}
              <button className="button primary" type="submit">
                Přihlásit se
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}