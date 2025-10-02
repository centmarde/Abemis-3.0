import Landing from "../components/heroSections/LandingSection"
import { Navbar } from "@/components/navbar"
import AboutSection from "@/components/heroSections/AboutSection"
import ProjectSection from "@/components/heroSections/ProjectSection"
import ServicesSection from "@/components/heroSections/ServicesSection"
import HowToSection from "@/components/heroSections/HowToSection"

export default function Hero() {
  return (
    <div>
       <Navbar />
      <Landing />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <HowToSection />
    </div>
  )
}
