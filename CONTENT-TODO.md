# Pre-Launch Content Checklist (`CONTENT-TODO.md`)

This checklist tracks all placeholder media files, copy, contact touchpoints, and external links introduced during development that must be replaced with live production assets before site launch.

---

## 1. Hero Background Video & Poster Fallback

- [ ] **Hero Loop MP4 Video Asset**
  - **Current Placeholder Path:** `/videos/hero-loop.mp4`
  - **Required Action:** Add the optimized MP4 video file to `public/videos/hero-loop.mp4` (recommended: H.264, 1080p or 720p, muted, 15–30s loop, < 10MB).
  - **Reference File:** [`components/Hero.tsx`](file:///d:/Travel%20Website/components/Hero.tsx) (line 41)

- [ ] **Hero Poster Fallback Image**
  - **Current Placeholder Path:** `/images/hero-poster.jpg`
  - **Required Action:** Add a high-resolution still frame to `public/images/hero-poster.jpg` for browsers before video starts, mobile low-power mode, and `prefers-reduced-motion` users.
  - **Reference Files:**
    - [`components/Hero.tsx`](file:///d:/Travel%20Website/components/Hero.tsx) (lines 38, 47)
    - [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx) (line 264)

---

## 2. Header & Global Contact Touchpoints

- [ ] **Concierge Phone Hotline**
  - **Current Placeholder:** `+1 (800) 555-4562` (Click-to-call: `tel:+18005554562`)
  - **Required Action:** Replace with official toll-free or international concierge hotline.
  - **Reference Files:**
    - [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx) (line 52)
    - [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) (line 148)
    - [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx) (line 161)

- [x] **Concierge Email Address**
  - **Configured Live Email:** `infomyglobeguide@gmail.com` (Mailto: `mailto:infomyglobeguide@gmail.com`)
  - **Status:** Completed. Configured in `lib/constants.ts` and automated through `/api/enquiry` dossier router.
  - **Reference Files:**
    - [`lib/constants.ts`](file:///d:/Travel%20Website/lib/constants.ts)
    - [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx)
    - [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx)
    - [`components/ItineraryWizard.tsx`](file:///d:/Travel%20Website/components/ItineraryWizard.tsx)
    - [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx)
    - [`app/api/enquiry/route.ts`](file:///d:/Travel%20Website/app/api/enquiry/route.ts)

- [x] **Official WhatsApp Concierge Hotline**
  - **Configured Live Number:** `+91 7827169606` (`https://wa.me/917827169606?text=Hello%20My%20Globe%20Guide...`)
  - **Status:** Completed. Integrated across Navbar, WhyBookWithUs, Footer, About, and Floating WhatsApp widget via `lib/constants.ts`.
  - **Reference Files:**
    - [`lib/constants.ts`](file:///d:/Travel%20Website/lib/constants.ts)
    - [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx)
    - [`components/WhyBookWithUs.tsx`](file:///d:/Travel%20Website/components/WhyBookWithUs.tsx)
    - [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx)
    - [`components/FloatingWhatsApp.tsx`](file:///d:/Travel%20Website/components/FloatingWhatsApp.tsx)

---

## 3. Partner Logos & Affiliation Badge

- [ ] **Partner Logo PNG Images (8 Slots)**
  - **Current Placeholder Paths:**
    1. `/images/partners/partner-1.png` (Emirates)
    2. `/images/partners/partner-2.png` (Qatar Airways)
    3. `/images/partners/partner-3.png` (Turkish Airlines)
    4. `/images/partners/partner-4.png` (Four Seasons)
    5. `/images/partners/partner-5.png` (Aman Resorts)
    6. `/images/partners/partner-6.png` (Belmond)
    7. `/images/partners/partner-7.png` (The Ritz-Carlton)
    8. `/images/partners/partner-8.png` (Virtuoso)
  - **Required Action:** Add transparent PNG or SVG partner logos to `public/images/partners/`.
  - **Reference File:** [`components/PartnerLogoGrid.tsx`](file:///d:/Travel%20Website/components/PartnerLogoGrid.tsx) (lines 20–27)

- [ ] **Partner Counter Badge**
  - **Current Placeholder:** `"12+ Trusted Partners"`
  - **Required Action:** Update string or pass prop `<PartnerLogoGrid counterBadge="25+ Trusted Partners" />` to reflect actual vetted partner count.
  - **Reference File:** [`components/PartnerLogoGrid.tsx`](file:///d:/Travel%20Website/components/PartnerLogoGrid.tsx) (line 78)

---

## 4. Testimonial Client Photography

- [ ] **Client Portrait Photos (3 Reviews)**
  - **Current Placeholder Paths:**
    1. `/images/testimonials/client-1.jpg` (Marcus & Olivia Sterling · London)
    2. `/images/testimonials/client-2.jpg` (Dr. Tariq Al-Mansoor · Dubai)
    3. `/images/testimonials/client-3.jpg` (Elena & David Chen · Singapore)
  - **Required Action:** Add 120x120px+ square or circular portrait photos to `public/images/testimonials/`.
  - **Reference Files:**
    - [`components/ReviewsSection.tsx`](file:///d:/Travel%20Website/components/ReviewsSection.tsx) (lines 22, 31, 40)
    - [`components/TestimonialCard.tsx`](file:///d:/Travel%20Website/components/TestimonialCard.tsx) (line 63)

---

## 5. About Page Story & Corporate Specifications

- [ ] **Founder Story & Vision Copy**
  - **Current Placeholder Copy:**
    > *"My Globe Guide was founded to bring transparency, personalization, and genuine care back into international travel planning. We believe every trip — whether a honeymoon, a family reunion, or a solo adventure — deserves to be treated as unique, not templated."*
  - **Required Action:** Refine or expand with the founder's personalized message, agency background, or accreditation details.
  - **Reference File:** [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx) (lines 237–243)

- [ ] **Company Specifications & Operating Hours**
  - **Current Placeholders:**
    - Specialization: *Bespoke Travel, Cruises & Global Holidays*
    - Operating Hours: *Monday – Saturday: 09:00 – 18:00 UTC (Concierge 24/7)*
  - **Required Action:** Verify exact legal entity details and operational hours.
  - **Reference File:** [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx) (lines 155–162)

---

## 6. Footer Social Media URLs

- [ ] **Instagram Handle URL**
  - **Current Placeholder:** `https://instagram.com/myglobeguide`
  - **Required Action:** Replace with the verified live Instagram business profile URL.
  - **Reference File:** [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) (line 88)

- [ ] **Facebook Page URL**
  - **Current Placeholder:** `https://facebook.com/myglobeguide`
  - **Required Action:** Replace with the verified live Facebook company page URL.
  - **Reference File:** [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) (line 99)

---

## Summary Matrix

| Category | Placeholder Value | Asset / Field Type | Target File Path |
|---|---|---|---|
| **Hero Media** | `/videos/hero-loop.mp4` | MP4 Video File | [`components/Hero.tsx`](file:///d:/Travel%20Website/components/Hero.tsx) |
| **Hero Media** | `/images/hero-poster.jpg` | JPG Image Asset | [`components/Hero.tsx`](file:///d:/Travel%20Website/components/Hero.tsx) |
| **Contact** | `+1 (800) 555-4562` | Phone String / `tel:` | [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx), [`Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) |
| **Contact** | `infomyglobeguide@gmail.com` | Email String / `mailto:` | [`lib/constants.ts`](file:///d:/Travel%20Website/lib/constants.ts), [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx), [`Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx), [`ItineraryWizard.tsx`](file:///d:/Travel%20Website/components/ItineraryWizard.tsx) |
| **Contact** | `+91 7827169606` | WhatsApp Link (`wa.me/917827169606`) | [`lib/constants.ts`](file:///d:/Travel%20Website/lib/constants.ts), [`components/Navbar.tsx`](file:///d:/Travel%20Website/components/Navbar.tsx), [`Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx), [`WhyBookWithUs.tsx`](file:///d:/Travel%20Website/components/WhyBookWithUs.tsx) |
| **Partners** | `/images/partners/partner-[1..8].png` | PNG Logo Files | [`components/PartnerLogoGrid.tsx`](file:///d:/Travel%20Website/components/PartnerLogoGrid.tsx) |
| **Partners** | `"12+ Trusted Partners"` | Counter String | [`components/PartnerLogoGrid.tsx`](file:///d:/Travel%20Website/components/PartnerLogoGrid.tsx) |
| **Social Proof** | `/images/testimonials/client-[1..3].jpg` | JPG Portrait Photos | [`components/ReviewsSection.tsx`](file:///d:/Travel%20Website/components/ReviewsSection.tsx) |
| **About Us** | Story & Vision Paragraph | Copy Text | [`app/about/page.tsx`](file:///d:/Travel%20Website/app/about/page.tsx) |
| **Social Media** | `https://instagram.com/myglobeguide` | External URL | [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) |
| **Social Media** | `https://facebook.com/myglobeguide` | External URL | [`components/Footer.tsx`](file:///d:/Travel%20Website/components/Footer.tsx) |
