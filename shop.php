<?php
declare(strict_types=1);

$pageTitle = "Ceník vín – Vinařství Lanovín";
$metaDescription = "Aktuální přehled vín a ročníků vinařství Lanovín.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero small">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(112deg, rgba(30, 21, 17, 0.78), rgba(30, 21, 17, 0.28)),
              url('20231226_200404.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Obchod s vínem"
        ></div>
        <div class="container hero-layout hero-layout-wide">
          <div class="hero-content">
            <p class="eyebrow">Ceník vín</p>
            <h1><?php echo h(get_content("shop_hero_title")); ?></h1>
            <p class="hero-text"><?php echo get_content_html("shop_hero_text"); ?></p>
          </div>
          <aside class="hero-panel glass-card">
            <p class="eyebrow">Stručně</p>
            <div class="bullet-list compact-list">
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

      <section class="section alt">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow">Aktuální nabídka</p>
              <h2><?php echo h(get_content("shop_intro_title")); ?></h2>
              <p><?php echo get_content_html("shop_intro_text"); ?></p>
            </div>
            <div class="shop-info">
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
          <div class="announcement-band"><?php echo get_content_html("shop_notice"); ?></div>
          <div class="order-flow order-flow-shop">
            <article class="editorial-card">
              <span>01</span>
              <h3>Vyberete vína</h3>
              <p>Na stránce je přehled vín a ročníků.</p>
            </article>
            <article class="editorial-card">
              <span>02</span>
              <h3>Napíšete nám</h3>
              <p>Zájem řešíme e-mailem nebo telefonicky.</p>
            </article>
            <article class="editorial-card">
              <span>03</span>
              <h3>Domluvíme předání</h3>
              <p>Osobní odběr nebo odeslání po 14 dnech.</p>
            </article>
          </div>
          <div class="product-grid" id="productGrid"></div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
