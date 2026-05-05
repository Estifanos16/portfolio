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
    </div>
  );
}
