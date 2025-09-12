import Image from 'next/image';

export function IosSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">iOS</h2>
            <p className="text-lg leading-relaxed mb-4">
              We provide expert <span className="text-yellow-400">ios app development</span> services to help your business succeed within Apple's <span className="text-yellow-400">premium ecosystem</span>. Our skilled developers create polished, secure, and high-performing apps for <span className="text-yellow-400">iPhone, iPad, and other Apple devices</span>. Using the latest iOS technologies, we build apps that fully leverage Apple's hardware and software features, ensuring exceptional user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              From concept and prototyping to App Store deployment and ongoing maintenance, we deliver clean, intuitive, and scalable solutions. Our iOS apps engage a <span className="text-yellow-400">premium audience, enhance brand loyalty, and drive business growth</span> through seamless, tailored mobile experiences that meet Apple's high standards.
            </p>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/mobile-application-development/ios.svg"
              alt="iOS App Showcase"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
