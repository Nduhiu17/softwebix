import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"

const GlobeIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
)

const SearchIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const RefreshIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)

const services = [
  {
    icon: GlobeIcon,
    title: "Custom Responsive Website Design",
    description:
      "We provide custom responsive website design for both desktop and mobile, delivering a seamless and visually appealing experience across all devices. Our designs are tailored to fit your brand and ensure optimal performance no matter where your users access your site.",
  },
  {
    icon: DatabaseIcon,
    title: "Content Management System Integration",
    description:
      "We provide CMS integration services that enable easy content management and updates for your website. Our solutions streamline your workflow, giving you full control to edit, publish, and manage your site content without technical expertise.",
  },
  {
    icon: SearchIcon,
    title: "Search Engine Optimization and Performance",
    description:
      "We specialize in SEO and performance optimization to boost your website's visibility and speed. Our services ensure your site ranks higher in search results while delivering fast, smooth user experiences that keep visitors engaged.",
  },
  {
    icon: RefreshIcon,
    title: "Legacy System Upgrades and UI Modernization",
    description:
      "Our Legacy System Upgrades and UI Modernization services focus on transforming outdated software and interfaces into modern, efficient, and user-friendly solutions. We update legacy systems to improve performance, security, and compatibility with current technologies, while redesigning user interfaces to enhance usability and aesthetics. This approach not only extends the life of your existing systems but also boosts productivity, reduces maintenance costs, and delivers a seamless digital experience that aligns with today's user expectations.",
  },
]

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically, we deliver websites within 8 weeks. The timeline depends on the complexity and specific requirements of your project. We maintain transparent communication throughout the development process.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns and modernization. We can revamp your existing site to improve performance, user experience, and visual appeal while maintaining your brand identity.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktops.",
  },
  {
    question: "Do you provide website maintenance and updates?",
    answer:
      "Yes, we offer comprehensive 24/7 maintenance services to ensure your website remains secure, up-to-date, and performs optimally at all times. This includes regular updates, security monitoring, and technical support.",
  },
]

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">
                S<span className="text-accent">O</span>FTWEBIX
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 max-w-4xl mx-auto text-balance">
              Website Development
            </h2>
            <h3 className="text-xl md:text-2xl text-foreground mb-12 max-w-3xl mx-auto text-balance">
              ALL COMPANIES SHOULD HAVE A PERFECT WEBSITE TO BOOST SALES
            </h3>
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">START YOUR JOURNEY</h2>
            <p className="text-xl text-foreground">We Provide Corporate Website Development & Revamping</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent />
                      </div>
                      <CardTitle className="text-xl font-bold text-card-foreground">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
            >
              DESIGN YOUR WEBSITE NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose SoftWebix Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Why Choose SoftWebix to Design Your Webpage?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary text-primary-foreground text-center p-8">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4">62%</div>
                <div className="text-lg font-semibold mb-2">Of Developing Cost</div>
                <div className="text-sm mb-4">We Help You Save</div>
                <div className="text-xs">We will provide Additional Discount to Startups & SMEs</div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground text-center p-8">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4">8</div>
                <div className="text-lg font-semibold mb-2">Weeks</div>
                <div className="text-sm mb-4">We Deliver Your Website Within</div>
                <div className="text-xs">
                  All the development works will be transparent and you can keep track the process at anytime
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-card-foreground mb-4">24/7 Maintenance</div>
                <div className="text-lg font-semibold text-muted-foreground mb-2">Uptime Guarantees</div>
                <div className="text-xs text-muted-foreground">
                  We ensure the site remains secure, performs well, stay up to date, and provide a positive user
                  experience at all time
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">FAQ</h2>
            <p className="text-lg text-foreground">CHECK OUT OUR FREQUENT QUESTIONS</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary-foreground text-primary border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Get Your IT Solutions Now at No Cost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Take advantage of our free consultation service to analyze your business needs. We will make sure we
                provide the most suitable, and high quality I.T. solution.
              </CardDescription>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold"
              >
                CONTACT US
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
