<?php
declare(strict_types=1);

require_once __DIR__ . "/../config.php";

function load_users(): array
{
  if (!file_exists(USERS_PATH)) {
    return [];
  }
  $raw = file_get_contents(USERS_PATH);
  if ($raw === false) {
    return [];
  }
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

function verify_user(string $username, string $password): ?array
{
  $users = load_users();
  foreach ($users as $user) {
    if (!is_array($user)) {
      continue;
    }
    if (($user["username"] ?? "") !== $username) {
      continue;
    }
    $hash = (string) ($user["password_hash"] ?? "");
    $expected = hash("sha256", PASSWORD_SALT . $password);
    if (hash_equals($hash, $expected)) {
      return [
        "username" => $user["username"],
        "role" => $user["role"] ?? "user",
      ];
    }
  }
  return null;
}

function require_admin(): void
{
  if (!isset($_SESSION["user"])) {
    header("Location: /login.php");
    exit();
  }
  if (($_SESSION["user"]["role"] ?? "") !== "admin") {
    http_response_code(403);
    echo "Nemáte oprávnění pro přístup do administrace.";
    exit();
  }
}
