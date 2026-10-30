"use client";

import Image from "next/image";
import { FlaskConical, Search, Scale, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";

const LAB_FUNCTIONS = [
  {
    icon: Search,
    title: "Applied Research & Telemetry",
    desc: "Testing real-world acoustic decoupling, thermal efficiency, and indoor environmental quality in controlled operating conditions.",
  },
  {
    icon: Scale,
    title: "Verified Asset Baselines",
    desc: "Gathering empirical data on maintainability, component lifespans, and whole-of-life cost performance prior to portfolio-scale rollouts.",
  },
  {
    icon: GraduationCap,
    title: "Workforce & Industry Learning",
    desc: "Immersing vocational apprentices, higher-degree researchers, and facility teams in modern dry-assembly and digital tagging methods.",
  },
  {
    icon: TrendingUp,
    title: "Reference Demonstration Site",
    desc: "Creating visible, evidence-backed proof of concept environments to give institutional asset owners certainty for broader adoption.",
  },
];

export default function LivingLabSection() {
  return (
    <section
      id="living-lab"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Research & Demonstration Initiative</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            The Living Laboratory: An Applied Research Testbed.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            As a supporting initiative within the platform vision, the proposed Living Laboratory model connects
            controlled real institutional assets, university researchers, and industry fabricators into an active demonstration environment.
          </p>
        </div>

        {/* Visual & Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Architectural Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#FAF9F6] shadow-2xs group">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/images/living-lab-pavilion.jpg"
                  alt="University living laboratory pavilion showing mass timber frame, modular test bays, and research workspaces"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Caption */}
              <div className="p-5 bg-white border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between text-xs text-[#0A192F] font-semibold mb-1">
                  <span>Collaborative Research & Demonstration Testbed</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B]">
                    Concept Test Environment
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Real asset environments allowing iterative acoustic monitoring, component tagging stress-tests,
                  and vocational skills development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Functions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE5D9]">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#64748B]">
                Intended Testbed Functions
              </span>
              <span className="text-[11px] font-mono text-[#B8860B]">Evidence-Led Innovation</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LAB_FUNCTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-2 hover:border-[#CBD5E1] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-[#0A192F]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#EAE5D9] flex items-center justify-between gap-4">
              <p className="text-xs text-[#64748B]">
                Interested in hosting or participating in a living laboratory testbed?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A192F] hover:text-[#B8860B] whitespace-nowrap transition-colors"
              >
                <span>Discuss Testbed Hosting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
