import { MultilineText } from "@/components/MultilineText";
import { ShopProductGrid } from "@/components/ShopProductGrid";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "Ceník vín – Vinařství Lanovín",
  description: "Aktuální přehled vín a ročníků vinařství Lanovín.",
};

export default async function ShopPage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero small">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(112deg, rgba(30, 21, 17, 0.78), rgba(30, 21, 17, 0.28)), url('/20231226_200404.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Obchod s vínem"
        />
        <div className="container hero-layout hero-layout-wide">
          <div className="hero-content">
            <p className="eyebrow">Ceník vín</p>
            <h1>{getContentValue(content, "shop_hero_title")}</h1>
            <MultilineText className="hero-text" text={getContentValue(content, "shop_hero_text")} />
          </div>
          <aside className="hero-panel glass-card">
            <p className="eyebrow">Stručně</p>
            <div className="bullet-list compact-list">
              <div>
                <strong>Informativní ceník</strong>
                <span>Na webu najdete aktuální přehled vín.</span>
              </div>
              <div>
                <strong>Osobní kontakt</strong>
                <span>Zájem řešíme e-mailem nebo telefonicky.</span>
              </div>
              <div>
                <strong>Předání po domluvě</strong>
                <span>Osobní odběr nebo odeslání jednou za 14 dní.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Aktuální nabídka</p>
              <h2>{getContentValue(content, "shop_intro_title")}</h2>
              <MultilineText text={getContentValue(content, "shop_intro_text")} />
            </div>
            <div className="shop-info">
              <div>
                <strong>Telefon</strong>
                <span>+420 607 622 746</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>lanovin.sklepecek@lanovin.cz</span>
              </div>
              <div>
                <strong>Osobní odběr</strong>
                <span>Po domluvě ve sklepě nebo při pobytu.</span>
              </div>
            </div>
          </div>
          <div className="announcement-band">
            <MultilineText as="p" text={getContentValue(content, "shop_notice")} />
          </div>
          <div className="order-flow order-flow-shop">
            <article className="editorial-card">
              <span>01</span>
              <h3>Vyberete vína</h3>
              <p>Na stránce je přehled vín a ročníků.</p>
            </article>
            <article className="editorial-card">
              <span>02</span>
              <h3>Napíšete nám</h3>
              <p>Zájem řešíme e-mailem nebo telefonicky.</p>
            </article>
            <article className="editorial-card">
              <span>03</span>
              <h3>Domluvíme předání</h3>
              <p>Osobní odběr nebo odeslání po 14 dnech.</p>
            </article>
          </div>
          <ShopProductGrid />
        </div>
      </section>
    </>
  );
}