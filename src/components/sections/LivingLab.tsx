"use client";

import Image from "next/image";
import {
  FlaskConical,
  ArrowRight,
  Sparkles,
  Search,
  Scale,
  Database,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const OBJECTIVES = [
  {
    icon: FlaskConical,
    title: "Co-design potential solutions",
    desc: "Collaborative workshops between institutional estate directors, architects, and engineering teams to specify repeatable interior modular typologies.",
  },
  {
    icon: Search,
    title: "Test and validate approaches",
    desc: "Physical installation trials in active university or research settings to test assembly speeds, acoustic decoupling, and joint tolerances.",
  },
  {
    icon: Scale,
    title: "Evaluate lifecycle performance",
    desc: "Rigorous empirical measurement of thermal efficiency, acoustic insulation, air quality, and material durability over sustained operating cycles.",
  },
  {
    icon: Database,
    title: "Refine asset information practices",
    desc: "Operational stress-testing of component QR/NFC tagging and data lineage to verify how digital registers integrate into existing CAFM/BIM systems.",
  },
  {
    icon: GraduationCap,
    title: "Develop industry and research capability",
    desc: "Upskilling vocational apprentices, building surveyors, and facility teams while producing peer-reviewed research on industrialised retrofit methods.",
  },
  {
    icon: TrendingUp,
    title: "Assess opportunities for broader adoption",
    desc: "Developing clear business cases, risk registers, and procurement frameworks for scaling from pilot bays to full-campus rollouts.",
  },
];

export default function LivingLab() {
  return (
    <section
      id="living-lab"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Flagship Collaboration Concept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            The Living Laboratory: Real assets. Real learning. Real impact.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A proposed collaborative testbed bringing universities, government asset owners,
            and industry together to co-design, validate, and measure advanced built-environment
            solutions within real operating environments.
          </p>

          {/* Institutional Clarity Notice Banner */}
          <div className="p-4 rounded-xl bg-white border border-[#B8860B]/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
            <p className="text-xs text-[#475569] leading-relaxed">
              <strong className="text-[#0A192F]">Proposed Collaboration Model: </strong>
              The Living Laboratory is a structured initiative proposed in the September 2026
              Institutional Collaboration Proposal. It is designed to be hosted in partnership with an
              Australian university or research precinct to conduct structured, evidence-led pilots.
            </p>
          </div>
        </div>

        {/* Two-Column Visual & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          {/* Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/living-lab-pavilion.jpg"
                  alt="High-tech university living laboratory testbed showing timber glulam structure, modular interior bays, and research desks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Architectural Caption */}
              <div className="p-5 bg-white border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between text-xs text-[#0A192F] font-semibold mb-1">
                  <span>Physical Testbed Environment</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B]">
                    Concept Test Bay
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Configurable spatial bays allowing iterative assembly, acoustic monitoring,
                  sensor telemetry, and facility management drills under realistic institutional conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Six Living Lab Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
              Core Living Laboratory Collaboration Activities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {OBJECTIVES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 hover:border-[#CBD5E1] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-semibold text-[#0A192F] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-4">
              <a
                href="#workshop-form"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded bg-[#B8860B] text-white hover:bg-[#9E7309] shadow-sm transition-all"
              >
                <span>Explore the Living Laboratory</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
