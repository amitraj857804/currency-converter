import React, { useEffect, useState } from "react";
import Converter from "./Converter";
import "../App.css";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-[#794fec]", "text-white");
        } else {
          navbar.classList.remove("bg-[#794fec]", "text-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#9772FD] to-[#bbb8e4] text-white">
      {/* Header */}
      <header
        id="navbar"
        className="w-full p-4 sticky top-0 flex justify-between items-center px-4 md:px-20 transition-colors duration-300 z-50 "
      >
        <h1 className="sm:text-3xl text-2xl font-bold flex gap-2 items-center">
          <img src="public/images/download.png" alt="" className="w-10 h-10" />
          <p> ConvertLy</p>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <a
                href="#features"
                className="hover:underline  hover:text-[#5a419f] hover:font-semibold"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:underline hover:text-[#5a419f] hover:font-semibold"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-[#5a419f] hover:font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            ></path>
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}

      <nav
        className={`md:hidden fixed top-16 left-0 right-0 bg-[#794fec] text-white z-40 overflow-y-auto max-h-[calc(100vh-64px)] navbar-mobile ${
          isMobileMenuOpen ? "open" : ""
        } `}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <a
              href="#features"
              className="hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <h2 className="text-4xl font-extrabold">
          Effortless Currency Conversions
        </h2>
        <p className="mt-4 text-lg">
          Get real-time exchange rates and convert currencies easily.
        </p>
        <a href="#converter" className="duration-300">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-700 hover:text-white duration-300 cursor-pointer">
            Start Converting Now
          </button>
        </a>
      </section>

      {/* Converter Section */}
      <Converter />

      {/* Features Section */}
      <section id="features" className="w-full py-8 bg-white text-black">
        <h3 className="text-center text-3xl font-bold mb-10">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div>
            <h4 className="text-xl font-bold">Real-Time Exchange Rates</h4>
            <p>Stay up-to-date with the latest currency values.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Multiple Currencies</h4>
            <p>Supports all major global currencies.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Responsive Design</h4>
            <p>Works seamlessly on all devices.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-8 bg-gray-200 text-black">
        <h3 className="text-center text-3xl font-bold mb-10">
          What Our Users Say
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <blockquote className="px-2">
            "This app is a game-changer! I use it every day for my business."
            <span className="block mt-2 font-bold">- Sarah K.</span>
          </blockquote>
          <blockquote className="px-2">
            "Fast, reliable, and easy to use. Highly recommended!"
            <span className="block mt-2 font-bold">- Alex P.</span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-6 bg-[#794fec] text-center">
        <p>&copy; 2025 Currency Converter. All rights reserved.</p>
        <ul className="flex justify-center gap-4 mt-4">
          <li>
            <a
              href="https://www.instagram.com/amitraj9736?utm_source=qr&igsh=dzNibXIzdHl0NTli"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amitraj857804"
              target="_blank"
              className="hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amit-raj-b02004237/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default LandingPage;
