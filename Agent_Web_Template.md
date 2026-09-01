# Agent Template — Next.js Professional Website Build Guide

> A comprehensive guide for AI agents and developers to build production-ready websites with excellent UI/UX, security, compliance, and functionality. Based on patterns proven in the Highlands Family Dental project.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Tech Stack](#2-tech-stack)
3. [Styling & Design System](#3-styling--design-system)
4. [Security](#4-security)
5. [Forms & Server Actions](#5-forms--server-actions)
6. [CMS Integration (Sanity)](#6-cms-integration-sanity)
7. [SEO](#7-seo)
8. [Performance](#8-performance)
9. [Legal & Compliance](#9-legal--compliance)
10. [Third-Party Integrations](#10-third-party-integrations)
11. [Error Handling](#11-error-handling)
12. [Accessibility](#12-accessibility)
13. [Deployment](#13-deployment)
14. [Code Quality Checklist](#14-code-quality-checklist)

---

## 1. Project Structure

### Folder Organization

```
project-root/
├── .env.local                    # Environment variables (git-ignored)
├── .envs.example                 # Documented env var template (committed)
├── next.config.ts                # Next.js config (CSP, headers, images)
├── sanity.config.ts              # Sanity Studio config (if using CMS)
├── tsconfig.json                 # TypeScript config
├── postcss.config.mjs            # PostCSS + Tailwind
├── eslint.config.mjs             # ESLint flat config
├── README.md                     # Full project documentation
├── public/                       # Static assets (images, SVGs, icons)
└── src/
    ├── app/                      # Next.js App Router
    │   ├── layout.tsx            # Root layout (fonts, metadata, providers)
    │   ├── page.tsx              # Homepage
    │   ├── globals.css           # Tailwind + brand tokens
    │   ├── not-found.tsx         # Custom 404 page
    │   ├── sitemap.ts            # Dynamic sitemap
    │   ├── robots.ts             # Robots.txt
    │   ├── actions/              # Server actions
    │   │   └── contact.ts        # Form handling, validation, email
    │   └── [route]/page.tsx      # Route pages
    ├── components/
    │   ├── forms/                # Form components (client)
    │   ├── layout/               # Layout components (Navbar, Footer, etc.)
    │   └── [feature]/            # Feature-specific components
    ├── lib/                      # Shared utilities
    │   └── mailer.ts             # Email transport
    └── sanity/                   # CMS configuration (if using Sanity)
        ├── env.ts                # Environment validation
        ├── lib/
        │   ├── client.ts         # Read/write clients
        │   ├── queries.ts        # GROQ queries
        │   └── image.ts          # Image URL builder
        ├── schemaTypes/          # CMS schemas
        └── structure.ts          # Studio sidebar
```

### File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Pages | `page.tsx` in folder routes | `src/app/about/page.tsx` |
| Components | PascalCase `.tsx` | `NavbarClient.tsx`, `ContactForm.tsx` |
| Server Actions | camelCase in `actions/` | `contact.ts` |
| Utilities | camelCase `.ts` | `mailer.ts` |
| Sanity Schemas | camelCase `.ts` | `smsConsent.ts`, `galleryCase.ts` |
| Config | lowercase dot-prefixed | `.envs.example`, `.gitignore` |

### Path Aliases

Define in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Usage: `import Component from "@/components/Component"`

---

## 2. Tech Stack

### Core

| Package | Purpose | Notes |
|---------|---------|-------|
| `next` | Framework | App Router, Turbopack |
| `react` / `react-dom` | UI library | Latest stable |
| `typescript` | Type safety | `strict: true` |
| `tailwindcss` | Styling | v4 with CSS-first config |

### CMS

| Package | Purpose |
|---------|---------|
| `sanity` | Content management |
| `next-sanity` | Next.js + Sanity integration |
| `@sanity/image-url` | Image URL building |
| `@sanity/vision` | GROQ query tool (dev) |

### Utilities

| Package | Purpose |
|---------|---------|
| `nodemailer` | Email sending (SMTP) |
| `aos` | Scroll animations |
| `lucide-react` | Icons |

---

## 3. Styling & Design System

### Tailwind v4 Configuration

Use CSS-first configuration in `globals.css`:

```css
@theme {
  --font-sans: var(--font-inter);
  --font-serif: var(--font-playfair);
  --color-brand-navy: #002157;
  --color-brand-gold: #CDA66B;
  --color-brand-gold-hover: #b8955f;
  --color-brand-bg: #F8F5F0;
  --color-brand-text: #1F2937;
  --color-brand-muted: #64748b;
}
```

### Color System

| Token | Purpose | Usage |
|-------|---------|-------|
| `brand-navy` | Primary dark | Headings, buttons, footer, CTAs |
| `brand-gold` | Accent | Highlights, badges, links, icons |
| `brand-gold-hover` | Hover state | Button hover, link hover |
| `brand-bg` | Background | Section backgrounds, cards |
| `brand-text` | Body text | Paragraphs, descriptions |
| `brand-muted` | Secondary | Captions, secondary text |

### Typography

Load fonts via `next/font/google`:

```tsx
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

// Apply on <html> element
<html className={`${inter.variable} ${playfair.variable}`}>
```

### Utility Classes

Define reusable classes in `globals.css`:

```css
.btn-gold {
  @apply bg-brand-gold text-white px-6 py-2 rounded-sm font-semibold
         transition-colors hover:bg-brand-gold-hover uppercase text-sm tracking-wider;
}
.btn-navy {
  @apply bg-brand-navy text-white px-6 py-2 rounded-sm font-semibold
         transition-colors hover:bg-brand-navy/90 uppercase text-sm tracking-wider;
}
```

### Responsive Patterns

- **Mobile-first**: Base styles for mobile, `sm:`, `md:`, `lg:` breakpoints
- **Container**: `container mx-auto px-4` on every page
- **Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4/6`
- **Typography scaling**: `text-[38px] sm:text-5xl md:text-6xl lg:text-[84px]`
- **Flex direction**: `flex-col lg:flex-row` for mobile stacking

### Design Patterns

- **Rounded corners**: `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- **Shadows**: `shadow-sm`, `shadow-md`, `shadow-xl`, custom `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Borders**: `border border-gray-100` for card separation
- **Hover effects**: `hover:-translate-y-1`, `hover:shadow-xl`, `group-hover:scale-105`
- **Transitions**: `transition-all duration-300/500/700`

---

## 4. Security

### 4.1 Content Security Policy (CSP)

Configure in `next.config.ts`:

```ts
async headers() {
  const isDev = process.env.NODE_ENV !== 'production';
  const ContentSecurityPolicy = [
    `default-src 'self'`,
    `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://*.sanity.io`,
    `style-src 'self' 'unsafe-inline' https://*.sanity.io https://fonts.googleapis.com`,
    `font-src 'self' https://*.sanity.io https://fonts.gstatic.com`,
    `img-src 'self' data: blob: https://*.sanity.io https://cdn.sanity.io`,
    `frame-src https://*.sanity.io`,
    `connect-src 'self' https://*.sanity.io https://cdn.sanity.io https://api.sanity.io`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");
  // ... return headers
}
```

### 4.2 HTTP Security Headers

```ts
{ key: "X-Frame-Options", value: "DENY" }
{ key: "X-Content-Type-Options", value: "nosniff" }
{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }
{ key: "X-DNS-Prefetch-Control", value: "on" }
{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), display-capture=()" }
{ key: "X-Permitted-Cross-Domain-Policies", value: "none" }
```

### 4.3 Rate Limiting (In-Memory)

```ts
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.delete(identifier);
    rateLimitStore.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  return false;
}
```

### 4.4 Honeypot Anti-Spam

**Client (form):**
```tsx
<div className="hidden" aria-hidden="true">
  <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
</div>
```

**Server (action):**
```ts
const hp = (formData.get("hp_field") as string | null) ?? "";
if (hp) {
  return { success: true }; // Silently reject — don't reveal detection
}
```

### 4.5 XSS Prevention (HTML Escaping)

```ts
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

Apply to all user inputs before use in HTML (emails, etc.).

### 4.6 Server-Side Input Validation

```ts
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;

if (!name || name.length > 100) {
  return { success: false, error: "Please provide a valid name." };
}
if (!email || !emailRegex.test(email)) {
  return { success: false, error: "Please provide a valid email address." };
}
if (phone && !phoneRegex.test(phone)) {
  return { success: false, error: "Please provide a valid phone number." };
}

// Allowlist validation for select fields
const ALLOWED_SUBJECTS = ["General Enquiry", "Book an Appointment", "Billing Question", "Feedback"];
if (!ALLOWED_SUBJECTS.includes(subject)) {
  return { success: false, error: "Please select a valid subject." };
}
```

### 4.7 Environment Variable Security

- All `.env*` files in `.gitignore`
- Server-only secrets: `SANITY_API_TOKEN`, `SMTP_PASS` (no `NEXT_PUBLIC_` prefix)
- `.envs.example` provides documented template without secrets
- `NEXT_PUBLIC_` prefix only for client-safe values

---

## 5. Forms & Server Actions

### 5.1 Client/Server Component Split

| Pattern | Server Component | Client Component |
|---------|-----------------|-----------------|
| Data fetching | Fetches Sanity data, passes as props | N/A |
| Interactivity | N/A | Handles state, events, form submission |
| Navbar | `Navbar.tsx` (fetches settings) | `NavbarClient.tsx` (scroll, mobile menu) |
| Forms | Page layout | `ContactForm.tsx`, `BookingForm.tsx` |

### 5.2 Server Action Pattern

```ts
"use server";

export async function submitContactForm(formData: FormData) {
  // 1. Extract fields
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim().toLowerCase() ?? "";
  const hp = (formData.get("hp_field") as string | null) ?? "";

  // 2. Honeypot check
  if (hp) return { success: true };

  // 3. Rate limit
  if (isRateLimited(email || "anonymous")) {
    return { success: false, error: "Too many submissions. Please try again later." };
  }

  // 4. Server-side validation
  if (!name || name.length > 100) {
    return { success: false, error: "Please provide a valid name." };
  }
  // ... more validation

  // 5. Send email
  try {
    await sendEmail({ to: toEmail, subject: "...", html: "...", replyTo: email });
    return { success: true };
  } catch (err) {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
```

### 5.3 Client Component Form Pattern

```tsx
"use client";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(formData: FormData) {
    formData.set("form_source", "contact");
    setStatus("loading");
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setErrorMsg(result.error || "There was an error.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("There was an error. Please try again or call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <div>Success! <button onClick={() => setStatus("idle")}>Send Another</button></div>;
  }

  return (
    <form action={handleSubmit}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Fields */}
      <input type="text" name="name" placeholder="Full Name *" required maxLength={100} />

      {/* Error display */}
      {status === "error" && <div className="text-red-500 text-sm">{errorMsg}</div>}

      {/* Submit */}
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
```

### 5.4 Consent Logging (TCPA)

```ts
async function logConsentRecord(data: {
  name: string;
  email: string;
  phone: string;
  formSource: string;
  smsConsent: boolean;
}) {
  if (!writeClient) {
    console.warn("SANITY_API_TOKEN not set — skipping consent log.");
    return;
  }
  try {
    await writeClient.create({
      _type: "smsConsent",
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      formSource: data.formSource,
      smsConsent: data.smsConsent,
      consentTimestamp: new Date().toISOString(),
      consentLanguageVersion: "1.0",
      consentText: CONSENT_DISCLOSURE,
      optedOut: false,
    });
  } catch (err) {
    console.error("Failed to log consent:", err instanceof Error ? err.message : "Unknown error");
  }
}
```

---

## 6. CMS Integration (Sanity)

### 6.1 Schema Pattern

```ts
import { defineType, defineField } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
```

### 6.2 Read/Write Clients

```ts
import { createClient } from "next-sanity";

// Read client (uses CDN)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-10",
  useCdn: true,
});

// Write client (token-gated, no CDN)
export const writeClient = process.env.SANITY_API_TOKEN
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-10",
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null;
```

### 6.3 Data Fetching with ISR

```ts
// In server component
let data = null;
try {
  data = await client.fetch(query, {}, { next: { revalidate: 3600 } }); // 1 hour ISR
} catch (err) {
  console.error("[Component] Failed to fetch:", err instanceof Error ? err.message : "Unknown error");
}

// Fallback if data is null
const items = data?.items ?? fallbackData;
```

### 6.4 Static Generation

```ts
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(postSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}
```

---

## 7. SEO

### 7.1 Root Metadata (layout.tsx)

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://yoursite.com"),
  title: {
    template: "%s | Your Brand Name",
    default: "Your Brand Name | Tagline",
  },
  description: "Main site description for search engines.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Your Brand Name",
    description: "Description for social sharing.",
    url: "https://yoursite.com",
    siteName: "Your Brand Name",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
```

### 7.2 Page-Level Metadata

```ts
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page-specific description for search engines.",
};
```

### 7.3 Dynamic Sitemap

```ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // ... more routes
  ];
}
```

### 7.4 Robots.txt

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin/" },
    sitemap: "https://yoursite.com/sitemap.xml",
  };
}
```

---

## 8. Performance

### 8.1 Font Loading

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"], // Minimal subset
});

// Apply via className on <html>
<html className={inter.variable}>
```

### 8.2 Image Optimization

```tsx
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  fill
  sizes="(max-width: 768px) 100vw, 500px"
  priority  // Only for above-fold images
  className="object-cover"
/>
```

### 8.3 Animation Init (AOS)

```tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-cubic", offset: 50 });
  }, []);
  return null;
}
```

Usage: `data-aos="fade-up"`, `data-aos="fade-left"`, `data-aos="fade-right"`

### 8.4 Script Loading

```tsx
import Script from "next/script";

<Script id="third-party" src="https://example.com/sdk.js" strategy="lazyOnload" />
```

---

## 9. Legal & Compliance

### 9.1 TCPA SMS Consent

**Checkbox (both forms):**
```tsx
<div className="flex items-start gap-3">
  <input type="checkbox" id="sms-consent" name="sms_consent" value="true" />
  <label htmlFor="sms-consent">
    <span className="font-semibold">(Optional)</span> I consent to receive text messages from [Practice Name].
    Messages sent may include Customer Care, Account Notification and message frequency will vary
    based on patient interactions and notifications. Message and data rates may apply.
    Reply HELP or contact us at [PHONE] for support. Reply STOP to opt out of future messages at anytime.
    <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
  </label>
</div>
```

**Key requirements:**
- ✅ Checkbox is **optional** (no `required` attribute)
- ✅ "(Optional)" visible label
- ✅ Privacy Policy and Terms of Use **hyperlinked**
- ✅ Exact consent text logged with timestamp for audit trail
- ✅ Consent version tracked (`consentLanguageVersion`)

### 9.2 Cookie Consent

```tsx
"use client";
import { useState, useEffect, createContext, useContext } from "react";

type ConsentValue = "accepted" | "declined" | null;

const CookieConsentContext = createContext<{
  consent: ConsentValue;
  setConsent: (value: ConsentValue) => void;
}>({ consent: null, setConsent: () => {} });

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentValue>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as ConsentValue;
    setConsent(stored);
    setLoaded(true);
  }, []);

  const setConsent = (value: ConsentValue) => {
    setConsentState(value);
    if (value) {
      localStorage.setItem("cookie-consent", value);
    } else {
      localStorage.removeItem("cookie-consent");
    }
  };

  if (!loaded) return null; // SSR safe

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
```

**Banner pattern:**
- Show if no consent choice stored
- Accept → saves "accepted" to localStorage
- Decline → saves "declined" to localStorage
- Manage → allows revoking/changing preference
- Link to Privacy Policy

### 9.3 Required Legal Pages

| Page | Content |
|------|---------|
| `/privacy` | Privacy Policy (data collection, SMS communications, cookies, HIPAA if healthcare) |
| `/terms` | Terms of Service (acceptance, liability, SMS terms) |
| `/nondiscrimination` | Federal compliance notice (if healthcare) |

### 9.4 Privacy Policy Sections (Healthcare)

1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Data Security
5. HIPAA Notice of Privacy Practices
6. SMS Communications (consent, types, opt-out, rates, voluntary, third-party sharing)
7. Cookie Policy (types, choices, third-party, management)
8. Contact Us

---

## 10. Third-Party Integrations

### 10.1 Email (Nodemailer)

```ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  requireTLS: Number(process.env.SMTP_PORT) === 587,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail({ to, subject, html, replyTo }: {
  to: string;
  subject: string;
  html: string;
  replyTo: string;
}) {
  await transporter.sendMail({
    from: `"Your Brand" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
    replyTo,
  });
}
```

### 10.2 Embed Maps

```tsx
<iframe
  width="100%"
  height="300"
  style={{ border: 0 }}
  loading="lazy"
  src="https://maps.google.com/maps?q=ADDRESS&t=&z=14&ie=UTF8&iwloc=&output=embed"
/>
```

---

## 11. Error Handling

### 11.1 Custom 404 Page

```tsx
// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-brand-navy">404</h1>
          <p className="text-brand-muted">Page not found</p>
          <Link href="/" className="btn-gold mt-8">Go Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

### 11.2 Form Error States

```tsx
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
const [errorMsg, setErrorMsg] = useState("");

// Error display
{status === "error" && (
  <div className="text-red-500 text-sm font-semibold">{errorMsg}</div>
)}

// Success state
if (status === "success") {
  return (
    <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
      <h3>Message Sent!</h3>
      <p>Thank you for reaching out.</p>
      <button onClick={() => setStatus("idle")}>Send Another</button>
    </div>
  );
}
```

### 11.3 Server Action Error Handling

```ts
try {
  await sendEmail({ to, subject, html, replyTo });
  return { success: true };
} catch (err) {
  const detail = err instanceof Error ? err.message : "Unknown error";
  console.error("[contact] SMTP send failed:", detail);
  return { success: false, error: "Failed to send message. Please try again or call us." };
}
```

### 11.4 Sanity Fetch Error Handling

```ts
let data = null;
try {
  data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
} catch (err) {
  console.error("[Component] Failed to fetch:", err instanceof Error ? err.message : "Unknown error");
}

// Graceful fallback
const items = data?.items ?? fallbackItems;
```

---

## 12. Accessibility

### 12.1 Semantic HTML

- `<main>` for page content
- `<header>` for navigation
- `<footer>` for footer
- `<nav>` for navigation menus
- `<article>` for content cards
- `<section>` for content sections
- `<aside>` for sidebar content
- `<details>` / `<summary>` for accordions

### 12.2 ARIA Attributes

```tsx
<button aria-label="Toggle Menu">☰</button>
<div className="hidden" aria-hidden="true"><!-- honeypot --></div>
<input type="text" aria-label="Full Name" />
```

### 12.3 Keyboard Navigation

- All interactive elements use `<button>` or `<a>` (native keyboard accessible)
- `tabIndex={-1}` only on honeypot inputs (prevents tab focus)
- Form submits via `<button type="submit">`

### 12.4 Image Alt Text

```tsx
// Descriptive
<Image alt="Smiling woman in dental chair" />
// Functional
<Image alt="Highlands Family Dental Logo" />
// Decorative (empty alt)
<Image alt="" />
```

### 12.5 Color Contrast

- Dark text on light backgrounds (navy on white)
- Light text on dark backgrounds (white on navy)
- Accent colors (gold) used for decoration, not essential information
- Muted text passes AA contrast ratio

---

## 13. Deployment

### 13.1 Vercel Environment Variables

| Variable | Type | Description |
|----------|------|-------------|
| `SMTP_HOST` | Server | SMTP host |
| `SMTP_PORT` | Server | SMTP port |
| `SMTP_USER` | Server | SMTP username |
| `SMTP_PASS` | Server | SMTP password |
| `CONTACT_EMAIL_TO` | Server | Form submission recipient |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Both | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Both | Sanity dataset |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Both | Sanity API version |
| `SANITY_API_TOKEN` | Server | Sanity write token |

### 13.2 Git Configuration

```gitignore
# Build output
.next/
out/

# Environment
.env*
!.envs.example

# Deployment
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
```

### 13.3 TypeScript Config

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2017",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": { "@/*": ["./src/*"] },
    "incremental": true
  }
}
```

### 13.4 ESLint Config

```js
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

---

## 14. Code Quality Checklist

### Before Every Commit

- [ ] TypeScript compiles (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] All user inputs validated server-side
- [ ] HTML escaping applied to user content in emails
- [ ] Error states handled (form, fetch, SMTP)
- [ ] Consent checkbox is optional (no `required` attribute)
- [ ] Privacy Policy and Terms of Use linked in consent checkbox
- [ ] Images have `alt` attributes
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] Brand colors consistent (navy, gold, bg, muted)
- [ ] Font sizes use responsive pattern (`text-sm md:text-[13px]`)

### Security Checklist

- [ ] CSP headers configured
- [ ] HSTS enabled
- [ ] Permissions-Policy disables sensitive APIs
- [ ] Rate limiting on form submissions
- [ ] Honeypot anti-spam in place
- [ ] Server-side input validation with allowlists
- [ ] XSS prevention (HTML escaping)
- [ ] Environment files git-ignored
- [ ] Sanity Studio route hardened (noindex)

### Legal Checklist

- [ ] Privacy Policy page exists with all required sections
- [ ] Terms of Service page exists
- [ ] Cookie consent banner functional (accept/decline)
- [ ] Cookie Policy section in Privacy Policy
- [ ] TCPA consent checkbox (optional, hyperlinked)
- [ ] Consent logging to database (TCPA audit trail)
- [ ] Medical disclaimer on forms (if healthcare)
- [ ] Nondiscrimination notice (if healthcare)

### Performance Checklist

- [ ] Fonts loaded via `next/font/google`
- [ ] Images use `next/image` with `sizes`
- [ ] Above-fold images have `priority`
- [ ] Third-party scripts use `lazyOnload` strategy
- [ ] ISR configured for CMS data (revalidate: 3600)
- [ ] Static generation for dynamic routes (`generateStaticParams`)
- [ ] AOS animations initialized once

---

## Quick Reference: Common Patterns

### Fetching Sanity Data in Server Component

```tsx
import { client } from "@/sanity/lib/client";
import { query } from "@/sanity/lib/queries";

export default async function Page() {
  let data = null;
  try {
    data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
  } catch (err) {
    console.error("[Page] Fetch failed:", err instanceof Error ? err.message : "Unknown error");
  }
  return <div>{/* render data */}</div>;
}
```

### Using Cookie Consent in Any Component

```tsx
"use client";
import { useCookieConsent } from "@/components/layout/CookieConsent";

export default function AnalyticsBanner() {
  const { consent } = useCookieConsent();
  if (consent !== "accepted") return null;
  return <div>Analytics active</div>;
}
```

### Form with Server Action

```tsx
<form action={async (formData) => {
  const result = await serverAction(formData);
  if (result.success) { /* show success */ }
  else { /* show error */ }
}}>
```

---

*This template is based on patterns from the Highlands Family Dental website (Next.js 16, Sanity CMS, Tailwind CSS v4). Adapt sections as needed for your specific project requirements.*
