"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Hammer, RefreshCw, Activity, GraduationCap, Sparkles } from "lucide-react";

interface Capability {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  image: string;
  icon: typeof Cpu;
  actionHref: string;
  actionText: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "industrialised-interiors",
    tag: "Capability 01",
    title: "Industrialised Interiors",
    headline: "Configurable components & repeatable installation systems",
    description:
      "Precision off-site engineered modular interior systems designed for rapid dry assembly. Standardised acoustic wall panels, glazed partition modules, and ceiling service baffles manufactured to millimetre tolerances without messy on-site wet trades.",
    features: [
      "Modular demountable wall and partition assemblies",
      "Integrated acoustic ceiling cassettes & service baffles",
      "Factory-finished joinery interfaces with standard junctions",
      "Strict compliance with National Construction Code (NCC) acoustic & fire standards",
    ],
    image: "/images/workstream-industrialised.jpg",
    icon: Hammer,
    actionHref: "#physical-systems",
    actionText: "Explore Physical Systems",
  },
  {
    id: "retrofit-kits",
    tag: "Capability 02",
    title: "Retrofit Kits",
    headline: "Structured upgrade packages for existing buildings",
    description:
      "Standardised retrofit packages engineered specifically for operational tertiary, healthcare, commercial, and occupied housing estates. Solves major refurbishment backlogs without gut-rehabilitating building fabric or requiring prolonged decanting.",
    features: [
      "Occupied housing & student accommodation upgrade kits",
      "Clinical healthcare & university laboratory acoustic packages",
      "Zero-downtime, non-invasive floorplate reconfigurations",
      "Dry-assembly sequence minimising dust, noise, and tenant displacement",
    ],
    image: "/images/workstream-retrofit.jpg",
    icon: RefreshCw,
    actionHref: "#physical-systems",
    actionText: "View Retrofit Approaches",
  },
  {
    id: "asset-intelligence",
    tag: "Capability 03",
    title: "Asset Intelligence",
    headline: "Component identity, asset condition, warranties & service history",
    description:
      "Every physical component is registered with a machine-readable QR/NFC identity tag linking directly to open BIM specifications, material declarations, warranty logs, and inspection histories in an open-format digital asset register.",
    features: [
      "Durable physical-digital QR & NFC component tagging",
      "Structured open-standard digital asset registries (CAFM / BIM compatible)",
      "Instant access to warranty terms, manufacturer specifications, and certifications",
      "Continuous component condition and maintenance telemetry tracking",
    ],
    image: "/images/workstream-intelligence.jpg",
    icon: Cpu,
    actionHref: "#asset-intelligence",
    actionText: "Preview Digital Dashboard",
  },
  {
    id: "preventive-asset-care",
    tag: "Capability 04",
    title: "Preventive Asset Care",
    headline: "Inspections, maintenance planning & lifecycle decisions",
    description:
      "Transitioning facility management from disruptive emergency repairs to condition-based inspection routines. Predictable maintenance cycles protect long-term capital value, extend component lifespans, and enable non-destructive component exchange.",
    features: [
      "Standardised digital condition inspection checklists",
      "Risk-weighted lifecycle replacement schedules",
      "Non-destructive component swap-outs without trade disruption",
      "Portfolio-level lifecycle capex forecasting and circular reuse tracking",
    ],
    image: "/images/workstream-preventive.jpg",
    icon: Activity,
    actionHref: "#preventive-care",
    actionText: "See Preventive Stewardship",
  },
  {
    id: "skills-and-research",
    tag: "Capability 05",
    title: "Skills & Research",
    headline: "Applied research, workforce development & industry learning",
    description:
      "Developing sovereign Australian capability across construction, manufacturing, digital systems, and asset management. Built through collaborative university testbeds, accredited trade micro-credentials, and undergraduate/postgraduate work-integrated learning.",
    features: [
      "Work-integrated learning (WIL) for university students",
      "Accredited modular installer and dry-trade micro-credentials",
      "Practitioner-led applied research and empirical benchmarking",
      "Cross-sector capability development across modern methods of construction",
    ],
    image: "/images/workstream-skills.jpg",
    icon: GraduationCap,
    actionHref: "#living-lab",
    actionText: "Explore Living Lab & Research",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Five Integrated Capabilities.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Matrix Spaces Australia brings together physical manufacturing, precision retrofit, digital
            intelligence, whole-of-life preventive maintenance, and applied research into one cohesive system.
          </p>
        </div>

        {/* 5 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(10,25,47,0.07)] hover:border-[#CBD5E1]"
              >
                <div>
                  {/* High Quality Architectural Visual */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                    <Image
                      src={cap.image}
                      alt={cap.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-semibold text-[#0A192F] border border-[#E2E8F0] shadow-xs">
                      {cap.tag}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#0A192F] tracking-tight">
                        {cap.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#1E293B] leading-snug">
                      {cap.headline}
                    </p>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Features List */}
                    <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">
                        Key System Features
                      </span>
                      <ul className="space-y-1.5">
                        {cap.features.map((feat) => (
                          <li
                            key={feat}
                            className="text-[12px] text-[#475569] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                  <a
                    href={cap.actionHref}
                    className="flex items-center justify-between text-xs font-semibold text-[#0A192F] group-hover:text-[#B8860B] transition-colors"
                  >
                    <span>{cap.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Sixth Synthesis Card to complete grid elegance */}
          <div className="bg-[#0A192F] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#172A45] shadow-sm lg:col-span-1">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B8860B]">
                Cross-Capability Synergy
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-white leading-snug">
                One platform. Zero disconnected phases.
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Traditional construction treats physical delivery, asset records, and facilities maintenance
                as separate silos. Matrix Spaces Australia synchronises all five capabilities into a closed-loop
                system where operational performance continuously refines future building designs.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <p className="text-xs text-[#CBD5E1]">
                Ready to review how these capabilities apply to your estate portfolio?
              </p>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#B8860B] text-white hover:bg-[#9E7309] transition-all"
              >
                <span>Request Platform Demonstration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
