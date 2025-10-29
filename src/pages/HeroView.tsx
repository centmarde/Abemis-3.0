import Landing from "../components/heroSections/LandingSection"
import AboutSection from "@/components/heroSections/AboutSection"
import ProjectSection from "@/components/heroSections/ProjectSection"
import ServicesSection from "@/components/heroSections/ServicesSection"
import Footer from "@/components/Footer"

export default function Hero() {
  return (
    <div>
      <Landing />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}
