"use client";

import {
  School,
  Landmark,
  Rocket,
  Factory,
  Users2,
  CheckCircle2,
} from "lucide-react";

const SECTORS = [
  {
    icon: School,
    title: "Universities & Research",
    subtitle: "Empirical benchmarking & testbeds",
    description:
      "Collaborating on living lab testbed co-location, higher-degree research, independent acoustic and lifecycle verification, and embedding modern construction methods into vocational and engineering curricula.",
    contributions: [
      "Precinct testbed host sites and research facilities",
      "Independent acoustic, thermal, and lifecycle data validation",
      "Work-integrated learning (WIL) and curriculum development",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Asset Owners",
    subtitle: "Public estates & sustainable infrastructure",
    description:
      "Working with public sector asset custodians to tackle refurbishment backlogs, low-disruption social housing upgrades, and whole-of-life cost stewardship across civic and healthcare portfolios.",
    contributions: [
      "Live estate pilot opportunities across civic, health & housing",
      "Standardised modern procurement framework development",
      "Net-zero embodied carbon materials validation",
    ],
  },
  {
    icon: Rocket,
    title: "Incubators & Innovation Precincts",
    subtitle: "Ecosystem acceleration & translation",
    description:
      "Connecting multidisciplinary research with scalable commercialisation pathways, Australian proptech networks, and strategic cross-sector industry roundtables.",
    contributions: [
      "Innovation precinct testbed facilitation",
      "Venture acceleration & industry stakeholder roundtables",
      "Cross-sector partnership matchmaking",
    ],
  },
  {
    icon: Factory,
    title: "Strategic Industry & Supply Chain",
    subtitle: "Advanced fabrication & delivery trades",
    description:
      "Engaging Australian manufacturers, specialist trade subcontractors, and digital engineering specialists to establish local supply chains, verified tolerances, and trained installer networks.",
    contributions: [
      "Advanced off-site manufacturing and tooling alignment",
      "Accredited dry-trade installer onboarding & training",
      "Delivery assurance and code-compliant engineering",
    ],
  },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Users2 className="w-3.5 h-3.5" />
            <span>Collaboration Framework</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            An Ecosystem for Scaled Built-Environment Innovation.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Real built-environment transformation requires systemic collaboration across research,
            public asset stewardship, advanced manufacturing, and specialized trade capability.
          </p>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs text-xs text-[#64748B] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] shrink-0" />
            <span>
              <strong className="text-[#0A192F]">Intended Collaboration Pathways: </strong>
              Illustrating the ecosystem of Australian institutions, public asset custodians, and industry partners engaging with the platform.
            </span>
          </div>
        </div>

        {/* Four Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-2xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#94A3B8]">
                      Sector 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-serif font-bold text-[#0A192F]">
                      {sec.title}
                    </h3>
                    <p className="text-[11px] font-medium text-[#B8860B] mt-0.5">
                      {sec.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#64748B]">
                      Collaboration Roles:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#334155]">
                      {sec.contributions.map((c) => (
                        <li key={c} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
