import { ContactForm } from "@/components/ContactForm";
import { MultilineText } from "@/components/MultilineText";
import { getContentValue, loadContent } from "@/lib/content";

export const metadata = {
  title: "Kontakt – Vinařství Lanovín",
  description: "Kontaktujte vinařství Lanovín kvůli vínu, ubytování nebo degustaci.",
};

export default async function ContactPage() {
  const content = await loadContent();

  return (
    <>
      <section className="hero small">
        <div
          className="hero-media"
          style={{
            "--hero-bg":
              "linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)), url('/sklepecek.jpg') center/cover no-repeat",
          }}
          role="img"
          aria-label="Kontakt Lanovín"
        />
        <div className="container hero-content">
          <p className="eyebrow">Kontakt</p>
          <h1>{getContentValue(content, "contact_hero_title")}</h1>
          <MultilineText text={getContentValue(content, "contact_hero_text")} />
        </div>
      </section>

      <section className="section">
        <div className="container grid two-cols contact">
          <div>
            <p className="eyebrow">Kontaktujte nás</p>
            <h2>{getContentValue(content, "contact_body_title")}</h2>
            <MultilineText text={getContentValue(content, "contact_body_text")} />
            <div className="contact-cards">
              <div>
                <strong>Adresa penzionu</strong>
                <span>Náměstí Republiky 102, Moravská Nová Ves</span>
              </div>
              <div>
                <strong>Sklep</strong>
                <span>Zátiší, Moravská Nová Ves</span>
              </div>
              <div>
                <strong>Telefon</strong>
                <span>+420 607 622 746</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>lanovin.sklepecek@lanovin.cz</span>
              </div>
            </div>
          </div>
          <div className="contact-panel">
            <h3>Napište nám</h3>
            <p>Stačí krátká zpráva.</p>
            <ContactForm />
            <p className="contact-note">Po kliknutí se otevře váš e-mailový klient.</p>
          </div>
        </div>
      </section>
    </>
  );
}