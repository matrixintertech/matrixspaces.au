"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Layers } from "lucide-react";

const NAV_LINKS = [
  { label: "Platform", href: "#lifecycle" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Asset Intelligence", href: "#asset-intelligence" },
  { label: "Physical Systems", href: "#physical-systems" },
  { label: "Preventive Care", href: "#preventive-care" },
  { label: "Living Lab", href: "#living-lab" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_2px_16px_rgba(10,25,47,0.05)] py-3.5"
          : "bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#EAE5D9]/80 py-4"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Matrix Spaces Australia"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#B8860B] transition-transform duration-200 group-hover:scale-105 shadow-2xs">
            <Layers className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0A192F] transition-colors group-hover:text-[#B8860B]">
                MATRIX SPACES
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded border border-[#B8860B]/40 text-[#B8860B] bg-[#FBF6E9]">
                AUSTRALIA
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold hidden sm:block">
              Integrated Built-Environment Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-5 2xl:gap-7"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#475569] hover:text-[#0A192F] transition-colors relative py-1 hover:border-b-2 hover:border-[#B8860B] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-2xs transition-all duration-200 whitespace-nowrap"
          >
            <span>Request Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#0A192F] hover:text-[#B8860B] focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white border-b border-[#E2E8F0] p-6 flex flex-col justify-between shadow-xl animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
          <div className="space-y-3 pt-2">
            <div className="pb-3 mb-2 border-b border-[#E2E8F0]">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#64748B]">
                Platform Navigation
              </span>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-semibold text-[#0A192F] hover:text-[#B8860B] border-b border-[#F1F5F9]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-[#E2E8F0] space-y-4">
            <p className="text-xs text-[#64748B] leading-relaxed">
              Integrated built-environment platform connecting physical components, digital asset information, and preventive care.
            </p>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm text-center"
            >
              <span>Request Platform Briefing</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
