'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Building2 } from 'lucide-react';

export interface Partner {
  name: string;
  logo: string;
  category?: string;
}

export interface PartnerLogoGridProps {
  title?: string;
  description?: string;
  counterBadge?: string;
  partners?: Partner[];
}

const DEFAULT_PARTNERS: Partner[] = [
  { name: 'Emirates', logo: '/images/partners/partner-1.png', category: 'Aviation' },
  { name: 'Qatar Airways', logo: '/images/partners/partner-2.png', category: 'Aviation' },
  { name: 'Turkish Airlines', logo: '/images/partners/partner-3.png', category: 'Aviation' },
  { name: 'Four Seasons', logo: '/images/partners/partner-4.png', category: 'Luxury Stays' },
  { name: 'Aman Resorts', logo: '/images/partners/partner-5.png', category: 'Ultra-Luxury Stays' },
  { name: 'Belmond', logo: '/images/partners/partner-6.png', category: 'Luxury Stays & Rail' },
  { name: 'The Ritz-Carlton', logo: '/images/partners/partner-7.png', category: 'Luxury Stays' },
  { name: 'Virtuoso', logo: '/images/partners/partner-8.png', category: 'Global Travel Network' },
];

function PartnerLogoItem({ partner }: { partner: Partner }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-accentGold/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg shadow-black/20 h-28 sm:h-32 text-center overflow-hidden"
      title={`${partner.name}${partner.category ? ` — ${partner.category}` : ''}`}
    >
      {/* Subtle hover gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-accentGold/5 via-transparent to-oceanBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />

      {hasError ? (
        /* Graceful typographic fallback if image file is pending */
        <div className="flex flex-col items-center justify-center gap-1.5 z-10">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-accentGold group-hover:border-accentGold/50 transition-colors duration-300">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide font-sans">
            {partner.name}
          </span>
          {partner.category && (
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">
              {partner.category}
            </span>
          )}
        </div>
      ) : (
        /* Grayscale image by default -> full color + scale on hover */
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={140}
            height={48}
            onError={() => setHasError(true)}
            className="max-h-12 w-auto max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </div>
      )}
    </div>
  );
}

export default function PartnerLogoGrid({
  title = 'Our Travel Partners',
  description = 'Connecting you with trusted names across aviation, hospitality, and destination experiences.',
  counterBadge = '12+ Trusted Partners',
  partners = DEFAULT_PARTNERS,
}: PartnerLogoGridProps) {
  return (
    <section
      id="partners"
      className="relative py-20 sm:py-24 bg-[#030814] border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-oceanBlue/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Counter Badge above logo grid */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold tracking-wider uppercase text-accentGold shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accentGold" />
            <span>{counterBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-[1.15]">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Responsive Logo Grid: 4-6 columns desktop, 2-3 columns mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <PartnerLogoItem key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
