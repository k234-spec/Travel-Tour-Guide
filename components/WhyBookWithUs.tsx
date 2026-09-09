'use client';

import React from 'react';
import {
  Compass,
  Crown,
  MessageCircle,
  ShieldCheck,
  Globe,
  UserCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_WHATSAPP_URL, BUSINESS_WHATSAPP_NUMBER } from '@/lib/constants';

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: Compass,
    title: 'Bespoke Itinerary Design',
    description:
      'Every journey is custom-built around your pace, preferences, and budget — never a rigid template.',
  },
  {
    icon: Crown,
    title: 'Vetted 5★ Properties',
    description:
      'Hand-selected stays from Aman, Belmond, Four Seasons, and boutique cave suites.',
  },
  {
    icon: MessageCircle,
    title: '24/7 WhatsApp Concierge',
    description:
      'Real-time support before and during your trip, one message away.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    description:
      'Clear quotes with no hidden fees, so you always know what you\'re paying for.',
  },
  {
    icon: Globe,
    title: 'Global Destination Network',
    description:
      'Deep local expertise across 8+ curated regions worldwide.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Trip Advisor',
    description:
      'One point of contact from planning through the final day of your journey.',
  },
];

const WHATSAPP_URL = BUSINESS_WHATSAPP_URL;

export default function WhyBookWithUs() {
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
    <section
      id="why-book-with-us"
      className="relative py-20 sm:py-24 bg-[#030814] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-oceanBlue/15 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accentGold/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accentGold" />
            <span>The My Globe Guide Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-[1.15]">
            Why Book Your Journey With My Globe Guide?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            We combine high-touch private travel advisory with boots-on-the-ground concierge support to deliver seamless, elevated vacations.
          </p>
        </div>

        {/* 6-Card Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16 sm:mb-20">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-950/70 border border-slate-800/80 p-6 sm:p-7 hover:border-accentGold/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl shadow-slate-950/50 flex flex-col justify-between"
              >
                {/* Ambient Card Hover Glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accentGold/5 via-transparent to-oceanBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Card Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-accentGold/60 group-hover:bg-accentGold/10 transition-colors duration-300 shadow-inner">
                    <IconComponent className="w-6 h-6 text-accentGold group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Width CTA Banner with Contrasting Background (oceanBlue) */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-oceanBlue via-[#153f70] to-navy border border-sky-400/30 shadow-2xl p-8 sm:p-10 lg:p-12">
          {/* Subtle decorative glow highlights inside banner */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 bg-accentGold/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Custom Travel Dossier
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white tracking-tight leading-tight">
                Ready to Start Planning?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-200 font-light max-w-xl leading-relaxed">
                Build your bespoke travel itinerary in minutes using our interactive step-by-step planner, or connect directly with our WhatsApp concierge.
              </p>
            </div>

            {/* Banner Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              <button
                onClick={scrollToEnquiry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accentGold hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-xl shadow-accentGold/20 transition-all hover:scale-105 active:scale-[0.98] w-full sm:w-auto cursor-pointer"
              >
                <span>Start the Wizard</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-950/80 text-white border border-white/20 hover:border-emerald-400/80 backdrop-blur-md text-sm font-bold transition-all hover:scale-105 active:scale-[0.98] w-full sm:w-auto shadow-lg cursor-pointer"
                title={`Chat on WhatsApp (${BUSINESS_WHATSAPP_NUMBER})`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
