# AGENTS.md — Web Project Guidelines

## Critical Fixes & Rules

### 1. NEVER use `* { margin: 0; padding: 0; }` with Tailwind v4
Tailwind v4 uses CSS Cascade Layers (`@layer utilities`). Unlayered CSS **always beats layered CSS** regardless of specificity. A universal `*` reset silently overrides every `m-*`, `p-*`, `mt-*`, `mb-*`, `py-*`, `px-*` utility class.

**Rule:** Tailwind's Preflight already handles `box-sizing: border-box`. Do not add manual `*` resets.

### 2. Use `flex flex-col gap-*` instead of `mb-*` / `mt-*`
Margin utilities (`mb-8`, `mt-4`) are unreliable when parent elements have padding, overflow, or other layout constraints. Flex gap is always visible and consistent.

**Pattern:**
```tsx
// BAD — margins can collapse or be hidden
<div className="mb-6">...</div>
<div>...</div>

// GOOD — flex gap always works
<div className="flex flex-col gap-6">
  <div>...</div>
  <div>...</div>
</div>
```

**Apply everywhere:** headings, form fields, card content, nav items, section content.

### 3. Sticky positioning must be `md:sticky md:top-*`
`sticky` without a breakpoint prefix causes the element to stick on mobile too, overlapping content in `flex-col` layouts.

```tsx
// BAD — sticks on mobile, clashes with cards
<div className="md:w-1/3 sticky top-32 space-y-6">

// GOOD — only sticks on desktop
<div className="md:w-1/3 md:sticky md:top-32 space-y-6">
```

### 4. Negative margins on mobile cause section clashes
`-mt-*` pulls sections upward into the previous section. On mobile with smaller viewports, this causes visible overlap during scroll.

**Rule:** Use smaller negative margins on mobile (`-mt-8`) vs desktop (`-mt-20`).

### 5. Remove `overflow-hidden` unless clipping is intentional
`overflow-hidden` on sections clips hover effects, shadows, and absolutely positioned children.

**Rule:** Only use `overflow-hidden` on elements that genuinely need it (e.g., image containers with `group-hover:scale-110`).

### 6. ScrollReveal wrapper blocks parent `space-y-*`
If elements are wrapped in `<ScrollReveal>`, the parent's `space-y-*` class doesn't apply between them — it only targets direct children.

**Fix:** Add `flex flex-col gap-*` inside the ScrollReveal wrapper.

```tsx
// BAD — space-y-8 on parent doesn't reach children inside ScrollReveal
<div className="space-y-8">
  <ScrollReveal>
    <h2>...</h2>
    <p>...</p>
    <a>...</a>
  </ScrollReveal>
</div>

// GOOD — flex gap inside ScrollReveal
<div className="space-y-8">
  <ScrollReveal>
    <div className="flex flex-col items-center gap-6">
      <h2>...</h2>
      <p>...</p>
      <a>...</a>
    </div>
  </ScrollReveal>
</div>
```

### 7. Navbar hash links need scroll-based active detection
Hash links (`/#services`) should only be active when that section is in the viewport, not just when `pathname === "/"`.

**Pattern:**
```tsx
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  if (pathname !== "/") { setActiveSection(""); return; }
  const onScroll = () => {
    for (const id of ["services", "projects", "process"]) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(id);
          return;
        }
      }
    }
    setActiveSection("");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}, [pathname]);

// In render:
const hashId = link.href.startsWith("/#") ? link.href.slice(2) : null;
const isActive = hashId
  ? activeSection === hashId
  : link.href === "/"
    ? pathname === "/" && !activeSection
    : pathname.startsWith(link.href);
```

### 8. Browser cache after deploy
After pushing CSS changes, users see stale styles until they hard-refresh. Always instruct:
- **Chrome/Edge:** `Ctrl+Shift+R` or right-click refresh → "Empty Cache and Hard Reload"
- **Or:** Open incognito window (`Ctrl+Shift+N`)

### 9. Git push on Windows
PowerShell hangs without disabling terminal prompt:
```powershell
$env:GIT_TERMINAL_PROMPT = "0"; git push
```

### 10. `next build` and `tsc --noEmit` timeout
These commands timeout on this machine. Do not run them — verify changes by checking the live deployed site instead.

## Spacing System

### Section vertical padding
- Standard sections: `py-32` (128px)
- Compact sections: `py-20` (80px)
- Hero sections: use `page-hero` class (handles navbar clearance)

### Gap sizes
- `gap-1` (4px) — number to label in stats
- `gap-2.5` (10px) — form label to input
- `gap-4` (16px) — related items (WhatsApp CTA, nav links)
- `gap-6` (24px) — major content blocks (hero content, heading groups)
- `gap-8` (32px) — grid gaps, card spacing
- `gap-12` (48px) — section headings to content
- `gap-16` (64px) — major section dividers

### Grid responsive breakpoints
- `grid-cols-1 md:grid-cols-2` — 2-col on desktop
- `grid-cols-1 md:grid-cols-3` — sidebar + content (1/3 + 2/3)
- `grid-cols-2 md:grid-cols-4` — stats bar
- `grid-cols-1 md:grid-cols-4` — project cards
- `grid-cols-1 md:grid-cols-5` — process steps

## Component Patterns

### Contact form fields
```tsx
<div className="flex flex-col gap-2.5">
  <label className="flex items-center gap-2 ...">FIELD NAME</label>
  <input className="..." />
</div>
```

### Contact cards
```tsx
<div className="min-w-0 flex flex-col gap-0.5">
  <div className="...">Label</div>
  <div className="...">Value</div>
  <div className="...">Sub text</div>
</div>
```

### Section headings
```tsx
<div className="flex flex-col items-center gap-6">
  <div className="flex items-center gap-3">Eyebrow</div>
  <h2>Heading</h2>
  <p>Subtitle</p>
</div>
```

## Design Tokens
- Accent: `#c7f300` (lime green)
- Background: `#050505`
- Surface: `#131313`
- Surface container: `#20201f`
- Surface container lowest: `#0e0e0e`
- Text primary: `#e5e2e1`
- Text secondary: `#b0b3b4`
- Text outline: `#8e9192`
- Font primary: Inter
- Font mono: Space Mono
- Container max: `1440px`
- Section padding: `py-32` (desktop), responsive gaps
