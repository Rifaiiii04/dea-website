import { useEffect, useState } from "react";
import MainLogo from "../assets/icons/main.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Projects"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500`}>
      <div
        className={`w-full mx-auto px-4 py-3 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "shadow-[0_6px_12px_-2px_rgba(59,130,246,0.3)] bg-neutral-900 backdrop-blur-sm "
            : "bg-transparent mt-0"
        }`}
      >
        {/* Logo */}
        <div>
          <img src={MainLogo} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 font-semibold">
          {navItems.map((item) => (
            <li key={item} className="group relative">
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
              <div className="absolute left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 backdrop-blur-sm py-4 px-6 rounded-b-xl shadow-md">
          <ul className="flex flex-col space-y-4 font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
