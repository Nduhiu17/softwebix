import Image from 'next/image';

export function AndroidSection() {
  return (
    <section className="bg-[#4F6A2F] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative flex justify-center">
            <Image
              src="/images/mobile-application-development/android.svg"
              alt="Android App Showcase"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-4 text-right text-green-400">ANDROID</h2>
            <p className="text-lg leading-relaxed mb-4 text-right">
              We provide comprehensive <span className="text-green-300">Android app development</span> services designed to help your business reach a vast and diverse global audience. Our experienced developers specialize in building flexible, scalable, and high-quality applications optimized for the wide range of <span className="text-green-300">Android devices and versions</span>. Leveraging the latest <span className="text-green-300">Android SDKs, tools, and best practices</span>, we create apps that offer smooth performance, intuitive interfaces, and strong security.
            </p>
            <p className="text-lg leading-relaxed text-right">
              Our development process covers everything from initial concept and design to development, testing, and <span className="text-green-300">launch on the Google Play Store</span>. We focus on delivering customized solutions that meet your specific business goals while ensuring compatibility across various screen sizes, hardware capabilities, and OS versions. We also offer <span className="text-green-300">ongoing support and updates</span> to keep your app competitive and aligned with evolving market trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
