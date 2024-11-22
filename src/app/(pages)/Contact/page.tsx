"use client";


export default function ContactPage() {
  return (
    <div>
      <div className="w-full h-screen bg-[url('/images/contact01.png')] bg-no-repeat bg-center bg-cover relative">
        <div className="w-full h-full bg-[rgba(255,255,255,0.5)] flex flex-col justify-center items-center">
          <h1 className="text-7xl font-serif font-bold text-center mb-2">Contact Us</h1>
          <p className="text-xl font-sans text-gray-800 text-center">
            Any question, Hire us or remarks? Just write us a message!
          </p>
        </div>
      </div>

      <div className="w-full  bg-[rgba(210,220,232,0.8)] flex justify-center py-10">
        <div className="bg-white/40 rounded-md p-10 flex flex-col lg:flex-row lg:space-x-8">
          {/* Right Side Area */}
          <div className="bg-[url('/images/contact01.png')] bg-cover bg-center rounded-lg w-full lg:w-96 mx-auto lg:mx-0">
            <div className="bg-white/60 rounded-lg p-5 flex flex-col justify-between h-full">
              <div>
                <h1 className="text-4xl font-bold">Contact Information</h1>
                <p className="text-xl">Reach us via the following:</p>
              </div>
              <ul className="mt-5 space-y-4 text-lg">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span>contact@weboratech.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>123 WeboraTech St, Tech City, Country</span>
                </li>
              </ul>
              <ul className="flex space-x-4 mt-5">
                <li>
                  <a href="#" aria-label="Visit Instagram">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Visit Facebook">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Left Side Form */}
          <div className="mt-10 lg:mt-0">
            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fname" className="block text-lg font-medium">
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    required
                    placeholder="John"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-lg font-medium">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Johndoe@gmail.com"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pnumber"
                    className="block text-lg font-medium"
                  >
                    Phone No
                  </label>
                  <input
                    id="pnumber"
                    type="tel"
                    required
                    placeholder="000-000000-00"
                    className="w-full border-b border-gray-400 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="msg" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="msg"
                  required
                  placeholder="Write your message here..."
                  className="w-full h-32 border-b border-gray-400 bg-transparent focus:outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="block mx-auto px-8 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
