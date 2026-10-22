"use client";

import { ArrowRight, Clock, Check, Compass } from "lucide-react";

const STAGES = [
  {
    phase: "Stage 01",
    title: "Co-design",
    duration: "90 Days",
    tagline: "Scope definition & feasibility assessment",
    deliverables: [
      "Define project scope and institutional objectives",
      "Assess spatial feasibility and structural compatibility",
      "Agree empirical evaluation criteria and KPI baselines",
      "Establish governance, IP, and stakeholder protocols",
    ],
    gate: "Phase Gate: Feasibility sign-off and stakeholder alignment charter.",
  },
  {
    phase: "Stage 02",
    title: "Design & Validation",
    duration: "3–6 Months",
    tagline: "Prototyping & performance testing",
    deliverables: [
      "Develop customised component specifications in BIM",
      "Conduct off-site prototype test builds and acoustic tests",
      "Validate fire and environmental compliance standards",
      "Refine logistics and installer dry-assembly sequencing",
    ],
    gate: "Phase Gate: Technical prototype verification and installation sign-off.",
  },
  {
    phase: "Stage 03",
    title: "Live Pilot",
    duration: "6–12 Months",
    tagline: "Real-world institutional deployment",
    deliverables: [
      "Install components within an active university or civic facility",
      "Register digital component asset IDs into facility systems",
      "Continuously monitor indoor environmental & acoustic metrics",
      "Execute scheduled preventive inspection drills and adjustments",
    ],
    gate: "Phase Gate: Mid-term occupancy review and operational stress test.",
  },
  {
    phase: "Stage 04",
    title: "Adoption Decision",
    duration: "Decision Point",
    tagline: "Outcome evaluation & estate-wide roadmap",
    deliverables: [
      "Evaluate performance data against initial Stage 01 baselines",
      "Publish comprehensive empirical learnings and financial report",
      "Synthesise installer and occupant feedback",
      "Formulate multi-year rollout roadmap across broader campus estate",
    ],
    gate: "Outcome: Institutional adoption or programmatic scaling decision.",
  },
];

export default function PilotPathway() {
  return (
    <section
      id="pilot-pathway"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>Adoption Pathway</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            From Pilot to Scale: A structured adoption pathway.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A staged, risk-managed progression proposed to help Australian institutions validate
            performance, logistics, and cost certainty before committing to large-scale capital deployment.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div
            className="hidden lg:block absolute top-[52px] left-8 right-8 h-0.5 bg-[#E2E8F0] z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-[#B8860B] via-[#B8860B]/60 to-[#E2E8F0] w-3/4" />
          </div>

          {/* 4 Stages Grid / Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] flex flex-col justify-between shadow-xs hover:border-[#CBD5E1] transition-all duration-200 relative"
              >
                {/* Stage Header & Duration Pill */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8860B] bg-[#FBF6E9] px-2.5 py-1 rounded-md border border-[#B8860B]/20">
                      {stage.phase}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A192F]">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>{stage.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0A192F] tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium mt-1 mb-4 leading-snug">
                    {stage.tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#94A3B8]">
                      Core Milestones:
                    </span>
                    <ul className="space-y-2">
                      {stage.deliverables.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-[#475569] flex items-start gap-2 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gate Outcome Box */}
                <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                  <p className="text-[11px] text-[#0A192F] font-medium leading-relaxed bg-[#F8FAFC] p-3 rounded-lg border border-[#E2E8F0]">
                    {stage.gate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pathway Note */}
        <div className="mt-12 p-5 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <p className="text-xs text-[#475569]">
              <strong className="text-[#0A192F]">Governance Framework: </strong>
              Each phase incorporates explicit review checkpoints to ensure institutional alignment,
              budget protection, and safety compliance before advancing.
            </p>
          </div>
          <a
            href="#workshop-form"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A192F] hover:text-[#B8860B] whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Request Pathway Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
