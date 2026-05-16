<?php
declare(strict_types=1);

$pageTitle = "Kontakt – Vinařství Lanovín";
$metaDescription = "Kontaktujte vinařství Lanovín kvůli vínu, ubytování nebo degustaci.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero small">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)),
              url('sklepecek.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Kontakt Lanovín"
        ></div>
        <div class="container hero-content">
          <p class="eyebrow">Kontakt</p>
          <h1><?php echo h(get_content("contact_hero_title")); ?></h1>
          <p><?php echo get_content_html("contact_hero_text"); ?></p>
        </div>
      </section>

      <section class="section">
        <div class="container grid two-cols contact">
          <div>
            <p class="eyebrow">Kontaktujte nás</p>
            <h2><?php echo h(get_content("contact_body_title")); ?></h2>
            <p><?php echo get_content_html("contact_body_text"); ?></p>
            <div class="contact-cards">
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
          <div class="contact-panel">
            <h3>Napište nám</h3>
            <p>Stačí krátká zpráva.</p>
            <form id="contactForm">
              <label>
                Jméno a příjmení
                <input type="text" name="name" placeholder="Vaše jméno" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="vas@email.cz" required />
              </label>
              <label>
                Zpráva
                <textarea
                  name="message"
                  placeholder="Např. termín pobytu nebo zájem o víno"
                  rows="4"
                  required
                ></textarea>
              </label>
              <button class="button primary" type="submit">Připravit e-mail</button>
            </form>
            <p class="contact-note">Po kliknutí se otevře váš e-mailový klient.</p>
          </div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
