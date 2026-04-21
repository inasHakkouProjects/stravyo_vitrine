import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { StrategicSection } from "@/components/sections/StrategicSection";
import { PostDisasterSection } from "@/components/sections/PostDisasterSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { ClientsSectorsSection } from "@/components/sections/ClientsSectorsSection";
import { ContactSection } from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ServicesSection />
        <TechnologiesSection />
        <StrategicSection />
        <PostDisasterSection />
        <AdvantagesSection />
        <ClientsSectorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
