"use client";

import { ArrowUp, Building2, Mail, Layers } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAE5D9] text-[#475569] text-xs">
      <div className="w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 mb-14">
          {/* Brand & Platform Proposition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A192F] text-[#B8860B] flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#0A192F]">
                  MATRIX SPACES
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded border border-[#B8860B]/40 text-[#B8860B] bg-[#FBF6E9]">
                  AUSTRALIA
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-[#1E293B]">
              Smarter spaces. Connected assets. Better built environments.
            </p>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-md">
              An integrated built-environment platform connecting industrialised interior delivery,
              retrofit systems, machine-readable asset intelligence, and whole-of-life preventive asset care.
            </p>

            <div className="pt-2 text-[11px] text-[#64748B] flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Melbourne & Sydney, Australia</span>
            </div>
          </div>

          {/* Quick Platform Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0A192F]">
              Platform Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#lifecycle" className="hover:text-[#0A192F] transition-colors">
                  Connected Lifecycle
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#0A192F] transition-colors">
                  Five Capabilities
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#0A192F] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#asset-intelligence" className="hover:text-[#0A192F] transition-colors">
                  Asset Intelligence UI
                </a>
              </li>
              <li>
                <a href="#physical-systems" className="hover:text-[#0A192F] transition-colors">
                  Physical Systems & Retrofit
                </a>
              </li>
              <li>
                <a href="#preventive-care" className="hover:text-[#0A192F] transition-colors">
                  Preventive Asset Care
                </a>
              </li>
              <li>
                <a href="#living-lab" className="hover:text-[#0A192F] transition-colors">
                  Living Laboratory
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-[#0A192F] transition-colors">
                  Partner Ecosystem
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0A192F]">
              Platform Engagement
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              For campus planners, public estate directors, and technical supply-chain partners
              exploring platform demonstration or collaborative pilot deployment:
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <a href="mailto:enquiries@matrixspaces.com.au" className="hover:text-[#0A192F] hover:underline">
                  enquiries@matrixspaces.com.au
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B8860B] text-white hover:bg-[#9E7309] transition-colors font-semibold uppercase text-[11px] tracking-wider"
              >
                <span>Request Platform Briefing</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <p>© 2026 Matrix Spaces Australia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built-Environment Innovation & Delivery Platform</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#0A192F] transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
