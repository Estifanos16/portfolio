import bicycleDeliveryImage from "../assets/bicycle delivery.png";
import offlineAiImage from "../assets/ofline AI.png";
import portfolioImage from "../assets/portfolio.png";
import virtualMuseumImage from "../assets/virtual museum.png";

const projects = [
  {
    title: "Bicycle Backend",
    image: bicycleDeliveryImage,
    imageAlt: "Bicycle delivery project screenshot",
    description:
      "Backend service for a bicycle-focused application, built to manage data and API workflows.",
    tech: ["Backend", "API", "Database"],
    githubLink: "https://github.com/Estifanos16/bicycle-backend",
  },
  {
    title: "Bicycle Frontend",
    image: bicycleDeliveryImage,
    imageAlt: "Bicycle delivery frontend screenshot",
    description:
      "Frontend interface for the bicycle application with user-facing screens and app navigation.",
    tech: ["Frontend", "React", "UI"],
    githubLink: "https://github.com/Estifanos16/bicycle_frontend",
    liveLink: "https://bicycle-frontend.vercel.app/",
  },
  {
    title: "Virtual Museum",
    image: virtualMuseumImage,
    imageAlt: "Virtual museum project screenshot",
    description:
      "An interactive museum-style project for exploring exhibits and digital collections online.",
    tech: ["Interactive", "Web", "UI"],
    githubLink: "https://github.com/Estifanos16/virtual-museum",
  },
  {
    title: "Portfolio Website",
    image: portfolioImage,
    imageAlt: "Portfolio website project screenshot",
    description:
      "Personal portfolio website for showcasing projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Portfolio"],
    githubLink: "https://github.com/Estifanos16/Estifanos16.github.io",
    liveLink: "https://portfolio-chi-plum-9ujxzihyw9.vercel.app/",
  },
  {
    title: "Offline AI",
    image: offlineAiImage,
    imageAlt: "Offline AI project screenshot",
    description:
      "An AI-focused project designed around local or offline assistant-style functionality.",
    tech: ["AI", "Offline", "Tools"],
    githubLink: "https://github.com/zola880/offline-ai",
  },
];

function ProjectImage({ project }) {
  return (
    <div className="project-photo-wrap">
      <img src={project.image} alt={project.imageAlt} className="project-photo" loading="lazy" />
      <div className="project-photo-shade" aria-hidden="true" />
    </div>
  );
}

export default function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={darkMode ? "py-20 px-6 bg-black text-white" : "py-20 px-6 bg-white text-gray-950"}
    >
      
      <h2 className="text-4xl font-bold text-center mb-12" data-reveal>
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {projects.map((project, index) => (
          <div
            key={index}
            data-reveal
            style={{ "--reveal-delay": `${(index % 3) * 120}ms` }}
            className={
              darkMode
                ? "p-6 rounded-2xl border border-gray-800 transition transform hover:-translate-y-1 bg-gray-900"
                : "p-6 rounded-2xl border border-gray-200 transition transform hover:-translate-y-1 bg-gray-50"
            }
          >

            <ProjectImage project={project} />
            
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className={darkMode ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className={
                    darkMode
                      ? "text-xs bg-gray-800 px-2 py-1 rounded"
                      : "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  }
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-slate-700 hover:text-blue-200"
                      : "inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-slate-200 hover:text-blue-800"
                  }
                >
                  View on GitHub →
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    darkMode
                      ? "inline-flex items-center rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
                      : "inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                  }
                >
                  View live demo →
                </a>
              )}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
