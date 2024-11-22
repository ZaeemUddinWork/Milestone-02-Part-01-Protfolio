// components/ContactSection.tsx
"use client";
import Link from "next/link";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
