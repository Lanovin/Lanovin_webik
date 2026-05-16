import Link from "next/link";

import { MultilineText } from "@/components/MultilineText";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "Vinařství Lanovín – Rodinné vinařství a ubytování",
  description: "Rodinné vinařství Lanovín z Moravské Nové Vsi. Víno, ubytování a degustace.",
};

export default async function HomePage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero" id="domu">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(112deg, rgba(30, 21, 17, 0.76), rgba(30, 21, 17, 0.26)), url('/20231014_093400.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Vinice Lanovín"
        />
        <div className="container hero-layout">
          <div className="hero-content">
            <p className="eyebrow">Tradiční výroba na jižní Moravě</p>
            <h1>{getContentValue(content, "home_hero_title")}</h1>
            <MultilineText className="hero-text" text={getContentValue(content, "home_hero_text")} />
            <div className="hero-actions">
              <Link className="button primary" href="/shop">
                Přehled vín
              </Link>
              <Link className="button ghost" href="/accommodation">
                Ubytování
              </Link>
            </div>
            <div className="hero-badges">
              <div>
                <strong>Rodinné vinařství</strong>
                <span>malé šarže, osobní přístup</span>
              </div>
              <div>
                <strong>Víno po domluvě</strong>
                <span>odesíláme jednou za 14 dní</span>
              </div>
              <div>
                <strong>Sklep i pobyt</strong>
                <span>vše na jednom místě</span>
              </div>
            </div>
          </div>
          <aside className="hero-panel glass-card">
            <p className="eyebrow">Stručně</p>
            <div className="flow-steps compact">
              <div>
                <span>1</span>
                <p>Na webu najdete aktuální přehled vín.</p>
              </div>
              <div>
                <span>2</span>
                <p>V případě zájmu nám napíšete nebo zavoláte.</p>
              </div>
              <div>
                <span>3</span>
                <p>Domluvíme osobní odběr nebo odeslání.</p>
              </div>
            </div>
            <Link className="text-link" href="/shop">
              Zobrazit ceník
            </Link>
          </aside>
        </div>
      </section>

      <section className="section overlap-section">
        <div className="container split-showcase">
          <div className="section-copy">
            <p className="eyebrow">V Moravské Nové Vsi</p>
            <h2>{getContentValue(content, "home_intro_title")}</h2>
            <MultilineText text={getContentValue(content, "home_intro_text")} />
            <div className="bullet-list">
              <div>
                <strong>Malé vinařství</strong>
                <span>menší množství, osobní kontakt</span>
              </div>
              <div>
                <strong>Sklep i pobyt</strong>
                <span>vše na jednom místě</span>
              </div>
              <div>
                <strong>Osobní odběr</strong>
                <span>po domluvě</span>
              </div>
            </div>
          </div>
          <div className="photo-collage">
            <img className="photo-large" src="/sklepecek.jpg" alt="Sklepeček Lanovín" />
            <img src="/20231226_200404.jpg" alt="Lahve vína Lanovín" />
            <img src="/20240928_103658.jpg" alt="Sklizeň ve vinici" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Víno</p>
              <h2>Web je hlavně informativní.</h2>
              <p>Aktuální vína najdete v ceníku. Další domluva probíhá osobně.</p>
            </div>
            <Link className="button secondary" href="/shop">
              Zobrazit ceník
            </Link>
          </div>
          <div className="order-flow">
            <article className="editorial-card">
              <span>01</span>
              <h3>Přehled vín</h3>
              <p>Na webu vidíte aktuální vína a ročníky.</p>
            </article>
            <article className="editorial-card">
              <span>02</span>
              <h3>Kontakt</h3>
              <p>Zájem o víno řešíme e-mailem nebo telefonicky.</p>
            </article>
            <article className="editorial-card">
              <span>03</span>
              <h3>Předání</h3>
              <p>Domluvíme osobní odběr nebo nejbližší odeslání.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two-cols">
          <div className="image-stack editorial-stack">
            <img src="/sklepecek.jpg" alt="Ubytování nad sklepem" />
            <img src="/20211002_100359.jpg" alt="Sklep a posezení" />
          </div>
          <div>
            <p className="eyebrow">Ubytování</p>
            <h2>{getContentValue(content, "home_stay_title")}</h2>
            <MultilineText text={getContentValue(content, "home_stay_text")} />
            <div className="detail-list">
              <div>
                <strong>Přímo v obci</strong>
                <span>Zázemí pro pár, rodinu i malou partu přátel.</span>
              </div>
              <div>
                <strong>Ideální k degustaci</strong>
                <span>Nemusíte řešit odvoz ani spěchat po večeru zpět.</span>
              </div>
              <div>
                <strong>Dobré jako víkendový cíl</strong>
                <span>Morava, sklep a klidné tempo na jednom místě.</span>
              </div>
            </div>
            <Link className="button primary" href="/accommodation">
              Zjistit více
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Galerie</p>
              <h2>{getContentValue(content, "home_gallery_title")}</h2>
            </div>
            <Link className="button secondary" href="/gallery">
              Celá galerie
            </Link>
          </div>
          <div className="gallery-grid gallery-grid-large">
            <img src="/20200927_142510.jpg" alt="Vinice Lanovín" />
            <img src="/20211002_100345.jpg" alt="Sklep a degustace" />
            <img src="/20220417_115224.jpg" alt="Jaro ve vinici" />
            <img src="/20220829_172708.jpg" alt="Večer u sklepa" />
            <img src="/20240922_081922.jpg" alt="Hrozny ve vinici" />
            <img src="/20240928_103658.jpg" alt="Sběr ve vinici" />
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-strip-inner">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Máte dotaz k vínu, pobytu nebo degustaci?</h2>
            <p>Ozvěte se nám. Rádi odpovíme napřímo.</p>
          </div>
          <div className="contact-actions">
            <Link className="button primary" href="/contact">
              Kontakt
            </Link>
            <a className="button secondary" href="tel:+420607622746">
              +420 607 622 746
            </a>
          </div>
        </div>
      </section>
    </>
  );
}