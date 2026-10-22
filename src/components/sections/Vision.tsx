"use client";

import { Compass, Shield, Building2, Globe2, Layers } from "lucide-react";

const FIVE_YEAR_PATHWAY = [
  {
    year: "Year 01",
    phase: "Localisation",
    headline: "Australian standards adaptation & university alignments",
    description:
      "Adapting proven modular interior details to National Construction Code (NCC) standards, Australian acoustic ratings (AS/NZS), and local supply chains. Establishing collaborative relationships with Australian university research partners.",
    milestones: [
      "NCC compliance mapping and structural engineering reviews",
      "Academic research partner governance charter",
      "Initial stakeholder consultation roundtables",
    ],
    icon: Compass,
  },
  {
    year: "Year 02",
    phase: "Demonstration",
    headline: "Inaugural living laboratory & first institutional pilot",
    description:
      "Deploying the first physical Living Laboratory testbed facility within an Australian university campus. Conducting baseline acoustic, air-quality, and dry-assembly speed trials in a controlled, peer-reviewed environment.",
    milestones: [
      "Physical commissioning of first test bays",
      "Baseline lifecycle telemetry data collection",
      "Publication of preliminary findings for industry peer review",
    ],
    icon: Layers,
  },
  {
    year: "Year 03",
    phase: "Productisation",
    headline: "Codified component library & open asset schema",
    description:
      "Formalising the Australian standardised component catalogue, complete with parametric BIM families, certified fire/acoustic assemblies, and open-format asset data schemas compatible with leading estate CAFM systems.",
    milestones: [
      "Certified Australian standard component catalogue",
      "Open-standard asset schema release for facility managers",
      "Accredited installer training syllabus rollout",
    ],
    icon: Shield,
  },
  {
    year: "Year 04",
    phase: "Replication",
    headline: "Expansion across multi-campus tertiary & civic estates",
    description:
      "Expanding deployments from isolated pilots into programmatic estate refurbishments across secondary universities, healthcare precincts, and government administrative buildings across Australia.",
    milestones: [
      "Multi-campus rollout frameworks for estate owners",
      "Standardised procurement guidelines for public tenders",
      "Multi-state certified subcontractor network",
    ],
    icon: Building2,
  },
  {
    year: "Year 05",
    phase: "Scale",
    headline: "National supply ecosystem & circular asset stewardship",
    description:
      "A fully mature, distributed Australian manufacturing and service network supporting continuous preventive care, circular component remanufacturing, and sovereign built-environment capability.",
    milestones: [
      "National distributed assembly and logistics network",
      "Circular buyback and refurbishment programmes",
      "Established industry benchmark for public infrastructure",
    ],
    icon: Globe2,
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>Long-Term Strategy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Progressive Vision: From pilot to scale.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            The proposed five-year roadmap outlines a measured progression from initial regulatory
            adaptation and academic collaboration to a resilient, national built-environment capability.
          </p>
        </div>

        {/* Five-Year Visual Sequence */}
        <div className="space-y-6">
          {FIVE_YEAR_PATHWAY.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.year}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Year Pill & Phase Title */}
                <div className="lg:w-1/4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#B8860B] bg-[#FBF6E9] px-2.5 py-1 rounded border border-[#B8860B]/20">
                      {stage.year}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-mono">Phase 0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0A192F]">
                    {stage.phase}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <Icon className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{stage.headline}</span>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="lg:w-2/5">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Key Milestones List */}
                <div className="lg:w-1/3 pt-4 lg:pt-0 lg:border-l lg:border-[#F1F5F9] lg:pl-6 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    Key Strategic Milestones
                  </span>
                  <ul className="space-y-1">
                    {stage.milestones.map((m) => (
                      <li key={m} className="text-xs text-[#334155] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0 mt-1.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Framing Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#64748B] leading-relaxed">
            * This roadmap represents the proposed strategic trajectory articulated in the September 2026
            Institutional Collaboration Proposal. Progression through each year is contingent on milestone validation,
            institutional governance approval, and regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
