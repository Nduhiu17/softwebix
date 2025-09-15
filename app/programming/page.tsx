import CustomizedBackendSection from "@/components/customized-backend-section";
import JavaSection from "@/components/java-section";
import ProfessionalServices from "@/components/professional-services";
import ProgrammingHeroSection from "@/components/programming-hero-section";
import PythonSection from "@/components/python-section";
import { FaqSection } from "@/components/faq-section";
import { ContactCtaSection } from "@/components/contact-cta-section";

export default function ProgrammingPage() {
  return (
    <>
      <ProgrammingHeroSection />
      <ProfessionalServices />
      <PythonSection />
      <JavaSection />
      <CustomizedBackendSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}

