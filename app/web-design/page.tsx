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
      <section className="relative pt-32 md:pt-40 lg:pt-24 pb-12 md:pb-6 lg:pb-2 bg-[#4A2E6F] overflow-hidden min-h-[80vh] sm:min-h-[70vh] md:min-h-[60vh] flex items-center">
        <div className="w-full relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <div className="text-white order-2 lg:order-1">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6 sm:mb-8 md:mb-10 lg:mb-12" 
                    style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1.1' }}>
                  Website Development
                </h1>
                <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 sm:mb-10 leading-tight" 
                    style={{ letterSpacing: '0.02em', fontWeight: 1200, lineHeight: '1.1' }}>
                  <div className="whitespace-nowrap">ALL COMPANIES SHOULD</div>
                  <div className="whitespace-nowrap">HAVE A PERFECT WEBSITE</div>
                  <div className="text-yellow-400 mt-2 sm:mt-3 md:mt-4">TO BOOST SALES</div>
                </h2>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 sm:py-5 md:py-6 px-10 sm:px-14 md:px-16 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105">
                  START YOUR JOURNEY
                </Button>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                  <img 
                    src="/images/1_2.svg" 
                    alt="Website Development" 
                    className="h-full w-auto max-w-full object-contain"
                    style={{ maxHeight: '100%' }}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                We Provide Corporate Website Development & Revamping
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-3 sm:mt-4"></div>
            </div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Service 1 */}
              <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full lg:w-2/5 xl:w-1/3 p-6 sm:p-8 flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                    <div className="absolute inset-0 rounded-full bg-[#4A2E6F] transform transition-transform duration-300 hover:scale-105"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img 
                        src="/images/custom-web-design.svg" 
                        alt="Responsive Design" 
                        className="w-full h-full object-contain" 
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-3/5 xl:w-2/3 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Custom Responsive Website Design</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
                </div>
              </div>
              <div className="w-full flex justify-center">
                    <Button className="bg-[#534482] hover:bg-[#45386d] text-white font-extrabold py-7 px-12 rounded-full text-lg tracking-wide">
                      DESIGN YOUR WEBSITE NOW
                    </Button>
                  </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits Section */}
        <section className="py-20 bg-[#4A2E6F] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Key Benefits of Our Web Design Services
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We Deliver Your Website Within 8 Weeks</h3>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center p-4">
                  <img src="/images/developing-cost.svg" alt="Development Cost" className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-600 mb-4">
                  Of Developing Cost. All the development works will be transparent and you can keep track the process at anytime.
                </p>
                <div className="w-8 h-1 bg-yellow-400 mx-auto"></div>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">We Help You Save</h3>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center p-4">
                  <img src="/images/developing-cost.svg" alt="Additional Discount" className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-600 mb-4">
                  We will provide Additional Discount to Startups & SMEs. Our team is always available to support your needs.
                </p>
                <div className="w-8 h-1 bg-yellow-400 mx-auto"></div>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">62% Uptime Guarantees</h3>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center p-4">
                  <img src="/images/maintenance-guarantee.svg" alt="Maintenance Guarantee" className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-600 mb-4">
                  We ensure the site remains secure, performs well, stays up to date, and provides a positive user experience at all times.
                </p>
                <div className="w-8 h-1 bg-yellow-400 mx-auto"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <main className="flex-1">
        <FaqSection />
        <ContactCtaSection />
      </main>
    </div>
  )
}
