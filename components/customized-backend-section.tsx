import Image from "next/image";

const features = [
  {
    title: "CUSTOM API DEVELOPMENT",
    description:
      "We build robust, well-documented APIs for seamless integration with frontend applications, third-party services, and external systems, enabling efficient data exchange and workflow automation.",
    icon: "/images/Programming-services/custom-api-development.svg",
  },
  {
    title: "SECURITY IMPLEMENTATION",
    description:
      "Security is integral to our backend services, with comprehensive measures including authentication, authorization, data encryption, and protection against common vulnerabilities to safeguard your business-critical data.",
    icon: "/images/Programming-services/security-implementation.svg",
  },
  {
    title: "PERFORMANCE OPTIMIZATION",
    description:
      "Our backend systems are engineered for scalability and high availability, using techniques such as load balancing, caching, and database optimization to ensure smooth performance as your user base grows.",
    icon: "/images/Programming-services/performance-optimization.svg",
  },
  {
    title: "ONGOING MAINTENANCE & SUPPORT",
    description:
      "We offer continuous support and iterative improvements to keep your backend running smoothly, quickly addressing bugs, implementing updates, and adapting to evolving business needs.",
    icon: "/images/Programming-services/ongoing-maintenance-support.svg",
  },
  {
    title: "CONTENT MANAGEMENT & MONITORING",
    description:
      "You gain access to dashboards and tools to monitor backend operations and manage your content in real-time, providing transparency and control over your data and system performance.",
    icon: "/images/Programming-services/content-management-monitoring.svg",
  },
];

export default function CustomizedBackendSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">CUSTOMIZED BACKEND DEVELOPMENT</h2>
            <p className="text-lg mb-8">
              Our backend development services focus on building scalable, secure, and maintainable server-side systems tailored precisely to your business requirements. We design and implement backend architectures that act as the resilient foundation for your digital products, whether web applications, mobile apps, or cloud-based platforms.
            </p>
            <h3 className="text-2xl font-bold mb-6">FEATURES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold whitespace-nowrap">{`${index + 1}. ${feature.title}`}</h4>
                    <Image src={feature.icon} alt={feature.title} width={60} height={60} className="ml-4" />
                  </div>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="/images/Programming-services/customised-backend-development.svg"
              alt="Customized backend development illustration"
              width={600}
              height={600}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
