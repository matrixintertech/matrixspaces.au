import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Opportunity from "@/components/sections/Opportunity";
import Workstreams from "@/components/sections/Workstreams";
import Platform from "@/components/sections/Platform";
import LivingLab from "@/components/sections/LivingLab";
import Partners from "@/components/sections/Partners";
import PilotPathway from "@/components/sections/PilotPathway";
import ResilientImpact from "@/components/sections/ResilientImpact";
import Vision from "@/components/sections/Vision";
import WorkshopForm from "@/components/sections/WorkshopForm";
import Footer from "@/components/layout/Footer";
import { cacheLife } from "next/cache";

export default async function Home() {
  "use cache";
  cacheLife("days");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0A192F]">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B8860B] focus:text-white focus:rounded focus:shadow"
      >
        Skip to main content
      </a>

      {/* Slim, Sticky Institutional Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero: Smarter spaces for a more resilient Australia */}
        <Hero />

        {/* 2. The Opportunity: From complex buildings to lasting value */}
        <Opportunity />

        {/* 3. Five Workstreams: One connected approach */}
        <Workstreams />

        {/* 4. Our Platform: A connected platform for the entire lifecycle */}
        <Platform />

        {/* 5. The Living Laboratory: Real assets. Real learning. Real impact */}
        <LivingLab />

        {/* 6. Partner Ecosystem: Collaboration at every stage */}
        <Partners />

        {/* 7. From Pilot to Scale: A structured adoption pathway */}
        <PilotPathway />

        {/* 8. A More Resilient Australia: Spaces that perform today and tomorrow */}
        <ResilientImpact />

        {/* 9. Progressive Vision: Five-year growth pathway */}
        <Vision />

        {/* 10. Final CTA & 90-Minute Workshop Request Form */}
        <WorkshopForm />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
