"use client";

import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAF9F6] border-b border-[#EAE5D9]">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full">
        {/* Editorial Sub-banner / Platform Stage */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs text-xs font-medium text-[#0A192F]">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            <span>Institutional Collaboration Proposal</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
            <span>People</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>Spaces</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>Assets</span>
            <span className="text-[#CBD5E1]">/</span>
            <span>Knowledge</span>
          </div>
        </div>

        {/* Two-Column Grid: Narrative and Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0A192F] leading-[1.12]">
                Smarter spaces for a more resilient Australia.
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                A collaborative platform to design, deliver and maintain high-performance
                built environments through industrialised interiors, asset intelligence and
                preventive care.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#workshop-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm transition-all duration-200"
              >
                <span>Arrange a 90-minute workshop</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded bg-white text-[#0A192F] border border-[#CBD5E1] hover:border-[#0A192F] hover:bg-[#F8FAFC] transition-all duration-200"
              >
                <span>Explore our platform</span>
                <Compass className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
              </a>
            </div>

            {/* Micro Pillars Notice */}
            <div className="pt-6 border-t border-[#EAE5D9] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0A192F]">
                  Industrialised
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Configurable interior systems
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0A192F]">
                  Intelligent
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Component-level traceability
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#0A192F]">
                  Preventive
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Whole-of-life care cycles
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_20px_50px_rgba(10,25,47,0.08)] bg-white group">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/hero-architecture.jpg"
                  alt="Contemporary Australian institutional innovation pavilion featuring engineered timber louvers and daylight"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Architectural Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/75 to-transparent backdrop-blur-[2px]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#EAE5D9] font-medium mb-1">
                      <Sparkles className="w-3 h-3 text-[#B8860B]" />
                      <span>Conceptual Institutional Framework</span>
                    </div>
                    <p className="text-sm font-medium text-white/95 leading-snug max-w-md">
                      A physical-digital model linking repeatable architectural components, asset records, and applied research.
                    </p>
                  </div>
                  <span className="text-[10px] text-white/70 uppercase tracking-widest shrink-0 border border-white/20 px-2 py-1 rounded">
                    Concept Model
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Accompanying Tag Card */}
            <div className="hidden sm:flex items-center gap-3.5 absolute -bottom-5 -left-5 bg-white py-3 px-4 rounded-xl border border-[#E2E8F0] shadow-md">
              <div className="w-8 h-8 rounded-lg bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-[#0A192F]">Australian Built Environment</p>
                <p className="text-[11px] text-[#64748B]">Designed for tertiary, healthcare & civic estates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
