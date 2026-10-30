"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Layers,
} from "lucide-react";

const SYSTEMS = [
  {
    id: "partitions",
    name: "Demountable Partition Assemblies",
    tagline: "High-acoustic modular walls with dry-trade junctions",
    description:
      "Precision-engineered partition modules that eliminate drywall wet trades, sanding, and on-site paint curing. Modules arrive factory-finished and dry-assemble into structural floor and ceiling tracks, achieving acoustic isolation up to Rw 52 dB.",
    specs: [
      { label: "Acoustic Performance", value: "Rw 45 – 52 dB" },
      { label: "Fire Resistance", value: "-/60/60 & -/90/90" },
      { label: "Assembly Method", value: "Dry clip connection" },
      { label: "Demountability", value: "100% Reconfigurable" },
    ],
    idealFor: "Academic seminar rooms, clinical consult suites, and corporate meeting hubs.",
  },
  {
    id: "ceilings",
    name: "Integrated Ceiling & Service Cassettes",
    tagline: "Pre-coordinated acoustics, lighting & air diffusion",
    description:
      "Factory-integrated ceiling cassettes that combine high-absorption acoustic baffles, low-glare architectural lighting, and displacement ventilation plenums into unified, pre-commissioned modules.",
    specs: [
      { label: "Sound Absorption", value: "NRC 0.85 – 0.95" },
      { label: "MEP Integration", value: "Plug-and-play plenum" },
      { label: "Weight", value: "Lightweight engineered core" },
      { label: "Accessibility", value: "Zero-tool hinge access" },
    ],
    idealFor: "Tertiary collaboration spaces, library quiet zones, and corporate open-plan areas.",
  },
  {
    id: "retrofit-kits",
    name: "Occupied Estate Retrofit Packages",
    tagline: "Pre-kitted interior upgrades with minimal tenant disruption",
    description:
      "Standardised interior upgrade packages engineered specifically for occupied buildings. Pre-finished panels, modular sub-frames, and quick-latch joinery allow programmatic room upgrades without building-wide shutdown.",
    specs: [
      { label: "Disruption Factor", value: "Zero wet trades, low dust" },
      { label: "Installation Speed", value: "Up to 60% faster than wet trades" },
      { label: "Substrate Fit", value: "Self-levelling tolerance clips" },
      { label: "Embodied Carbon", value: "Significantly lower landfill waste" },
    ],
    idealFor: "Occupied student housing, regional healthcare clinics, and active campus buildings.",
  },
  {
    id: "circular",
    name: "Circular Disassembly & Reuse System",
    tagline: "Designed for end-of-lease reconfiguration without demolition",
    description:
      "Every joint and fastener is engineered for non-destructive removal. When tenant requirements shift or space typologies adapt, components are simply unlatched, refurbished, or relocated rather than dumped in landfill.",
    specs: [
      { label: "Material Recovery", value: "100% component recovery" },
      { label: "Refurbishment", value: "Factory surface relining" },
      { label: "Material Passport", value: "EPD and LCA verified" },
      { label: "Waste Reduction", value: "Up to 80% fit-out waste diverted" },
    ],
    idealFor: "Flexible university campuses, government administrative estates, and prime commercial leasing.",
  },
];

export default function PhysicalSystems() {
  const [activeSystemId, setActiveSystemId] = useState("partitions");
  const current = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0];

  return (
    <section
      id="physical-systems"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Layers className="w-3.5 h-3.5" />
            <span>Physical Building Components</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Industrialised Interiors & Retrofit Systems.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Shifting repeatable interior construction from unpredictable on-site craft to precision
            off-site manufacturing and rapid dry assembly. Designed for new buildings and occupied asset upgrades.
          </p>
        </div>

        {/* Visual Showcase: Architectural Isometric Cutaway + System Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          {/* Left Column: Architectural Isometric Cutaway Graphic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#FAF9F6] shadow-2xs group">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/images/opportunity-cutaway.jpg"
                  alt="Architectural cutaway showing modular demountable partition wall assemblies, integrated ceiling service zones, and mass timber structure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Technical Caption Box */}
              <div className="p-5 border-t border-[#E2E8F0] bg-white">
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#0A192F]">
                    Building Systems Anatomy
                  </span>
                  <span className="text-[11px] text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded font-mono">
                    Axonometric Cutaway
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Decoupling long-life core structures from short-cycle interior fit-outs.
                  Modular partitions, service baffles, and retrofit linings attach via non-invasive mechanical clips.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Selector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE5D9]">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#64748B]">
                Engineered System Catalog
              </span>
              <span className="text-[11px] font-mono text-[#B8860B]">DfMA Standards</span>
            </div>

            <div className="space-y-2.5">
              {SYSTEMS.map((sys) => {
                const isActive = activeSystemId === sys.id;
                return (
                  <button
                    key={sys.id}
                    type="button"
                    onClick={() => setActiveSystemId(sys.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FAF9F6] border-[#B8860B] shadow-2xs ring-1 ring-[#B8860B]/30"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#FDFBF7]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-sm font-semibold transition-colors ${
                          isActive ? "text-[#0A192F]" : "text-[#334155]"
                        }`}
                      >
                        {sys.name}
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-[#94A3B8]">
                        {isActive ? "ACTIVE" : "VIEW"}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] mt-1 leading-snug">
                      {sys.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed System Deep Dive Card */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE5D9]">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-[#B8860B]">
                System Engineering Overview
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0A192F]">
                {current.name}
              </h3>
            </div>
            <div className="text-xs text-[#64748B] sm:text-right max-w-sm">
              <strong className="text-[#0A192F]">Primary Applications: </strong>
              {current.idealFor}
            </div>
          </div>

          <p className="text-sm text-[#475569] leading-relaxed">
            {current.description}
          </p>

          {/* 4 Technical Specification Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {current.specs.map((sp) => (
              <div key={sp.label} className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                  {sp.label}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#0A192F]">
                  {sp.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
