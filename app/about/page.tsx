import { Navigation } from "@/components/navigation"
import { WhoWeAre } from "@/components/who-we-are"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { FaqSection } from "@/components/faq-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      
      {/* Custom Hero Section for About Page */}
      <section 
        className="relative pt-24 md:pt-16 pb-6 lg:pb-2 bg-[#4A2E6F] overflow-hidden min-h-[60vh] flex items-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2 lg:gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-12 md:mb-15" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                ABOUT US
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 md:mb-15 leading-tight" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                <div className="whitespace-nowrap">STOP PAYING EXTRA,</div>
                <div className="text-yellow-400 mt-3 md:mt-4">PAY SMART</div>
              </h2>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-16 rounded-full text-xl">
                KNOW MORE
              </Button>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end -ml-4 md:-ml-12 lg:ml-0 w-full">
              <img 
                src="/images/1_1.svg" 
                alt="About Us Illustration" 
                className="w-full max-w-lg xl:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
        <WhoWeAre />
        
        <ContactCtaSection />
        <FaqSection />
      </main>
    </div>
  )
}
