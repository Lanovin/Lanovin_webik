import Link from "next/link";

import { MultilineText } from "@/components/MultilineText";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "Ubytování – Vinařství Lanovín",
  description: "Ubytování v penzionu Lanovín v Moravské Nové Vsi.",
};

export default async function AccommodationPage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero small">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(112deg, rgba(30, 21, 17, 0.78), rgba(30, 21, 17, 0.28)), url('/sklepecek.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Ubytování Lanovín"
        />
        <div className="container hero-content">
          <p className="eyebrow">Ubytování</p>
          <h1>{getContentValue(content, "stay_hero_title")}</h1>
          <MultilineText text={getContentValue(content, "stay_hero_text")} />
        </div>
      </section>

      <section className="section">
        <div className="container grid two-cols">
          <div className="image-stack">
            <img src="/sklepecek.jpg" alt="Ubytování nad sklepem" />
            <img src="/20211002_100359.jpg" alt="Sklep a posezení" />
          </div>
          <div>
            <p className="eyebrow">Ubytování</p>
            <h2>{getContentValue(content, "stay_body_title")}</h2>
            <MultilineText text={getContentValue(content, "stay_body_text")} />
            <div className="features">
              <div className="feature-card">
                <h3>8 lůžek</h3>
                <p>Pro rodinu nebo menší skupinu.</p>
              </div>
              <div className="feature-card">
                <h3>Sklep</h3>
                <p>Posezení přímo u domu.</p>
              </div>
              <div className="feature-card">
                <h3>Zázemí</h3>
                <p>Kuchyně, Wi-Fi a parkování.</p>
              </div>
            </div>
            <Link className="button primary" href="/contact">
              Zeptat se na termín
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}