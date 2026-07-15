---
name: Obsidian Cyber Lab
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#050505'
  on-primary-container: '#797777'
  inverse-primary: '#5f5e5e'
  secondary: '#ffffff'
  on-secondary: '#293500'
  secondary-container: '#c7f300'
  on-secondary-container: '#576c00'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#000607'
  on-tertiary-container: '#00848d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#c7f300'
  secondary-fixed-dim: '#aed500'
  on-secondary-fixed: '#171e00'
  on-secondary-fixed-variant: '#3d4d00'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

The design system is engineered for a high-end, tech-forward laboratory aesthetic. It targets developers, innovators, and creative engineers who value precision and bleeding-edge utility. The emotional response is one of calculated confidence, high-performance power, and futuristic luxury.

The style is a hybrid of **Minimalist-Futurism** and **Glassmorphism**. It utilizes an "Obsidian" dark-mode foundation to provide an infinite canvas where data and UI elements float with intense clarity. The aesthetic relies on extreme contrast—pitch-black voids paired with retina-searing neon accents—complemented by high-fidelity frosted glass layers that suggest depth and sophisticated hardware.

## Colors

The palette is optimized for OLED displays and maximum visual impact in low-light environments.

- **Primary (Obsidian Black):** Used for the base canvas and deep structural voids. It is pure and uncompromising.
- **Secondary (Cyber Lime):** The primary action color. Used for high-priority calls to action, status indicators, and critical data points.
- **Tertiary (Electric Cyan):** Used for secondary interactions, focus states, and data visualization highlights.
- **Neutral:** A range of deep grays (#0A0A0A to #262626) used for surface layering and subtle borders to maintain the dark-mode-first hierarchy.

## Typography

This design system utilizes **Inter** for its systematic, high-performance readability and **Space Mono** for a technical, lab-grade feel on labels. 

- **Headlines:** Must be set with tight tracking (`-0.02em` to `-0.04em`) to create a dense, "engineered" look. Large display styles should use a heavy font weight to dominate the negative space.
- **Body:** Kept clean and airy with a slightly increased line height to balance the intensity of the headlines.
- **Labels:** Always in all-caps when using Space Mono, with generous letter-spacing to evoke the look of printed circuit boards or technical specifications.

## Layout & Spacing

The layout philosophy follows a **Rigid Fluidity** model. While the grid is fluid to accommodate various screen sizes, the internal spacing relies on aggressive, extreme whitespace to denote luxury and focus.

- **Grid:** A 12-column system for desktop with wide 32px gutters.
- **Rhythm:** An 8px base unit drives all padding and margins. Use "Super-Margins" (64px+) between major sections to emphasize the minimal, high-end feel.
- **Mobile:** Transition to a 4-column grid with reduced margins but maintain the bold typography scale to keep the tech-forward impact.

## Elevation & Depth

Depth is not communicated through traditional shadows, but through **Luminance and Refraction**.

- **Glassmorphism:** Secondary surfaces use a high-saturation backdrop blur (20px-40px) with a semi-transparent dark fill (e.g., `rgba(255, 255, 255, 0.03)`).
- **Glow Borders:** Instead of shadows, use subtle 1px inner or outer borders in Cyber Lime or Cyan with low opacity (10-20%) to simulate a light-emitting edge.
- **Tonal Tiers:** Level 0 is Obsidian Black (#050505). Level 1 is a subtle elevation using #0A0A0A. High-importance modals utilize the glass effect to sit "above" the logic of the dark base.

## Shapes

The shape language is defined by **Extreme Rounding**. All interactive elements, such as buttons, tags, and inputs, utilize pill-shaped geometry to contrast against the rigid, grid-based layout and sharp typography.

- **Small Components:** Full pill radius (e.g., 100px).
- **Cards/Containers:** Use `rounded-xl` (1.5rem) to maintain a soft but structured look for larger surface areas.
- **Icons:** Must follow the same geometric principles—thick strokes and rounded terminals.

## Components

- **Buttons:** Primary buttons are Cyber Lime with black text, pill-shaped, and feature a subtle outer glow on hover. Secondary buttons are "ghost" style with 1px Cyber Lime borders.
- **Inputs:** Dark backgrounds (#0A0A0A) with Cyan focus rings. Labels are always `label-caps` positioned above the field.
- **Chips/Tags:** Small pill shapes with Electric Cyan text and a low-opacity Cyan background.
- **Cards:** High-blur glass containers with a subtle top-left light leak (linear gradient border) to simulate hardware premium finish.
- **Status Indicators:** Use "Pulse" animations for Cyber Lime (active/online) to add a living, technical feel to the UI.
- **Data Tables:** Minimalist with no vertical lines; use horizontal dividers with 5% white opacity. Row highlights use Cyber Lime text.