import Image from "next/image";

export default function PythonSection() {
  return (
    <section className="bg-[#B2EBF2] py-20 text-gray-800">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-10 lg:mb-0 text-center">
          <Image
            src="/images/Programming-services/python-logo.png"
            alt="Python logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-4xl font-bold mt-4">PYTHON</h2>
        </div>
        <div className="lg:w-2/3 lg:pl-10">
          <p className="text-lg lg:text-xl leading-relaxed">
            We harness its simplicity and readability to accelerate development
            cycles and support cutting-edge technologies such as{" "}
            <span className="font-bold">data science</span>,{" "}
            <span className="font-bold">artificial intelligence</span>,{" "}
            <span className="font-bold">machine learning</span>,{" "}
            <span className="font-bold">web frameworks</span> (like Django and
            Flask), and rapid prototyping. Python's extensive libraries and
            frameworks enable us to deliver innovative and efficient solutions
            tailored to your specific challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
