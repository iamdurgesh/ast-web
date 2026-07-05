# Archersoft Technologies — Website

A modern, static, fully responsive marketing website for **Archersoft Technologies**, a
UK-based digital technology company. Built with Angular 22 (standalone components,
zoneless, lazy-loaded routes), Tailwind CSS v4 and a token-driven SCSS design system.

## Tech stack

- **Angular 22** — standalone components, signals, zoneless change detection
- **TypeScript** — strict, data-driven (services/industries live in typed arrays)
- **Tailwind CSS v4** + **SCSS** design tokens (`src/tailwind.css`, `src/styles/_tokens.scss`)
- **Angular Router** — lazy-loaded page routes, in-memory scrolling + anchor scrolling
- Accessible, semantic HTML with per-page meta titles/descriptions (`SeoService`)
- GDPR-aware cookie consent banner + Privacy/Cookie policies

## Project structure

```
src/app/
  core/
    models/            Typed interfaces (Service, Industry, NavLink, …)
    services/          SeoService, CookieConsentService
  data/                Single source of truth: services, industries, company, navigation
  shared/              Reusable components + the appReveal directive
    header/ footer/ hero/ service-card/ industry-card/
    section-heading/ contact-cta/ cookie-banner/ page-header/ logo/ icon/
    directives/reveal.directive.ts
  pages/               Lazy-loaded route components
    home/ about/ services/ industries/ contact/
    privacy-policy/ cookie-policy/ sitemap/ not-found/
public/                Static assets, favicons, logos, SPA config (_redirects, _headers)
brand-assets/          Source artwork (not shipped in the build)
```

## Local development

```bash
npm install
npm start          # ng serve → http://localhost:4200
```

## Build

```bash
npm run build      # outputs to dist/archersoft/browser
```

## Deployment — Cloudflare

The site is a static SPA. Build once, then deploy to Cloudflare via **Workers
static assets** (Wrangler) or **Cloudflare Pages**.

```bash
npm run build            # outputs dist/archersoft/browser
npx wrangler deploy      # Workers static assets (see wrangler.toml)
```

`wrangler.toml` serves the build output as static assets with
`not_found_handling = "single-page-application"`, so client-side routes
resolve to `index.html` — no extra redirect rules needed.

### Cloudflare Pages (alternative)

Connect the repo in the dashboard with:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist/archersoft/browser` |
| Node version | `22` (via `.nvmrc`) |

For the Pages path, `public/_redirects` (SPA fallback) and `public/_headers`
(asset caching) are copied into the build output automatically.

## Content

All repeated content is data-driven and edited in one place:

- Services → `src/app/data/services.data.ts`
- Industries → `src/app/data/industries.data.ts`
- Company details, stats, values, process → `src/app/data/company.data.ts`
- Navigation → `src/app/data/navigation.data.ts`

Placeholder contact details (email, phone, address) are marked in
`company.data.ts` and should be replaced before go-live.

## Tests

```bash
npm test           # Vitest
```
