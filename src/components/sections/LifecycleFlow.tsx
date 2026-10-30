"use client";

import { useState } from "react";
import {
  PenTool,
  Box,
  Truck,
  Cpu,
  Wrench,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface LifecycleStage {
  id: string;
  step: string;
  title: string;
  tagline: string;
  icon: typeof PenTool;
  description: string;
  inputs: string[];
  outputs: string[];
  interconnection: string;
}

const STAGES: LifecycleStage[] = [
  {
    id: "design",
    step: "01",
    title: "Design",
    tagline: "Parametric rules & DfMA engineering",
    icon: PenTool,
    description:
      "Architects and consultants design with pre-certified component libraries. Standardised junctions, dimensional modules, and pre-engineered acoustic and fire ratings de-risk the project before fabrication begins.",
    inputs: ["Architectural floorplates", "Performance briefs (Acoustic/Fire/Thermal)", "Open BIM standards"],
    outputs: ["Parametric component schedules", "Installation-ready shop models", "DfMA tolerance specifications"],
    interconnection: "Feeds exact dimensional tolerances directly into off-site fabrication.",
  },
  {
    id: "components",
    step: "02",
    title: "Components",
    tagline: "Off-site precision manufacturing",
    icon: Box,
    description:
      "Physical wall partitions, acoustic ceiling cassettes, and service interfaces are manufactured off-site to sub-millimetre tolerances under factory quality control, eliminating chaotic on-site craft variation.",
    inputs: ["DfMA fabrication models", "Certified raw materials", "Factory QA/QC protocols"],
    outputs: ["Precision demountable partitions", "Acoustic ceiling modules", "Pre-finished modular joinery"],
    interconnection: "Integrates durable QR/NFC physical tags during assembly before dispatch.",
  },
  {
    id: "delivery",
    step: "03",
    title: "Delivery",
    tagline: "Dry-assembly logistics & installation",
    icon: Truck,
    description:
      "Components are kitted by room or floorplate and delivered just-in-time. On-site installation follows systematic dry-assembly steps, slashing site trade congestion, noise, dust, and downtime in occupied facilities.",
    inputs: ["Floorplate kitting schedules", "JIT transport sequences", "Dry-trade assembly guides"],
    outputs: ["Zero-wet-trade installation", "Rapid floorplate handover", "First-time acceptance sign-off"],
    interconnection: "Activates digital asset records as physical components are secured in place.",
  },
  {
    id: "asset-intelligence",
    step: "04",
    title: "Asset Intelligence",
    tagline: "Digital component identity & handover",
    icon: Cpu,
    description:
      "Every installed element is registered with a persistent physical-digital identity. Facility managers access material provenance, acoustic ratings, warranties, and service histories through open data formats without paper manuals.",
    inputs: ["Physical QR/NFC identity tags", "As-built component records", "Supplier warranty declarations"],
    outputs: ["Structured digital asset register", "One-click warranty retrieval", "Direct CAFM / IWMS API sync"],
    interconnection: "Supplies real-time asset data to trigger preventive maintenance schedules.",
  },
  {
    id: "maintenance",
    step: "05",
    title: "Maintenance",
    tagline: "Condition-based preventive asset care",
    icon: Wrench,
    description:
      "Routine digital inspections replace emergency breakdown interventions. Facility teams inspect against clear component checklists, logging condition telemetry to detect wear before operational failure occurs.",
    inputs: ["Inspection schedules", "Onsite mobile condition logs", "Risk prioritisation algorithms"],
    outputs: ["Preventive service history", "Predictable capex replacement plans", "Non-invasive component swap-outs"],
    interconnection: "Feeds real-world component wear data directly into lifecycle improvement decisions.",
  },
  {
    id: "lifecycle",
    step: "06",
    title: "Lifecycle Improvement",
    tagline: "Circular adaptation & long-term performance",
    icon: TrendingUp,
    description:
      "When tenant layouts change or leases roll over, modular components are non-destructively demounted, reconfigured, or refurbished rather than demolished into landfill. Operational data refines future estate specifications.",
    inputs: ["Operational wear telemetry", "Spatial reconfiguration briefs", "Remanufacturing protocols"],
    outputs: ["100% circular component reuse", "Substantial waste diversion", "Optimised 15–30 year out-turn capex"],
    interconnection: "Closes the loop by feeding verified empirical performance back into Stage 01 Design.",
  },
];

export default function LifecycleFlow() {
  const [activeStageId, setActiveStageId] = useState("design");
  const currentStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <section
      id="lifecycle"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Built Environment, Connected</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            One Continuous Lifecycle. From Design to Circular Care.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Buildings traditionally suffer from fragmented handovers: design is divorced from fabrication,
            data is lost at project completion, and maintenance remains reactive. Matrix Spaces Australia unifies the
            entire lifecycle into a continuous operating loop.
          </p>
        </div>

        {/* 6-Stage Horizontal Stepper Tracker */}
        <div className="relative mb-12">
          {/* Connecting Line across desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-6 right-6 h-0.5 bg-[#E2E8F0] z-0"
            aria-hidden="true"
          >
            <div
              className="h-full bg-gradient-to-r from-[#B8860B] to-[#0A192F] transition-all duration-500"
              style={{
                width: `${
                  ((STAGES.findIndex((s) => s.id === activeStageId) + 1) /
                    STAGES.length) *
                  100
                }%`,
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between gap-3 cursor-pointer ${
                    isActive
                      ? "bg-[#FAF9F6] border-[#B8860B] shadow-sm ring-1 ring-[#B8860B]/30"
                      : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#B8860B] text-white"
                          : "bg-[#F1F5F9] text-[#64748B]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#94A3B8]">
                      {stage.step}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-semibold transition-colors ${
                        isActive ? "text-[#0A192F]" : "text-[#475569]"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-[#64748B] truncate mt-0.5">
                      {stage.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Focus Card for Active Lifecycle Stage */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-[#FAF9F6] p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Stage Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#0A192F] text-white font-mono text-xs font-bold">
                  Stage {currentStage.step}
                </span>
                <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#B8860B]">
                  {currentStage.tagline}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A192F]">
                {currentStage.title} in the Matrix Spaces Platform
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                {currentStage.description}
              </p>

              {/* Interconnection Banner */}
              <div className="p-3.5 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0A192F] flex items-center gap-2.5">
                <ArrowRight className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>
                  <strong>Lifecycle Interconnection: </strong>
                  {currentStage.interconnection}
                </span>
              </div>
            </div>

            {/* Right Column: Key Inputs & Outputs */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Inputs */}
              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#64748B] block">
                  Stage Inputs
                </span>
                <ul className="space-y-2 text-xs text-[#334155]">
                  {currentStage.inputs.map((inp) => (
                    <li key={inp} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748B] shrink-0 mt-1.5" />
                      <span>{inp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outputs */}
              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#B8860B] block">
                  Connected Deliverables
                </span>
                <ul className="space-y-2 text-xs text-[#0A192F]">
                  {currentStage.outputs.map((out) => (
                    <li key={out} className="flex items-start gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
