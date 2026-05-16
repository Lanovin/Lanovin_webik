<?php
declare(strict_types=1);

$pageTitle = "Galerie – Vinařství Lanovín";
$metaDescription = "Galerie fotek z vinařství Lanovín a Moravské Nové Vsi.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero small">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(120deg, rgba(42, 25, 16, 0.85), rgba(42, 25, 16, 0.35)),
              url('20240928_103658.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Galerie vinařství"
        ></div>
        <div class="container hero-content">
          <p class="eyebrow">Galerie</p>
          <h1><?php echo h(get_content("gallery_hero_title")); ?></h1>
          <p><?php echo get_content_html("gallery_hero_text"); ?></p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <p class="eyebrow">Náš svět</p>
          <h2><?php echo h(get_content("gallery_body_title")); ?></h2>
          <div class="gallery-grid">
            <img src="20200927_142510.jpg" alt="Vinice Lanovín" />
            <img src="20211002_100359.jpg" alt="Sklep a degustace" />
            <img src="20220417_115224.jpg" alt="Jaro ve vinici" />
            <img src="20220829_172708.jpg" alt="Letní večer" />
            <img src="20230805_114711.jpg" alt="Rodinné chvíle" />
            <img src="20240928_103658.jpg" alt="Podzimní vinobraní" />
            <img src="20211002_100345.jpg" alt="Degustace vína" />
            <img src="20240616_094933.jpg" alt="Sklep Lanovín" />
            <img src="20250202_115309.jpg" alt="Vinobraní Lanovín" />
          </div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
