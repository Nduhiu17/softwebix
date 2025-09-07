import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"

const faqs = [
  {
    question: "What service do you offer?",
    answer:
      "We offer comprehensive IT services including website development, mobile app development, social media engagement, programming services, custom business tools, and maintenance & bug fixes. Our one-stop solution covers all your technology needs.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "SoftWebix is Hong Kong's first one-stop IT solutions company. We have established ourselves as a leading provider of cost-effective and innovative technology solutions for businesses of all sizes.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team 24/7 through our contact form, email, or phone. We provide round-the-clock technical support and maintenance services to ensure your systems run smoothly at all times.",
  },
]

export default function AboutPage() {
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
            <h2 className="text-xl md:text-2xl text-accent font-semibold mb-6">KNOW MORE</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-12 max-w-3xl mx-auto text-balance">
              STOP PAYING EXTRA, PAY SMART
            </h3>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">ABOUT US</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">Who We Are</h3>
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  SoftWebix is the <strong>FIRST</strong> IT company in Hong Kong that provide an One-Stop tech
                  solution, from website development, social media engagement, mobile application development to
                  comprehensive IT services like maintenance, bug fixes. We aim to provide all companies, no matter how
                  large their size is, a high quality with affordable price IT solution.
                </p>
                <p>
                  We have a team of <strong>50 skilled professionals</strong> in all over the world, from software
                  engineers, mobile application developers, to UI UX designers, to meet <strong>24/7</strong> diverse
                  business needs. At SoftWebix, we are committed to providing the most affordable and cost-effective
                  solutions without compromising quality. Whether it's building responsive, user-friendly websites or
                  developing custom IT tools, our goal is to empower businesses of all sizes to succeed in today's
                  digital landscape.
                </p>
                <p>
                  Our expertise spans web design, software development, system integration, cybersecurity, and ongoing
                  technical support — all aimed at helping you streamline operations and grow your business.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                We combine innovation, efficiency, and flexible pricing models to ensure that our clients receive
                exceptional value and reliable results. Driven by a passion for technology and customer satisfaction, we
                prioritize transparency, collaboration, and continuous improvement.
              </p>
              <p>
                Let us be your trusted IT partner to transform your ideas into reality, enhance your digital presence,
                and achieve your business goals.
              </p>

              {/* Key Features */}
              <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-primary text-primary-foreground p-4">
                    <CardContent className="p-0 text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm">Skilled Professionals</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent text-accent-foreground p-4">
                    <CardContent className="p-0 text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm">Support Available</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card border-border p-4 sm:col-span-2">
                    <CardContent className="p-0 text-center">
                      <div className="text-lg font-bold text-card-foreground">One-Stop IT Solutions</div>
                      <div className="text-sm text-muted-foreground">First in Hong Kong</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
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
