<?php
declare(strict_types=1);

$pageTitle = "Ubytování – Vinařství Lanovín";
$metaDescription = "Ubytování v penzionu Lanovín v Moravské Nové Vsi.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero small">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(112deg, rgba(30, 21, 17, 0.78), rgba(30, 21, 17, 0.28)),
              url('sklepecek.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Ubytování Lanovín"
        ></div>
        <div class="container hero-content">
          <p class="eyebrow">Ubytování</p>
          <h1><?php echo h(get_content("stay_hero_title")); ?></h1>
          <p><?php echo get_content_html("stay_hero_text"); ?></p>
        </div>
      </section>

      <section class="section">
        <div class="container grid two-cols">
          <div class="image-stack">
            <img src="sklepecek.jpg" alt="Ubytování nad sklepem" />
            <img src="20211002_100359.jpg" alt="Sklep a posezení" />
          </div>
          <div>
            <p class="eyebrow">Ubytování</p>
            <h2><?php echo h(get_content("stay_body_title")); ?></h2>
            <p><?php echo get_content_html("stay_body_text"); ?></p>
            <div class="features">
              <div class="feature-card">
                <h3>8 lůžek</h3>
                <p>Pro rodinu nebo menší skupinu.</p>
              </div>
              <div class="feature-card">
                <h3>Sklep</h3>
                <p>Posezení přímo u domu.</p>
              </div>
              <div class="feature-card">
                <h3>Zázemí</h3>
                <p>Kuchyně, Wi-Fi a parkování.</p>
              </div>
            </div>
            <a class="button primary" href="/contact.php">Zeptat se na termín</a>
          </div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
