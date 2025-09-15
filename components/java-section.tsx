import Image from "next/image";

export default function JavaSection() {
  return (
    <section className="bg-[#FFE0B2] py-20 text-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 lg:pr-10">
          <p className="text-lg lg:text-xl leading-relaxed">
            Java is renowned for its robustness, portability, and stability,
            making it ideal for complex enterprise environments, cross-platform
            applications, and large-scale backend systems. We develop
            sophisticated Java applications that power{" "}
            <span className="font-bold">mission-critical systems</span>,{" "}
            <span className="font-bold">mobile platforms (Android)</span>, and{" "}
            <span className="font-bold">high-transaction environments</span> that
            demand reliability and uptime.
          </p>
        </div>
        <div className="lg:w-1/3 mt-10 lg:mt-0 text-center">
          <Image
            src="/images/Programming-services/java-logo.png"
            alt="Java logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-4xl font-bold mt-4">JAVA</h2>
        </div>
      </div>
    </section>
  );
}
