'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Earth,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Shield,
  Instagram,
  Facebook,
} from 'lucide-react';
import {
  BUSINESS_WHATSAPP_URL,
  BUSINESS_WHATSAPP_NUMBER,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  BRAND_LOGO,
} from '@/lib/constants';

const exploreLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Signature Packages', href: '/#packages' },
  { name: 'Curated Destinations', href: '/#destinations' },
  { name: 'Concierge Services', href: '/#services' },
  { name: 'Why Book With Us', href: '/#why-book-with-us' },
  { name: 'Verified Reviews', href: '/#reviews' },
  { name: '3D Globe Explorer', href: '/globe' },
  { name: 'Plan My Trip', href: '/#enquiry' },
];

const destinationLinks = [
  { name: 'Turkey (Istanbul & Cappadocia)', href: '#destinations' },
  { name: 'Georgia (Tbilisi & Kazbegi)', href: '#destinations' },
  { name: 'Philippines (Palawan & Boracay)', href: '#destinations' },
  { name: 'Egypt (Nile & Giza Pyramids)', href: '#destinations' },
  { name: 'Maldives (Private Overwater Atolls)', href: '#destinations' },
  { name: 'Thailand (Bangkok & Phuket)', href: '#destinations' },
  { name: 'UAE (Dubai & Desert Dunes)', href: '#destinations' },
  { name: 'Europe & Beyond', href: '#destinations' },
];

const WHATSAPP_URL = BUSINESS_WHATSAPP_URL;

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#020611] text-slate-300 border-t border-slate-800/80 pt-16 pb-12"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Col 1-2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#020611] border border-amber-400/30 p-1 flex items-center justify-center shadow-lg shadow-sky-500/10 group-hover:scale-105 transition-transform">
                <Image
                  src={BRAND_LOGO}
                  alt="My Globe Guide Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white font-serif">
                  MY GLOBE GUIDE
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold">
                  Your Journey, Our Passion
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Crafting bespoke luxury vacation packages and seamless travel logistics across eight premier global destinations. Zero rigid templates, vetted 5★ stays, and 24/7 private concierge support.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/80 text-emerald-300 hover:text-white text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Concierge Desk</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com/myglobeguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="Instagram"
                  title="Follow My Globe Guide on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/myglobeguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="Facebook"
                  title="Follow My Globe Guide on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Curated Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {destinationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Advisory */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Advisory Desk
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accentGold shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+18005554562"
                    className="text-white hover:text-amber-400 transition-colors font-medium"
                  >
                    +1 (800) 555-4562
                  </a>
                  <p className="text-[10px] text-slate-500">Toll-Free Concierge Hotline</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors font-medium"
                  >
                    {BUSINESS_WHATSAPP_NUMBER}
                  </a>
                  <p className="text-[10px] text-slate-500">Business WhatsApp Concierge (24/7)</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-oceanBlue shrink-0 mt-0.5" />
                <div>
                  <a
                    href={BUSINESS_EMAIL_MAILTO}
                    className="text-white hover:text-amber-400 transition-colors font-medium"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                  <p className="text-[10px] text-slate-500">Bespoke Inquiry Desk</p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">Mon – Sat: 09:00 – 18:00 UTC</p>
                  <p className="text-[10px] text-slate-500">Global Coverage & WhatsApp 24/7</p>
                </div>
              </li>

              <li className="pt-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Licensed & Bonded Travel Partner</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 My Globe Guide. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
