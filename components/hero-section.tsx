export function HeroSection() {
  return (
    <section 
      className="relative pt-16 pb-12 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 bg-black overflow-hidden min-h-[80vh] sm:min-h-[65vh] md:min-h-[55vh] lg:min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url(/images/heroes-background.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="text-left max-w-3xl mx-auto sm:mx-0">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white" style={{ 
                letterSpacing: '0.02em', 
                fontWeight: 1200,
                lineHeight: '1',
                height: 'auto'
              }}>
              <div className="mb-2 sm:mb-3 md:mb-4">WE MAKE IT</div>
              <div className="mb-2 sm:mb-3 md:mb-4" style={{ color: "#d4c2ef", fontWeight: 1200 }}>SIMPLE</div>
              <div className="mb-2 sm:mb-3 md:mb-4">AND</div>
              <div style={{ color: "#d4c2ef", fontWeight: 1200 }}>AFFORDABLE</div>
            </h1>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed tracking-wider flex flex-col space-y-1 sm:space-y-2" style={{ letterSpacing: '0.05em' }}>
            <span>Hong Kong's First One-Stop <span style={{ color: "#d4c2ef" }}>Website Design</span></span>
            <span className="font-bold" style={{ color: "#d4c2ef" }}>Mobile App Development & IT Solutions Company</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
