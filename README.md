# Digitec Enterprise — Premium Agency Website

A production-ready marketing agency website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Content (services, portfolio, testimonials, company info) has been migrated from [digitecenterprise.com](https://digitecenterprise.com) and rewritten into a completely new dark, glassmorphic, premium UI.

## ✨ Features

- Dark theme with animated mesh gradients & film-grain texture
- Glassmorphism cards & navigation
- Framer Motion throughout: fade/slide/stagger reveals, word-reveal hero headline, mouse parallax, floating orbs, animated counters, scroll progress bar, page loading screen
- Filterable, animated portfolio grid with project detail modal
- Auto-sliding testimonial carousel with star ratings
- Accordion FAQ and pricing tiers
- Fully working contact form (client-side validated; wire up your own backend — see below)
- SEO: per-page metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.ts`, `robots.ts`
- Fully responsive, mobile-first, keyboard-accessible (visible focus states, `prefers-reduced-motion` respected)

## 📁 Project structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, JSON-LD, nav/footer
    page.tsx             # Homepage
    about/                # About page + client-animated content
    services/             # Services overview + detail sections
    portfolio/             # Full filterable portfolio
    contact/               # Contact form, map, hours
    privacy-policy/, terms-conditions/
    sitemap.ts, robots.ts
    globals.css
  components/
    layout/              # Navbar, Footer, LoadingScreen, ScrollProgress
    ui/                   # Button, SectionHeading, Counter
    sections/             # Hero, Portfolio, Testimonials, Pricing, FAQ, etc.
    forms/ContactForm.tsx
  lib/
    data.ts               # All migrated content lives here — edit freely
    utils.ts
  types/index.ts
```

## 🚀 Getting started

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended), npm 9+.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build & run production locally:

```bash
npm run build
npm run start
```

## 🖊️ Editing content

Almost everything on the site — services, portfolio projects, testimonials, FAQ, pricing, company contact details — lives in **`src/lib/data.ts`**. Edit that file and the whole site updates; no need to touch component code.

## 📬 Wiring up the contact form

The form in `src/components/forms/ContactForm.tsx` currently simulates a submission. To make it functional, either:

1. **Add a Next.js route handler** at `src/app/api/contact/route.ts` that sends an email (e.g. via [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com)), then call it with `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` inside `handleSubmit`, or
2. **Use a form backend** like [Formspree](https://formspree.io) or [Basin](https://usebasin.com) and point the fetch call at their endpoint.

## 🖼️ Images

Portfolio cards currently use gradient placeholders (no external images fetched, so the build has zero broken image dependencies). To add real screenshots:

1. Drop images into `public/portfolio/`.
2. Reference them in the `portfolio` array in `src/lib/data.ts`.
3. Swap the placeholder `<div>` in `src/components/sections/Portfolio.tsx` for a Next.js `<Image />` component.

Also replace `public/og-image.png` with a real 1200×630 social share image before launch.

## 🔍 SEO checklist before launch

- [ ] Update `siteUrl` in `src/app/layout.tsx` and `sitemap.ts`/`robots.ts` to your final domain
- [ ] Replace `public/og-image.png` with a real image
- [ ] Verify each page's `metadata` export (title/description) reads well
- [ ] Submit `sitemap.xml` to Google Search Console after deploying

## ☁️ Deploying to Vercel

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Digitec Enterprise website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/digitec-enterprise.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add your custom domain under **Project Settings → Domains**.

Every push to `main` will auto-deploy. Preview deployments are created automatically for pull requests.

## 🧰 Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react |
| Fonts | Bricolage Grotesque (display) + Inter (body), via `next/font/google` |
| Hosting | Vercel (recommended) |

## 📄 License

This project and its content are proprietary to Digitec Enterprise Ltd.
