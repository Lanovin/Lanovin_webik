import fs from "node:fs/promises";
import path from "node:path";

const contentPath = path.join(process.cwd(), "data", "content.json");

export const contentFields = {
  home_hero_title: "Domů: Hlavní nadpis",
  home_hero_text: "Domů: Úvodní text",
  home_intro_title: "Domů: Sekce vinařství nadpis",
  home_intro_text: "Domů: Sekce vinařství text",
  home_stay_title: "Domů: Ubytování nadpis",
  home_stay_text: "Domů: Ubytování text",
  home_gallery_title: "Domů: Galerie nadpis",
  about_hero_title: "O nás: Hlavní nadpis",
  about_hero_text: "O nás: Úvodní text",
  about_body_title: "O nás: Sekce nadpis",
  about_body_text: "O nás: Sekce text",
  shop_hero_title: "Obchod: Hlavní nadpis",
  shop_hero_text: "Obchod: Úvodní text",
  shop_intro_title: "Obchod: Sekce nadpis",
  shop_intro_text: "Obchod: Sekce text",
  shop_notice: "Obchod: Důležité upozornění",
  stay_hero_title: "Ubytování: Hlavní nadpis",
  stay_hero_text: "Ubytování: Úvodní text",
  stay_body_title: "Ubytování: Sekce nadpis",
  stay_body_text: "Ubytování: Sekce text",
  gallery_hero_title: "Galerie: Hlavní nadpis",
  gallery_hero_text: "Galerie: Úvodní text",
  gallery_body_title: "Galerie: Sekce text",
  contact_hero_title: "Kontakt: Hlavní nadpis",
  contact_hero_text: "Kontakt: Úvodní text",
  contact_body_title: "Kontakt: Sekce nadpis",
  contact_body_text: "Kontakt: Sekce text",
  shipping_note: "Košík: Poznámka k odesílání",
};

export async function loadContent() {
  try {
    const raw = await fs.readFile(contentPath, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function getContentValue(content, key, fallback = "") {
  const value = content?.[key];
  return typeof value === "string" ? value : fallback;
}

export async function getContent(key, fallback = "") {
  const content = await loadContent();
  return getContentValue(content, key, fallback);
}

export async function saveContent(entries) {
  const current = await loadContent();
  const nextContent = { ...current };

  for (const key of Object.keys(contentFields)) {
    if (!(key in entries)) {
      continue;
    }

    nextContent[key] = String(entries[key] ?? "").trim();
  }

  await fs.writeFile(contentPath, `${JSON.stringify(nextContent, null, 2)}\n`, "utf8");

  return nextContent;
}