"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Activity, Sparkles, Database, Layers } from "lucide-react";

const PLATFORM_PILLARS = [
  {
    icon: Layers,
    title: "Industrialised Delivery",
    desc: "Configurable off-site components and rapid dry assembly.",
  },
  {
    icon: Database,
    title: "Digital Asset Intelligence",
    desc: "Machine-readable QR/NFC identity and persistent registers.",
  },
  {
    icon: Activity,
    title: "Preventive Stewardship",
    desc: "Scheduled inspections and whole-of-life component care.",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAF9F6] border-b border-[#EAE5D9]">
      {/* Subtle Background Architectural Grid */}
      <div
        className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full">
        {/* Platform Tag / Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-semibold text-[#0A192F]">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            <span>Integrated Built-Environment Platform</span>
          </div>
          <span className="text-xs font-mono font-medium text-[#64748B] hidden sm:inline-block">
            Design • Deliver • Manage • Maintain
          </span>
        </div>

        {/* Two-Column Grid: Product Narrative & Visual Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0A192F] leading-[1.12]">
                Smarter spaces. Connected assets. Better built environments.
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
                Connecting industrialised construction, intelligent asset information, and preventive care
                through one integrated built-environment platform.
              </p>
            </div>

            {/* Platform Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#asset-intelligence"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-white text-[#0A192F] border border-[#CBD5E1] hover:border-[#0A192F] hover:bg-[#F8FAFC] transition-all duration-200"
              >
                <span>View Asset Intelligence</span>
                <Cpu className="w-4 h-4 text-[#B8860B]" aria-hidden="true" />
              </a>
            </div>

            {/* Three Foundation Highlights */}
            <div className="pt-6 border-t border-[#EAE5D9] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-[#0A192F]">
                  Physical Systems
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Configurable DfMA modular assemblies
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-[#0A192F]">
                  Asset Intelligence
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Component-level digital registry
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-[#0A192F]">
                  Preventive Care
                </p>
                <p className="text-[12px] text-[#64748B] mt-0.5 leading-snug">
                  Structured whole-of-life stewardship
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Live Product Touchpoints */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_24px_60px_rgba(10,25,47,0.09)] bg-white group">
              <div className="relative aspect-[16/11] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="/images/hero-architecture.jpg"
                  alt="Contemporary architectural innovation pavilion demonstrating integrated engineered timber structure and modular interior systems"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Digital Tag: Interactive Asset Telemetry Mockup */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E2E8F0] shadow-lg max-w-[240px] space-y-1.5 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#B8860B] bg-[#FBF6E9] px-2 py-0.5 rounded">
                    Component #MSA-304
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <p className="text-xs font-semibold text-[#0A192F]">
                  Demountable Acoustic Glazed Assembly
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1 border-t border-[#F1F5F9]">
                  <span>Status: Operational</span>
                  <span className="font-mono text-[#0A192F] font-semibold">Rw 48dB</span>
                </div>
              </div>

              {/* Bottom Architectural Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white bg-gradient-to-t from-[#0A192F]/95 via-[#0A192F]/80 to-transparent backdrop-blur-[2px]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#EAE5D9] font-medium mb-1">
                      <Sparkles className="w-3 h-3 text-[#B8860B]" />
                      <span>One Connected Operating Model</span>
                    </div>
                    <p className="text-sm font-medium text-white/95 leading-snug max-w-md">
                      Bridging design, precision manufacturing, digital handover, and ongoing facility maintenance.
                    </p>
                  </div>
                  <span className="text-[10px] text-white/70 uppercase tracking-widest shrink-0 border border-white/20 px-2 py-1 rounded">
                    Platform Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Accompanying Live Capability Pill */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white py-3 px-4 rounded-xl border border-[#E2E8F0] shadow-md">
              <div className="w-8 h-8 rounded-lg bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#0A192F]">Built for Institutional Estates</p>
                <p className="text-[11px] text-[#64748B]">Tertiary education, healthcare, civic & housing</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Operating Value Drivers */}
        <div className="mt-16 pt-12 border-t border-[#EAE5D9] grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORM_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0A192F]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
