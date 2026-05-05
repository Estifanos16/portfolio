const projects = [
  {
    title: "Bicycle Backend",
    description:
      "Backend service for a bicycle-focused application, built to manage data and API workflows.",
    tech: ["Backend", "API", "Database"],
    link: "https://github.com/Estifanos16/bicycle-backend",
  },
  {
    title: "Bicycle Frontend",
    description:
      "Frontend interface for the bicycle application with user-facing screens and app navigation.",
    tech: ["Frontend", "React", "UI"],
    link: "https://github.com/Estifanos16/bicycle_frontend",
  },
  {
    title: "Startup of the Year",
    description:
      "A project focused on presenting and evaluating startup ideas with a polished web experience.",
    tech: ["Web App", "Frontend", "Design"],
    link: "https://github.com/Estifanos16/startup-of-the-year",
  },
  {
    title: "Virtual Museum",
    description:
      "An interactive museum-style project for exploring exhibits and digital collections online.",
    tech: ["Interactive", "Web", "UI"],
    link: "https://github.com/Estifanos16/virtual-museum",
  },
  {
    title: "Gibi Gubae",
    description:
      "A campus-focused project created to support community, information sharing, or student workflows.",
    tech: ["Web App", "Community", "Frontend"],
    link: "https://github.com/Estifanos16/Gibi_Gubae",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website for showcasing projects, skills, and contact information.",
    tech: ["React", "Tailwind CSS", "Portfolio"],
    link: "https://github.com/Estifanos16/Estifanos16.github.io",
  },
  {
    title: "Intern Finder",
    description:
      "A platform for finding internship opportunities with search and filtering workflows.",
    tech: ["Web App", "Search", "Internships"],
    link: "https://github.com/zola880/intern_finder",
  },
  {
    title: "Offline AI",
    description:
      "An AI-focused project designed around local or offline assistant-style functionality.",
    tech: ["AI", "Offline", "Tools"],
    link: "https://github.com/zola880/offline-ai",
  },
];

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

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={darkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
            >
              View on GitHub →
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}
