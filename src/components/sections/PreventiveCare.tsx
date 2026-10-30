"use client";

import {
  Activity,
  CalendarCheck,
  RefreshCw,
  Calculator,
  CheckCircle2,
} from "lucide-react";

const COMPARISON = [
  {
    topic: "Inspection Regimes",
    traditional: "Disruptive emergency callouts after components break or fail.",
    matrixSpaces: "Scheduled digital condition audits tracking wear before failure occurs.",
  },
  {
    topic: "Service Records",
    traditional: "Static paper binders or lost handover manuals stored in basements.",
    matrixSpaces: "Persistent QR/NFC telemetry with instant access to warranties and specs.",
  },
  {
    topic: "Component Replacement",
    traditional: "Invasive demolition, noisy wet trades, dust, and tenant displacement.",
    matrixSpaces: "Pre-kitted dry component swap-outs conducted within hours, not weeks.",
  },
  {
    topic: "Budget & Capex",
    traditional: "Unbudgeted capital spikes driven by premature emergency failures.",
    matrixSpaces: "Transparent 15–30 year lifecycle cost forecasting and planned capex.",
  },
];

const PREVENTIVE_WORKFLOW = [
  {
    number: "01",
    title: "Scheduled Digital Inspections",
    desc: "Facility technicians scan physical QR tags with handheld devices, running standardised condition checklists across acoustic seals, latch mechanics, and surface integrity.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Risk & Wear Prioritisation",
    desc: "Automated telemetry flags components approaching maintenance thresholds or warranty expirations, ranking tasks by risk to operational continuity.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Rapid Component Exchange",
    desc: "When a component reaches end-of-service, a factory-identical replacement arrives pre-finished for rapid dry-assembly swap-out without disruptive demolition.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Lifecycle Cost Visibility",
    desc: "Portfolio directors review real-time condition analytics across multi-building estates, predicting capital expenditure with audit-grade precision.",
    icon: Calculator,
  },
];

export default function PreventiveCare() {
  return (
    <section
      id="preventive-care"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Activity className="w-3.5 h-3.5" />
            <span>Whole-of-Life Stewardship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Preventive Asset Care: Protect Capital Value.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Transitioning facility management from emergency intervention to proactive lifecycle care.
            Structured asset information enables scheduled condition monitoring and non-invasive planned replacement.
          </p>
        </div>

        {/* 4-Step Preventive Care Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PREVENTIVE_WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-2xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#B8860B] bg-[#FBF6E9] px-2.5 py-1 rounded">
                      Step {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#0A192F] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0A192F]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reactive vs Preventive Comparison Matrix */}
        <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE5D9] mb-6">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-[#B8860B]">
                Operating Model Comparison
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A192F]">
                Traditional Reactive Maintenance vs. Matrix Spaces Preventive Care
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#64748B] hidden sm:inline-block">
              Lifecycle Economics
            </span>
          </div>

          <div className="space-y-4">
            {COMPARISON.map((row) => (
              <div
                key={row.topic}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl border border-[#F1F5F9] hover:bg-[#FAF9F6] transition-colors"
              >
                <div className="md:col-span-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A192F]">
                    {row.topic}
                  </h4>
                </div>

                <div className="md:col-span-4">
                  <span className="text-[10px] uppercase font-mono font-semibold text-red-600 block mb-0.5">
                    Traditional Approach
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <span className="text-[10px] uppercase font-mono font-semibold text-[#0A192F] flex items-center gap-1 mb-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#B8860B]" />
                    Matrix Spaces Preventive Stewardship
                  </span>
                  <p className="text-xs text-[#1E293B] font-medium leading-relaxed">
                    {row.matrixSpaces}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
