import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  useScrollReveal();

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={
        darkMode
          ? "bg-black text-white min-h-screen transition"
          : "bg-white text-black min-h-screen transition"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div id="home">
        <Hero darkMode={darkMode} />
      </div>

      <Projects darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      <footer
        className={
          darkMode
            ? "py-6 px-6 bg-gray-900 text-gray-400 text-center"
            : "py-6 px-6 bg-gray-100 text-gray-600 text-center"
        }
      >
        <p>&copy; {new Date().getFullYear()} Estifanos. All rights reserved.</p>
      </footer>
    </div>
  );
}
