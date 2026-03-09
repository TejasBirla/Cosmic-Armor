import { useState } from "react";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Features", "Solutions", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo — flush to left edge with controlled padding */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="Cosmic Armor"
              className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto"
            />
          </div>

          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="https://app.cosmicarmor.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-3 lg:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-bold text-black bg-brand-primary rounded hover:brightness-110 transition-all duration-200 tracking-wide shadow-[0_0_20px_rgba(141,224,18,0.35)] whitespace-nowrap">
                Get Started
              </button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-b border-white/10 transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-white/80 hover:text-white text-base font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="https://app.cosmicarmor.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-2.5 text-sm font-bold text-black bg-brand-primary rounded hover:brightness-110 transition-all shadow-[0_0_20px_rgba(141,224,18,0.35)]">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
