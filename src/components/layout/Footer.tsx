"use client";

import { ArrowUp, Building2, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAE5D9] text-[#475569] text-xs">
      <div className="w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 mb-14">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#0A192F]">
                MATRIX SPACES
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded border border-[#B8860B]/40 text-[#B8860B] bg-[#FBF6E9]">
                AUSTRALIA
              </span>
            </div>

            <p className="text-sm font-medium text-[#1E293B]">
              Applied innovation for the built environment.
            </p>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-md">
              A proposed platform for institutional collaboration across the Australian built environment.
              Connecting physical spaces, industrialised interior systems, retrofit solutions, asset
              intelligence, preventive asset care, and applied research.
            </p>

            <div className="pt-2 text-[11px] text-[#64748B] flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Prepared in alignment with the September 2026 Institutional Proposal</span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0A192F]">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#opportunity" className="hover:text-[#0A192F] transition-colors">
                  The Opportunity
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-[#0A192F] transition-colors">
                  Our Platform
                </a>
              </li>
              <li>
                <a href="#workstreams" className="hover:text-[#0A192F] transition-colors">
                  Five Workstreams
                </a>
              </li>
              <li>
                <a href="#living-lab" className="hover:text-[#0A192F] transition-colors">
                  The Living Laboratory
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#0A192F] transition-colors">
                  Partner Ecosystem
                </a>
              </li>
              <li>
                <a href="#pilot-pathway" className="hover:text-[#0A192F] transition-colors">
                  Adoption Pathway
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#0A192F] transition-colors">
                  Intended Impact
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#0A192F] transition-colors">
                  Five-Year Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Contact & Action */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0A192F]">
              Institutional Engagement
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              For tertiary institution leadership, public estate directors, and industry partners
              interested in pilot co-design or living lab participation:
            </p>

            <div className="space-y-2">
              <a
                href="#workshop-form"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#B8860B] text-white hover:bg-[#9E7309] transition-colors font-semibold uppercase text-[11px] tracking-wider"
              >
                <span>Arrange a 90-Min Workshop</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#64748B] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>enquiries@matrixspaces.com.au</span>
            </div>
          </div>
        </div>

        {/* Legal & Proposal Transparency Notice */}
        <div className="pt-8 border-t border-[#EAE5D9] space-y-4">
          <div className="p-4 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-[11px] text-[#334155] leading-relaxed">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A192F]">Proposal Transparency & Governance Statement: </strong>
                Matrix Spaces Australia is an independent proposed platform for institutional collaboration.
                Architectural renderings, exploded axonometric diagrams, and operational workflows depict conceptual
                frameworks developed for stakeholder evaluation. Matrix Intertech is acknowledged solely as supporting
                foundational manufacturing and engineering background experience of the founder.
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
            <p>© 2026 Matrix Spaces Australia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Melbourne & Sydney, Australia</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 hover:text-[#0A192F] transition-colors"
                aria-label="Scroll to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
