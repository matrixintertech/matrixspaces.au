"use client";

import { useState } from "react";
import {
  Building2,
  Sliders,
  Hammer,
  Database,
  Activity,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Identify & Audit the Asset",
    subtitle: "Spatial context & performance requirements",
    icon: Building2,
    description:
      "The estate owner or project team identifies the building, campus floorplate, or institutional facility requiring new fit-out or low-disruption upgrade. Existing conditions, acoustic requirements, and operational constraints are codified.",
    action: "Asset baseline audit & spatial geometry mapping",
    deliverable: "Digital spatial brief & performance specification",
  },
  {
    step: "02",
    title: "Configure Standardised Systems",
    subtitle: "DfMA component selection & open BIM modelling",
    icon: Sliders,
    description:
      "Designers select pre-engineered wall modules, glazed partitions, ceiling service cassettes, and joinery interfaces from the standardised component library, embedding certified acoustic (Rw) and fire ratings directly into the design model.",
    action: "Modular component configuration & interface alignment",
    deliverable: "Installation-ready BIM schedules & manufacturing shop drawings",
  },
  {
    step: "03",
    title: "Precision Off-Site Delivery & Dry Assembly",
    subtitle: "Factory fabrication & zero-wet-trade installation",
    icon: Hammer,
    description:
      "Components are manufactured off-site to sub-millimetre tolerances and kitted by room or zone. On-site installation follows systematic dry-assembly steps, slashing site trade congestion, noise, dust, and downtime in occupied buildings.",
    action: "JIT floorplate delivery & rapid dry installation",
    deliverable: "Turnkey spatial handover with verified tolerance acceptance",
  },
  {
    step: "04",
    title: "Register Machine-Readable Identity",
    subtitle: "QR/NFC tagging & structured asset handover",
    icon: Database,
    description:
      "As components are secured in place, durable physical QR/NFC identity tags are linked to open-standard digital asset registers. Facility managers gain immediate, persistent access to warranties, maintenance manuals, and chain-of-custody data.",
    action: "Component identity registry & CAFM/IWMS sync",
    deliverable: "Complete digital twin asset register at physical handover",
  },
  {
    step: "05",
    title: "Monitor Condition & Preventive Care",
    subtitle: "Scheduled digital inspections & risk prioritisation",
    icon: Activity,
    description:
      "Facility teams carry out scheduled digital inspections using standardised mobile checklists. Asset condition telemetry tracks component wear and warranty expirations, automatically scheduling planned replacements before failure happens.",
    action: "Condition tracking & planned component exchange",
    deliverable: "Live asset health telemetry & predictable maintenance capex",
  },
  {
    step: "06",
    title: "Improve Lifecycle Performance & Circular Reuse",
    subtitle: "Non-destructive adaptation & closed-loop feedback",
    icon: RotateCcw,
    description:
      "When spatial requirements evolve or leases roll over, modular components are non-destructively demounted and reconfigured rather than demolished. Real-world operating telemetry feeds back into future design rules.",
    action: "Circular demounting, refurbishing & design refinement",
    deliverable: "100% reusable interior fabric & lower 30-year out-turn cost",
  },
];

export default function PlatformWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const current = WORKFLOW_STEPS[activeStep];

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Operating Model</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            How the Platform Works in Practice.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Matrix Spaces Australia bridges the gap between physical construction and ongoing asset stewardship.
            Explore the end-to-end workflow connecting physical components, digital records, and preventive care.
          </p>

          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE5D9] text-xs text-[#64748B] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] shrink-0" />
            <span>
              <strong className="text-[#0A192F]">Operating Architecture: </strong>
              Illustrating the intended platform operating model across institutional estates.
            </span>
          </div>
        </div>

        {/* 6-Step Visual Workflow Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Step List Navigation */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
              Sequential Platform Workflow
            </span>

            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                    isActive
                      ? "bg-[#FAF9F6] border-[#B8860B] shadow-2xs ring-1 ring-[#B8860B]/30"
                      : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#B8860B] text-white"
                          : "bg-[#F1F5F9] text-[#64748B]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono font-bold text-[#64748B]">
                          Step {item.step}
                        </span>
                      </div>
                      <h4
                        className={`text-xs sm:text-sm font-semibold transition-colors ${
                          isActive ? "text-[#0A192F]" : "text-[#334155]"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#B8860B] translate-x-0.5" : "text-[#CBD5E1]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Visualizer Card for Selected Step */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-6 shadow-2xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE5D9]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded bg-[#0A192F] text-white font-mono font-bold text-xs">
                    Step {current.step}
                  </span>
                  <span className="text-xs uppercase font-mono font-semibold text-[#B8860B]">
                    {current.subtitle}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#94A3B8]">
                  0{activeStep + 1} of 06
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#0A192F]">
                  {current.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Action and Deliverable Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE5D9]">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B] block">
                    Core Platform Action
                  </span>
                  <p className="text-xs font-semibold text-[#0A192F] leading-snug">
                    {current.action}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#B8860B] block">
                    Operational Deliverable
                  </span>
                  <p className="text-xs font-semibold text-[#0A192F] leading-snug flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                    <span>{current.deliverable}</span>
                  </p>
                </div>
              </div>

              {/* Progress Stepper Footer */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#64748B]">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-3 py-1.5 rounded border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] disabled:opacity-40 cursor-pointer font-semibold"
                >
                  Previous Step
                </button>
                <span className="font-mono text-[11px]">
                  Workflow Progression
                </span>
                <button
                  type="button"
                  disabled={activeStep === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-3 py-1.5 rounded border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] disabled:opacity-40 cursor-pointer font-semibold text-[#0A192F]"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
