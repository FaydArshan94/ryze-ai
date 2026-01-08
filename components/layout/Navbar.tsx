import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <>
      <nav
        className={`
    fixed top-0 left-0 right-0 z-50
    backdrop-blur-3xl
    bg-[#050D26]
    transition-all duration-300 ease-out
    ${isScrolled ? "py-0" : "py-1"}
  `}
      >
        <div className="animate-navbar-enter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`
    flex items-center justify-between
    transition-all duration-300
    ${isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"}
  `}
            >
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span
                    className={`
    font-black tracking-wider font-[Inter] text-white
    transition-all duration-300
    ${isScrolled ? "text-xl xl:text-3xl" : "text-2xl xl:text-4xl"}
  `}
                  >
                    Ryze
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="#login"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Login
                </a>
                <button
                  className={`
    bg-linear-to-r from-blue-600 to-cyan-600
    rounded-lg font-semibold text-white
    shadow-lg shadow-blue-500/20
    hover:shadow-blue-500/40 hover:scale-105
    transition-all duration-300
    ${isScrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm"}
  `}
                >
                  Get Free Demo
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:-translate-y-0.5 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-300
            ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col pt-20 px-6 transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Login
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="pb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Get Free Demo
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className={isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"} />
    </>
  );
}
