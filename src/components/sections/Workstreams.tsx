"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Hammer, RefreshCw, Activity, GraduationCap } from "lucide-react";

interface Workstream {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  image: string;
  icon: typeof Cpu;
}

const WORKSTREAMS: Workstream[] = [
  {
    id: "industrialised-interiors",
    number: "01",
    title: "Industrialised Interiors",
    headline: "Configurable components and installation-ready systems",
    description:
      "Engineered off-site interior assemblies manufactured to millimetre tolerances. Standardised acoustic wall panels, glazed partition modules, and ceiling service baffles designed for rapid on-site dry assembly without messy wet trades.",
    deliverables: [
      "Modular demountable wall systems",
      "Integrated acoustic ceiling cassettes",
      "Factory-finished joinery interfaces",
    ],
    image: "/images/workstream-industrialised.jpg",
    icon: Hammer,
  },
  {
    id: "retrofit-kits",
    number: "02",
    title: "Retrofit Kits",
    headline: "Repeatable upgrades for existing institutional assets",
    description:
      "Standardised retrofit packages engineered specifically for existing tertiary, civic, and commercial estates. Enables programmatic acoustic, thermal, and spatial upgrades without gut-rehabilitating building fabric or disrupting core operations.",
    deliverables: [
      "Non-structural internal lining kits",
      "High-performance glazed partitions",
      "Zero-downtime floorplate adaptations",
    ],
    image: "/images/workstream-retrofit.jpg",
    icon: RefreshCw,
  },
  {
    id: "asset-intelligence",
    number: "03",
    title: "Asset Intelligence",
    headline: "Component identity, condition information and service history",
    description:
      "Every manufactured component is tagged with a durable physical-digital identifier linking to open BIM specifications, material declarations, warranty data, and ongoing inspection records throughout the asset lifecycle.",
    deliverables: [
      "Component-level QR & NFC identity tagging",
      "Structured open-format asset registries",
      "Direct integration with facility management systems",
    ],
    image: "/images/workstream-intelligence.jpg",
    icon: Cpu,
  },
  {
    id: "preventive-asset-care",
    number: "04",
    title: "Preventive Asset Care",
    headline: "Scheduled inspections and planned component replacement",
    description:
      "Transitioning facility stewardship from disruptive emergency repairs to condition-based inspection routines. Predictable maintenance cycles protect long-term capital value, extend component lifespans, and avoid unbudgeted tenant disruption.",
    deliverables: [
      "Standardised condition inspection checklists",
      "Planned lifecycle replacement regimes",
      "Rapid component exchange protocols",
    ],
    image: "/images/workstream-preventive.jpg",
    icon: Activity,
  },
  {
    id: "skills-and-research",
    number: "05",
    title: "Skills & Applied Research",
    headline: "Applied research, training and industry collaboration",
    description:
      "Partnering with Australian universities, TAFE institutions, and trade bodies to codify industrialised interior methods into vocational curricula, academic benchmarking, and next-generation built-environment skillsets.",
    deliverables: [
      "Vocational installation certifications",
      "Lifecycle environmental benchmarking",
      "Joint university-industry research testbeds",
    ],
    image: "/images/workstream-skills.jpg",
    icon: GraduationCap,
  },
];

export default function Workstreams() {
  return (
    <section
      id="workstreams"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="w-full space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
              <span>Five Workstreams</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
              One connected approach.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Five interlocking workstreams connecting physical manufacturing, digital asset
              intelligence, ongoing preventive care, and workforce capability across Australia.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <a
              href="#platform"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A192F] hover:text-[#B8860B] transition-colors"
            >
              <span>See lifecycle integration</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Five Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WORKSTREAMS.map((ws, idx) => {
            const Icon = ws.icon;
            // Make 4th and 5th items span harmoniously on larger screens or maintain tight grid
            const isWide = idx >= 3;
            return (
              <div
                key={ws.id}
                className={`group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_30px_rgba(10,25,47,0.06)] hover:border-[#CBD5E1] ${
                  isWide ? "lg:col-span-1" : "lg:col-span-1"
                }`}
              >
                <div>
                  {/* Architectural Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                    <Image
                      src={ws.image}
                      alt={ws.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono font-semibold text-[#0A192F] border border-[#E2E8F0] shadow-xs">
                      Workstream {ws.number}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-[#FBF6E9] text-[#B8860B] flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#0A192F] tracking-tight">
                        {ws.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#1E293B] leading-snug">
                      {ws.headline}
                    </p>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {ws.description}
                    </p>

                    {/* Key Elements */}
                    <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">
                        Focus Areas
                      </p>
                      <ul className="space-y-1">
                        {ws.deliverables.map((item) => (
                          <li
                            key={item}
                            className="text-[12px] text-[#475569] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/70 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#0A192F] group-hover:text-[#B8860B] transition-colors">
                  <span>Explore workstream methodology</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}

          {/* Sixth Synthesis Card to complete grid symmetry */}
          <div className="bg-[#0A192F] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-[#172A45] shadow-sm lg:col-span-1">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#B8860B]">
                Cross-Stream Cohesion
              </span>
              <h3 className="font-serif text-2xl font-medium tracking-tight text-white leading-snug">
                Engineered to function as an integrated ecosystem.
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Rather than treating design, manufacturing, information, and maintenance as
                isolated stages, Matrix Spaces Australia aligns all five workstreams into a continuous
                loop of performance and verification.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs text-[#CBD5E1]">
                Interested in co-designing a workstream pilot?
              </div>
              <a
                href="#workshop-form"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold rounded bg-[#B8860B] text-white hover:bg-[#9E7309] transition-all"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
