# Tech Stack Document — My Globe Guide Production Architecture

**Target Site:** https://ttg-sigma.vercel.app/  
**Canonical Domain:** https://myglobeguide.com/  
**Status:** Approved v2.0 (Verified from Live Production Build)  

---

## 1. Verified Live Production Stack

Extracted and verified directly from the live production build of `https://ttg-sigma.vercel.app`:

| Layer | Technology | Version / Implementation Details | Verified Source |
|---|---|---|---|
| **Framework** | Next.js (React) | Next.js 14+ with React 18/19 | RSC payload (`self.__next_f`), chunk hashes |
| **Router Architecture** | App Router (`app/`) | `app/layout.tsx`, `app/page.tsx`, `app/globe/page.tsx` | App chunks (`static/chunks/app/*`) |
| **Styling Engine** | Tailwind CSS | v3.4.19 with CSS custom properties | CSS header: `tailwindcss v3.4.19` |
| **Fonts & Typography** | `next/font/google` | **Outfit** (Display/Headings) + **Inter** (Body/UI) | Head preloads & `@font-face` definitions |
| **Icons System** | `lucide-react` | Tree-shaken SVG icon bundle | `lucide lucide-earth`, `lucide-plane`, `lucide-star` |
| **Smooth Scrolling** | Lenis Scroll | `@studio-freight/lenis` / `lenis/react` | `LenisSmoothScroll` wrapper in `app/layout.tsx` |
| **Theme / Scheme** | Fixed Dark Luxury | `html.dark`, `bg-[#030814]`, `text-slate-100` | Head `meta[theme-color="#030814"]` |
| **Interactive 3D** | 3D Satellite Globe | Client-side 3D globe renderer on `/globe` route | `app/globe/page-*.js` chunk |
| **Form Architecture** | React State / Forms | 12-Step Progressive Wizard with step validation | Component state in `#enquiry` |
| **Hosting & CI/CD** | Vercel Edge Platform | Automatic preview and production deployments | Domain `*.vercel.app` & Vercel edge headers |

---

## 2. Production Component Tree & Architecture

```
app/
├── layout.tsx                → Root layout (LenisSmoothScroll, Navbar, Footer, fonts, SEO schema)
├── page.tsx                  → Homepage (Hero, Stats, Destinations, Packages, Services, Reviews, Wizard)
├── globe/
│   └── page.tsx              → 3D Satellite Globe Explorer (Search input, quick destination buttons)
├── about/
│   └── page.tsx              → NEW: About Us Route (Founder vision, 8 destinations, 11 pillars, timeline)
├── privacy/
│   └── page.tsx              → Privacy Policy
└── terms/
    └── page.tsx              → Terms of Service

components/
├── Navbar.tsx                → Main nav (Globe 3D badge, section anchors, About Us link, WhatsApp & CTA)
├── TopTrustBar.tsx           → NEW: Top utility bar (Phone: +1 800 555-GLOBE, Email, Operating Hours)
├── Hero.tsx                  → Video Hero (HTML5 loop video, poster fallback, 3 CTAs, destination chips)
├── StatsStrip.tsx            → 4-column trust strip (4.9/5 rating, bespoke, 5★ stays, concierge)
├── PartnerTrust.tsx          → NEW: Airline & luxury hotel partner logo strip (grayscale-to-color)
├── WhyBookWithUs.tsx         → NEW: 6-card differentiator grid + wizard CTA banner
├── DestinationCard.tsx       → Handpicked destination card with hub tags & 3D globe link
├── PackageCard.tsx           → Multi-day package card with milestones and inclusions
├── ServiceCard.tsx           → Concierge pillar card with service-specific inquiry CTA
├── Reviews.tsx               → Verified traveler reviews (now upgraded with client avatars)
├── ItineraryWizard.tsx       → 12-Step custom dossier architect (Holiday, flight, stays, visas, etc.)
├── Footer.tsx                → 5-column footer with contact info, social links, and About Us link
└── LenisSmoothScroll.tsx     → Lenis smooth scrolling provider wrapper
```

---

## 3. Dependency Inventory & Upgrade Additions

### 3.1 Already Active in Production (No installation needed)
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-react": "^0.x",
    "@studio-freight/lenis": "^1.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.19",
    "postcss": "^8.x",
    "autoprefixer": "^10.x"
  }
}
```

### 3.2 Optional Upgrade Dependencies
For animating the partner logo carousel and smooth micro-transitions:
```bash
npm install embla-carousel-react   # Lightweight, performant carousel for partner logos & testimonials
npm install framer-motion          # Optional: For seamless page transitions and subtle reveal animations
```

---

## 4. Media & Asset Specifications

| Asset | Format | Resolution / Spec | Location / Path | Purpose |
|---|---|---|---|---|
| **Hero Background Video** | MP4 (H.264) | 1080p desktop, 720p mobile; < 3MB | `public/videos/hero-loop.mp4` | Ambient cinematic hero background |
| **Hero Poster Fallback** | WebP / JPEG | 1920x1080; < 150KB | `public/images/og-my-globe-guide.jpg` | Instant LCP paint & mobile fallback |
| **Partner Logos** | SVG / WebP | Height 32–40px, monochrome white/gray | `public/images/partners/*.svg` | Trust strip (Emirates, Four Seasons, Aman, etc.) |
| **Client Testimonial Avatars** | WebP / JPEG | 120x120px circular crop | `public/images/testimonials/*.webp` | Social proof on review cards |
| **Favicon & Icons** | SVG | Scalable vector | `public/icon.svg` | Verified favicon across browser tabs |

---

## 5. Performance & Quality Standards

1. **Largest Contentful Paint (LCP) < 2.5s**
   - Background video uses `poster="/images/og-my-globe-guide.jpg"` with `fetchpriority="high"` on the poster image.
   - The `<video>` tag includes `muted`, `autoplay`, `loop`, `playsinline`, and `preload="metadata"` so it never blocks page hydration or first paint.

2. **Accessibility & Reduced Motion**
   - Include media query support:
     ```css
     @media (prefers-reduced-motion: reduce) {
       video {
         display: none;
       }
       .hero-poster-fallback {
         display: block;
       }
     }
     ```

3. **SEO & Structured Data**
   - Keep the existing `application/ld+json` Schema.org `TravelAgency` and `ItemList` metadata active on `app/layout.tsx`.
   - Update canonical links: `https://myglobeguide.com`.
