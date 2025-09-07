import { Button } from "@/components/ui/button"

export function ContactCtaSection() {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your IT Solutions Now at No Cost</h2>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
          Take advantage of our free consultation service to analyze your business needs, We will make sure we provide
          the most suitable, and high quality I.T. solution.
        </p>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg font-bold rounded-full"
        >
          CONTACT US
        </Button>
      </div>
    </section>
  )
}
