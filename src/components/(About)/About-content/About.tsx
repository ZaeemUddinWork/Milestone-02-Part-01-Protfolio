"use client"
import Image from "next/image"
import CountUp from "react-countup"
import Link from "next/link";

export default function About() {
    return(
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="bg-[url('/images/aboutbg.png')] bg-no-repeat bg-cover bg-center">
                <div className="w-full h-[100vh] bg-[rgba(255,255,255,0.6)] flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-serif mt-52 md:mt-0 text-gray-800">About Us</h1>
                    <p className="text-3xl text-center text-gray-700 mt-4">
                        We Provide the Best Designs & Services to Our Clients
                    </p>
                    {/* Rating Section */}
                    <div className="flex text-2xl mt-6 space-x-6 items-center">
                        <div className="flex items-center space-x-2">
                            <h1>Rating</h1>
                            <h2 className="text-yellow-500">&#11088;</h2>
                            <h2 className="font-semibold">5.0</h2>
                        </div>
                        {/* Profile Images */}
                        <div className="flex items-center relative">
                            <Image
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="User profile"
                                width={500}
                                height={500}
                                className="w-14 h-14 rounded-full border-2 border-gray-300 absolute"
                            />
                            <Image
                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                alt="User profile"
                                width={500}
                                height={500}
                                className="w-14 h-14 ml-10 rounded-full border-2 border-gray-300 absolute"
                            />
                            <Image
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt="User profile"
                                width={500}
                                height={500}
                                className="w-14 h-14 ml-20 rounded-full border-2 border-gray-300 absolute"
                            />
                            <Image
                                src="https://randomuser.me/api/portraits/men/4.jpg"
                                alt="User profile"
                                width={500}
                                height={500}
                                className="w-14 h-14 ml-32 rounded-full border-2 border-gray-300 absolute"
                            />
                            <div className="bg-blue-700 w-14 h-14 flex justify-center items-center rounded-full z-10 ml-[160px] font-serif font-semibold text-white text-[18px]">
                                <h1>100+</h1>
                            </div>
                        </div>
                    </div>
                    {/* Stats Section */}
                    <div className="mt-20 md:mt-[900px] relative md:absolute grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-10 text-center bg-[rgba(255,255,255,0.6)] rounded-2xl shadow-md shadow-gray-400 lg:w-[1000px] p-5">
                        <div className="py-10 md:px-10">
                            <h1 className="text-6xl font-serif font-bold text-gray-800">
                                <CountUp end={50} duration={5} enableScrollSpy scrollSpyOnce />+
                            </h1>
                            <p className="text-2xl font-semibold pt-2 text-gray-700">Satisfied Clients</p>
                        </div>
                        <div className="border-y-2 md:border-y-0 md:border-x-2 border-gray-300 py-10 md:px-10">
                            <h1 className="text-6xl font-serif font-bold text-gray-800">
                                <CountUp end={100} duration={5} enableScrollSpy scrollSpyOnce />+
                            </h1>
                            <p className="text-2xl font-semibold pt-2 text-gray-700">Projects Done</p>
                        </div>
                        <div className="py-10 md:px-10">
                            <h1 className="text-6xl font-serif font-bold text-gray-800">
                                <CountUp end={25} duration={5} enableScrollSpy scrollSpyOnce />+
                            </h1>
                            <p className="text-2xl font-semibold pt-2 text-gray-700">Members</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="block lg:flex justify-center items-center w-full h-[100vh] bg-[rgba(255,255,255,0.2)] mt-20 lg:mt-0 lg:px-20">
                <div className="flex flex-col items-start justify-center w-full lg:w-[50%] px-6 lg:px-12 space-y-6">
                    <ul className="list-disc pl-6 text-lg text-gray-800">
                        <li>About Company</li>
                    </ul>
                    <h1 className="text-4xl lg:text-6xl font-serif text-gray-900">
                        Our Company&#39;s Mission
                    </h1>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi rerum
                        quidem iusto asperiores obcaecati quos recusandae quibusdam, neque
                        perferendis ullam nesciunt. Quis corporis magni vel officia quibusdam
                        doloremque incidunt ut, eius et dicta. Illo cumque numquam ex magni
                        doloribus quisquam ad possimus, nihil esse, adipisci, blanditiis
                        laboriosam distinctio? Amet praesentium reiciendis voluptate voluptates
                        voluptas tempore aut, id aspernatur quos ullam rerum accusamus aperiam.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full lg:w-[50%] mt-12 lg:mt-0">
                    <Image
                        src="/images/boyngirl.jpg"
                        alt="Representation of our mission"
                        width={665}
                        height={800}
                        className="w-[90%] lg:w-[550px] h-auto rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:w-[600px] hover:shadow-purple-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* Our Partners Section */}
            <div className="bg-gray-100 py-20">
                <h2 className="text-5xl font-serif text-center text-gray-800">Our Trusted Partners</h2>
                <div className="flex justify-center mt-10 space-x-10">
                    <Image src="/images/Levis-Logo.png" alt="Partner 1" width={130} height={50}  />
                    <Image src="/images/amazon.png" alt="Partner 2" width={130} height={50}  />
                    <Image src="/images/Chanel-Logo.png" alt="Partner 3" width={130} height={50}  />
                </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-[rgba(255,255,255,0.8)] py-20">
                <h2 className="text-5xl font-serif text-center text-gray-800">What Our Clients Say</h2>
                <div className="mt-10 grid grid-rows-1 gap-y-5 lg:flex justify-center lg:space-x-10">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
                        <p className="text-xl text-gray-700">&#34;Great service! WeboraTech brought my vision to life with stunning design. I&#39;m beyond impressed!&#34;</p>
                        <div className="flex items-center mt-4">
                            <Image src="https://randomuser.me/api/portraits/men/5.jpg" alt="Client" width={40} height={40} className="rounded-full" />
                            <p className="ml-2 font-semibold text-gray-700">John Doe</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
                    <p className="text-xl text-gray-700">&#34;Excellent service! WeboraTech created a beautiful website that exceeded my expectations. Highly recommend!&#34;</p>
                    <div className="flex items-center mt-4">
                        <Image src="https://randomuser.me/api/portraits/women/2.jpg" alt="Client" width={40} height={40} className="rounded-full" />
                        <p className="ml-2 font-semibold text-gray-700">Elizabeth</p>
                    </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs">
                        <p className="text-xl text-gray-700">&#34;Fantastic experience! The team at WeboraTech delivered exactly what I needed. Very professional and quick!&#34;</p>
                        <div className="flex items-center mt-4">
                            <Image src="https://randomuser.me/api/portraits/women/6.jpg" alt="Client" width={40} height={40} className="rounded-full" />
                            <p className="ml-2 font-semibold text-gray-700">Jane Smith</p>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="bg-gray-800 py-20">
                <h2 className="text-5xl font-serif text-center text-white">Contact Us</h2>
                <div className="mt-10 flex justify-center">
                   
                            <Link  href={'/Contact'}  className=" text-centerw-52 bg-white text-black py-3 px-8 rounded-lg hover:bg-gray-300">Contact Us</Link>
                     
                </div>
            </div>
        </div>
    );
}
