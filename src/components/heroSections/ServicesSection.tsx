
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <>
    

      <section id="services" className="relative bg-[#0a0a0a] py-16 px-4 overflow-hidden">
        {/* Diagonal stripe pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.05) 35px,
              rgba(255, 255, 255, 0.05) 70px
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white">SERVICES OF ABEMIS 3.0</h2>
            <p className="text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex
              sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus
              duis. Pretium tellus duis convallis tempus leo eu aenean.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-12">
            <img src="/grain-harvest-pouring-into-container-with-tractor-.jpg" alt="Agricultural services" className="w-full h-full object-cover" />
          </div>

          {/* Services List */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Service 01 */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-6 group cursor-pointer hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-8">
                <h3 className="text-2xl font-light text-white tracking-wide">SERVICES 01</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque
                  faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            {/* Service 02 */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-6 group cursor-pointer hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-8">
                <h3 className="text-2xl font-light text-white tracking-wide">SERVICES 02</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque
                  faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Service 03 */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-6 group cursor-pointer hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-8">
                <h3 className="text-2xl font-light text-white tracking-wide">SERVICES 03</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque
                  faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
