"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
        <div className="text-center md:text-left">
          <div className="text-4xl font-extrabold text-yellow-500 mb-4">WeboraTech</div>
          <p className="text-lg text-gray-400 mb-6">
            At WeboraTech, we provide the best in class web development, graphics, and design services. Our mission is to bring your ideas to life with innovation and passion.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.facebook.com" target="_blank" className="text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="text-2xl hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="text-2xl hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
        </div>

    
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Portfolio" className="hover:text-yellow-500 transition duration-200">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-yellow-500 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-yellow-500 transition duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-400 mb-2">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <strong>Email:</strong> contact@weboratech.com
          </p>
          <p className="text-lg text-gray-400">
            <strong>Address:</strong> 123 WeboraTech St, Tech City, Country
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-center py-4 flex content-end justify-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} WeboraTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
