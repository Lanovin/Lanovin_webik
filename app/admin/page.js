import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";
import { contentFields, getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "CMS – Vinařství Lanovín",
  description: "Administrace obsahu pro web vinařství Lanovín.",
};

export default async function AdminPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  if (session.role !== "admin") {
    return (
      <main className="site-main">
        <section className="section">
          <div className="container">
            <p className="eyebrow">Administrace</p>
            <h2>Nemáte oprávnění pro přístup do administrace.</h2>
          </div>
        </section>
      </main>
    );
  }

  const content = await loadContent();

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span>Vinařství</span>
            <strong>Lanovín</strong>
          </div>
          <nav className="main-nav" aria-label="Administrace">
            <Link href="/">Web</Link>
            <Link href="/admin">CMS</Link>
            <Link href="/admin/logout">Odhlásit</Link>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <section className="section">
          <div className="container">
            <p className="eyebrow">CMS rozhraní</p>
            <h2>Upravit texty na webu</h2>
            <p>Po uložení se změny ihned projeví na webu.</p>
            <form className="contact-panel" method="post" action="/admin/save">
              {Object.entries(contentFields).map(([key, label]) => (
                <label key={key}>
                  {label}
                  <textarea name={key} rows="3" defaultValue={getContentValue(content, key)} />
                </label>
              ))}
              <button className="button primary" type="submit">
                Uložit změny
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}