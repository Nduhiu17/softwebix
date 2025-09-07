export function HeroSection() {
  return (
    <section
      className="relative pt-0 pb-20 lg:pb-32 bg-black overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/images/heroes-background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 lg:pt-32">
        <div className="text-left max-w-3xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase text-white">
              WE MAKE IT
              <br />
              <span style={{ color: "#d4c2ef" }}>SIMPLE</span>
              <br />
              AND
              <br />
              <span style={{ color: "#d4c2ef" }}>AFFORDABLE.</span>
            </h1>
          </div>

          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
            Hong Kong's First One-Stop <span style={{ color: "#d4c2ef" }}>Website Design,</span>
            <br />
            <span className="font-bold" style={{ color: "#d4c2ef" }}>Mobile App Development & IT Solutions</span> Company
          </h2>
        </div>
      </div>
    </section>
  )
}
