export function HeroSection() {
  return (
    <section 
      className="relative pt-0 pb-12 lg:pb-16 bg-black overflow-hidden min-h-[55vh] md:h-[55vh] lg:h-[70vh] flex items-center"
      style={{
        backgroundImage: "url(/images/heroes-background.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-14 lg:pt-20">
        <div className="text-left max-w-3xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white" style={{ 
                letterSpacing: '0.02em', 
                fontWeight: 1200,
                lineHeight: '1',
                height: 'auto'
              }}>
              <div className="mb-4">WE MAKE IT</div>
              <div className="mb-4" style={{ color: "#d4c2ef", fontWeight: 1200 }}>SIMPLE</div>
              <div className="mb-4">AND</div>
              <div style={{ color: "#d4c2ef", fontWeight: 1200 }}>AFFORDABLE</div>
            </h1>
          </div>

          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl leading-relaxed tracking-wider flex flex-col" style={{ letterSpacing: '0.05em' }}>
            <span>Hong Kong's First One-Stop <span style={{ color: "#d4c2ef" }}>Website Design</span></span>
            <span className="font-bold" style={{ color: "#d4c2ef" }}>Mobile App Development & IT Solutions Company</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
