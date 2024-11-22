"use client";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-[url('/images/portfolio.png')] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full bg-[rgba(255,255,255,0.6)] flex flex-col justify-center items-center">
          <h1 className="text-7xl font-serif font-bold text-center text-gray-800">Our Portfolio</h1>
          <p className="text-xl text-center text-gray-800 mt-4">
            Explore Our Work and Services
          </p>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-5xl font-serif text-center text-gray-800">Recent Projects</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {/* Project 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/project1.webp"
              alt="Project 1"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Web Design for Business</h3>
              <p className="text-gray-600 mt-2">
                We created a sleek and responsive design for a local business to improve their online presence.
              </p>
              <Link href="#" className="bg-gray-800 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300  w-52 mt-5 flex justify-center justify-self-center">View Project</Link>
            </div>
          </div>
          {/* Project 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/project2.png"
              alt="Project 2"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">E-commerce Platform</h3>
              <p className="text-gray-600 mt-2">
                Developed an easy-to-navigate e-commerce platform that streamlined shopping for customers.
              </p>
              <Link href="#" className="bg-gray-800 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300   w-52 mt-5 flex justify-center justify-self-center">View Project</Link>
            </div>
          </div>
          {/* Project 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/project3.png"
              alt="Project 3"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Mobile App Design</h3>
              <p className="text-gray-600 mt-2">
                Designed an intuitive mobile app that improved user experience and engagement.
              </p>
              <Link href="#" className="bg-gray-800 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300  w-52 mt-5 flex justify-center justify-self-center">View Project</Link>
            </div>
          </div>
        </div>
      </div>

   
      <div className="py-20 bg-[rgba(255,255,255,0.8)]">
        <h2 className="text-5xl font-serif text-center text-gray-800">Client Testimonials</h2>
        <div className="mt-10 grid grid-rows-1 gap-y-5 lg:flex justify-center lg:space-x-10">
          <div className="max-w-xs bg-white p-6 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700">
            &quot;The team at WeboraTech exceeded our expectations with their creativity and attention to detail.&quot;
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="ml-2 font-semibold text-gray-700">John Doe</p>
            </div>
          </div>
          <div className="max-w-xs bg-white p-6 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700">
            &quot;Amazing service! They delivered a beautiful website and app in record time. Highly recommend!&quot;
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="ml-2 font-semibold text-gray-700">Jane Smith</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
                        <p className="text-xl text-gray-700">&quot;Fantastic experience! The team at WeboraTech delivered exactly what I needed. Very professional and quick!&quot;</p>
                        <div className="flex items-center mt-4">
                            <Image src="https://randomuser.me/api/portraits/women/6.jpg" alt="Client" width={40} height={40} className="rounded-full" />
                            <p className="ml-2 font-semibold text-gray-700">Jane Smith</p>
                        </div>
                    </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="py-20 bg-gray-800 text-white">
        <h2 className="text-5xl font-serif text-center">Get in Touch</h2>
        <div className="mt-10 flex justify-center">
          <Link
            href="/Contact"
            className="bg-white text-black py-3 px-8 rounded-lg hover:bg-gray-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
