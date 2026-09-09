'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, Earth, Menu, X } from 'lucide-react';
import {
  BUSINESS_WHATSAPP_URL,
  BUSINESS_WHATSAPP_NUMBER,
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  BRAND_LOGO,
} from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#enquiry';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? 'bg-[#030814] border-b border-slate-800/80 shadow-2xl shadow-slate-950/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* ── Desktop-Only Slim Top Utility Bar ────────────────────────── */}
      <div className="hidden md:block bg-navy border-b border-slate-800/60 transition-colors">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="flex items-center justify-between h-8 text-xs text-mutedGray">
            {/* Contact details */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+18005554562"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Call our Concierge Desk"
              >
                <Phone className="w-3.5 h-3.5 text-accentGold" />
                <span>+1 (800) 555-4562</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={BUSINESS_EMAIL_MAILTO}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Email our Advisory Team"
              >
                <Mail className="w-3.5 h-3.5 text-oceanBlue" />
                <span>{BUSINESS_EMAIL}</span>
              </a>
            </div>

            {/* Operating hours & assurance */}
            <div className="flex items-center gap-4 text-[11px] text-mutedGray/80">
              <span>Mon – Sat: 09:00 – 18:00 (UTC)</span>
              <span className="text-slate-700 hidden lg:inline">·</span>
              <span className="hidden lg:inline text-accentGold/90 font-medium">
                Verified Global Advisory Hub
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ─────────────────────────────────────── */}
      <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl transition-all duration-300 ${
        isScrolled ? 'py-3.5' : 'py-5'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-offset-slate-950"
            aria-label="My Globe Guide Home"
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-[#020611] border border-amber-400/30 p-1 flex items-center justify-center shadow-lg shadow-sky-950/60 group-hover:scale-105 transition-transform">
              <Image
                src={BRAND_LOGO}
                alt="My Globe Guide Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-lg"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight uppercase group-hover:text-amber-300 transition-colors">
                My Globe Guide
              </span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
                Your Journey, Our Passion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>About Us</span>
            </Link>
            <Link
              href="/globe"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>Globe Explorer</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono font-bold">
                3D
              </span>
            </Link>
            <Link
              href="/#packages"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>Packages</span>
            </Link>
            <Link
              href="/#destinations"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>Destinations</span>
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>Services</span>
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 flex items-center gap-1.5"
            >
              <span>How It Works</span>
            </Link>
          </nav>

          {/* Desktop Right CTA Group */}
          <div className="hidden md:flex items-center gap-3.5">
            <a
              href={BUSINESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all duration-200 hover:shadow-md hover:shadow-emerald-950/40"
              title={`Chat with a Travel Advisor on WhatsApp (${BUSINESS_WHATSAPP_NUMBER})`}
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98] cursor-pointer bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 border border-amber-300/40 rounded-xl h-9 gap-1.5 text-xs px-4"
            >
              Plan My Trip
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-950/40 text-emerald-400 border border-emerald-500/30"
              aria-label={`WhatsApp Chat (${BUSINESS_WHATSAPP_NUMBER})`}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Hamburger Drawer ─────────────────────────────────── */}
      {/* Top utility bar is intentionally hidden here per spec */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030814]/98 border-b border-slate-800 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
            >
              About Us
            </Link>
            <Link
              href="/globe"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors flex items-center justify-between py-2 border-b border-slate-900"
            >
              <span>Globe Explorer</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-mono font-bold">
                3D
              </span>
            </Link>
            <Link
              href="/#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
            >
              Packages
            </Link>
            <Link
              href="/#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
            >
              Destinations
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
            >
              Services
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
            >
              How It Works
            </Link>
          </nav>

          <div className="pt-2 space-y-3">
            <button
              onClick={scrollToEnquiry}
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              Plan My Trip
            </button>
            <a
              href={BUSINESS_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({BUSINESS_WHATSAPP_NUMBER})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
