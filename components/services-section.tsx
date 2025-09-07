const BrowserIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3l2 2" />
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth={1.5} />
    <line x1="2" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth={1.5} />
    <circle cx="6.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="8.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="10.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const MobileAppIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="currentColor" />
    <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" />
    <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" />
    <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" />
    <circle cx="16" cy="8" r="2" fill="none" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 7l1 1 2-2" />
  </svg>
)

const SocialMediaIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="none" stroke="currentColor" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="none" stroke="currentColor" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="none" stroke="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5h1M17.5 6.5h1M6.5 17.5h1M17.5 17.5h1" />
  </svg>
)

const BusinessToolsIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" />
    <circle cx="12" cy="5" r="2" fill="none" stroke="currentColor" />
    <circle cx="19" cy="12" r="2" fill="none" stroke="currentColor" />
    <circle cx="5" cy="12" r="2" fill="none" stroke="currentColor" />
    <circle cx="12" cy="19" r="2" fill="none" stroke="currentColor" />
  </svg>
)

const ProgrammingIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 3l-4.5 18"
    />
  </svg>
)

const MaintenanceIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 01-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
    />
  </svg>
)

const services = [
  {
    icon: BrowserIcon,
    title: "Website Development",
    description:
      "We specialize in creating high-quality websites tailored to your business needs and with 24/7 maintenance guarantees.",
  },
  {
    icon: MobileAppIcon,
    title: "Mobile Apps Development",
    description: "We develop high-performance mobile apps which can be used across IOS and Android platforms.",
  },
  {
    icon: SocialMediaIcon,
    title: "Social Media Engagement",
    description:
      "We have different campaigns to help boost your social presence and brands by using Facebook, Instagram and LinkedIn.",
  },
  {
    icon: BusinessToolsIcon,
    title: "Custom Business Tools",
    description:
      "We provide different custom business tools (e.g. AI chatbots, CRMS etc) to let you stay ahead in the competitive market.",
  },
  {
    icon: ProgrammingIcon,
    title: "Programming Services",
    description:
      "We offer expert programming services in Python and Java, and we also create customized backend systems.",
  },
  {
    icon: MaintenanceIcon,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-cream border-t-4 border-l-4 border-r-8 border-b-8 border-black rounded-3xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow"
                style={{ backgroundColor: "#fefdf8" }}
              >
                <div className="flex-shrink-0">
                  <IconComponent className="h-12 w-12 text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
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
