<?php
declare(strict_types=1);

require_once __DIR__ . "/auth.php";
require_admin();

$fields = require __DIR__ . "/fields.php";
$contentPath = CONTENT_PATH;
$content = [];
if (file_exists($contentPath)) {
  $raw = file_get_contents($contentPath);
  $decoded = json_decode($raw ?: "{}", true);
  $content = is_array($decoded) ? $decoded : [];
}
?>
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CMS – Vinařství Lanovín</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container header-inner">
        <div class="logo">
          <span>Vinařství</span>
          <strong>Lanovín</strong>
        </div>
        <nav class="main-nav">
          <a href="/index.php">Web</a>
          <a href="/admin/index.php">CMS</a>
          <a href="/admin/logout.php">Odhlásit</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="section">
        <div class="container">
          <p class="eyebrow">CMS rozhraní</p>
          <h2>Upravit texty na webu</h2>
          <p>Po uložení se změny ihned projeví na webu.</p>
          <form class="contact-panel" method="post" action="/admin/save.php">
            <?php foreach ($fields as $key => $label): ?>
              <label>
                <?php echo htmlspecialchars($label, ENT_QUOTES, "UTF-8"); ?>
                <textarea
                  name="<?php echo htmlspecialchars($key, ENT_QUOTES, "UTF-8"); ?>"
                  rows="3"
                ><?php echo htmlspecialchars($content[$key] ?? "", ENT_QUOTES, "UTF-8"); ?></textarea>
              </label>
            <?php endforeach; ?>
            <button class="button primary" type="submit">Uložit změny</button>
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
