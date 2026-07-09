# Ongedierte Buddy

Productieklare Next.js App Router-website voor `ongediertebuddy.nl`.

## Installatie

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Structuur

- `src/config/site.ts` bevat merk, domein, telefoon, WhatsApp, e-mail, claims, reviews en assetpaden.
- `src/content/` bevat typed content voor diensten, regio's, steden, combinatiepagina's, FAQ en legal.
- `src/components/` bevat layout, hero, formulieren, consent, tracking en secties.
- `src/app/` bevat alle routes, metadata, sitemap, robots, manifest en `POST /api/leads`.

## Branding wijzigen

Wijzig centraal `src/config/site.ts` en vervang assets onder `public/brand/`. De site gebruikt SVG-logo's uit de brand pack:

- header: `ongedierte-buddy-logo-header.svg`
- footer: `ongedierte-buddy-logo-horizontal-white.svg`
- social: `ongedierte-buddy-og-brand-1200x630.png`

## Leads

Alle formulieren posten naar `POST /api/leads`. Servervalidatie, honeypot, eenvoudige rate limiting, lead-ID en dubbele-submit UI zijn voorbereid.

Vereiste productievariabelen:

```bash
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=
LEAD_FROM_EMAIL=
CRM_WEBHOOK_URL=
CRM_WEBHOOK_SECRET=
```

Als Resend en CRM-webhook ontbreken, geeft de API bewust een configuratiefout en toont de UI geen vals succes.

## Tracking en cookies

`TrackingProvider` bewaart UTM- en klikcontext in de sessie en pusht events naar `dataLayer` na passende toestemming. De cookiebanner ondersteunt noodzakelijk, analytics en marketing.

Events: `phone_click`, `whatsapp_click`, `inspection_open`, `lead_form_step`, `lead_form_success`, `lead_form_error`, `service_card_click`, `navigation_click`.

## Content uitbreiden

Diensten staan in `src/content/services.ts`. Regio's, steden en gepubliceerde combinatiepagina's staan in `src/content/regions.ts`. Niet-gepubliceerde dienst-plaats-combinaties worden niet gegenereerd en geven een echte 404.

## Kaartdata

De regiohero gebruikt statische kaartdata in `src/content/netherlands-map.generated.json`. Deze data is tijdens implementatie gegenereerd uit Kadaster / PDOK Bestuurlijke Gebieden (`provinciegebied`) en valt onder CC BY 4.0. Normaal websitebezoek voert geen PDOK-request uit; de kaart rendert uit de gecommitte statische JSON en toont een zichtbare bronregel in de kaartcard.

## Vercel

Gebruik `NEXT_PUBLIC_SITE_URL=https://ongediertebuddy.nl`. Previewdeployments krijgen via metadata/robots `noindex`; productie op het definitieve domein is indexeerbaar.
