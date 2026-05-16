<?php
declare(strict_types=1);

require_once __DIR__ . "/../content.php";

$title = $pageTitle ?? "Vinařství Lanovín – Rodinné vinařství a ubytování";
$description =
  $metaDescription ??
  "Rodinné vinařství Lanovín z Moravské Nové Vsi. Víno, ubytování a degustace.";
?>
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?php echo h($title); ?></title>
    <meta name="description" content="<?php echo h($description); ?>" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-meta">
          <a href="tel:+420607622746">+420 607 622 746</a>
          <a href="mailto:lanovin.sklepecek@lanovin.cz">lanovin.sklepecek@lanovin.cz</a>
        </div>
        <div class="shipping-pill">Víno odesíláme 1x za 14 dní</div>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="/index.php" aria-label="Vinařství Lanovín">
          <span>Vinařství</span>
          <strong>Lanovín</strong>
        </a>
        <nav class="main-nav" aria-label="Hlavní navigace">
          <a href="/index.php">Domů</a>
          <a href="/about.php">O nás</a>
          <a href="/shop.php">Ceník</a>
          <a href="/accommodation.php">Ubytování</a>
          <a href="/gallery.php">Galerie</a>
          <a href="/contact.php">Kontakt</a>
        </nav>
        <button class="cart-button" id="cartButton" type="button">
          Výběr vín <span id="cartCount">0</span>
        </button>
      </div>
    </header>
    <main class="site-main">
