

export default function Landing() {
  return (
    <div id="home" className="min-h-screen">
     
      <main className="relative h-screen pt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/Hero.png"
            alt="Modern architecture background"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl ml-0 md:ml-8 lg:ml-16">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[12rem] font-bold tracking-wider whitespace-nowrap" style={{ color: '#d97706' }}>
              ABEMIS 3.0
            </h1>
            <div className="mt-8 space-y-2 text-base md:text-lg lg:text-xl font-medium text-white tracking-wide">
              <p>AGRICULTURAL AND BIOSYSTEMS</p>
              <p>ENGINEERING MANAGEMENT</p>
              <p>INFORMATION SYSTEM (ABEMIS)</p>
            </div>
          </div>
        </div>

      
      </main>
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Counts of Registered
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Agricultural and Biosystems Engineering Management Information System
          </p>
        </div>
      </div>
    </div>
  )
}