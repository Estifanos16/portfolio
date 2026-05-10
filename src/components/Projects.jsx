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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16" data-reveal>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">Featured Work</p>
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
              <div className="relative h-48 overflow-hidden bg-gray-200">
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
                      className="text-xs font-medium bg-orange-50 text-orange-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                      GitHub <span className="text-orange-500">→</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      Live Demo <span>→</span>
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
