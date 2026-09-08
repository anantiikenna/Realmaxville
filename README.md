# Realmaxville — Architecture & Construction Website

Professional website for Realmaxville, an architectural design and construction company based in Lagos, Nigeria.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Hosting:** Netlify

## Getting Started

```bash
cd realmaxville-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
realmaxville-site/
├── src/
│   ├── app/              # Pages (home, about, contact, projects, privacy, terms)
│   ├── components/       # Reusable UI components
│   └── app/actions/      # Server actions (form submissions)
├── public/images/        # Static assets
└── AGENTS.md             # Engineering guidelines & rules
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, services, featured projects, process, CTA |
| `/about` | Company overview, values, timeline |
| `/projects` | Project gallery with type filtering |
| `/projects/[slug]` | Individual project detail pages |
| `/contact` | Contact form, office info, WhatsApp CTA |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/nondiscrimination` | Nondiscrimination policy |

## Key Components

- `Hero` — Full-screen hero with background image
- `Stats` — Company statistics bar with glass morphism
- `Services` — Sticky sidebar + service cards grid
- `Projects` — Featured projects grid with hover effects
- `Process` — 5-step construction process timeline
- `Team` — Draggable auto-scrolling team carousel
- `CallToAction` — CTA section with glass panel
- `ContactForm` — Form with validation, honeypot spam protection, server action submission
- `Navbar` — Fixed nav with scroll detection, hash link active states
- `Footer` — 4-column footer with watermark
- `CookieConsent` — GDPR cookie consent banner

## Design Tokens

| Token | Value |
|-------|-------|
| Accent | `#FFD700` (gold) |
| Background | `#050505` |
| Surface | `#131313` |
| Text Primary | `#e5e2e1` |
| Text Secondary | `#b0b3b4` |
| Font Primary | Inter |
| Font Mono | Space Mono |

## Engineering Rules

See [AGENTS.md](./AGENTS.md) for critical fixes, spacing system, component patterns, and guidelines.

## Deployment

Commits to `main` auto-deploy to Netlify. Build command: `next build`. Output: `.next`.

## License

Proprietary — Realmaxville Architecture & Construction.
