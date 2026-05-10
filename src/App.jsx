import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <Projects />
      <About />
      <Contact />

      <footer className="py-8 px-6 bg-gray-50 text-gray-600 text-center border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Estifanos. All rights reserved.</p>
      </footer>
    </div>
  );
}
