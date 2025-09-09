interface ServiceImages {
  [key: string]: string;
}

const serviceImages: ServiceImages = {
  "Website Development": "/images/website-development.svg", // Modern website icon
  "Mobile App Development": "/images/mobile-apps-development.svg", // Mobile device with app icon
  "Social Media Engagement": "/images/social-media-engagement.svg", // Social media connection icon
  "Custom Business Tools": "/images/custom-business-tools.svg", // Business tools and analytics
  "Programming Services": "/images/programming-services.svg", // Code and programming icon
  "Comprehensive Maintenance & Bug Fixes": "/images/comprehensive-bug-maintainance.svg" // Maintenance and support
}

const services = [
  {
    title: "Website Development",
    description:
      "We create stunning, responsive websites that are optimized for performance, user experience, and search engines.",
  },
  {
    title: "Mobile App Development",
    description:
      "Build powerful and intuitive mobile applications for iOS and Android platforms with our expert development team.",
  },
  {
    title: "Social Media Engagement",
    description:
      "Boost your online presence and engage with your audience through strategic social media management and content creation.",
  },
  {
    title: "Custom Business Tools",
    description:
      "Streamline your business operations with custom software solutions tailored to your specific needs and workflows.",
  },
  {
    title: "Programming Services",
    description:
      "Get expert programming services for your projects, from small scripts to complex enterprise applications.",
  },
  {
    title: "Comprehensive Maintenance & Bug Fixes",
    description:
      "Our Maintenance & Bug Fixes service ensure your software, website and applications run smoothly and reliably over time.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-gray-600 mb-2 tracking-wide">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">The Six Main IT Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cream border-t-4 border-l-4 border-r-8 border-b-8 border-black rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: "#fefdf8" }}
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="w-40 h-40 flex items-center justify-center p-1">
                  <img 
                    src={serviceImages[service.title]} 
                    alt={service.title} 
                    className="w-full h-full object-contain scale-125"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-between">
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-800">Bring Your Business To Another Level</h3>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors whitespace-nowrap">
            START NOW
          </button>
        </div>
      </div>
    </section>
  )
}
