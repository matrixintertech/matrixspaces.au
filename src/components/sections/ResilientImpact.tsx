"use client";

import {
  TrendingUp,
  ShieldCheck,
  Calculator,
  Leaf,
  Database,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const IMPACT_AREAS = [
  {
    icon: TrendingUp,
    title: "Higher delivery productivity",
    targetMetric: "Targeted evaluation area",
    description:
      "Aiming to compress on-site fit-out duration and minimise cross-trade scheduling friction through precision dry assembly and off-site pre-fabrication.",
    focusPoints: [
      "Reduced on-site labour hours",
      "Parallel factory production while civil works proceed",
      "Fewer site coordination clashes",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality and traceability",
    targetMetric: "Targeted evaluation area",
    description:
      "Establishing strict quality-controlled factory tolerances for acoustic seal integrity, surface finishes, and structural connections before components reach site.",
    focusPoints: [
      "Rigorous factory QA/QC inspection",
      "Repeatable millimetre-level joint tolerances",
      "Predictable acoustic performance ratings",
    ],
  },
  {
    icon: Calculator,
    title: "Better lifecycle-cost decisions",
    targetMetric: "Targeted evaluation area",
    description:
      "Shifting procurement conversations from lowest initial tender price to optimised 15-to-30 year total cost of ownership through planned component replacement.",
    focusPoints: [
      "Transparent replacement cost models",
      "Reduced non-destructive refurbishment expense",
      "Longer useful life of building elements",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental performance and safety",
    targetMetric: "Targeted evaluation area",
    description:
      "Targeting significant reductions in on-site construction waste, volatile organic compounds (VOCs), and embodied carbon through reusable demountable systems.",
    focusPoints: [
      "Minimised landfill waste from fit-out turnover",
      "Low-VOC factory finishes for superior indoor air",
      "Circular disassembly and component reuse protocols",
    ],
  },
  {
    icon: Database,
    title: "Better asset information",
    targetMetric: "Targeted evaluation area",
    description:
      "Eliminating the historical loss of building records during occupancy by embedding persistent machine-readable identities into physical elements.",
    focusPoints: [
      "Immediate retrieval of warranty and supplier data",
      "Seamless integration into university and civic CAFM tools",
      "Continuous digital service histories",
    ],
  },
  {
    icon: GraduationCap,
    title: "Future-ready skills and industry capability",
    targetMetric: "Targeted evaluation area",
    description:
      "Expanding Australia's domestic sovereign capability in modern methods of construction (MMC), digital assembly, and precision off-site manufacturing.",
    focusPoints: [
      "Upskilled vocational installer accreditations",
      "Applied university research output and data sets",
      "Knowledge transfer into domestic supply networks",
    ],
  },
];

export default function ResilientImpact() {
  return (
    <section
      id="impact"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>Intended Impact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            A More Resilient Australia: Spaces that perform today and tomorrow.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            These intended areas of impact represent the core criteria against which the Matrix Spaces
            Australia collaboration framework will be evaluated across planned pilots and academic research.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#EAE5D9] text-xs text-[#64748B]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Framed as prospective research benchmarks and intended outcomes, not measured historical results.</span>
          </div>
        </div>

        {/* Open Editorial Layout (Clean Grid with fine dividing borders instead of heavy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 border-t border-[#E2E8F0] pt-12">
          {IMPACT_AREAS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-4 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-[#94A3B8]">
                    Objective 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-[#0A192F] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#B8860B] mt-0.5 uppercase tracking-wider">
                    {item.targetMetric}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  {item.focusPoints.map((pt) => (
                    <div
                      key={pt}
                      className="text-xs text-[#64748B] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#B8860B]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
