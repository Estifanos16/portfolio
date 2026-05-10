import React, { useEffect, useRef, useState } from 'react';

const timelineSteps = [
  {
    title: "The Journey Begins",
    description: "Started my Computer Science degree, writing my first lines of code and discovering a passion for solving complex problems through software.",
    image: "https://via.placeholder.com/150/FF7316/FFFFFF?text=Journey" // Placeholder image
  },
  {
    title: "Expanding Knowledge",
    description: "Dived into AI and local processing by building an offline assistant, while mastering Java and exploring object-oriented design patterns.",
    image: "https://via.placeholder.com/150/FF7316/FFFFFF?text=Knowledge" // Placeholder image
  },
  {
    title: "Backend & Ecosystems",
    description: "Focused on Node.js and MongoDB for modern web scale, while strengthening my SQL skills and exploring the Flutter framework for mobile development.",
    image: "https://via.placeholder.com/150/FF7316/FFFFFF?text=Backend" // Placeholder image
  },
  {
    title: "Fullstack",
    description: "Currently specializing in React for web and Flutter for mobile applications, aiming to build seamless cross-platform experiences that solve real-world problems.",
    image: "https://via.placeholder.com/150/FF7316/FFFFFF?text=Fullstack" // Placeholder image
  }
];

const ProgressHighway = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isExpanded) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startPoint = windowHeight / 2;
      const totalHeight = rect.height;
      if (totalHeight <= 0) return;

      const currentPos = startPoint - rect.top;
      
      let percentage = (currentPos / totalHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      setProgress(percentage);
      setIsFinished(percentage >= 98);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (isExpanded) {
      const cards = sectionRef.current.querySelectorAll('.runner-reveal');
      cards.forEach((card) => observer.observe(card));

      window.addEventListener('scroll', handleScroll);
      const timer = setTimeout(handleScroll, 100);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
        clearTimeout(timer);
      };
    }
  }, [isExpanded]);

  // Effect to handle scrolling into view when expanded
  useEffect(() => {
    if (isExpanded && containerRef.current) {
      const offset = 100; // Offset for navbar
      const elementPosition = containerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [isExpanded]);

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full">
      {/* More About Me Button - Starter of the line */}
      <div className="z-20 mb-8">
        <button 
          onClick={toggleExpand}
          className={`more-about-button ${isExpanded ? 'is-open' : ''}`}
          aria-expanded={isExpanded}
        >
          <span>More</span>
          <span>About Me</span>
        </button>
      </div>

      <div className={`w-full overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-[6000px] opacity-100 visible mt-4' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="max-w-2xl mx-auto px-6 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6 text-left bg-orange-50/50 py-4 rounded-r-xl">
            Beyond technical skills, I am deeply interested in software architecture and user-centric design. I am currently exploring the intersections of AI and web accessibility, aiming to build tools that are inclusive for everyone. My goal is to work on projects that have a tangible positive impact on society.
          </p>
        </div>

        <section 
          ref={sectionRef} 
          className="progress-highway !mt-0 py-0 pb-32"
          style={{ 
            '--runner-top': `${progress}%`, 
            '--runner-line-height': `${progress}%`,
            '--runner-offset': isFinished ? '40px' : '0px'
          }}
        >
          <div className="highway-line" aria-hidden="true" />
          
          <div className={`tiny-runner ${isFinished ? 'runner-finished' : ''}`} aria-hidden="true">
            <span className="runner-head" />
            <span className="runner-body" />
            <span className="runner-arm runner-arm-left" />
            <span className="runner-arm runner-arm-right" />
            <span className="runner-leg runner-leg-left" />
            <span className="runner-leg runner-leg-right" />
          </div>

          {timelineSteps.map((item, index) => (
            <article 
              key={index} 
              className={`progress-card runner-reveal ${index % 2 === 0 ? 'branch-left' : 'branch-right'}`}
            >
              <div className="progress-dot" />
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-shadow hover:shadow-xl">
                <div className="progress-card-visual">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    loading="lazy" 
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProgressHighway;
