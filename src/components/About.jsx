import { useEffect, useRef, useState } from "react";

const progressCards = [
  {
    title: "Computer Science Foundation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    imageAlt: "Computer science learning setup on a laptop",
    detail:
      "Learning programming fundamentals, data structures, databases, and how software systems work from front to back.",
  },
  {
    title: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80",
    imageAlt: "Frontend web design on a computer screen",
    detail:
      "Building responsive React interfaces with clean layouts, reusable components, and user-friendly interactions.",
  },
  {
    title: "Backend Skills",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    imageAlt: "Computer hardware and backend systems concept",
    detail:
      "Practicing Node.js, PHP, MySQL, APIs, and server logic so my projects can store data and solve real problems.",
  },
  {
    title: "Full-Stack Goal",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
    imageAlt: "Developer working toward a full stack software goal",
    detail:
      "Growing toward full-stack development by connecting design, code, databases, and deployment into complete applications.",
  },
];

const branchRevealPoints = [0.05, 0.3, 0.55, 0.78];

function ProgressImage({ card }) {
  return (
    <span className="progress-card-visual">
      <img src={card.image} alt={card.imageAlt} loading="lazy" />
    </span>
  );
}

export default function About({ darkMode }) {
  const [showMore, setShowMore] = useState(false);
  const [runnerProgress, setRunnerProgress] = useState(0);
  const highwayRef = useRef(null);

  useEffect(() => {
    if (!showMore) {
      setRunnerProgress(0);
      return undefined;
    }

    const updateRunnerProgress = () => {
      const highway = highwayRef.current;

      if (!highway) {
        return;
      }

      const rect = highway.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.72;
      const end = viewportHeight * 0.1;
      const scrollRange = rect.height + viewportHeight * 0.35 - (start - end);
      const progress = (start - rect.top) / scrollRange;
      setRunnerProgress(Math.min(Math.max(progress, 0), 1));
    };

    updateRunnerProgress();
    window.addEventListener("scroll", updateRunnerProgress, { passive: true });
    window.addEventListener("resize", updateRunnerProgress);

    return () => {
      window.removeEventListener("scroll", updateRunnerProgress);
      window.removeEventListener("resize", updateRunnerProgress);
    };
  }, [showMore]);

  return (
    <section
      id="about"
      className={darkMode ? "py-28 px-6 bg-gray-950 text-white" : "py-28 px-6 bg-gray-50 text-gray-950"}
    >
        
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-8" data-reveal>
          About Me
        </h2>

        <p data-reveal style={{ "--reveal-delay": "80ms" }} className={darkMode ? "text-gray-400 text-lg leading-relaxed mb-6" : "text-gray-600 text-lg leading-relaxed mb-6"}>
          I am Estifanos, a Computer Science student and web developer who enjoys using code
          to turn ideas into real, useful applications.
        </p>

        <p data-reveal style={{ "--reveal-delay": "160ms" }} className={darkMode ? "text-gray-400 text-lg leading-relaxed mb-6" : "text-gray-600 text-lg leading-relaxed mb-6"}>
          My coding journey is focused on full-stack development. I work with React for modern
          interfaces, JavaScript for interaction, and backend tools like Node.js, PHP, and MySQL
          to build projects that can handle real data.
        </p>

        <p data-reveal style={{ "--reveal-delay": "240ms" }} className={darkMode ? "text-gray-400 text-lg leading-relaxed" : "text-gray-600 text-lg leading-relaxed"}>
          I am still learning every day, but I care about writing clean code, improving step by step,
          and building software that feels simple, practical, and helpful.
        </p>

        {/* Skills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3" data-reveal style={{ "--reveal-delay": "320ms" }}>
          {["React", "JavaScript", "Tailwind", "Node.js", "PHP", "MySQL", "Git"].map((skill, i) => (
            <span
              key={i}
              className={darkMode ? "bg-gray-800 px-3 py-1 rounded-full text-sm" : "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-12" data-reveal style={{ "--reveal-delay": "400ms" }}>
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className={`more-about-button ${showMore ? "is-open" : ""}`}
            aria-expanded={showMore}
          >
            <span>More</span>
            <span>About Me</span>
          </button>
        </div>

        {showMore && (
          <div
            ref={highwayRef}
            className={`progress-highway ${runnerProgress >= 0.995 ? "runner-finished" : ""} ${darkMode ? "progress-highway-dark" : "progress-highway-light"}`}
            style={{
              "--runner-line-height": `${runnerProgress * 100}%`,
              "--runner-top": `${runnerProgress * 100}%`,
              "--runner-offset": `${runnerProgress * 42}px`,
            }}
          >
            <div className="highway-line" aria-hidden="true" />
            <div className="tiny-runner" aria-hidden="true">
              <span className="runner-head" />
              <span className="runner-body" />
              <span className="runner-arm runner-arm-left" />
              <span className="runner-arm runner-arm-right" />
              <span className="runner-leg runner-leg-left" />
              <span className="runner-leg runner-leg-right" />
            </div>

            {progressCards.map((card, index) => (
              <article
                key={card.title}
                className={`progress-card runner-reveal ${runnerProgress >= branchRevealPoints[index] ? "is-visible" : ""} ${index % 2 === 0 ? "branch-left" : "branch-right"}`}
              >
                <span className="progress-dot" aria-hidden="true" />
                <div>
                  <ProgressImage card={card} />
                  <p className="progress-step">Step {index + 1}</p>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
              </article>
            ))}

            <div
              className={`progress-finish runner-reveal ${runnerProgress >= 0.985 ? "is-visible" : ""}`}
            >
              <span className="motivation-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M12 2.5 14.9 8.6 21.5 9.5 16.7 14.2 17.8 20.8 12 17.7 6.2 20.8 7.3 14.2 2.5 9.5 9.1 8.6 12 2.5Z" />
                </svg>
              </span>
              <div>
                <h3>Keep Building Forward</h3>
                <p>Every project is progress.</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
