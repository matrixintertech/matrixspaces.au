"use client";

import { useState } from "react";
import {
  PenTool,
  Truck,
  Database,
  Wrench,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface PlatformLayer {
  id: string;
  name: string;
  tagline: string;
  category: string;
  icon: typeof PenTool;
  description: string;
  keyOutputs: string[];
  interconnection: string;
}

const LAYERS: PlatformLayer[] = [
  {
    id: "design",
    name: "Design & Standardisation",
    category: "Layer 01",
    tagline: "Modular rules, parametric assemblies & early coordination",
    icon: PenTool,
    description:
      "Design teams work with pre-engineered component libraries. Standardised junctions, dimensional grids, and acoustic ratings eliminate recurring design friction and de-risk downstream installation.",
    keyOutputs: [
      "Open BIM parametric family components",
      "Standardised acoustic & fire performance certifications",
      "Design-for-manufacture and assembly (DfMA) protocols",
    ],
    interconnection: "Feeds precise manufacturing tolerances directly to Delivery & fabrication.",
  },
  {
    id: "delivery",
    name: "Industrialised Delivery",
    category: "Layer 02",
    tagline: "Off-site precision manufacturing & dry-assembly logistics",
    icon: Truck,
    description:
      "Components are manufactured off-site in controlled conditions and kitted by room or floorplate. On-site installation follows systematic dry-assembly steps, reducing project timelines and trade congestion.",
    keyOutputs: [
      "Sequenced just-in-time site deliveries",
      "Pre-assembled partition and service modules",
      "Zero-wet-trade installation sequence",
    ],
    interconnection: "Embeds unique physical asset IDs into every installed element.",
  },
  {
    id: "asset-information",
    name: "Asset Information & Identity",
    category: "Layer 03",
    tagline: "Structured physical-digital records and open asset schemas",
    icon: Database,
    description:
      "Each installed partition, panel, and fixture carries a persistent identity tag. Facility managers access material provenance, maintenance instructions, and warranty terms without sorting through static paper manuals.",
    keyOutputs: [
      "Persistent QR/NFC component identity tags",
      "Structured open-standard digital asset register",
      "Complete chain-of-custody and material declarations",
    ],
    interconnection: "Provides the underlying data foundation for Preventive Asset Care.",
  },
  {
    id: "maintenance",
    name: "Preventive Care & Lifecycle",
    category: "Layer 04",
    tagline: "Predictive inspection regimes & non-invasive component replacement",
    icon: Wrench,
    description:
      "Scheduled inspections and condition benchmarking replace reactive emergency interventions. When reconfiguration or replacement is required, modular components are easily demounted and repurposed.",
    keyOutputs: [
      "Condition-based lifecycle inspection schedules",
      "Standardised replacement component logistics",
      "Circular demounting and reuse guidelines",
    ],
    interconnection: "Feeds operational performance data back into future Design refinements.",
  },
  {
    id: "people",
    name: "People, Skills & Research",
    category: "Layer 05",
    tagline: "Accredited trade capabilities & university research collaboration",
    icon: Users,
    description:
      "Upskilling Australian trade partners, installers, and facility managers in modern methods of construction, while partnering with universities to empirically evaluate performance and circular economy outcomes.",
    keyOutputs: [
      "Certified installer training modules",
      "Empirical lifecycle and carbon benchmarking",
      "Applied industry research publications",
    ],
    interconnection: "Underpins human capability across all four physical-digital layers.",
  },
];

export default function Platform() {
  const [activeLayerId, setActiveLayerId] = useState("design");
  const activeLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[0];

  return (
    <section
      id="platform"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>Our Platform</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            A connected platform for the entire lifecycle.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Matrix Spaces Australia bridges the historic divide between design, physical delivery,
            information records, ongoing facility maintenance, and skilled people into a coherent,
            repeatable operating model.
          </p>
        </div>

        {/* Interactive Exploded Axonometric Layers Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Layer Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
              Select Lifecycle Layer
            </span>
            {LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                    isActive
                      ? "bg-[#FAF9F6] border-[#B8860B] shadow-xs ring-1 ring-[#B8860B]/30"
                      : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
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
                          {layer.category}
                        </span>
                      </div>
                      <h3
                        className={`text-sm font-semibold transition-colors ${
                          isActive ? "text-[#0A192F]" : "text-[#334155]"
                        }`}
                      >
                        {layer.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono transition-colors ${
                      isActive ? "text-[#B8860B] font-bold" : "text-[#94A3B8]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Exploded Isometric Diagram Visualizer & Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visualizer Schematic Canvas / Isometric Diagram */}
            <div className="relative rounded-2xl border border-[#E2E8F0] bg-[#FAF9F6] p-6 sm:p-8 overflow-hidden shadow-xs">
              {/* Top Diagram Metadata Header */}
              <div className="flex items-center justify-between border-b border-[#EAE5D9] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B8860B]" />
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#0A192F]">
                    {activeLayer.category}: {activeLayer.name}
                  </span>
                </div>
                <span className="text-[11px] text-[#64748B] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded">
                  Conceptual Architecture Schema
                </span>
              </div>

              {/* Exploded Axonometric Layers Graphic */}
              <div className="relative w-full h-56 sm:h-64 flex items-center justify-center">
                <svg
                  className="w-full h-full max-w-md drop-shadow-md"
                  viewBox="0 0 500 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Exploded axonometric schematic diagram showing building layers"
                >
                  {/* Layer 5: People & Research (Top canopy / roof) */}
                  <g
                    className={`transition-all duration-300 cursor-pointer ${
                      activeLayerId === "people"
                        ? "opacity-100 translate-y-[-8px]"
                        : "opacity-45 hover:opacity-75"
                    }`}
                    onClick={() => setActiveLayerId("people")}
                  >
                    <polygon
                      points="250,20 420,70 250,120 80,70"
                      fill={activeLayerId === "people" ? "#FBF6E9" : "#FFFFFF"}
                      stroke={activeLayerId === "people" ? "#B8860B" : "#CBD5E1"}
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="75"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="12"
                      fontWeight="600"
                    >
                      05. People, Skills & Research
                    </text>
                  </g>

                  {/* Layer 4: Maintenance & Care */}
                  <g
                    className={`transition-all duration-300 cursor-pointer ${
                      activeLayerId === "maintenance"
                        ? "opacity-100 translate-y-[-4px]"
                        : "opacity-45 hover:opacity-75"
                    }`}
                    onClick={() => setActiveLayerId("maintenance")}
                  >
                    <polygon
                      points="250,55 420,105 250,155 80,105"
                      fill={activeLayerId === "maintenance" ? "#FBF6E9" : "#FFFFFF"}
                      stroke={activeLayerId === "maintenance" ? "#B8860B" : "#CBD5E1"}
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="110"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="12"
                      fontWeight="600"
                    >
                      04. Preventive Care & Lifecycle
                    </text>
                  </g>

                  {/* Layer 3: Asset Information */}
                  <g
                    className={`transition-all duration-300 cursor-pointer ${
                      activeLayerId === "asset-information"
                        ? "opacity-100 translate-y-[-2px]"
                        : "opacity-45 hover:opacity-75"
                    }`}
                    onClick={() => setActiveLayerId("asset-information")}
                  >
                    <polygon
                      points="250,90 420,140 250,190 80,140"
                      fill={activeLayerId === "asset-information" ? "#FBF6E9" : "#FFFFFF"}
                      stroke={activeLayerId === "asset-information" ? "#B8860B" : "#CBD5E1"}
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="145"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="12"
                      fontWeight="600"
                    >
                      03. Asset Information & Digital Identity
                    </text>
                  </g>

                  {/* Layer 2: Industrialised Delivery */}
                  <g
                    className={`transition-all duration-300 cursor-pointer ${
                      activeLayerId === "delivery"
                        ? "opacity-100"
                        : "opacity-45 hover:opacity-75"
                    }`}
                    onClick={() => setActiveLayerId("delivery")}
                  >
                    <polygon
                      points="250,125 420,175 250,225 80,175"
                      fill={activeLayerId === "delivery" ? "#FBF6E9" : "#FFFFFF"}
                      stroke={activeLayerId === "delivery" ? "#B8860B" : "#CBD5E1"}
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="180"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="12"
                      fontWeight="600"
                    >
                      02. Industrialised Interior Delivery
                    </text>
                  </g>

                  {/* Layer 1: Design & Standardisation (Base plinth) */}
                  <g
                    className={`transition-all duration-300 cursor-pointer ${
                      activeLayerId === "design"
                        ? "opacity-100 translate-y-[2px]"
                        : "opacity-45 hover:opacity-75"
                    }`}
                    onClick={() => setActiveLayerId("design")}
                  >
                    <polygon
                      points="250,160 420,210 250,260 80,210"
                      fill={activeLayerId === "design" ? "#FBF6E9" : "#FFFFFF"}
                      stroke={activeLayerId === "design" ? "#B8860B" : "#CBD5E1"}
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="215"
                      textAnchor="middle"
                      fill="#0A192F"
                      fontSize="12"
                      fontWeight="600"
                    >
                      01. Design & Component Standardisation
                    </text>
                  </g>

                  {/* Vertical connecting datum line */}
                  <line
                    x1="250"
                    y1="20"
                    x2="250"
                    y2="260"
                    stroke="#B8860B"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Informative Layer Description Box */}
              <div className="mt-6 pt-5 border-t border-[#EAE5D9] space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#0A192F] mb-1">
                    {activeLayer.tagline}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {activeLayer.description}
                  </p>
                </div>

                {/* Outputs List */}
                <div className="space-y-2">
                  <span className="text-[11px] uppercase font-semibold tracking-wider text-[#64748B]">
                    Standardised Protocols & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeLayer.keyOutputs.map((out) => (
                      <div
                        key={out}
                        className="flex items-start gap-2 bg-white p-2 rounded border border-[#E2E8F0] text-[11px] text-[#334155]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interconnection Callout */}
                <div className="p-3 bg-[#F0F4F8] rounded-lg border border-[#CBD5E1] text-xs text-[#1E293B] flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>
                    <strong>Ecosystem Connection: </strong>
                    {activeLayer.interconnection}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
