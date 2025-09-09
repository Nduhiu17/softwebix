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
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Provide Corporate Website Development & Revamping
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
            </div>

            <div className="space-y-12">
              {/* Service 1 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-[#4A2E6F]"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img src="/images/custom-web-design.svg" alt="Responsive Design" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Responsive Website Design</h3>
                  <p className="text-gray-600">
                    We provide custom responsive website design for both desktop and mobile, delivering a seamless and visually appealing experience across all devices. Our designs are tailored to fit your brand and ensure optimal performance no matter where your users access your site.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-[#4A2E6F]"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img src="/images/cms.svg" alt="CMS Integration" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Management System Integration</h3>
                  <p className="text-gray-600">
                    We provide CMS integration services that enable easy content management and updates for your website. Our solutions streamline your workflow, giving you full control to edit, publish, and manage your site content without technical expertise.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-[#4A2E6F]"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img src="/images/seo.svg" alt="SEO & Performance" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Search Engine Optimization and Performance</h3>
                  <p className="text-gray-600">
                    We specialize in SEO and performance optimization to boost your website's visibility and speed. Our services ensure your site ranks higher in search results while delivering fast, smooth user experience.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-[#4A2E6F]"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img src="/images/legacy-systems-upgrade.svg" alt="Legacy System Upgrades and UI Modernization" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Legacy System Upgrades and UI Modernization</h3>
                  <p className="text-gray-600 mb-6">
                    Our Legacy System Upgrades and UI Modernization services focus
                    on transforming outdated software and interfaces into modern,
                    efficient, and user-friendly solutions. We update legacy systems
                    to improve performance, security, and compatibility with current
                    technologies, while redesigning user interfaces to enhance
                    usability and aesthetics. This approach not only extends the life
                    of your existing systems but also boosts productivity, reduces
                    maintenance costs, and delivers a seamless digital experience
                    that aligns with today's user expectations.
                  </p>
                  <div className="w-full flex justify-center">
                    <Button className="bg-[#534482] hover:bg-[#45386d] text-white font-extrabold py-7 px-12 rounded-full text-lg tracking-wide">
                      DESIGN YOUR WEBSITE NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
