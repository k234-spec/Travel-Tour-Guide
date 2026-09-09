'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Sparkles,
  Compass,
  Plane,
  Building2,
  FileCheck,
  Ship,
  Globe,
  Shield,
  HeartHandshake,
  Award,
  Search,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { BRAND_LOGO } from '@/lib/constants';

/* ── Service Pillars Data (Section 3) ────────────────────────────────── */
const servicePillars = [
  {
    icon: Compass,
    title: 'Custom Itineraries',
    description:
      'Tailor-made day-by-day itineraries aligned with your travel cadence, bespoke desires, and personal passions.',
  },
  {
    icon: Plane,
    title: 'Flight Coordination',
    description:
      'Seamless multi-carrier ticketing, premium cabin routing, and schedule optimization across global airlines.',
  },
  {
    icon: Building2,
    title: 'Hotel & Resort Curation',
    description:
      'Handpicked five-star sanctuaries, luxury cave suites, and private atoll villas with exclusive amenities.',
  },
  {
    icon: FileCheck,
    title: 'Visa Guidance',
    description:
      'Precise documentation support, entry requirement verification, and embassy protocol assistance.',
  },
  {
    icon: Ship,
    title: 'Cruise Planning',
    description:
      'Curated luxury oceanic, river, and private yacht charters through celebrated archipelagos and historic waterways.',
  },
  {
    icon: Globe,
    title: 'International Multi-City Journeys',
    description:
      'Flawless cross-border transit logistics connecting multiple destinations into one harmonious grand tour.',
  },
];

/* ── Numbered Value Props Data (Section 4) ───────────────────────────── */
const valueProps = [
  {
    number: '01',
    title: 'Personalized Support',
    description:
      'Every itinerary detail is individually tailored to your personal preferences and travel aspirations.',
  },
  {
    number: '02',
    title: 'Global Expertise',
    description:
      'Firsthand regional insights across eight curated international destination portfolios.',
  },
  {
    number: '03',
    title: 'Trusted Partnerships',
    description:
      'Preferred direct relationships with premier airlines, luxury hoteliers, and vetted local operators.',
  },
  {
    number: '04',
    title: 'Client-First Approach',
    description:
      'Uncompromising transparency with impartial recommendations prioritizing your peace of mind.',
  },
  {
    number: '05',
    title: 'Professional Guidance',
    description:
      'Seasoned destination architects managing complex visas, seasonal timing, and seamless connections.',
  },
  {
    number: '06',
    title: 'One Dedicated Advisor',
    description:
      'A single point of contact coordinating every touchpoint from initial concept through your safe return.',
  },
];

/* ── Core Values Data (Section 5) ────────────────────────────────────── */
const coreValues = [
  {
    icon: Shield,
    name: 'Trust',
    description:
      'Complete honesty, upfront transparent pricing, and unwavering reliability across every booking.',
  },
  {
    icon: HeartHandshake,
    name: 'Care',
    description:
      'Genuine, attentive hospitality that treats your journey as if it were our own family vacation.',
  },
  {
    icon: Award,
    name: 'Excellence',
    description:
      'Uncompromising standards in vetted 5-star properties, private transit, and personalized service.',
  },
  {
    icon: Search,
    name: 'Discovery',
    description:
      'Unlocking authentic cultural encounters and breathtaking wonders beyond conventional tourist paths.',
  },
];

/* ── Process Steps Data (Section 6) ──────────────────────────────────── */
const processSteps = [
  {
    step: '01',
    name: 'Understand',
    description:
      'We discuss your travel style, personal wish list, timing, and budget through a private consultation.',
  },
  {
    step: '02',
    name: 'Plan',
    description:
      'Our destination architects craft a comprehensive day-by-day custom itinerary dossier for your review.',
  },
  {
    step: '03',
    name: 'Arrange',
    description:
      'We secure preferred suite reservations, private chauffeured transfers, flights, and vetted local guides.',
  },
  {
    step: '04',
    name: 'Support',
    description:
      'Stay supported 24/7 via WhatsApp concierge for real-time adjustments throughout your entire trip.',
  },
];

/* ── Company Info Data (Section 7) ───────────────────────────────────── */
const companyInfo = [
  { key: 'Company Name', value: 'My Globe Guide' },
  { key: 'Tagline', value: 'Your Journey, Our Passion' },
  { key: 'Specialization', value: 'Bespoke Travel, Cruises & Global Holidays' },
  { key: 'Focus', value: 'International Tourism & Personalized Traveler Support' },
  { key: 'Service Ethos', value: 'Trust, Care, Excellence & Transparency' },
  { key: 'Operating Hours', value: 'Monday – Saturday: 09:00 – 18:00 UTC (Concierge 24/7)' },
  { key: 'Advisory Contact', value: '+1 (800) 555-4562 · infomyglobeguide@gmail.com' },
  { key: 'WhatsApp Concierge', value: '+91 7827169606 (24/7 Support)' },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#030814] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation Header */}
      <Navbar />

      <main id="main-content" className="relative">
        {/* ── 1. AboutHero Section ───────────────────────────────────── */}
        <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-[#030814] border-b border-slate-800/80">
          {/* Background image & gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
            style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#030814]/70 via-[#030814]/90 to-[#030814] pointer-events-none"
            aria-hidden="true"
          />

          {/* Ambient Lighting Glows */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-oceanBlue/20 rounded-full blur-[160px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-accentGold/10 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accentGold" />
              <span>Private Travel Advisory</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-white tracking-tight leading-[1.15] drop-shadow-lg">
              About My Globe Guide
            </h1>

            {/* One-Line Tagline */}
            <p className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
              Connecting People With Places, Experiences &amp; Possibilities.
            </p>
          </div>
        </section>

        {/* ── 2. Story & Vision (Two-Column Layout) ─────────────────── */}
        <section className="relative py-20 sm:py-24 bg-slate-950/60 border-b border-slate-800/80">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-amber-400">
                  <span>Our Story &amp; Vision</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight leading-snug">
                  Redefining International Travel With Uncompromising Personal Touch
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  <p>
                    My Globe Guide was founded to bring transparency, personalization, and genuine care back into international travel planning. We believe every trip — whether a honeymoon, a family reunion, or a solo adventure — deserves to be treated as unique, not templated.
                  </p>
                  <p className="text-sm sm:text-base text-slate-400">
                    By bridging high-touch concierge advisory with direct global partnerships across eight iconic destination portfolios, we eliminate the friction of modern overseas transit so travelers can focus entirely on wonder, culture, and memory-making.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero Rigid Tour Templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24/7 Dedicated Concierge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Hospitality Access</span>
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80 aspect-[4/3] group">
                  <Image
                    src="/images/hero-poster.jpg"
                    alt="My Globe Guide Travel Planning"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent" />

                  {/* Floating Trust Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white block">100% Bespoke Itineraries</span>
                      <span className="text-[11px] text-slate-400">Tailored to your individual rhythm</span>
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Service Pillars (6-Card Grid) ───────────────────────── */}
        <section className="relative py-20 sm:py-24 bg-[#030814] border-b border-slate-800/80">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-accentGold" />
                <span>End-to-End Concierge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                Our Core Service Pillars
              </h2>
              <p className="mt-3 text-base text-slate-300 font-light max-w-2xl">
                Comprehensive international travel architecture designed to manage every logistical dimension with precision.
              </p>
            </div>

            {/* 6-Card Grid: 3 cols desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {servicePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-slate-950/70 border border-slate-800/80 p-6 sm:p-7 hover:border-accentGold/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl shadow-slate-950/50 flex flex-col justify-between"
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-accentGold/60 group-hover:bg-accentGold/10 transition-colors duration-300 shadow-inner">
                        <IconComponent className="w-6 h-6 text-accentGold group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. Numbered Value Props (01-06, 2-Column List) ─────────── */}
        <section className="relative py-20 sm:py-24 bg-slate-950/70 border-b border-slate-800/80">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
                <span>The Distinction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                Why Discerning Travelers Choose Us
              </h2>
              <p className="mt-3 text-base text-slate-300 font-light max-w-2xl">
                Six foundational commitments that define every journey we curate.
              </p>
            </div>

            {/* 2-Column Numbered List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {valueProps.map((vp) => (
                <div
                  key={vp.number}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-serif text-amber-400 shrink-0 font-mono">
                    {vp.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {vp.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-300 font-light leading-relaxed">
                      {vp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Core Values (4-Card Grid) ──────────────────────────── */}
        <section className="relative py-20 sm:py-24 bg-[#030814] border-b border-slate-800/80">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold mb-3">
                <span>Guiding Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-3 text-base text-slate-300 font-light max-w-2xl">
                The cultural pillars that guide every client interaction and itinerary recommendation.
              </p>
            </div>

            {/* 4-Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.name}
                    className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-accentGold/40 hover:bg-slate-900/60 transition-all text-center flex flex-col items-center shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-accentGold mb-4 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{val.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. Process Timeline (4 Horizontal Steps Desktop / Stacked Mobile) ─ */}
        <section className="relative py-20 sm:py-24 bg-slate-950/70 border-b border-slate-800/80">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
                <span>The Concierge Workflow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                How We Plan Your Journey
              </h2>
              <p className="mt-3 text-base text-slate-300 font-light max-w-2xl">
                A seamless four-stage process transforming your initial inspiration into an effortless reality.
              </p>
            </div>

            {/* 4 Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {processSteps.map((st, idx) => (
                <div
                  key={st.step}
                  className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-accentGold bg-accentGold/10 px-2.5 py-1 rounded border border-accentGold/20">
                        STEP {st.step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {st.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Company Info Table (2-Column Key-Value Rows) ───────── */}
        <section className="relative py-20 sm:py-24 bg-[#030814]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-sky-500/30 via-amber-400/20 to-emerald-500/30 p-[2px] shadow-2xl mb-5">
                  <div className="w-full h-full bg-[#020611] rounded-[14px] overflow-hidden flex items-center justify-center p-1.5">
                    <Image
                      src={BRAND_LOGO}
                      alt="My Globe Guide Emblem - Your Journey, Our Passion"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold mb-3">
                  <span>Corporate Overview</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                  Company Specifications
                </h2>
              </div>

              {/* 2-Column Key-Value Table Card */}
              <div className="rounded-2xl border border-slate-800/90 bg-slate-950/70 overflow-hidden shadow-2xl">
                <div className="divide-y divide-slate-800/70">
                  {companyInfo.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:p-5 text-sm gap-1 sm:gap-4 hover:bg-slate-900/40 transition-colors"
                    >
                      <span className="font-semibold text-slate-400 sm:col-span-1">
                        {row.key}
                      </span>
                      <span className="text-slate-200 sm:col-span-2 font-medium">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to start planning */}
              <div className="mt-12 text-center">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm font-bold shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <span>Plan Your Custom Journey</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
