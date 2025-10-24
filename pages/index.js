"use client";
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Products", "Contact"];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-pink-950 text-white"
          : "bg-pink-50 text-gray-800"
      }`}
    >
      {/* 🌸 NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-lg transition-all ${
          darkMode ? "bg-gray-900/80 border-b border-pink-900/30" : "bg-white/80"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1
            className={`text-2xl font-bold tracking-wide ${
              darkMode ? "text-pink-300 drop-shadow" : "text-pink-500"
            }`}
          >
            Marva
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  darkMode
                    ? "text-gray-200 hover:text-pink-400"
                    : "text-gray-700 hover:text-pink-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-pink-900/40"
                  : "bg-pink-100 hover:bg-pink-200"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-pink-900/40"
                  : "bg-pink-100 hover:bg-pink-200"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden px-6 py-4 space-y-4 border-t transition-all duration-500 ${
              darkMode
                ? "bg-gray-900 text-gray-200 border-pink-900/30"
                : "bg-white text-gray-700 border-pink-200"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium hover:text-pink-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 🌷 HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
      >
        <h1
          className={`text-5xl font-bold mb-4 ${
            darkMode
              ? "text-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              : "text-pink-500"
          }`}
        >
          Welcome to Marva Beauty 🌸
        </h1>
        <p
          className={`max-w-lg mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Soft, glowing, and confident — discover our collection of natural
          beauty products designed for every skin tone.
        </p>
        <button
          className={`font-medium px-8 py-3 rounded-full shadow-lg transition ${
            darkMode
              ? "bg-pink-500 hover:bg-pink-600 text-white shadow-pink-900/50"
              : "bg-pink-400 hover:bg-pink-500 text-white"
          }`}
        >
          Shop Now
        </button>
      </section>

      {/* 🌼 ABOUT SECTION */}
      <section
        id="about"
        className={`py-20 px-6 ${
          darkMode ? "bg-gray-900/70" : "bg-white"
        } transition-all`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl font-bold mb-8 ${
              darkMode ? "text-pink-300" : "text-pink-500"
            }`}
          >
            About Us
          </h2>
          <div className="flex flex-col items-center gap-6">
            <img
              src="/cat3.jpeg"
              alt="Marva"
              className="w-36 h-36 object-cover rounded-full shadow-lg border-4 border-pink-200"
            />
            <p
              className={`leading-relaxed max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Marva Beauty hadir untuk kamu yang ingin tampil natural, lembut,
              dan percaya diri. Kami membuat produk dengan bahan alami terbaik,
              agar kulitmu sehat dan bersinar sepanjang hari 🌷
            </p>
          </div>
        </div>
      </section>

      {/* 💅 PRODUCTS SECTION */}
      <section
        id="products"
        className={`py-20 px-6 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-pink-950"
            : "bg-pink-100"
        } transition-all`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`text-3xl font-bold mb-10 ${
              darkMode ? "text-pink-300" : "text-pink-500"
            }`}
          >
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Body Lotion", "Face Cream", "Lip Balm"].map((product) => (
              <div
                key={product}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
                  darkMode ? "bg-gray-900/70" : "bg-white"
                }`}
              >
                <div
                  className={`h-40 rounded-xl mb-4 ${
                    darkMode ? "bg-pink-900/20" : "bg-pink-200"
                  }`}
                ></div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                >
                  {product}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Natural ingredients for radiant, glowing skin.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💌 CONTACT SECTION */}
      <footer
        id="contact"
        className={`py-12 px-6 text-center border-t transition-all ${
          darkMode
            ? "bg-gray-900 border-pink-900/30 text-gray-300"
            : "bg-white border-pink-200 text-gray-600"
        }`}
      >
        <h2
          className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-pink-300" : "text-pink-500"
          }`}
        >
          Contact Us
        </h2>
        <p className="mb-6">We’d love to hear from you 💌</p>
        <form className="max-w-md mx-auto">
          {["Your Name", "Your Email"].map((placeholder, i) => (
            <input
              key={i}
              type={i === 1 ? "email" : "text"}
              placeholder={placeholder}
              className={`w-full p-3 mb-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                darkMode
                  ? "bg-gray-800 border-pink-900/40 text-white"
                  : "bg-white border-pink-200 text-gray-800"
              }`}
            />
          ))}
          <textarea
            placeholder="Your Message"
            rows="4"
            className={`w-full p-3 mb-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400 ${
              darkMode
                ? "bg-gray-800 border-pink-900/40 text-white"
                : "bg-white border-pink-200 text-gray-800"
            }`}
          ></textarea>
          <button
            className={`px-8 py-3 rounded-full font-medium transition ${
              darkMode
                ? "bg-pink-500 hover:bg-pink-600 text-white"
                : "bg-pink-400 hover:bg-pink-500 text-white"
            }`}
          >
            Send Message
          </button>
        </form>
        <p
          className={`text-sm mt-8 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Marva Beauty. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
