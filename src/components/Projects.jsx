import bicycleDeliveryImage from "../assets/bicycle delivery.png";
import offlineAiImage from "../assets/ofline AI.png";
import portfolioImage from "../assets/portfolio.png";
import virtualMuseumImage from "../assets/virtual museum.png";
import internFinderImage from "../assets/intern finder.png";

const projects = [
  {
    title: "Internship Finder Platform",
    image: internFinderImage,
    imageAlt: "Internship finder website screenshot",
    description: "A web platform connecting students with internship opportunities. Features job listings, filtering, and student applications.",
    tech: ["React", "Node.js", "MySQL", "Full Stack"],
    githubLink: "https://github.com/Estifanos16/frontend",
    liveLink: "https://frontend-6qkj.vercel.app/register",
  },
  {
    title: "Book Sharing App",
    image: portfolioImage,
    imageAlt: "Book sharing app screenshot",
    description: "A community platform for sharing and discovering books. Users can list books, connect with other readers, and exchange recommendations.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/Estifanos16/BookSharingApp",
  },
  {
    title: "Bicycle Delivery Service",
    image: bicycleDeliveryImage,
    imageAlt: "Bicycle delivery project screenshot",
    description: "Full-stack application for a bicycle-based delivery service. Includes order management, real-time tracking, and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Full Stack"],
    githubLink: "https://github.com/Estifanos16/bicycle_frontend",
    liveLink: "https://bicycle-frontend.vercel.app/",
  },
  {
    title: "Virtual Museum",
    image: virtualMuseumImage,
    imageAlt: "Virtual museum project screenshot",
    description: "An interactive 3D museum experience for exploring digital art collections and historical exhibits online.",
    tech: ["React", "Three.js", "WebGL"],
    githubLink: "https://github.com/Estifanos16/virtual-museum",
  },
  {
    title: "Portfolio Website",
    image: portfolioImage,
    imageAlt: "Portfolio website project screenshot",
    description: "Personal developer portfolio showcasing projects, skills, and contact information. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/Estifanos16/portfolio",
    liveLink: "https://estifanos-portfolio.vercel.app/",
  },
  {
    title: "Offline AI Assistant",
    image: offlineAiImage,
    imageAlt: "Offline AI project screenshot",
    description: "A local AI-powered assistant that works offline. Features text processing and intelligent responses without cloud dependency.",
    tech: ["Python", "AI/ML", "Local Processing"],
    githubLink: "https://github.com/zola880/offline-ai",
  },
];

const techIcons = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Three.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript (JS)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Full Stack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16" data-reveal>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Featured Work
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Projects I've Built
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of full-stack applications, frontend interfaces, and backend systems I've developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 100}ms` }}
              className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      {techIcons[tech] && <img src={techIcons[tech]} alt="" className="w-3 h-3" />}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Branded Project Buttons */}
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-github"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-live"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
