'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP_URL, BUSINESS_WHATSAPP_NUMBER } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      <a
        href={BUSINESS_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        aria-label={`Chat on WhatsApp with My Globe Guide Concierge (${BUSINESS_WHATSAPP_NUMBER})`}
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-5 h-5 text-white shrink-0" />

        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100/90 leading-none">
            WhatsApp 24/7
          </span>
          <span className="text-xs font-semibold text-white leading-tight mt-0.5">
            {BUSINESS_WHATSAPP_NUMBER}
          </span>
        </div>
      </a>
    </aside>
  );
}
