# Bijles Wiskunde – website

Website voor een bijlesdocent wiskunde (A, B, C en D, van brugklas tot hbo). Gemaakt met Next.js 16 (App Router), React 19 en Tailwind CSS 4.

## Installeren en starten

Vereist: Node.js 20.9 of nieuwer.

```bash
npm install
npm run dev      # ontwikkelserver op http://localhost:3000
npm run build    # productie-build
npm start        # productie-build draaien
npm run lint     # code controleren
```

## Content aanpassen

Alle teksten staan in **`content/site.ts`**: naam van de site, contactgegevens, niveaus, vakken, over mij, stappen en veelgestelde vragen.

- Tekst tussen **[vierkante haken]** is voorbeeldtekst. Op de site zie je die geel gemarkeerd. Zoek in het bestand op `[` om alles te vinden wat nog open staat.
- Vul `location` in (bijv. `"Utrecht"`). De plaats komt dan in titels en koppen, wat helpt bij lokale vindbaarheid.
- Laat `phone` leeg (`""`) als je geen telefoonnummer wilt tonen.
- Een foto op de pagina *Over mij*: zet het bestand in `public/` en vervang het gemarkeerde vlak in `app/over-mij/page.tsx` door `next/image`.

Stel bij livegang het echte domein in met de omgevingsvariabele `NEXT_PUBLIC_SITE_URL` (bijv. `https://www.jouwdomein.nl`). Die wordt gebruikt voor de sitemap, robots.txt en canonieke links.

## Formulier aansluiten

Het aanvraagformulier (`/aanvragen`) valideert in de browser en opnieuw op de server (`lib/lesson-request.ts`). Verzenden gebeurt op één plek: **`lib/submit-request.ts`**.

> **Let op:** zonder instelling komt een aanvraag alleen in de serverlog terecht en ontvang je hem dus niet. Sluit het formulier aan vóór je de site live zet.

**Optie 1 – webhook (geen code nodig).** Zet `CONTACT_WEBHOOK_URL` op een URL die JSON via POST accepteert. De aanvraag wordt daarheen gestuurd als JSON met de velden `name`, `role`, `email`, `phone`, `level`, `subject`, `message` en `receivedAt`. Geschikte diensten zijn bijvoorbeeld Formspree, Make, Zapier of n8n. Bij die diensten heb je een account nodig en sommige zijn betaald boven een gratis limiet.

```bash
# .env.local (niet in git)
CONTACT_WEBHOOK_URL=https://formspree.io/f/jouw-id
```

**Optie 2 – eigen code.** Vervang de inhoud van `submitRequest()` door bijvoorbeeld een e-maildienst (Resend, Postmark, SMTP via nodemailer) of opslag in een database. Geef `{ ok: true }` terug als het lukt en `{ ok: false }` als het mislukt. De bezoeker ziet dan een foutmelding met je e-mailadres.

Het formulier heeft een eenvoudige spamval (een verborgen veld). Krijg je toch veel spam, voeg dan bijvoorbeeld Cloudflare Turnstile toe.

## Structuur

```
app/                  pagina's (App Router), sitemap.ts, robots.ts, icon.svg
  aanvragen/actions.ts  server action van het formulier
components/           herbruikbare onderdelen (header, footer, CTA, FAQ, formulier, ...)
content/site.ts       alle teksten en gegevens
lib/                  validatie, verzending, SEO-hulpjes
```
