"use client";

import { School, Landmark, Rocket, Factory, ArrowUpRight } from "lucide-react";

const PARTNER_CATEGORIES = [
  {
    icon: School,
    category: "Universities & Research",
    subtitle: "Academic benchmarking & testbed co-location",
    description:
      "Partnering with university faculties of architecture, civil engineering, and construction management. Opportunities include hosting the Living Laboratory, conducting independent empirical testing, publishing peer-reviewed findings, and integrating modern construction methods into postgraduate degrees.",
    potentialContributions: [
      "Precinct testbed host sites and research facilities",
      "Rigorous acoustic, thermal, and lifecycle data validation",
      "Student fellowships and modern methods curriculum integration",
      "Joint ARC / government research grant applications",
    ],
  },
  {
    icon: Landmark,
    category: "Government & Asset Owners",
    subtitle: "Public sector estates & sustainable infrastructure",
    description:
      "Collaborating with municipal, state, and Commonwealth asset custodians to tackle public building refurbishment backlogs, decarbonisation mandates, and public procurement efficiency without sacrificing architectural quality.",
    potentialContributions: [
      "Live estate pilot locations (civic, healthcare, education)",
      "Standardised modern procurement framework development",
      "Net-zero carbon embodied materials verification",
      "Public value and whole-of-life cost stewardship",
    ],
  },
  {
    icon: Rocket,
    category: "Incubators & Innovation Precincts",
    subtitle: "Commercialisation pathways & ecosystem acceleration",
    description:
      "Working within Australian innovation precincts, clean-tech accelerators, and proptech hubs to connect researchers, designers, and capital with scalable commercialisation pathways and national industry networks.",
    potentialContributions: [
      "Venture acceleration and ecosystem networking",
      "Interdisciplinary testbed facilitation",
      "Industry roundtable coordination and dissemination",
      "Strategic cross-sector partnership matchmaking",
    ],
  },
  {
    icon: Factory,
    category: "Strategic Industry Partners",
    subtitle: "Supply chain, fabrication & specialized trades",
    description:
      "Engaging Australian manufacturers, specialist subcontractors, acoustic engineers, and building product distributors to validate local supply chains, verify assembly tolerances, and train installer workforces.",
    potentialContributions: [
      "Advanced manufacturing capability and tooling alignment",
      "Subcontractor network onboarding and dry-trade training",
      "Logistics integration and packaging optimisation",
      "Continuous feedback on assembly mechanics and ergonomics",
    ],
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-24 lg:py-32 bg-white border-b border-[#E2E8F0] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <span>Collaboration Framework</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Partner Ecosystem: Collaboration at every stage.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Real built-environment innovation requires systemic alignment across institutional
            research, public asset stewardship, enterprise manufacturing, and trade capability.
            Matrix Spaces Australia outlines four collaborative pathways.
          </p>
        </div>

        {/* Four Typographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PARTNER_CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="p-8 rounded-2xl border border-[#E2E8F0] bg-[#FAF9F6] flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-xs transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#94A3B8]">
                      Ecosystem Sector 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#0A192F]">
                      {cat.category}
                    </h3>
                    <p className="text-xs font-medium text-[#B8860B] mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Potential Contributions */}
                  <div className="pt-4 border-t border-[#EAE5D9] space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#64748B]">
                      Potential Collaboration Roles:
                    </span>
                    <ul className="space-y-1.5">
                      {cat.potentialContributions.map((role) => (
                        <li
                          key={role}
                          className="text-xs text-[#334155] flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] shrink-0 mt-1.5" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE5D9]">
                  <a
                    href="#workshop-form"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A192F] hover:text-[#B8860B] transition-colors"
                  >
                    <span>Discuss Institutional Alignment</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
