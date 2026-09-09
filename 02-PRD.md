# PRD — My Globe Guide (Travel Tour Guide) Visual & Feature Upgrade

**Reference brand:** Bluewings Global (https://bluewingsglobal.com/)  
**Target site:** My Globe Guide (https://ttg-sigma.vercel.app/)  
**Canonical domain:** https://myglobeguide.com/  
**Owner:** Kunal Mangla  
**Doc type:** Product Requirements Document (PRD)  
**Status:** Approved v2.0 (Synchronized with Live Production Architecture)  

---

## 1. Objective

Upgrade the existing **My Globe Guide** Next.js travel platform so it achieves the **trust, polish, and luxury positioning** of Bluewings Global, while **preserving and enhancing** all existing differentiators already live on `https://ttg-sigma.vercel.app`:
- **Interactive 3D Satellite Globe Explorer** (`/globe` route)
- **12-Step Progressive Itinerary Wizard** (`#enquiry` dossier builder)
- **8 Curated International Destination Portfolios** (`#destinations`)
- **Filterable Multi-Day Signature Packages** (5, 7, 10, 14+ days at `#packages`)
- **11 Concierge Advisory Pillars** (`#services`)
- **Verified Discerning Traveler Reviews** (`#reviews`)

This is **not** a rebuild. It is a targeted upgrade of specific sections and addition of high-converting credibility layers.

---

## 2. Production Baseline & Problem Statement

### 2.1 Current Live Implementation (`https://ttg-sigma.vercel.app`)
The live site already features a sophisticated, dark luxury visual theme (`#030814`) with ambient radial mesh glow, smooth scrolling (Lenis), and rich typography (`Outfit` Display + `Inter` Sans). Key live assets and metrics include:
- **Verified Rating:** 4.9 / 5 Rating from 1,200+ Discerning Travelers.
- **Support Desk:** Real-time WhatsApp Concierge (`+1 (800) 555-4562`) and Advisory Phone (`+1 (800) 555-GLOBE`).
- **Support Hours:** Monday – Saturday: 09:00 – 18:00 (UTC).
- **Advisory Model:** Global Travel Advisory Hub (remote luxury concierge desk).
- **8 Destination Portfolios:** Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe & beyond.
- **3 Live Verified Reviews:**
  1. *Marcus & Olivia Sterling* (London, UK) — Turkey (Istanbul & Cappadocia), May 2026.
  2. *Dr. Tariq Al-Mansoor* (Dubai, UAE) — Georgia (Tbilisi & Kazbegi), June 2026.
  3. *Elena & David Chen* (Singapore) — Maldives (Baa Atoll), July 2026.

### 2.2 The Credibility Opportunity
While functionally superior to traditional travel agency websites, the current hero section is static, and the homepage lacks trust-building partner logos, an About Us route, a "Why Book With Us" value-reinforcement grid, and client photography on testimonials. Adding these elements directly closes the trust gap against heritage luxury agencies like Bluewings Global.

---

## 3. Goals (In Priority Order)

| # | Goal | Why |
|---|---|---|
| 1 | Cinematic background video hero with punchy headline | Creates an immediate luxury first impression without displacing existing 3D Globe and Plan My Trip CTAs |
| 2 | Top trust & contact utility bar | Displays real contact numbers (`+1 800 555-GLOBE`), email, and hours above main nav |
| 3 | Partner trust-logo strip & affiliations | Establishes immediate prestige through airline, luxury hospitality, and DMC network logos |
| 4 | "Why Book With Us" 6-card feature grid + CTA banner | Articulates unique value propositions mid-scroll before visitors reach packages |
| 5 | Dedicated "About Us" route (`/about`) | Details company story, 8 destination networks, 11 service pillars, and concierge team |
| 6 | Client photos on testimonials & review expansion | Upgrades existing 3 verified testimonials with photos and adds 2–3 more routes |
| 7 | Enhanced navigation & footer links | Adds About Us route and links social channels (`@myglobeguide` on Instagram, Facebook, X, LinkedIn) |

---

## 4. Non-Goals

- Do **not** remove or simplify the **3D Satellite Globe Explorer** (`/globe`).
- Do **not** remove, simplify, or rewrite the **12-Step Itinerary Wizard** (`#enquiry`).
- Do **not** remove existing package filters (5, 7, 10, 14+ Days) or destination portfolio cards.
- Do **not** switch tech stack (stay on Next.js 14+ App Router, Tailwind CSS, Lenis, Vercel).
- Do **not** abandon the dark luxury aesthetic (`#030814` background with amber/gold `#fbbf24` accents).
- Do **not** copy Bluewings' actual trademarked logos, copy, or imagery verbatim.

---

## 5. Target Personas

| Persona | Core Need | Live Feature That Serves Them |
|---|---|---|
| **High-Net-Worth Traveler** seeking bespoke curation | Proof of credibility, vetted 5★ properties, transparent advisory | Top trust bar, video hero, partner logos, "Why Book With Us" grid |
| **Interactive Trip Planner** | Visual destination exploration and customized quoting | 3D Satellite Globe (`/globe`) + 12-Step Dossier Wizard (`#enquiry`) |
| **Referred / Direct Client** | Rapid contact, WhatsApp advisory, itinerary adjustments | Direct WhatsApp integration (`wa.me`), click-to-call header, email |

---

## 6. Feature Requirements

### 6.1 Header Upgrade
- **FR-1:** Add a slim top utility bar above the primary navbar (desktop only, collapsed on mobile):
  - Phone: `+1 (800) 555-GLOBE` (`tel:+18005554562`)
  - Email: `info@myglobeguide.com` (`mailto:info@myglobeguide.com`)
  - Operating Hours: `Mon - Sat: 09:00 - 18:00 (UTC)`
- **FR-2:** Update main navigation links:
  - Add `About Us` (`/about`)
  - Preserve `Globe Explorer [3D]` (`/globe`), `Packages` (`/#packages`), `Destinations` (`/#destinations`), `Services` (`/#services`), `How It Works` (`/#how-it-works`)
- **FR-3:** Preserve current action CTAs:
  - WhatsApp button with pre-filled concierge prompt
  - "Plan My Trip" gold gradient CTA button

### 6.2 Hero Section Upgrade
- **FR-4:** Implement full-bleed background video hero (10–20s looped MP4, muted, autoplay, playsinline, with `/images/og-my-globe-guide.jpg` as high-resolution poster fallback).
- **FR-5:** Keep subtle ambient mesh lighting (`amber-500/10`, `sky-500/10`) layered over video with a 45–55% dark scrim overlay for WCAG AAA text contrast.
- **FR-6:** Refine headline to punchy display typography:
  - H1: *"Travel The World. We Plan The Journey."* (or *"Discover The World Differently."*)
  - Subhead: *"Bespoke vacation packages, luxury stays, and end-to-end concierge logistics across eight premier global destinations."*
- **FR-7:** Retain all 3 live hero CTAs:
  1. `LAUNCH 3D GLOBE EXPLORER` (gold gradient button with Earth icon)
  2. `PLAN MY TRIP` (secondary bordered button linking to `#enquiry`)
  3. `DESTINATIONS` (tertiary glass button linking to `#destinations`)
- **FR-8:** Retain the **Quick Destination Portfolios** pill row directly beneath CTAs (Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe & beyond).
- **FR-9:** Position the existing 4-column trust strip (`4.9 / 5 Rating`, `100% Bespoke Itineraries`, `Vetted 5★ Properties`, `24/7 Dedicated Concierge`) directly beneath the hero in an elevated glassmorphic container (`bg-slate-950/80 backdrop-blur-xl`).

### 6.3 Trust / Partner Logos Section (NEW)
- **FR-10:** Add "Our Global Travel Partners & Hospitality Affiliations" section between stats strip and Curated Destinations:
  - Counter badge: *"25+ Trusted Global Partners & Hospitality Brands"*
  - Subtitle: *"Partnered with world-class airlines, luxury hotel collections, and private aviation providers."*
  - Grayscale-to-color logo carousel/grid featuring premier travel brands (e.g., Emirates, Qatar Airways, Turkish Airlines, Four Seasons, Aman, Belmond, Ritz-Carlton, Virtuoso network).

### 6.4 "Why Book With Us" Section (NEW)
- **FR-11:** Add a 6-card grid (`3 cols desktop / 2 cols tablet / 1 col mobile`) grounded in the live site's real strengths:
  1. **100% Bespoke Itineraries** — Zero rigid tour templates; calibrated to individual pace and style.
  2. **Vetted 5★ Properties** — Handpicked luxury stays, overwater villas, and historic cave suites.
  3. **24/7 Dedicated Concierge** — Direct WhatsApp and phone assistance before, during, and after travel.
  4. **Transparent Cost Architecture** — Complete breakdown of flights, stays, transfers, and activities.
  5. **Eight Curated World Hubs** — Deep on-the-ground DMC networks across Eurasia, Africa, and Pacific.
  6. **Unified Transit Logistics** — Coordinated flights, domestic transfers, speedboats, and private 4x4s.
- **FR-12:** Full-width CTA Banner at the end of the section:
  - Headline: *"Ready to Experience Bespoke Luxury Travel?"*
  - CTAs: `Launch 3D Globe` and `Open Itinerary Wizard`.

### 6.5 About Us Page (NEW route `/about`)
- **FR-13:** Create route `/about` containing:
  - **Hero Banner:** *"Crafting Extraordinary Journeys Across The Globe"*
  - **Our Story & Vision:** The founding vision of My Globe Guide by Kunal Mangla — moving away from generic group tours to personalized, high-touch luxury travel curation.
  - **Global Hubs & Footprint:** Highlighting the 8 destination networks (Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe).
  - **The 11 Concierge Pillars:** Overview of end-to-end capabilities (Aviation, Stays, Chauffeurs, Packages, Visas, Insurance, Cruises, Excursions, Culinary, Rentals, Advisory).
  - **4-Step Concierge Process:** Discovery Consultation → Custom Dossier Architecture → Seamless Coordination → 24/7 In-Trip Concierge.
  - **Company Overview Table:**
    - Organization: My Globe Guide (Travel & Tours)
    - Operating Model: Global Travel Advisory Hub
    - Advisory Hotline: `+1 (800) 555-GLOBE`
    - Concierge WhatsApp: `+1 (800) 555-4562`
    - Advisory Hours: `Monday - Saturday: 09:00 - 18:00 (UTC)`
    - Registered Domain: `myglobeguide.com` / `ttg-sigma.vercel.app`
- **FR-14:** Add `/about` route link to desktop navbar and mobile hamburger menu.

### 6.6 Testimonials & Social Proof Upgrade
- **FR-15:** Upgrade existing 3 testimonial cards with circular client photos/avatars:
  - Marcus & Olivia Sterling (London) — Turkey trip
  - Dr. Tariq Al-Mansoor (Dubai) — Georgia trip
  - Elena & David Chen (Singapore) — Maldives trip
- **FR-16:** Retain live destination tags (`Turkey (Istanbul & Cappadocia)`), travel dates (`Travelled May 2026`), and star rating elements.
- **FR-17:** Add 2–3 additional verified client stories for Egypt (Nile Cruise & Pyramids) and Thailand (Phuket & Chiang Mai).

### 6.7 Footer Upgrade
- **FR-18:** Keep confirmed Global Travel Advisory Hub contact information:
  - Email: `info@myglobeguide.com`
  - Phone: `+1 (800) 555-GLOBE`
  - Hours: `Monday - Saturday: 09:00 - 18:00 (UTC)`
  - WhatsApp Concierge CTA button
- **FR-19:** Add active social media icons linking to `@myglobeguide` on Instagram, Facebook, X/Twitter, and LinkedIn.
- **FR-20:** Add `About Us` to the Explore footer link list alongside Packages, Destinations, Services, How It Works, and Plan My Trip.

---

## 7. Content & Assets Checklist

- [x] Confirmed phone number: `+1 (800) 555-GLOBE` (verified from live site)
- [x] Confirmed WhatsApp number: `+1 (800) 555-4562` (verified from live site)
- [x] Confirmed email: `info@myglobeguide.com` (verified from live site)
- [x] Confirmed operating hours: `Mon - Sat: 09:00 - 18:00 (UTC)` (verified from live site)
- [x] Confirmed operating model: `Global Travel Advisory Hub` (verified from live site)
- [x] Confirmed destination list: 8 destinations (Turkey, Georgia, Philippines, Egypt, Maldives, Thailand, UAE, Europe)
- [x] Confirmed service pillars: 11 concierge services
- [ ] Background hero video (10–20s compressed MP4, <3MB, travel stock loop)
- [ ] Partner logos set (Emirates, Qatar Airways, Turkish Airlines, Four Seasons, Aman, Belmond, etc.)
- [ ] Client portrait images for testimonials (avatars/photos)

---

## 8. Success Metrics

| Metric | Target | Measurement |
|---|---|---|
| **LCP (Largest Contentful Paint)** | < 2.5s | Core Web Vitals on mobile & desktop (poster fallback + compressed video) |
| **Wizard Completion Rate** | Maintain ≥ 15% | `#enquiry` step 12 submissions |
| **Time on Site** | +25% increase | Video engagement + new About page dwell time |
| **WhatsApp Inquiries** | +30% increase | Direct header & floating concierge clicks |

---

## 9. Constraints

1. **Maintain Dark Luxury Theme:** Preserve `#030814` background, `Outfit` display font, `Inter` body font, and amber/gold accent palette.
2. **Preserve Interactive Tools:** Never break or alter routes for the 3D Satellite Globe Explorer (`/globe`) or the 12-step Itinerary Wizard (`#enquiry`).
3. **Core Web Vitals Compliance:** Video hero must have a static poster image (`/images/og-my-globe-guide.jpg`) and `prefers-reduced-motion` support.
