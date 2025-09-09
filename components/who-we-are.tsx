import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="bg-[#FFF9E6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Who We Are</h2>
            
            <p className="text-gray-700 leading-relaxed">
              SoftWebix is the <span className="font-bold">FIRST IT company</span> in Hong Kong that provide an <span className="font-bold">One-Stop tech solution</span>, from website development, social media engagement, mobile application development to comprehensive IT services like maintenance, bug fixes. We aim to provide all companies, no matter how large their size is, a high quality with affordable price IT solution.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We have a team of <span className="font-bold">50 skilled professionals in all over the world</span>, from software engineers, mobile application developers, to UI UX designers, to meet <span className="font-bold">24/7</span> diverse business needs. At SoftWebix, we are committed to providing the <span className="font-bold">most affordable and cost-effective solutions</span> without compromising quality. Whether it's building responsive, user-friendly websites or developing custom IT tools, our goal is to <span className="font-bold">empower businesses</span> of all sizes to succeed in today's digital landscape.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Our expertise spans web design, software development, system integration, cybersecurity, and ongoing technical support – all aimed at <span className="font-bold">helping you streamline operations and grow your business.</span>
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              We combine <span className="font-bold">innovation, efficiency, and flexible pricing models</span> to ensure that our clients receive exceptional value and reliable results. Driven by a passion for technology and customer satisfaction, we prioritize <span className="font-bold">transparency, collaboration, and continuous improvement.</span>
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Let us be your trusted <span className="font-bold">IT partner</span> to transform your ideas into reality, enhance your digital presence, and achieve your business goals.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="md:w-1/2 h-full flex justify-center items-start">
            <div className="w-full h-full flex items-center">
              <img
                src="/images/2_1.svg"
                alt="Our Team"
                className="w-full h-auto max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
