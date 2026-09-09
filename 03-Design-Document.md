# Design Document — My Globe Guide Visual & UI Architecture

**Reference:** https://bluewingsglobal.com/  
**Target:** https://ttg-sigma.vercel.app/  
**Canonical Domain:** https://myglobeguide.com/  
**Status:** Approved v2.0 (Synchronized with Live Production Design Tokens & CSS)  

---

## 1. Design Philosophy & Aesthetic Core

1. **Dark Luxury & Atmospheric Depth**  
   The visual signature of My Globe Guide is anchored in a deep obsidian black palette (`#030814`) with ambient radial glow vignettes (`amber-500/10` and `sky-500/10`), ultra-fine slate borders (`border-slate-800/80`), and glassmorphism (`backdrop-blur-xl`, `bg-slate-900/80`, `bg-slate-950/80`).

2. **Continuous Credibility Architecture**  
   Every viewport transition reinforces trust: verified star ratings (4.9/5 from 1,200+ Discerning Travelers), physical WhatsApp concierge touchpoints, real-time operating hours, and verified traveler reviews with travel dates.

3. **Dual Accent Hierarchy**  
   - **Primary Action (Gold / Amber):** Gradient from `#fbbf24` to `#f59e0b` reserved exclusively for high-intent conversions (`PLAN MY TRIP`, `LAUNCH 3D GLOBE EXPLORER`, step continuation).  
   - **Secondary Accent (Sky Blue):** `#38bdf8` to `#0ea5e9` for exploration anchors, destination tags, 3D Globe locator icons, and secondary metadata.  
   - **Direct WhatsApp Accent:** `#34d199` on `#022c22` for instant mobile messaging.

4. **Smooth Fluid Interactions**  
   Integrated with Lenis smooth scrolling (`LenisSmoothScroll`), subtle hover translations (`-translate-y-1.5`), and micro-interactions on cards and buttons.

---

## 2. Color System (Verified Live Tokens)

Extracted directly from production CSS bundle (`/_next/static/css/725d7ad39009eccd.css`):

| Token | Hex / Class | Usage |
|---|---|---|
| `--bg-primary` | `#030814` | Global page background, hero section background |
| `--bg-footer` | `#020611` | Footer background |
| `--bg-surface-elevated` | `rgba(15, 23, 42, 0.8)` (`bg-slate-900/80`) | Destination cards, package cards, service cards |
| `--bg-surface-modal` | `rgba(2, 6, 23, 0.8)` (`bg-slate-950/80`) | Stats strip, 12-step wizard container, review cards |
| `--accent-gold-primary` | `#fbbf24` (`amber-400`) | Star ratings, primary button gradient start, accent badges |
| `--accent-gold-secondary` | `#f59e0b` (`amber-500`) | Primary button gradient end, ambient hero glow, icon accents |
| `--accent-gold-hover` | `#fde68a` (`amber-200`) / `#f59e0b` | Button hover states, text highlight hover |
| `--accent-sky-light` | `#38bdf8` (`sky-400`) | Destination region badges, 3D globe icons, secondary links |
| `--accent-sky-primary` | `#0ea5e9` (`sky-500`) | Ambient radial glow, progress bar gradient start |
| `--accent-emerald` | `#34d199` (`emerald-400`) | WhatsApp icon, verified client badges, inclusion checkmarks |
| `--bg-emerald-badge` | `rgba(2, 44, 34, 0.4)` (`bg-emerald-950/40`) | WhatsApp button and badge backgrounds |
| `--border-subtle` | `rgba(30, 41, 59, 0.8)` (`border-slate-800/80`) | Card borders, section separators, divider lines |
| `--border-accent-amber` | `rgba(245, 158, 11, 0.3)` (`border-amber-500/30`) | Highlight card borders, active wizard pills |
| `--text-primary` | `#ffffff` | Headings, hero H1, card titles |
| `--text-secondary` | `#cbd5e1` (`text-slate-300`) | Body copy, descriptions, inclusion items |
| `--text-muted` | `#94a3b8` (`text-slate-400`) | Subheads, captions, hub counts, travel dates |

---

## 3. Typography Hierarchy

Fonts loaded via `next/font/google` in `app/layout.tsx`:

| Role | Font Family | Weight | Letter Spacing | Purpose |
|---|---|---|---|---|
| **Display / Headings** | `Outfit` (`var(--font-outfit)`) | 700, 800 | `-0.02em` | H1 Hero, H2 Section titles, H3 Card titles |
| **Body & UI** | `Inter` (`var(--font-inter)`) | 300, 400, 500, 600 | Normal / `-0.01em` | Paragraphs, card descriptions, buttons, wizard form |
| **Monospace / Badges** | `ui-monospace`, `Menlo` | 600, 700 | `0.05em` | Step indicators (`STEP 01 / 12`), estimates (`Request a Quote`), dates (`May 2026`) |

---

## 4. Section-by-Section Layout Specification

### 4.1 Header & Top Trust Bar
```
[Top Bar (Desktop)]:  📞 +1 (800) 555-GLOBE  |  ✉️ info@myglobeguide.com  |  🕒 Mon - Sat: 09:00 - 18:00 (UTC)
[Main Nav]:          [Logo: Earth + My Globe Guide]    [Globe Explorer 3D] [Packages] [Destinations] [Services] [How It Works] [About Us]    [WhatsApp Chat] [Plan My Trip CTA]
```
- **Top Bar:** 32px height, `bg-slate-950/90 border-b border-slate-800/80`, hidden on small mobile, visible tablet/desktop.
- **Main Nav:** Sticky with `backdrop-blur-md bg-[#030814]/80`, transition to solid on scroll.
- **Logo:** Sky-to-amber gradient square with Earth icon + bold uppercase brand title.

### 4.2 Hero Section with Background Video
```
[Background: Full-bleed looped MP4 video, 45% dark scrim overlay, ambient amber & sky radial glows]
[Eyebrow Badge]:  Curated Itineraries  ·  8 Premier Destinations  ·  24/7 Dedicated Support
[H1 Display]:     Travel The World. We Plan The Journey.
[Subhead]:        Bespoke vacation packages, luxury stays, and end-to-end concierge logistics across eight premier global destinations.
[CTA Group]:      [LAUNCH 3D GLOBE EXPLORER (Gold Gradient)]  [PLAN MY TRIP (Outline)]  [DESTINATIONS (Glass)]
[Quick Chips]:    Quick Destination Portfolios: [Turkey] [Georgia] [Philippines] [Egypt] [Maldives] [Thailand] [UAE] [Europe & beyond]
```
- **Video Element:** `object-fit: cover`, `muted`, `autoplay`, `loop`, `playsinline`, with `/images/og-my-globe-guide.jpg` as poster fallback.
- **Stats Strip (Beneath Hero):** Full-width container with 4 cards:
  1. `4.9 / 5 Rating` — From 1,200+ Discerning Travelers
  2. `100% Bespoke Itineraries` — Zero Rigid Tour Templates
  3. `Vetted 5★ Properties` — Aman, Belmond, Four Seasons & Cave Suites
  4. `24/7 Dedicated Concierge` — Real-Time WhatsApp On-Trip Support

### 4.3 Partner Trust Strip (NEW)
```
[Eyebrow Badge]: Global Travel Partners & Affiliations
[Headline]:      25+ Vetted Global Partners & Luxury Hospitality Brands
[Carousel/Grid]: [Emirates] [Qatar Airways] [Turkish Airlines] [Four Seasons] [Aman] [Belmond] [Ritz-Carlton] [Virtuoso]
```
- Logos styled in 50% opacity grayscale, transitioning to full color and scale `1.08` on hover.

### 4.4 "Why Book With Us" Section (NEW)
```
[Eyebrow Badge]: The My Globe Guide Advantage
[Headline]:      Why Discerning Travelers Choose Our Concierge
[6-Card Grid]:
  Card 1: 100% Bespoke Itineraries     Card 2: Vetted 5★ Stays & Resorts    Card 3: 24/7 WhatsApp Concierge
  Card 4: Transparent Cost Breakdown   Card 5: Eight Curated World Hubs     Card 6: Unified Transit Logistics
[CTA Banner]: Full-width glassmorphic banner with "Ready to Start Planning?" + Wizard CTA
```

### 4.5 Curated Destinations (`#destinations` — existing live)
- Handpicked portfolios for Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe & beyond.
- Card structure:
  - Header: Region badge + Season tag + Highlight chip (`Cave Suites & Bosphorus Yacht`, etc.).
  - Body: Destination name, Key Hub count, descriptive summary, Hub tags (e.g. Istanbul, Cappadocia, Antalya).
  - Actions: "Customize Trip" (primary button) + "Focus on 3D Globe" (triggers `/globe` navigation or camera focus).

### 4.6 Multi-Day Signature Packages (`#packages` — existing live)
- Filter tabs: `All`, `5 Days`, `7 Days`, `10 Days`, `14+ Days`.
- Package cards feature: Duration badge, Signature Route tag, Hotel category indicator, Curated Milestones checklist, Concierge Inclusions (meals, flights, private transfers), Starting estimate, and "Customize This Trip" CTA.

### 4.7 Concierge Services (`#services` — existing live)
- Full-suite coordination banner: "Plan a Complete, Seamless Journey".
- Filter tabs: `All`, `Aviation & Transit`, `Stays & Cruises`, `VIP Advisory & Logistics`.
- 11 service pillars: Flights, Hotels & resorts, Airport transfers, Tour packages, Visa assistance, Travel insurance, Cruises, Activities, Meals & dining, Car rental, Budget planning, Travel support.

### 4.8 Traveler Reviews (`#reviews` — enhanced with client photos)
```
[Card: 5 Stars] [Quote Icon]
[Destination Badge: e.g. Turkey (Istanbul & Cappadocia)]
[Client Quote]: "My Globe Guide orchestrated every detail flawlessly..."
[Client Photo Avatar: 56px circle] [Name: Marcus & Olivia Sterling] [Location: London, UK] [Date: Travelled May 2026]
```
- Retain existing verified reviews for London (Turkey), Dubai (Georgia), and Singapore (Maldives).
- Add 2 additional client cards for Egypt and Thailand.
- Trust Banner beneath cards: "100% Customization Promise and 24/7 Dedicated WhatsApp Support".

### 4.9 About Us Page (`/about` — NEW route)
```
[Hero Banner]:       "Crafting Extraordinary Journeys Across The Globe"
[Founder & Vision]:  2-column layout detailing Kunal Mangla's vision for personalized luxury travel
[Pillars Grid]:      Summary of the 11 concierge service pillars
[Destination Map]:   Visual overview of the 8 core international portfolios
[4-Step Process]:    Timeline showing Discovery -> Custom Dossier -> Booking -> In-Trip Concierge
[Company Specs]:     Key-value overview table with official registry, hotline, and operating hours
```

### 4.10 12-Step Progressive Itinerary Wizard (`#enquiry` — existing live)
- Step navigation header: `STEP 01 / 12`, Progress Bar (`8% - 100%`), Reset action.
- Step pills: Quick navigation across completed steps.
- Interactive multi-select grid with luxury icon badges for trip focus, destination, travelers, dates, duration, style, budget, stays, and concierge services.

### 4.11 Footer (`#footer` — existing live with About Us link)
- 5-column grid:
  - Col 1–2: Logo, brand mission blurb, and direct WhatsApp concierge CTA.
  - Col 3: Explore links (Packages, Destinations, Services, How It Works, About Us, Plan My Trip).
  - Col 4: Destination links (Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe).
  - Col 5: Contact & Advisory (`info@myglobeguide.com`, `+1 (800) 555-GLOBE`, Operating Hours).
- Bottom Bar: Copyright © 2026 My Globe Guide, Privacy Policy, Terms of Service.

---

## 5. Component Inventory & Status

| Component | File / Path | Status | Action Required |
|---|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Existing | Add top trust utility bar (`tel`, `mailto`, hours) and "About Us" link |
| `Hero` / `VideoHero` | `components/Hero.tsx` | Existing | Add background `<video>` loop with poster fallback; retain 3 CTAs and destination pills |
| `PartnerTrust` | `components/PartnerTrust.tsx` | **NEW** | Build logo carousel/grid with grayscale-to-color hover and counter badge |
| `WhyBookWithUs` | `components/WhyBookWithUs.tsx` | **NEW** | Build 6-card value grid + full-width CTA banner |
| `DestinationCard` | `components/DestinationCard.tsx` | Existing | Preserve existing structure, enhance image hover zoom |
| `PackageCard` | `components/PackageCard.tsx` | Existing | Preserve intact |
| `ServiceCard` | `components/ServiceCard.tsx` | Existing | Preserve intact |
| `Reviews` / `Testimonials` | `components/Reviews.tsx` | Existing | Add client avatar image prop, add 2 client cards |
| `ItineraryWizard` | `components/ItineraryWizard.tsx` | Existing | Preserve intact (12 steps) |
| `GlobeExplorer` | `app/globe/page.tsx` | Existing | Preserve intact (3D Satellite Globe) |
| `AboutPage` | `app/about/page.tsx` | **NEW** | Build full route with story, pillars, timeline, and company info table |
| `Footer` | `components/Footer.tsx` | Existing | Add About Us link and social links (`@myglobeguide`) |
| `LenisSmoothScroll` | `components/LenisSmoothScroll.tsx`| Existing | Preserve smooth scroll wrapper |

---

## 6. Accessibility & Performance Specs

- **LCP Optimization:** Video hero uses `poster="/images/og-my-globe-guide.jpg"` so initial paint is instantaneous before video stream loads.
- **Motion Accessibility:** `@media (prefers-reduced-motion: reduce)` disables background video and falls back to static backdrop image.
- **Color Contrast:** All text on dark backgrounds (`#030814`) exceeds WCAG AAA standard (contrast ratio > 7:1 for white text, > 4.5:1 for slate-300).
