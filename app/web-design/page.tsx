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
      <section className="relative pt-24 md:pt-16 pb-6 lg:pb-2 bg-[#4A2E6F] overflow-hidden min-h-[60vh] flex items-center">
        <div className="w-full relative z-10">
          <div className="relative">
            <div className="container mx-auto px-4">
              <div className="lg:max-w-[50%] text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-12" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                  Website Development
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 leading-tight" style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1' }}>
                  <div className="whitespace-nowrap">ALL COMPANIES SHOULD</div>
                  <div className="whitespace-nowrap">HAVE A PERFECT WEBSITE</div>
                  <div className="text-yellow-400 mt-3 md:mt-4">TO BOOST SALES</div>
                </h2>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-16 rounded-full text-xl">
                  START YOUR JOURNEY
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="absolute right-0 top-0 h-full w-[80%] flex items-center justify-end pr-4 md:pr-8 lg:pr-16 xl:pr-24">
              <div className="h-[90%] w-full flex items-center justify-end">
                <img 
                  src="/images/1_2.svg" 
                  alt="Website Development" 
                  className="h-full w-auto max-w-none object-contain scale-110"
                  style={{ maxHeight: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
      </main>
    </div>
  )
}
