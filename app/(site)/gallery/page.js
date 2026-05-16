import { MultilineText } from "@/components/MultilineText";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "Galerie – Vinařství Lanovín",
  description: "Galerie fotek z vinařství Lanovín a Moravské Nové Vsi.",
};

export default async function GalleryPage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero small">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)), url('/20240928_103658.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Galerie vinařství"
        />
        <div className="container hero-content">
          <p className="eyebrow">Galerie</p>
          <h1>{getContentValue(content, "gallery_hero_title")}</h1>
          <MultilineText text={getContentValue(content, "gallery_hero_text")} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Náš svět</p>
          <h2>{getContentValue(content, "gallery_body_title")}</h2>
          <div className="gallery-grid">
            <img src="/20200927_142510.jpg" alt="Vinice Lanovín" />
            <img src="/20211002_100359.jpg" alt="Sklep a degustace" />
            <img src="/20220417_115224.jpg" alt="Jaro ve vinici" />
            <img src="/20220829_172708.jpg" alt="Letní večer" />
            <img src="/20230805_114711.jpg" alt="Rodinné chvíle" />
            <img src="/20240928_103658.jpg" alt="Podzimní vinobraní" />
            <img src="/20211002_100345.jpg" alt="Degustace vína" />
            <img src="/20240616_094933.jpg" alt="Sklep Lanovín" />
            <img src="/20250202_115309.jpg" alt="Vinobraní Lanovín" />
          </div>
        </div>
      </section>
    </>
  );
}