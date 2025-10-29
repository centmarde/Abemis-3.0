import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main id="about" className="bg-[#f5f1ed]">
      <div className="container-fluid px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-8 text-center sm:text-right md:mb-12">
          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-[#9ca3af] sm:text-4xl md:text-5xl lg:text-6xl">
            ABOUT ABEMIS 3.0
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Decorative Line */}
            <div className="mb-6 h-[2px] w-40 bg-black sm:w-48 md:mb-8 md:w-60"></div>

            {/* Main Heading */}
            <h1 className="mb-8 font-sans text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:mb-12 md:text-5xl lg:whitespace-nowrap lg:text-6xl">
              WE CAN MAKE SUSTAINABILITY
            </h1>

            {/* Image */}
            <div className="h-63 overflow-hidden rounded-lg">
              <img
                src="/assets/Hero.png"
                alt="Aerial view of sustainable agriculture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Spacer to align with left column content */}
            <div className="mb-6 h-[2px] w-40 bg-transparent sm:w-48 md:mb-8 md:w-60"></div>
            
            {/* Spacer for heading alignment */}
            <div className="mb-8 md:mb-12">
              <div className="h-[3rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem]"></div>
            </div>

            {/* Description Text */}
            <div className="h-50 flex flex-col justify-center">
              <p className="mb-6 font-sans text-base leading-relaxed text-[#6b7280] sm:text-lg md:mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus
                ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in
                id cursus mi.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button className="w-full rounded-full bg-[#5f7a7a] px-8 py-6 text-sm font-medium uppercase tracking-wider text-white hover:bg-[#4d6262] sm:w-48">
                  ABOUT US
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 border-[#2d3748] bg-transparent px-8 py-6 text-sm font-medium tracking-wide text-[#2d3748] hover:bg-[#2d3748] hover:text-white sm:w-48"
                >
                  OUR Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
