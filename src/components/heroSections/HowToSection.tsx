import { Button } from "@/components/ui/button"
import { ArrowUpRight, Linkedin, Facebook, Instagram, Youtube, Image } from "lucide-react"
import { useEffect, useState } from "react"

export default function HowToSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [maskStyles, setMaskStyles] = useState({
    backgroundSize: '123% auto',
    backgroundPosition: 'center 27%',
    WebkitTextStroke: '2px rgba(0,0,0,0.2)',
  })

  useEffect(() => {
    const updateMaskStyles = () => {
      const width = window.innerWidth
      
      if (width < 640) {
        // Mobile - no mask effect
        setIsMobile(true)
      } else {
        setIsMobile(false)
        
        let backgroundSize = '123% auto'
        let backgroundPosition = 'center 27%'
        let stroke = '2px rgba(0,0,0,0.2)'
        
        if (width < 768) {
          // Small tablets
          backgroundSize = '140% auto'
          backgroundPosition = 'center 30%'
          stroke = '1px rgba(0,0,0,0.25)'
        } else if (width < 1024) {
          // Medium tablets
          backgroundSize = '130% auto'
          backgroundPosition = 'center 28%'
          stroke = '1.5px rgba(0,0,0,0.2)'
        } else {
          // Desktop
          backgroundSize = '123% auto'
          backgroundPosition = 'center 27%'
          stroke = '2px rgba(0,0,0,0.2)'
        }
        
        setMaskStyles({
          backgroundSize,
          backgroundPosition,
          WebkitTextStroke: stroke,
        })
      }
    }
    
    // Initial call
    updateMaskStyles()
    
    // Add resize listener
    window.addEventListener('resize', updateMaskStyles)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateMaskStyles)
  }, [])

  return (
    <section className="relative bg-white">
      
      {/* Contact Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4 text-[#1a1a1a]">
            HAVE QUESTIONS?
            <br />
            REACH OUT!
          </h2>
          <p className="text-sm text-[#4a4a4a] mb-8 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.
            Pretium tellus duis convallis tempus leo eu aenean.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#6b8e8f] hover:bg-[#5a7a7b] text-white w-40 h-40 rounded-full text-sm tracking-wider flex flex-col items-center justify-center gap-2">
              <ArrowUpRight className="w-6 h-6" />
              <span>CONTACT US</span>
            </Button>
          </div>
        </div>
      </div>
     
      {/* ABEMIS 3.0 Text with Image Mask - See-through effect */}
      <div className="relative h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px] overflow-hidden flex flex-col">
        {/* Text with mask effect on white background - positioned first */}
        <div className="relative bg-white flex items-center justify-center py-1 z-10">
          <h3 
            className="text-[60px] xs:text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[320px] font-bold tracking-wide sm:tracking-wider leading-none px-2 sm:px-4 select-none"
            style={
              isMobile
                ? {
                    // Mobile: No mask effect, just solid color text
                    color: '#1a1a1a',
                  }
                : {
                    // Tablet and Desktop: Mask effect
                    backgroundImage: 'url(/yellow-harvester-combine-in-wheat-field.jpg)',
                    backgroundSize: maskStyles.backgroundSize,
                    backgroundPosition: maskStyles.backgroundPosition,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    filter: 'contrast(1.2) brightness(1.1)',
                    textShadow: '0 0 2px rgba(0,0,0,0.2)',
                    WebkitTextStroke: maskStyles.WebkitTextStroke,
                  } as React.CSSProperties
            }
          >
            ABEMIS 3.0
          </h3>
        </div>
        
        {/* Background Image - positioned after text */}
        <div className="relative flex-1">
          <img
            src="/yellow-harvester-combine-in-wheat-field.jpg"
            alt="ABEMIS 3.0 Agricultural Equipment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
      </div>

     

      {/* Footer Content */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
              <img 
                src="/green-agricultural-certification-logo.jpg" 
                alt="Certification Logo 1" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const icon = e.currentTarget.nextElementSibling as HTMLElement;
                  if (icon) icon.style.display = 'block';
                }}
              />
              <Image className="w-8 h-8 text-gray-400 absolute hidden" />
            </div>
            <div className="relative w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
              <img 
                src="/agricultural-partner-logo.jpg" 
                alt="Certification Logo 2" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const icon = e.currentTarget.nextElementSibling as HTMLElement;
                  if (icon) icon.style.display = 'block';
                }}
              />
              <Image className="w-8 h-8 text-gray-400 absolute hidden" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#4a4a4a] text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
            sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis.
            Pretium tellus duis convallis tempus leo eu aenean.
          </p>

          {/* Navigation and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-8">
            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6b8e8f] transition-colors">
                HOME
              </a>
              <a href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6b8e8f] transition-colors">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6b8e8f] transition-colors">
                PROJECTS
              </a>
              <a href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6b8e8f] transition-colors">
                SERVICES
              </a>
              <a href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-[#6b8e8f] transition-colors">
                HOW TO?
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#6b8e8f] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#6b8e8f] transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#6b8e8f] transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#6b8e8f] transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#6b8e8f] transition-colors"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-xs text-[#6a6a6a]">© 2025 ABEMIS 3.0. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}
