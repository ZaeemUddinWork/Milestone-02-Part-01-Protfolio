"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header") as HTMLDivElement;
      if (window.scrollY > 10) {
        header.classList.add("fixed", "bg-[rgba(71,71,71,0.3)]", "shadow-md");
        header.classList.remove("absolute", "bg-[rgba(71,71,71,0.1)]");
      } else {
        header.classList.remove("fixed", "bg-[rgba(71,71,71,0.3)]", "shadow-md");
        header.classList.add("absolute", "bg-[rgba(71,71,71,0.1)]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className="flex justify-between items-center w-full py-6 px-10 text-[#3b3b3b] z-50 bg-[rgba(71,71,71,0.1)] absolute transition-all duration-300 ease-in-out"
    >
      {/* Logo */}
      <div className="text-4xl font-extrabold text-yellow-500">WeboraTech</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-xl font-semibold text-gray-700">
        <Link href="/" className="hover:text-yellow-500 transition duration-200">
          Home
        </Link>
        <Link href="/Portfolio" className="hover:text-yellow-500 transition duration-200">
          Portfolio
        </Link>
        <Link href="/About" className="hover:text-yellow-500 transition duration-200">
          About
        </Link>
        <Link href="/Contact" className="hover:text-yellow-500 transition duration-200">
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        aria-label="Open navigation menu"
        className="text-3xl font-semibold md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[rgba(71,71,71,0.1)] shadow-md flex flex-col items-center space-y-6 py-6 z-50">
          <Link
            href="/"
            className="text-xl font-semibold hover:text-yellow-500 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/Portfolio"
            className="text-xl font-semibold hover:text-yellow-500 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/About"
            className="text-xl font-semibold hover:text-yellow-500 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-xl font-semibold hover:text-yellow-500 transition duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
