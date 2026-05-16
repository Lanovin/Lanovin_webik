<?php
declare(strict_types=1);

require_once __DIR__ . "/config.php";

function h(?string $value): string
{
  return htmlspecialchars($value ?? "", ENT_QUOTES, "UTF-8");
}

function load_content(): array
{
  if (!file_exists(CONTENT_PATH)) {
    return [];
  }

  $raw = file_get_contents(CONTENT_PATH);
  if ($raw === false) {
    return [];
  }

  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

function get_content(string $key, string $default = ""): string
{
  static $cache = null;
  if ($cache === null) {
    $cache = load_content();
  }

  return isset($cache[$key]) ? (string) $cache[$key] : $default;
}

function get_content_html(string $key, string $default = ""): string
{
  return nl2br(h(get_content($key, $default)));
}
