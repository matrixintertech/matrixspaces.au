"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Layers,
  Clock,
  EyeOff,
  FileQuestion,
  Wrench,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const CHALLENGES = [
  {
    icon: Layers,
    title: "Fragmented design and delivery",
    problem:
      "Siloed architectural, engineering, and fit-out trades create coordination gaps, unexpected rework, and inconsistent quality across projects.",
    solution:
      "Integrated industrialised manufacturing with modular tolerances and pre-engineered interfaces.",
  },
  {
    icon: Clock,
    title: "High costs and timeline pressures",
    problem:
      "On-site wet trades and bespoke site adjustments drive project delays, variable labour productivity, and escalating capital expenditure.",
    solution:
      "Off-site fabrication and precision dry assembly to shorten on-site programme cycles significantly.",
  },
  {
    icon: EyeOff,
    title: "Limited visibility into asset performance",
    problem:
      "Building owners lack real-time or structured intelligence regarding component wear, acoustic ratings, and environmental performance post-occupancy.",
    solution:
      "Component identity tagging that registers physical building elements into structured digital records.",
  },
  {
    icon: FileQuestion,
    title: "Information loss during handover",
    problem:
      "As-built documentation is often incomplete, static, or disconnected from operational facility maintenance workflows.",
    solution:
      "Direct lineage between design models, fabricated components, and ongoing maintenance schedules.",
  },
  {
    icon: Wrench,
    title: "Reactive maintenance and downtime",
    problem:
      "Unplanned failures lead to disruption of core institutional services, costly emergency replacements, and premature disposal.",
    solution:
      "Preventive inspection protocols with planned component replacement and non-invasive service access.",
  },
  {
    icon: Leaf,
    title: "The need for sustainable, adaptable spaces",
    problem:
      "Rigid conventional fit-outs result in high demolition waste when operational requirements evolve or leases roll over.",
    solution:
      "Demountable interior components designed for reconfiguration, circular reuse, and low embodied carbon.",
  },
];

export default function Opportunity() {
  const [activeChallenge, setActiveChallenge] = useState(0);

  return (
    <section
      id="opportunity"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>The Opportunity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            From complex buildings to lasting value.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Australia’s institutional and commercial built environment faces compounding
            pressures across delivery timelines, lifecycle expenditure, and sustainability.
            Matrix Spaces Australia proposes an integrated methodology to replace fragmentation
            with connected physical-digital systems.
          </p>
        </div>

        {/* Interactive Lifecycle Cutaway + Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Architectural Cutaway Illustration Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#FAF9F6] shadow-sm">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/opportunity-cutaway.jpg"
                  alt="Architectural isometric cutaway showing integrated modular ceilings, demountable walls, service voids, and mass timber structure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Technical Caption Box */}
              <div className="p-5 border-t border-[#E2E8F0] bg-white">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#0A192F]">
                    Building Systems Anatomy
                  </span>
                  <span className="text-[11px] text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded">
                    Axonometric Lifecycle Analysis
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Integrating prefabricated ceiling service zones, demountable modular wall
                  assemblies, and accessible floor plenums to decouple long-life structural
                  frames from short-cycle interior adaptations.
                </p>
              </div>
            </div>

            {/* Active Highlight Summary */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-[#CBD5E1] text-[#B8860B] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0A192F]">
                    Proposed Solution Approach
                  </h4>
                  <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                    {CHALLENGES[activeChallenge].solution}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Six Challenges Interactive Accordion / Selector */}
          <div className="lg:col-span-6 space-y-3">
            <div className="mb-4">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                Key Structural Challenges Addressed
              </h3>
            </div>

            <div className="space-y-2.5">
              {CHALLENGES.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeChallenge === idx;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveChallenge(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveChallenge(idx);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FAF9F6] border-[#B8860B] shadow-xs"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#FDFBF7]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? "bg-[#B8860B] text-white"
                              : "bg-[#F1F5F9] text-[#475569]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-sm font-semibold transition-colors ${
                            isActive ? "text-[#0A192F]" : "text-[#1E293B]"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#94A3B8]">
                        0{idx + 1}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-[#EAE5D9] text-xs text-[#475569] space-y-2">
                        <p className="leading-relaxed">
                          <strong className="text-[#0A192F]">Current constraint: </strong>
                          {item.problem}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
