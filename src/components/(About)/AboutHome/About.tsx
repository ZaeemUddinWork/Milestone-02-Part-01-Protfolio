// components/AboutSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
const AboutSection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      {/* Section Heading */}
      <h2 className="text-5xl font-semibold text-center text-gray-800 mb-10">
        About Us
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className="relative">
            <Image
              src="/images/boyngirl.jpg"
              alt="About Us"
              width={500}
              height={350}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right side: Text */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Innovative Solutions for Your Business
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              At WeboraTech, we offer cutting-edge solutions to improve your
              digital presence. Our goal is to enhance your business growth with
              the power of technology, delivering tailor-made services that meet
              your unique needs.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="/About"
                className="bg-gray-800 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
