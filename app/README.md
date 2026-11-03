# Chesapeake Tower Solutions — Website

Live site: **https://www.chesapeaketower.com**

Marketing site for Chesapeake Tower Solutions — tower construction, maintenance, FAA-compliant inspections, and 24/7 emergency response services. Dark, bold industrial design with red accents, featuring a looping custom soundtrack player and a quote-request contact form.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@theme` tokens defined in `globals.css`)
- **Fonts:** Barlow Condensed (display) + Inter (body), via `next/font/google`
- **Icons:** [lucide-react](https://lucide.dev)
- **Hosting/Deployment:** [Vercel](https://vercel.com) — auto-deploys on push to `main`
- **Contact form:** [Formspree](https://formspree.io)
- **Domain/DNS:** Registered at Squarespace

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

---

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx      # Fixed top nav (mobile menu)
│   ├── Hero.tsx            # Full-viewport hero, mobile + desktop backgrounds
│   ├── ServicesGrid.tsx    # 6-card service grid (lucide icons)
│   ├── WhyChooseUs.tsx     # Value props section
│   ├── ProjectGallery.tsx  # Work gallery
│   ├── About.tsx           # About section (bio pending from client)
│   ├── CareerBanner.tsx    # Careers CTA
│   ├── Memorial-old.tsx    # UNUSED — old memorial page, kept for reference
│   ├── Footer.tsx          # #contact section + AJAX Formspree form
│   └── AudioWidget.tsx     # Fixed bottom music player
├── layout.tsx              # Fonts + SEO/Open Graph metadata
├── page.tsx                # Section composition
└── globals.css             # Tailwind theme + scroll-padding fix
public/
├── images/                 # Hero backgrounds, service cards, favicon.svg
└── audio/dave-song.mp3     # Looping soundtrack (must exist at this exact path)
```

---

## Deployment

Vercel deploys automatically on every push to `main`. Production domain updates within ~1–2 minutes of "Ready" status. Check build status in Vercel → **Deployments**.

Pushes to any other branch create preview deployments at temporary URLs — they do **not** affect the live site.

---

## Third-Party Services

### Formspree (contact form)

- **Endpoint:** `https://formspree.io/f/xoeeprdj` (configured in `Footer.tsx`)
- Submissions are emailed to `dbeaumont@chesapeaketower.com`
- Free plan limit: **50 submissions/month** — check usage at formspree.io dashboard
- The form posts via `fetch` with `Accept: application/json` so submissions stay on-site (inline success card) instead of redirecting to Formspree's thank-you page
- Failures fall back to an on-page error message; recipient email can be changed anytime in the Formspree dashboard without touching code

### Audio

- `AudioWidget.tsx` attempts autoplay at volume 0.5; browsers block autoplay until first user interaction, so the play button exists for that
- File lives at `public/audio/dave-song.mp3` — all static asset paths **must start with a leading `/`** (missing slashes caused two separate "file not found" bugs during development)

---

## DNS (Squarespace)

Domain registered and DNS-managed in **Squarespace**. Relevant records:

| Type | Host | Data | Purpose |
|------|------|------|---------|
| A | `@` | `216.198.79.1` | Vercel anycast IP (project-specific — verify in Vercel → Settings → Domains) |
| CNAME | `www` | `cname.vercel-dns.com` | www → Vercel |
| MX (×5) | `@` | Google Workspace | **Email — do not modify** |

⚠️ **Do not delete the Google Workspace MX records** — they deliver email to `@chesapeaketower.com` (including form submissions). HTTPS/SSL is provisioned automatically by Vercel; nothing to renew.

---

## Conventions & Gotchas

- **Section anchors:** `html { scroll-padding-top }` in `globals.css` keeps nav-linked sections clear of the fixed nav. If nav height changes, update this value (nav height + ~20px breathing room).
- **Fixed overlays:** Navigation is fixed at top; AudioWidget is fixed at bottom (`z-50`). Both overlap content — accounted for via `scroll-padding-top` and hero padding.
- **Imagery:** Service card paths in `ServicesGrid.tsx` and hero backgrounds in `Hero.tsx` all resolve from `public/` — leading slash required.
- **Metadata:** Open Graph config lives in `layout.tsx` (`metadataBase` is set). OG image currently points at the hero SVG; ideally replace with a 1200×630 PNG/JPG for better share previews.

---

## Pending / Future Work

- [ ] Client wording tweaks (expected ~a week after launch)
- [ ] Owner bio + photo for `About.tsx` (waiting on client)
- [ ] Optional: services button background treatment on the hero (client floated the idea)
- [ ] Optional: 1200×630 OG share image
- [ ] `Memorial-old.tsx` can be deleted once confirmed obsolete

---

## Ownership

Client: Dave Beaumont, Chesapeake Tower Solutions (dbeaumont@chesapeaketower.com)
Built by Kaitlin — freelance web development. 🐱