"use client";

import { useState } from "react";
import {
  Cpu,
  QrCode,
  Calendar,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ComponentItem {
  id: string;
  name: string;
  type: string;
  zone: string;
  acousticRating: string;
  fireRating: string;
  installedDate: string;
  warrantyExpiry: string;
  status: "Optimal" | "Inspection Due" | "Serviced";
  serviceCount: number;
}

const SAMPLE_COMPONENTS: ComponentItem[] = [
  {
    id: "MSA-AGP-304",
    name: "Demountable Acoustic Glazed Partition Module",
    type: "Glazed Assembly",
    zone: "Zone 3A — Executive Boardroom",
    acousticRating: "Rw 48 dB",
    fireRating: "-/60/60",
    installedDate: "14 Feb 2026",
    warrantyExpiry: "14 Feb 2036 (10 Yr)",
    status: "Optimal",
    serviceCount: 1,
  },
  {
    id: "MSA-DWP-118",
    name: "Modular Fabricated Acoustic Solid Wall Panel",
    type: "Solid Partition",
    zone: "Zone 3B — Quiet Research Pods",
    acousticRating: "Rw 52 dB",
    fireRating: "-/90/90",
    installedDate: "18 Feb 2026",
    warrantyExpiry: "18 Feb 2036 (10 Yr)",
    status: "Optimal",
    serviceCount: 0,
  },
  {
    id: "MSA-CCB-205",
    name: "Integrated Acoustic Ceiling Cassette & HVAC Plenums",
    type: "Ceiling Cassette",
    zone: "Zone 3C — Open Collaboration Hub",
    acousticRating: "NRC 0.85",
    fireRating: "Group 1",
    installedDate: "20 Feb 2026",
    warrantyExpiry: "20 Feb 2033 (7 Yr)",
    status: "Inspection Due",
    serviceCount: 2,
  },
  {
    id: "MSA-DRF-401",
    name: "Low-Disruption Internal Door Assembly & Drop Seal",
    type: "Acoustic Door",
    zone: "Zone 3A — Meeting Suite 1",
    acousticRating: "Rw 38 dB",
    fireRating: "-/30/30",
    installedDate: "22 Feb 2026",
    warrantyExpiry: "22 Feb 2031 (5 Yr)",
    status: "Optimal",
    serviceCount: 1,
  },
];

export default function AssetIntelligenceUI() {
  const [activeTab, setActiveTab] = useState<"register" | "detail" | "schedule">("register");
  const [selectedComponentId, setSelectedComponentId] = useState("MSA-AGP-304");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedComp =
    SAMPLE_COMPONENTS.find((c) => c.id === selectedComponentId) || SAMPLE_COMPONENTS[0];

  const filteredComponents = SAMPLE_COMPONENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      id="asset-intelligence"
      className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-[#EAE5D9] relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="w-full space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B8860B]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Digital Asset Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0A192F] leading-tight">
            Asset Intelligence: The Digital Layer.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Eliminating information attrition at handover. Every physical partition, ceiling cassette,
            and modular component carries persistent machine-readable telemetry linking directly to maintenance logs,
            warranties, and BIM specifications.
          </p>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs text-xs text-[#64748B] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B8860B] shrink-0" />
              <span>
                <strong className="text-[#0A192F]">Conceptual Interface Mockup: </strong>
                Design representation of the proposed Matrix Spaces digital register and mobile technician portal.
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B] shrink-0 hidden sm:inline-block">
              UI Concept Model
            </span>
          </div>
        </div>

        {/* Dashboard Shell Mockup */}
        <div className="rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_20px_50px_rgba(10,25,47,0.06)] overflow-hidden">
          {/* Top Window Chrome / Estate Context Bar */}
          <div className="bg-[#0A192F] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-white/20 mx-1" />
              <div>
                <p className="text-xs font-semibold text-white">
                  MATRIX SPACES ASSET INTELLIGENCE PORTAL
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Precinct: Melbourne Campus — Building 12, Level 03 Floorplate
                </p>
              </div>
            </div>

            {/* KPI Telemetry Badges */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="hidden sm:block text-right">
                <span className="text-[10px] text-[#94A3B8] block">Total Tracked Elements</span>
                <span className="font-bold text-white">420 Components</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#94A3B8] block">Fleet Health Index</span>
                <span className="font-bold text-emerald-400">98.6% Optimal</span>
              </div>
            </div>
          </div>

          {/* Sub-navigation Tabs */}
          <div className="px-6 py-3 bg-[#FAF9F6] border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "register"
                    ? "bg-[#0A192F] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#0A192F] hover:bg-white"
                }`}
              >
                Component Register
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("detail")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "detail"
                    ? "bg-[#0A192F] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#0A192F] hover:bg-white"
                }`}
              >
                QR Identity Inspection
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("schedule")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "schedule"
                    ? "bg-[#0A192F] text-white shadow-2xs"
                    : "text-[#64748B] hover:text-[#0A192F] hover:bg-white"
                }`}
              >
                Inspection Schedule
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search component ID or zone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-lg text-[#0A192F] placeholder:text-[#94A3B8] focus:border-[#B8860B] transition-colors"
              />
            </div>
          </div>

          {/* Main Dashboard Canvas */}
          <div className="p-6 sm:p-8">
            {activeTab === "register" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span>Showing registered building components on Level 03</span>
                  <span className="font-mono text-[11px] text-[#B8860B]">
                    Active QR & NFC Tags Live
                  </span>
                </div>

                {/* Component Table / Cards */}
                <div className="space-y-3">
                  {filteredComponents.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedComponentId(item.id);
                        setActiveTab("detail");
                      }}
                      className="p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#B8860B] hover:shadow-2xs transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center shrink-0 group-hover:bg-[#FBF6E9] transition-colors">
                          <QrCode className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs text-[#0A192F]">
                              {item.id}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[#F1F5F9] text-[#64748B] font-mono">
                              {item.type}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-[#0A192F] mt-0.5">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#64748B] mt-0.5">
                            Location: {item.zone}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-xs font-mono">
                        <div className="text-left sm:text-right">
                          <span className="text-[10px] text-[#94A3B8] block">Rating</span>
                          <span className="font-semibold text-[#0A192F]">{item.acousticRating}</span>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-[10px] text-[#94A3B8] block">Warranty</span>
                          <span className="text-[#475569]">{item.warrantyExpiry}</span>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans ${
                              item.status === "Optimal"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.status === "Optimal" ? "bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                            {item.status}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "detail" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-[#B8860B] flex items-center justify-center">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#B8860B]">
                        {selectedComp.id}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#0A192F]">
                        {selectedComp.name}
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        {selectedComp.zone}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab("register")}
                    className="text-xs font-semibold text-[#B8860B] hover:underline cursor-pointer"
                  >
                    ← Back to Complete Register
                  </button>
                </div>

                {/* 4 Detail Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Acoustic & Fire Compliance
                    </span>
                    <p className="text-sm font-semibold text-[#0A192F]">
                      {selectedComp.acousticRating}
                    </p>
                    <p className="text-xs text-[#64748B]">Fire Rating: {selectedComp.fireRating}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Commissioning Date
                    </span>
                    <p className="text-sm font-semibold text-[#0A192F]">
                      {selectedComp.installedDate}
                    </p>
                    <p className="text-xs text-[#64748B]">Installation Sign-off: Level A</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Warranty Lineage
                    </span>
                    <p className="text-sm font-semibold text-[#0A192F]">
                      Active Coverage
                    </p>
                    <p className="text-xs text-[#64748B]">{selectedComp.warrantyExpiry}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#64748B] block">
                      Service Logs
                    </span>
                    <p className="text-sm font-semibold text-[#0A192F]">
                      {selectedComp.serviceCount} Recorded Events
                    </p>
                    <p className="text-xs text-emerald-600 font-medium">All checks cleared</p>
                  </div>
                </div>

                {/* Open BIM Data Schema Box */}
                <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono font-bold text-[#0A192F]">
                      Open BIM / IFC Property Set (Pset_ComponentCommon)
                    </span>
                    <span className="text-[10px] font-mono text-[#64748B]">
                      Schema: IFC 4.3 Compliant
                    </span>
                  </div>
                  <pre className="text-[11px] font-mono text-[#334155] bg-white p-3 rounded-lg border border-[#E2E8F0] overflow-x-auto">
{`{
  "ComponentGUID": "4a9f8b21-6c3d-4e92-ba78-9e112d8a4f00",
  "Manufacturer": "Matrix Spaces Australia Certified Partner",
  "ProductModel": "${selectedComp.name}",
  "AcousticIndex_Rw": "${selectedComp.acousticRating}",
  "MaterialPassport": "AUS-EPD-2026-9021 (Low VOC, 100% Recyclable Aluminium Extrusion)",
  "DisassemblySequence": "Non-destructive dry release clip protocol v2.1"
}`}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span>Scheduled preventive inspections for Level 03</span>
                  <span className="text-emerald-700 font-semibold font-mono">
                    Next Inspection: Tomorrow at 09:30 AM
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#0A192F]">
                          Quarterly Acoustic Seal & Joint Integrity Inspection
                        </h4>
                        <p className="text-xs text-[#64748B]">
                          Target: Executive Meeting Suites 1–4 (Component #MSA-AGP-304)
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Scheduled: 31 Oct
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E2E8F0] text-[#B8860B] flex items-center justify-center">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#0A192F]">
                          Ceiling Cassette Filter & Air Flow Telemetry Check
                        </h4>
                        <p className="text-xs text-[#64748B]">
                          Target: Collaboration Plenums (Component #MSA-CCB-205)
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      Inspection Due: 05 Nov
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
