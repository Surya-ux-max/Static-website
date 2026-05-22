# Sri Eshwar College of Engineering — Landing Page

A high-fidelity, animated landing page built for Sri Eshwar College of Engineering (SECE), Coimbatore. Built with React 19, Three.js, Framer Motion, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2.6 |
| Build Tool | Vite | 8.0.12 |
| Styling | Tailwind CSS | 4.3.0 |
| 3D / WebGL | Three.js | 0.184.0 |
| React 3D Renderer | @react-three/fiber | 9.6.1 |
| 3D Helpers | @react-three/drei | 10.7.7 |
| Animation | Framer Motion | 12.40.0 |
| Avatars | DiceBear API (avataaars) | CDN |
| Fonts | Google Fonts (Syne + Inter) | CDN |

---

## Getting Started

```bash
cd app
npm install
npm run dev
```

```bash
# Production build
npm run build
npm run preview
```

---

## Theme

### Philosophy

The design intentionally avoids the "default AI look" — no light gray cards on white backgrounds, no blue-only palettes, no generic rounded boxes. Instead it uses:

- **Deep navy backgrounds** with very low-opacity white glass cards
- **Electric yellow** as the sole accent — used sparingly for maximum impact
- **Outlined / stroke typography** on the hero for a bold editorial feel
- **Glow blobs + grid overlays** for depth without images
- **Asymmetric layouts** (split heading + description) instead of centered everything

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Navy Deep | `#0a0f2e` | Primary background, hero, programs, campus sections |
| Navy Darker | `#060b22` | Stats, placements sections — creates depth between sections |
| Navy Darkest | `#04071a` | Footer background |
| Electric Yellow | `#f5c518` | All accents — CTAs, counters, icon fills, hover states, scrollbar |
| Yellow Hover | `#fde047` (yellow-300) | Button hover state |
| Yellow Glow | `rgba(245,197,24,0.08)` | Radial background glows |
| White Primary | `#ffffff` | Headings |
| White Secondary | `rgba(255,255,255,0.60)` | Body text |
| White Muted | `rgba(255,255,255,0.40)` | Subtext, descriptions |
| White Ghost | `rgba(255,255,255,0.06)` | Card borders and backgrounds |

### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Syne | 700, 800 | All `h1`, `h2`, `h3` |
| Body / UI | Inter | 400, 500, 600 | Paragraphs, labels, nav links |

Loaded via Google Fonts in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap');
```

### Global CSS Tokens (`index.css`)

```css
::selection          { background: #f5c518; color: #0a0f2e; }
::-webkit-scrollbar  { width: 4px; }
::-webkit-scrollbar-thumb { background: #f5c518; }
```

---

## Project Structure

```
app/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Programs.jsx
│   │   ├── Placements.jsx
│   │   ├── Campus.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Sections

### Navbar
- Fixed, transparent on top — transitions to `bg-[#0a0f2e]/95 backdrop-blur` on scroll
- Animated entrance: slides down from `y: -70` on mount via Framer Motion
- Logo: stacked rotated yellow square + dark square with `SE` monogram
- Nav links: animated underline on hover using a `w-0 → w-full` pseudo-element span
- CTA: yellow pill button with arrow icon
- Mobile: animated hamburger menu with `AnimatePresence` height collapse

### Hero
**Three.js Particle Sphere**
- 2,400 particles distributed on a sphere surface using spherical coordinates
- Dual-color: 60% blue (`#3b82f6`), 40% yellow (`#f5c518`) via `vertexColors`
- Rotates on both Y and X axes via `useFrame`
- Rendered in a full-bleed `<Canvas>` behind all content

**Floating Avatar Cards**
- 4 cards positioned absolutely at corners of the content area
- Each uses a DiceBear `avataaars` SVG avatar fetched from `api.dicebear.com`
- Shows student name, company, role, and package in a glass card
- Each card has an independent `y: [0, -6, 0]` oscillation loop with staggered duration

**Floating Stat Badges**
- 2 yellow pill badges (`#2 Rank`, `95% Placed`) float left and right
- Independent `y: [0, -8, 0]` oscillation

**Geometric Rings**
- 3 concentric rings (520px, 340px, 180px) centered on the hero
- Each rotates at a different speed (40s, 25s, 15s) via `animate={{ rotate: 360 }}`
- Opacity: 0.06 → 0.15 (inner rings more visible)

**Headline Treatment**
- First word normal white
- Second word: `WebkitTextStroke: '2px #f5c518'` — outlined/hollow text
- Third word: solid yellow fill
- Creates a three-tone typographic hierarchy

**Text Entrance**
- Stagger container with `staggerChildren: 0.14`
- Each child: `opacity: 0, y: 40` → `opacity: 1, y: 0` over 0.8s

### Stats
- Dark `#060b22` background with a `1px` yellow grid overlay at `3% opacity`
- 4 cards in a borderless grid (separated by `gap-px bg-white/5`)
- Each card: SVG icon in yellow container → flips to solid yellow on hover
- Corner triangle accent appears on hover (CSS border trick)
- Animated counters: `setInterval` increments from 0 to target value over 1800ms, triggered by `useInView`

### Programs
- 6 department cards in a 3-column grid
- Each card: yellow icon box (outline) → solid yellow fill on hover
- Left yellow accent bar (`w-0.5 h-full`) slides in on hover via `opacity-0 → opacity-100`
- Department code in `tracking-[0.2em]` uppercase yellow
- Seats count as a pill badge top-right
- Ambient glow blob top-right of section

### Placements
- Highlight grid: 4 stat cards with gradient overlay on hover
- **Dual-direction marquee**: two rows of company pills — one scrolling left, one scrolling right
- Each row uses two copies of the array animated with `x: ['0%', '-100%']` / `x: ['-100%', '0%']` for seamless loop
- Company pills have a yellow dot prefix and border highlight on hover

### Campus
- 2-column grid of feature cards
- Cards slide in from alternating sides (`x: -30` / `x: 30`) on scroll
- Icon containers: yellow outline → solid yellow fill on hover (same pattern as Programs/Stats for visual consistency)
- Ambient glow blob right-center

### Footer
**CTA Band**
- Full yellow (`#f5c518`) background with a dark grid overlay at `10% opacity`
- Dark navy CTA button — inverted from the rest of the site
- Subheading in muted `#0a0f2e/60`

**Footer Bar**
- Darkest navy `#04071a`
- 3-column grid: brand info, quick links, accreditations
- Quick links: animated left-to-right line expands on hover (`w-4 → w-6`)
- Contact info uses inline SVG icons (phone, mail, map pin) — no emojis
- Accreditations use yellow filled check circle SVGs

---

## Animation Patterns

| Pattern | Implementation | Used In |
|---|---|---|
| Page entrance stagger | `variants` with `staggerChildren` | Hero text |
| Scroll-triggered fade-up | `whileInView` + `viewport={{ once: true }}` | All sections |
| Hover lift | `whileHover={{ y: -4 }}` | Program cards |
| Infinite float | `animate={{ y: [0, -8, 0] }}` + `repeat: Infinity` | Avatar cards, stat badges |
| Infinite rotate | `animate={{ rotate: 360 }}` + `repeat: Infinity, ease: 'linear'` | Geometric rings |
| Infinite marquee | `animate={{ x: ['0%', '-100%'] }}` + `repeat: Infinity, ease: 'linear'` | Recruiter marquee |
| Counter increment | `setInterval` + `useInView` | Stats section |
| Height collapse | `AnimatePresence` + `height: 0 → auto` | Mobile nav menu |
| Scroll-aware nav | `window.addEventListener('scroll')` + state | Navbar background |

---

## Icons

All icons are inline SVGs — no icon library dependency. Style: Heroicons outline, `strokeWidth={1.5}`, `w-5 h-5` or `w-6 h-6`.

Icons used:
- Badge / verified check — Stats rank
- Trending up chart — Placement rate
- Currency circle — Package
- Office building — Recruiters
- Desktop monitor — CSE
- Circuit board — ECE
- Cog / gear — MECH
- Building — CIVIL
- Lightning bolt — EEE
- Cloud — IT
- Bar chart — Average package
- Arrow trending up — Highest package
- User group — Students placed
- Star — Dream offers
- Phone, Mail, Map pin — Footer contact
- Check circle (filled) — Accreditations
- Arrow right — CTA buttons

---

## Avatars

Avatars are fetched from the DiceBear public API at runtime:

```
https://api.dicebear.com/9.x/avataaars/svg?seed={NAME}&backgroundColor=b6e3f4,c0aede,d1d4f9
```

Seeds used: `Aisha`, `Ravi`, `Priya`, `Karthik` — deterministic, always render the same avatar per seed. No API key required.

---

## Vite Configuration

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Tailwind v4 uses the Vite plugin — no `tailwind.config.js` needed. Source files are auto-detected.

---

## Tailwind Usage Notes

- All colors are used as arbitrary values: `bg-[#0a0f2e]`, `text-[#f5c518]`
- Opacity modifiers: `bg-white/[0.03]`, `border-white/[0.06]`
- No custom theme extension needed — Tailwind v4 handles arbitrary values natively
- `@import "tailwindcss"` in `index.css` is the only required directive

---

## Browser Support

Requires a browser with WebGL support for the Three.js particle sphere. Falls back gracefully — the gradient background is always visible. Tested on Chrome 120+, Firefox 121+, Safari 17+.
