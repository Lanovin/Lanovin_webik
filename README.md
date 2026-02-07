# AI konzultant web (Next.js + Tailwind)

Profesionální landing page v češtině pro prodej AI služeb. Připraveno pro Vercel nebo GitHub Pages (statický export vyžaduje drobné úpravy).

## Spuštění lokálně

1. Nainstalujte závislosti:
   - `npm install`
2. Spusťte dev server:
   - `npm run dev`
3. Otevřete `http://localhost:3000`

## Deployment na Vercel

1. Vytvořte nový projekt ve Vercelu a propojte repo.
2. Build command: `npm run build`
3. Output: Next.js (automaticky).
4. Nastavte env proměnné (volitelné):
   - `NEXT_PUBLIC_GA_ID` pro Google Analytics
   - `CONTACT_WEBHOOK_URL` pro odesílání formuláře na webhook

## Sitemap a robots

- `public/sitemap.xml` a `public/robots.txt` obsahují `https://example.com/`.
- Po nasazení vyměňte doménu za reálnou.

## GitHub Pages (statický export)

1. Přidejte do `next.config.js`:
   - `output: "export"`
2. Spusťte:
   - `npm run build`
   - `npx next export`
3. Nasazujte obsah složky `out/`.
4. Pozor: API route `/api/contact` na GitHub Pages nefunguje → použijte Netlify Forms nebo EmailJS.

## Jak měnit texty, ceny a CTA

Všechny texty jsou v `content/strings.js`.

Nejčastější změny:
- `strings.title` a `strings.metaDescription` pro SEO.
- `strings.hero` pro hlavní CTA.
- `strings.pricing.plans` pro balíčky a ceny.
- `strings.contact.email` pro kontaktní e‑mail.

## Jak změnit kontaktní e‑mail

1. Otevřete `content/strings.js`.
2. Upravte `contact.email`.

## Kontakt: odesílání formuláře

### Varianta A: Next.js API route (doporučeno)

- Formulář posílá data na `/api/contact`.
- Pro přeposlání na e‑mail použijte webhook:
  - Nastavte `CONTACT_WEBHOOK_URL` na URL vašeho endpointu (např. Make/Zapier).
  - Endpoint dostane JSON s `name`, `email`, `company`, `message`.

### Varianta B: Netlify Forms

1. Nasazení na Netlify.
2. V `components/ContactForm.js` můžete:
   - odstranit `onSubmit` handler,
   - přidat `action="/"` (nebo nechat prázdné),
   - ponechat `data-netlify="true"` a `form-name`.
3. Netlify začne odesílat notifikace podle nastavení webu.

### Varianta C: EmailJS (alternativa)

- Pokud nechcete webhook, použijte EmailJS.
- Vyměňte `fetch("/api/contact")` za volání EmailJS SDK podle jejich dokumentace.

## Analytics (volitelně)

### Google Analytics

- Nastavte `NEXT_PUBLIC_GA_ID`.
- Měření se spustí pouze po souhlasu s cookies.

### Matomo

- Pokud preferujete Matomo, nahraďte `components/Analytics.js` Matomo skriptem.
- Udržte podmínku souhlasu s cookies.

## Admin rychlé tipy

- Obrázky jsou z Unsplash a lze je změnit v `content/strings.js`.
- Alt texty jsou doporučené pro SEO a jsou uvedeny u obrázků.
- CTA tlačítka odkazují na sekci `#contact` nebo Calendly.

