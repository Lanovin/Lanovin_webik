import { MultilineText } from "@/components/MultilineText";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "O nás – Vinařství Lanovín",
  description: "Poznejte příběh rodinného vinařství Lanovín a naše hodnoty.",
};

export default async function AboutPage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero small">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)), url('/20230805_114711.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Rodinné vinařství Lanovín"
        />
        <div className="container hero-content">
          <p className="eyebrow">O nás</p>
          <h1>{getContentValue(content, "about_hero_title")}</h1>
          <MultilineText text={getContentValue(content, "about_hero_text")} />
        </div>
      </section>

      <section className="section">
        <div className="container grid two-cols">
          <div>
            <p className="eyebrow">Kdo jsme</p>
            <h2>{getContentValue(content, "about_body_title")}</h2>
            <MultilineText text={getContentValue(content, "about_body_text")} />
            <div className="features">
              <div className="feature-card">
                <h3>Degustace</h3>
                <p>Po domluvě v našem sklepě.</p>
              </div>
              <div className="feature-card">
                <h3>Ceník vín</h3>
                <p>Aktuální nabídku najdete na webu.</p>
              </div>
              <div className="feature-card">
                <h3>Ubytování</h3>
                <p>Zázemí přímo u nás.</p>
              </div>
            </div>
          </div>
          <div className="image-stack">
            <img src="/20231014_093400.jpg" alt="Vinařství Lanovín" />
            <img src="/20240616_094933.jpg" alt="Vinařský sklep" />
          </div>
        </div>
      </section>
    </>
  );
}