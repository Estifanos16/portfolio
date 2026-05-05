import { useRef, useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };

  const closeMenuSoon = () => {
    closeTimer.current = setTimeout(() => {
      setMenuOpen(false);
    }, 500);
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    setMenuOpen(false);
  };

  const linkClass = darkMode ? "hover:text-white" : "hover:text-black";
  const mobileLinkClass = darkMode
    ? "block w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-center font-medium hover:border-blue-500 hover:bg-gray-800 hover:text-white transition"
    : "block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-center font-medium shadow-sm hover:border-blue-500 hover:bg-blue-50 hover:text-black transition";

  return (
    <nav
      className={
        darkMode
          ? "fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800"
          : "fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 text-gray-950"
      }
    >
      
      <div>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        
          {/* Logo */}
          <div className="text-xl font-bold">
            Estifanos<span className="text-blue-500">.dev</span>
          </div>

          {/* Links */}
          <div className={darkMode ? "hidden sm:flex gap-4 md:gap-6 text-gray-300" : "hidden sm:flex gap-4 md:gap-6 text-gray-700"}>
            <a href="#home" className={linkClass}>Home</a>
            <a href="#projects" className={linkClass}>Projects</a>
            <a href="#about" className={linkClass}>About</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </div>

          <div
            className="relative flex items-center gap-3"
            onMouseEnter={() => clearTimeout(closeTimer.current)}
            onMouseLeave={closeMenuSoon}
          >
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-500 transition"
                  : "px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 transition"
              }
            >
              {darkMode ? "Light ☀️" : "Dark 🌙"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={openMenu}
              className={
                darkMode
                  ? "sm:hidden flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border border-gray-600 hover:border-blue-500 transition"
                  : "sm:hidden flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border border-gray-300 hover:border-blue-500 transition"
              }
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className={darkMode ? "h-0.5 w-5 bg-white" : "h-0.5 w-5 bg-black"}></span>
              <span className={darkMode ? "h-0.5 w-5 bg-white" : "h-0.5 w-5 bg-black"}></span>
              <span className={darkMode ? "h-0.5 w-5 bg-white" : "h-0.5 w-5 bg-black"}></span>
            </button>

            {menuOpen && (
              <div
                className={
                  darkMode
                    ? "absolute right-0 top-full mt-3 flex w-48 flex-col gap-2 rounded-xl border border-gray-800 bg-black/95 p-3 text-gray-300 shadow-lg sm:hidden"
                    : "absolute right-0 top-full mt-3 flex w-48 flex-col gap-2 rounded-xl border border-gray-200 bg-white/95 p-3 text-gray-700 shadow-lg sm:hidden"
                }
                onMouseEnter={openMenu}
              >
                <a href="#home" onClick={closeMenu} className={mobileLinkClass}>Home</a>
                <a href="#projects" onClick={closeMenu} className={mobileLinkClass}>Projects</a>
                <a href="#about" onClick={closeMenu} className={mobileLinkClass}>About</a>
                <a href="#contact" onClick={closeMenu} className={mobileLinkClass}>Contact</a>
              </div>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
}
