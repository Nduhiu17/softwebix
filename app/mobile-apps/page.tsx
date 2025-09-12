import Image from 'next/image';
import { ContactCtaSection } from '@/components/contact-cta-section';
import { FaqSection } from '@/components/faq-section';
import { WhyUsSection } from '@/components/why-us-section';
import { IosSection } from '@/components/ios-section';
import { AndroidSection } from '@/components/android-section';

import Link from 'next/link';

const features = [
  {
    name: 'Custom Solutions',
    description: 'Tailored app development to meet your unique business needs and goals.',
    icon: '/images/mobile-application-development/custom-solutions.svg',
  },
  {
    name: 'User-Centered Design',
    description: 'Focus on intuitive, engaging user interfaces and seamless user experiences.',
    icon: '/images/mobile-application-development/user-centered-design.svg', // Placeholder
  },
  {
    name: 'Cross-Platform Solutions',
    description: 'Creating apps for both iOS and Android platforms to maximize your reach.',
    icon: '/images/mobile-application-development/cross-platform-solutions-2.svg',
  },
  {
    name: 'High Performance',
    description: 'Optimized apps that run smoothly and quickly, even under high traffic.',
    icon: '/images/mobile-application-development/high-performance.svg',
  },
  {
    name: 'Security First',
    description: 'Implement robust security measures to protect user data and ensure app integrity.',
    icon: '/images/mobile-application-development/security-first.svg',
  },
  {
    name: 'Scalable Architecture',
    description: 'Build apps that can grow with your business, handling increasing users and features.',
    icon: '/images/mobile-application-development/scallable-architecture.svg',
  },
  {
    name: 'End-to-End Service',
    description: 'From concept and design through development, testing, launch, and ongoing maintenance.',
    icon: '/images/mobile-application-development/end-to-end-service.svg',
  },
  {
    name: 'Integration Capabilities',
    description: 'Connect your app with existing systems, APIs, and third-party services.',
    icon: '/images/mobile-application-development/integration-capabilities.svg',
  },
  {
    name: 'Regular Updates',
    description: 'Provide continual improvements and feature upgrades to keep your app competitive.',
    icon: '/images/mobile-application-development/regular-updates.svg',
  },
  {
    name: 'Quality Assurance',
    description: 'Rigorous testing for bugs, usability, and performance before launch.',
    icon: '/images/mobile-application-development/quality-assuarance.svg',
  },
];

export default function MobileAppsPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#4A2F6A] text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Mobile Application Development</h1>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">BRINGING YOUR VISION <br /> TO LIFE: SEAMLESS <br /> MOBILE APPS FOR EVERY <br /> USER, EVERYWHERE</h2>
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/images/mobile-application-development/heroes-image.svg"
                alt="Mobile Application Development"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#E6E0EE] py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            In today's digital world, a great mobile app can <span className="font-bold">BOOST YOUR BUSINESS</span>. We offer <span className="font-bold">HIGH-QUALITY APP DEVELOPMENT</span> tailored to bring your business ideas to life. Our expert team creates user-friendly, high-performance apps for <span className="font-bold">iOS AND ANDROID</span>, delivering seamless, customized solutions that <span className="font-bold">CONNECT YOU WITH CUSTOMERS ANYTIME, ANYWHERE</span>.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-[#4A2F6A]">FEATURES</h3>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={`${feature.name} icon`}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-[#1E3A8A]">{feature.name}</h4>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/contact" className="bg-[#1E3A8A] text-white font-bold py-4 px-8 rounded-full hover:bg-blue-800 transition-colors duration-300">
              MAKE YOUR APPS
            </Link>
          </div>
        </div>
      </section>

      <IosSection />
      <AndroidSection />
      <FaqSection />
      <ContactCtaSection />
    </div>
  );
}
