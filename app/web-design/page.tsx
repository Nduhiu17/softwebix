import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { KeyProjectsSection } from "@/components/key-projects-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { FaqSection } from "@/components/faq-section"
import { Button } from "@/components/ui/button"

export default function WebDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      
      {/* Custom Hero Section */}
      <section className="relative pt-24 md:pt-16 pb-16 lg:pb-24 bg-[#4A2E6F] overflow-hidden min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-2 lg:gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-12 md:mb-15" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                Website Development
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 md:mb-15 leading-tight" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                <div className="whitespace-nowrap">ALL COMPANIES SHOULD</div>
                <div className="whitespace-nowrap">HAVE A PERFECT WEBSITE</div>
                <div className="text-yellow-400 mt-3 md:mt-4">TO BOOST SALES</div>
              </h2>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-16 rounded-full text-xl">
                START YOUR JOURNEY
              </Button>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end -ml-4 md:-ml-12 lg:ml-0 w-full">
              <img 
                src="/images/1_2.svg" 
                alt="Website Development" 
                className="w-full max-w-lg xl:max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
      </main>
    </div>
  )
}
