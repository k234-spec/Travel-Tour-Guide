'use client';

import React from 'react';
import Link from 'next/link';
import {
  Earth,
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function Hero() {
  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#enquiry';
    }
  };

  return (
    <>
      {/* ── 1. Full-Bleed Video Background Hero (Section 4.2) ─────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#030814]">
        {/* Native HTML5 Video Loop */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none motion-reduce:hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>

        {/* Prefers-Reduced-Motion Static Poster Fallback */}
        <div
          className="hidden motion-reduce:block absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
          aria-hidden="true"
        />

        {/* 45% Dark Overlay for Text Readability (40-50% Opacity Black) */}
        <div
          className="absolute inset-0 bg-black/45 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Ambient Radial Lighting Mesh */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[170px]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold tracking-wider uppercase text-amber-400 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Welcome to My Globe Guide</span>
            </div>

            {/* H1 Headline in Luxury Serif Font */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.12] drop-shadow-lg">
              Travel The World Differently.
            </h1>

            {/* Single-Sentence Luxury Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              From historic valleys and ancient temples to private turquoise atolls, we craft bespoke luxury vacation packages and seamless travel logistics.
            </p>

            {/* Existing Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/globe"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm font-bold shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-[0.98] w-full sm:w-auto cursor-pointer"
              >
                <Earth className="w-4 h-4 text-slate-950 stroke-[2.4]" />
                <span>LAUNCH 3D GLOBE EXPLORER</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <button
                onClick={scrollToEnquiry}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-400/80 backdrop-blur-md text-sm font-bold transition-all active:scale-[0.98] w-full sm:w-auto shadow-lg hover:shadow-amber-500/10 cursor-pointer"
              >
                <span>PLAN MY TRIP</span>
                <ArrowRight className="w-4 h-4 text-amber-400 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Dedicated Trust Stats Strip (Solid Background Below Hero) ─ */}
      <section className="relative z-20 bg-[#030814] border-y border-slate-800/80 py-8">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-slate-950/90">
            {/* 4 columns on desktop, 2x2 on mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Stat 1: 4.9/5 Rating */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-2 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1">
                    4.9 / 5 Rating
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
                  </span>
                  <span className="text-[11px] text-slate-400 truncate leading-snug">
                    From 1,200+ Discerning Travelers
                  </span>
                </div>
              </div>

              {/* Stat 2: 100% Bespoke */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-2 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1">
                    100% Bespoke Itineraries
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
                  </span>
                  <span className="text-[11px] text-slate-400 truncate leading-snug">
                    Zero Rigid Tour Templates
                  </span>
                </div>
              </div>

              {/* Stat 3: Vetted 5★ Properties */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-2 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                  <Award className="w-4 h-4 text-sky-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1">
                    Vetted 5★ Properties
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
                  </span>
                  <span className="text-[11px] text-slate-400 truncate leading-snug">
                    Aman, Belmond, Four Seasons
                  </span>
                </div>
              </div>

              {/* Stat 4: 24/7 Dedicated Concierge */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-2 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1">
                    24/7 Dedicated Concierge
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden sm:inline" />
                  </span>
                  <span className="text-[11px] text-slate-400 truncate leading-snug">
                    Real-Time WhatsApp Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
