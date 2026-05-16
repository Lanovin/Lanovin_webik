<?php
declare(strict_types=1);

$pageTitle = "Vinařství Lanovín – Rodinné vinařství a ubytování";
$metaDescription = "Rodinné vinařství Lanovín z Moravské Nové Vsi. Víno, ubytování a degustace.";

require __DIR__ . "/includes/header.php";
?>
      <section class="hero" id="domu">
        <div
          class="hero-media"
          style="
            --hero-bg: linear-gradient(112deg, rgba(30, 21, 17, 0.76), rgba(30, 21, 17, 0.26)),
              url('20231014_093400.jpg') center/cover no-repeat;
          "
          role="img"
          aria-label="Vinice Lanovín"
        ></div>
        <div class="container hero-layout">
          <div class="hero-content">
            <p class="eyebrow">Tradiční výroba na jižní Moravě</p>
            <h1><?php echo h(get_content("home_hero_title")); ?></h1>
            <p class="hero-text"><?php echo get_content_html("home_hero_text"); ?></p>
            <div class="hero-actions">
              <a class="button primary" href="/shop.php">Přehled vín</a>
              <a class="button ghost" href="/accommodation.php">Ubytování</a>
            </div>
            <div class="hero-badges">
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
          <aside class="hero-panel glass-card">
            <p class="eyebrow">Stručně</p>
            <div class="flow-steps compact">
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
            <a class="text-link" href="/shop.php">Zobrazit ceník</a>
          </aside>
        </div>
      </section>

      <section class="section overlap-section">
        <div class="container split-showcase">
          <div class="section-copy">
            <p class="eyebrow">V Moravské Nové Vsi</p>
            <h2><?php echo h(get_content("home_intro_title")); ?></h2>
            <p><?php echo get_content_html("home_intro_text"); ?></p>
            <div class="bullet-list">
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
          <div class="photo-collage">
            <img class="photo-large" src="sklepecek.jpg" alt="Sklepeček Lanovín" />
            <img src="20231226_200404.jpg" alt="Lahve vína Lanovín" />
            <img src="20240928_103658.jpg" alt="Sklizeň ve vinici" />
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow">Víno</p>
              <h2>Web je hlavně informativní.</h2>
              <p>Aktuální vína najdete v ceníku. Další domluva probíhá osobně.</p>
            </div>
            <a class="button secondary" href="/shop.php">Zobrazit ceník</a>
          </div>
          <div class="order-flow">
            <article class="editorial-card">
              <span>01</span>
              <h3>Přehled vín</h3>
              <p>Na webu vidíte aktuální vína a ročníky.</p>
            </article>
            <article class="editorial-card">
              <span>02</span>
              <h3>Kontakt</h3>
              <p>Zájem o víno řešíme e-mailem nebo telefonicky.</p>
            </article>
            <article class="editorial-card">
              <span>03</span>
              <h3>Předání</h3>
              <p>Domluvíme osobní odběr nebo nejbližší odeslání.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid two-cols">
          <div class="image-stack editorial-stack">
            <img src="sklepecek.jpg" alt="Ubytování nad sklepem" />
            <img src="20211002_100359.jpg" alt="Sklep a posezení" />
          </div>
          <div>
            <p class="eyebrow">Ubytování</p>
            <h2><?php echo h(get_content("home_stay_title")); ?></h2>
            <p><?php echo get_content_html("home_stay_text"); ?></p>
            <div class="detail-list">
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
            <a class="button primary" href="/accommodation.php">Zjistit více</a>
          </div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow">Galerie</p>
              <h2><?php echo h(get_content("home_gallery_title")); ?></h2>
            </div>
            <a class="button secondary" href="/gallery.php">Celá galerie</a>
          </div>
          <div class="gallery-grid gallery-grid-large">
            <img src="20200927_142510.jpg" alt="Vinice Lanovín" />
            <img src="20211002_100345.jpg" alt="Sklep a degustace" />
            <img src="20220417_115224.jpg" alt="Jaro ve vinici" />
            <img src="20220829_172708.jpg" alt="Večer u sklepa" />
            <img src="20240922_081922.jpg" alt="Hrozny ve vinici" />
            <img src="20240928_103658.jpg" alt="Sběr ve vinici" />
          </div>
        </div>
      </section>

      <section class="section contact-strip">
        <div class="container contact-strip-inner">
          <div>
            <p class="eyebrow">Kontakt</p>
            <h2>Máte dotaz k vínu, pobytu nebo degustaci?</h2>
            <p>Ozvěte se nám. Rádi odpovíme napřímo.</p>
          </div>
          <div class="contact-actions">
            <a class="button primary" href="/contact.php">Kontakt</a>
            <a class="button secondary" href="tel:+420607622746">+420 607 622 746</a>
          </div>
        </div>
      </section>
<?php require __DIR__ . "/includes/footer.php"; ?>
