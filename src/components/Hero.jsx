import profile from "../assets/profile.png";
import { useState } from "react";

// endmarker
export default function Hero() {
  // hero marker found


  const [isHovered, setIsHovered] = useState(false);

  return (
// marker


    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="w-full max-w-7xl">
        
        {/* Premium Hero Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-3xl lg:rounded-4xl shadow-2xl transition-all duration-500 group"
          data-reveal
        >
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 z-10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.7) 100%)"
              }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50/20 z-10"
            />
          </div>

          {/* Subtle background pattern effect */}
          <div className="absolute inset-0 opacity-30 z-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-20" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-20" />
          </div>

          {/* Content Grid */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
            
            {/* LEFT SIDE: Text Content */}
            <div className="flex flex-col justify-center">
              <div data-reveal style={{ "--reveal-delay": "100ms" }}>
                <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Welcome
                </p>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold !text-black mb-4 leading-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    Estifanos
                  </span>
                </h1>

                <h2 className="text-xl lg:text-2xl !text-black font-semibold mb-8 leading-relaxed">
                  Full Stack Developer & <br className="hidden sm:block" /> Computer Science Student
                </h2>

                <p className="!text-black text-lg leading-relaxed mb-10 max-w-md">
                  I craft modern, scalable web applications using React, Node.js, and MySQL. Combining design thinking with technical expertise to build solutions that matter.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4" data-reveal style={{ "--reveal-delay": "200ms" }}>
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-200 text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    View My Projects
                  </a>

                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-gray-900 !text-black font-bold rounded-xl hover:bg-gray-900 hover:text-white active:scale-95 transition-all duration-200 text-center shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Quick stats */}
                <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-3xl font-bold text-orange-500">3+</p>
                    <p className="text-sm !text-black font-medium">Full-Stack Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500">2+</p>
                    <p className="text-sm !text-black font-medium">Years Building</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-500">∞</p>
                    <p className="text-sm !text-black font-medium">Learning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Profile Image */}
            <div 
              className="flex items-center justify-center"
              data-reveal 
              style={{ "--reveal-delay": "300ms" }}
            >
              <div className="relative group/image">
                
                {/* Floating glow effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-3xl opacity-20 transition-all duration-500 ${
                    isHovered ? "scale-110 opacity-40" : "scale-100"
                  }`}
                />

                {/* Image container */}
                <div 
                  className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 max-w-sm mx-auto ${
                    isHovered ? "scale-105 shadow-3xl" : "scale-100"
                  }`}
                >
                  <img
                    src={profile}
                    alt="Estifanos - Full Stack Developer"
                    className="w-full h-full object-cover aspect-square"
                  />
                  
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating animation */}
                <style>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                  }
                  .group/image {
                    animation: float 6s ease-in-out infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent z-20" />
        </div>

        {/* Scroll indicator */}
        <div 
          className="flex justify-center mt-12 opacity-60 hover:opacity-100 transition-opacity animate-bounce"
          data-reveal
          style={{ "--reveal-delay": "400ms" }}
        >
          <svg className="w-6 h-6 !text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
