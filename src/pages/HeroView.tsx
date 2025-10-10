import { Link } from "react-router-dom"
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
      
      {/* Demo navigation buttons - Remove in production */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <Link 
          to="/login" 
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <Link 
          to="/dashboard" 
          className="px-4 py-2 bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition"
        >
          Dashboard
        </Link>
      </div>
      
      <Landing />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <HowToSection />
    </div>
  )
}
