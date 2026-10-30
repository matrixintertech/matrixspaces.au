import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LifecycleFlow from "@/components/sections/LifecycleFlow";
import Capabilities from "@/components/sections/Capabilities";
import PlatformWorkflow from "@/components/sections/PlatformWorkflow";
import AssetIntelligenceUI from "@/components/sections/AssetIntelligenceUI";
import PhysicalSystems from "@/components/sections/PhysicalSystems";
import PreventiveCare from "@/components/sections/PreventiveCare";
import LivingLabSection from "@/components/sections/LivingLabSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import PlatformCTA from "@/components/sections/PlatformCTA";
import Footer from "@/components/layout/Footer";
import { cacheLife } from "next/cache";

export default async function Home() {
  "use cache";
  cacheLife("days");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0A192F]">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B8860B] focus:text-white focus:rounded focus:shadow"
      >
        Skip to main content
      </a>

      {/* Modern Product Header */}
      <Header />

      {/* Main Product-Oriented Homepage Flow */}
      <main id="main-content" className="flex-1">
        {/* A. Hero: Smarter spaces. Connected assets. Better built environments. */}
        <Hero />

        {/* B. The Built Environment, Connected: Lifecycle sequence */}
        <LifecycleFlow />

        {/* C. Five Integrated Platform Capabilities */}
        <Capabilities />

        {/* D. How the Platform Works in Practice: 6-step integrated workflow */}
        <PlatformWorkflow />

        {/* E. Asset Intelligence: Conceptual Digital Product Experience */}
        <AssetIntelligenceUI />

        {/* F. Physical Systems: Industrialised Interiors & Retrofit Kits */}
        <PhysicalSystems />

        {/* G. Preventive Asset Care: Scheduled inspections & whole-of-life stewardship */}
        <PreventiveCare />

        {/* H. The Living Laboratory: Applied research testbed & demonstration */}
        <LivingLabSection />

        {/* I. Partner Ecosystem: Collaborative innovation across 4 sectors */}
        <EcosystemSection />

        {/* J. Platform Engagement & Consultation Request Form */}
        <PlatformCTA />
      </main>

      {/* Enterprise Platform Footer */}
      <Footer />
    </div>
  );
}
