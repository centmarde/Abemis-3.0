import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative h-[calc(100vh-80px)] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/modern-glass-architecture-buildings-looking-up.jpg"
            alt="Modern architecture background"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-orange-500 md:text-7xl lg:text-8xl">ABEMIS 3.0</h1>
            <div className="mt-6 space-y-1 text-lg font-medium text-white md:text-xl lg:text-2xl">
              <p>AGRICULTURAL AND BIOSYSTEMS</p>
              <p>ENGINEERING MANAGEMENT</p>
              <p>INFORMATION SYSTEM (ABEMIS)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
