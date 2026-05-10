import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "Projects", href: "#projects"},
    { label: "About", href: "#about"},
    { label: "Contact", href: "#contact"},
  ];

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    [...navLinks.map((l) => l.href), "#home"].forEach((selector) => {
      const section = document.querySelector(selector);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-lg font-bold text-gray-900">
          Estifanos<span className="text-orange-500">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-8 text-gray-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 flex items-center gap-1.5 relative py-1 ${
                  isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-gray-50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors flex items-center gap-2 ${
                    isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
