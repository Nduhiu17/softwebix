import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { KeyProjectsSection } from "@/components/key-projects-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection backgroundImage="/images/1_2.svg" />
      <ServicesSection />
      <KeyProjectsSection />
      <WhyUsSection />
      <ContactCtaSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
