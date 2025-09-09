import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What service do your offer?",
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

export function FaqSection() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">FAQ</h2>
          <p className="text-lg text-slate-700 font-medium">CHECK OUT OUR FREQUENT QUESTIONS</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 last:border-b-0">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="group text-left font-semibold text-slate-900 hover:text-slate-700 text-xl py-6 hover:no-underline [&>svg:not(.plus-icon)]:hidden">
                    <span className="flex-1 text-left">{faq.question}</span>
                    <Plus className="plus-icon h-10 w-10 shrink-0 text-slate-500 group-hover:text-slate-700 transition-transform duration-200 group-data-[state=open]:rotate-45 p-1" />
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
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
