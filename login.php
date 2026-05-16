<?php
declare(strict_types=1);

require_once __DIR__ . "/admin/auth.php";

$error = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $username = trim((string) ($_POST["username"] ?? ""));
  $password = (string) ($_POST["password"] ?? "");
  $user = verify_user($username, $password);
  if ($user) {
    $_SESSION["user"] = $user;
    if (($user["role"] ?? "") === "admin") {
      header("Location: /admin/index.php");
      exit();
    }
    header("Location: /index.php");
    exit();
  }
  $error = "Neplatné přihlašovací údaje.";
}
?>
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Přihlášení – Vinařství Lanovín</title>
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
          <a href="/index.php">Domů</a>
          <a href="/shop.php">Obchod</a>
          <a href="/contact.php">Kontakt</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="section">
        <div class="container">
          <p class="eyebrow">Přihlášení</p>
          <h2>Vstup do administrace</h2>
          <form class="contact-panel" method="post">
            <label>
              Uživatelské jméno
              <input type="text" name="username" required />
            </label>
            <label>
              Heslo
              <input type="password" name="password" required />
            </label>
            <?php if ($error): ?>
              <p class="contact-note"><?php echo htmlspecialchars($error, ENT_QUOTES, "UTF-8"); ?></p>
            <?php endif; ?>
            <button class="button primary" type="submit">Přihlásit se</button>
          </form>
        </div>
      </section>
    </main>
  </body>
</html>
