import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main id="project" className="min-h-screen bg-[#f5f5f5] py-8 md:py-16 px-4">
      <div className="container-fluid">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4 md:mb-6 text-[#1a1a1a]">
            OUR PROJECTS OF ABEMIS 3.0
          </h1>
          <p className="text-sm sm:text-base text-[#4a4a4a] max-w-4xl mx-auto leading-relaxed px-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex
            sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id
            cursus mi.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Left Small Image */}
          <div className="sm:col-span-1 md:col-span-3 md:row-span-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src="/yellow-construction-tractor-vehicle.jpg" alt="Construction vehicle" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center Large Image */}
          <div className="sm:col-span-2 md:col-span-6 md:row-span-2">
            <div className="relative aspect-[16/10] md:aspect-[16/10] rounded-lg overflow-hidden">
              <img src="/white-barn-with-silos-rural-farm.jpg" alt="Infrastructure project" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Small Image */}
          <div className="sm:col-span-1 md:col-span-3 md:row-span-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img src="/fresh-vegetables-produce-carrots.jpg" alt="Agricultural produce" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Project Info Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4 sm:gap-0">
          <div className="flex items-baseline gap-3 md:gap-4">
            <span className="text-3xl md:text-4xl font-light text-[#1a1a1a]">02</span>
            <div>
              <h2 className="text-xl md:text-2xl font-normal tracking-wide text-[#1a1a1a]">INFRASTRACTURE</h2>
              <p className="text-xs md:text-sm text-[#6a6a6a] mt-1">Project</p>
            </div>
          </div>
          <Button className="bg-[#6b8e8f] hover:bg-[#5a7a7b] text-white px-6 py-5 md:px-8 md:py-6 rounded-full text-xs md:text-sm tracking-wider w-full sm:w-auto">
            SEE DETAIL
          </Button>
        </div>
      </div>
    </main>
  )
}
