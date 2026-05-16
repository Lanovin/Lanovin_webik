<?php
declare(strict_types=1);

$pageTitle = "O nás – Vinařství Lanovín";
$metaDescription = "Poznejte příběh rodinného vinařství Lanovín a naše hodnoty.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero small">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)),
              url('20230805_114711.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Rodinné vinařství Lanovín"
        ></div>
        <div class="container hero-content">
          <p class="eyebrow">O nás</p>
          <h1><?php echo h(get_content("about_hero_title")); ?></h1>
          <p><?php echo get_content_html("about_hero_text"); ?></p>
        </div>
      </section>

      <section class="section">
        <div class="container grid two-cols">
          <div>
            <p class="eyebrow">Kdo jsme</p>
            <h2><?php echo h(get_content("about_body_title")); ?></h2>
            <p><?php echo get_content_html("about_body_text"); ?></p>
            <div class="features">
              <div class="feature-card">
                <h3>Degustace</h3>
                <p>Po domluvě v našem sklepě.</p>
              </div>
              <div class="feature-card">
                <h3>Ceník vín</h3>
                <p>Aktuální nabídku najdete na webu.</p>
              </div>
              <div class="feature-card">
                <h3>Ubytování</h3>
                <p>Zázemí přímo u nás.</p>
              </div>
            </div>
          </div>
          <div class="image-stack">
            <img src="20231014_093400.jpg" alt="Vinařství Lanovín" />
            <img src="20240616_094933.jpg" alt="Vinařský sklep" />
          </div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
