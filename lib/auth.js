import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { cookies } from "next/headers";

const usersPath = path.join(process.cwd(), "data", "users.json");
const passwordSalt = "lanovin-salt-2026";
const sessionSecret = process.env.SESSION_SECRET || "lanovin-next-session-2026";
const sessionMaxAge = 60 * 60 * 24 * 7;

export const sessionCookieName = "lanovin-session";

export async function loadUsers() {
  try {
    const raw = await fs.readFile(usersPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function verifyUser(username, password) {
  const users = await loadUsers();

  for (const user of users) {
    if (!user || typeof user !== "object") {
      continue;
    }

    if ((user.username ?? "") !== username) {
      continue;
    }

    const expected = crypto.createHash("sha256").update(passwordSalt + password).digest("hex");
    const hash = String(user.password_hash ?? "");

    if (hash.length === expected.length && crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expected))) {
      return {
        username: String(user.username ?? ""),
        role: String(user.role ?? "user"),
      };
    }
  }

  return null;
}

export function createSessionToken(user) {
  const payload = Buffer.from(
    JSON.stringify({
      username: user.username,
      role: user.role ?? "user",
    }),
    "utf8",
  ).toString("base64url");
  const signature = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");

  return `${payload}.${signature}`;
}

export function parseSessionToken(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [payload, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");

  if (signature.length !== expected.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    return {
      username: String(parsed.username ?? ""),
      role: String(parsed.role ?? "user"),
    };
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(sessionCookieName)?.value;

  return parseSessionToken(token);
}

export function setSessionCookie(response, user) {
  response.cookies.set({
    name: sessionCookieName,
    value: createSessionToken(user),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionMaxAge,
  });
}

export function clearSessionCookie(response) {
  response.cookies.set({
    name: sessionCookieName,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}