import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "How do you increase engagement for our social media accounts?",
    answer:
      "We increase engagement by creating high-quality, relevant content, running targeted ad campaigns, interacting with your audience through comments and messages, and analyzing performance data to optimize our strategy continuously.",
  },
  // Add more FAQs as needed
];

export function SocialFaqSection() {
  return (
    <section className="py-20 bg-[#F5F3EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#4A2F6A] mb-4">FAQ</h2>
          <p className="text-lg text-gray-600 font-medium">CHECK OUT OUR FREQUENT QUESTIONS</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="group text-left font-semibold text-gray-800 hover:text-[#4A2F6A] text-xl py-6 hover:no-underline">
                    <span className="flex-1 text-left">{faq.question}</span>
                    <Plus className="h-6 w-6 shrink-0 text-gray-500 group-hover:text-[#4A2F6A] transition-transform duration-200 group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
