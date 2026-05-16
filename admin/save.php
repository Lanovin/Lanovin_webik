<?php
declare(strict_types=1);

require_once __DIR__ . "/auth.php";
require_admin();

$fields = require __DIR__ . "/fields.php";
$contentPath = CONTENT_PATH;
$current = [];

if (file_exists($contentPath)) {
  $raw = file_get_contents($contentPath);
  $decoded = json_decode($raw ?: "{}", true);
  $current = is_array($decoded) ? $decoded : [];
}

foreach ($fields as $key => $label) {
  if (!array_key_exists($key, $_POST)) {
    continue;
  }
  $value = trim((string) $_POST[$key]);
  $current[$key] = $value;
}

$json = json_encode($current, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
file_put_contents($contentPath, $json);

header("Location: /admin/index.php");
exit();
