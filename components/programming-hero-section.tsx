import Image from "next/image";
import Link from "next/link";

export default function ProgrammingHeroSection() {
  return (
    <section className="relative bg-[#4B3A71] text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-yellow-400">
            Programming Services
          </h1>
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            BUILDING THE FUTURE WITH <span className="text-yellow-400">JAVA AND PYTHON</span>
          </h2>
          <Link
            href="#"
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300"
          >
            KNOW MORE
          </Link>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative">
            <Image
              src="/images/Programming-services/programming-services.png"
              alt="Programming illustration"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
