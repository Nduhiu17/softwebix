import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhyUsSection() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3e3568] mb-8">WHY US?</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              At SoftWebix, we are proud to offer cost-effective, reliable, and innovative One-Stop IT services designed
              to help your business thrive without straining your budget. We have a team of 50 young, smart, and
              energetic developers and designers, we will always bring the most trendy solutions to your business
            </p>
            <Button className="bg-[#3e3568] hover:bg-[#2d2557] text-white px-16 py-8 text-lg font-semibold">
              CONNECT US
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/images/why-us-team.jpg"
              alt="SoftWebix team - young professionals working together"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
