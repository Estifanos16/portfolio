import ProgressHighway from "./ProgressHighway";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript (JS)", "HTML/CSS", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Java", "PHP", "Express.js", "Authentication"] },
    { category: "Database", items: ["SQL", "MySQL", "MongoDB", "Database Design"] },
    { category: "Mobile & Tools", items: ["Flutter", "Git/GitHub", "Vite", "npm", "Full Stack Development"] },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16" data-reveal>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2">About Me</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Full Stack Developer & Computer Science Student
          </h2>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Text Content */}
          <div className="space-y-6" data-reveal>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm Estifanos, a passionate developer from Bahir Dar, currently pursuing a degree in Computer Science. Over the past two years, I've built multiple full-stack applications and am actively seeking an internship to apply my skills in a professional environment.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              My journey started with curiosity about how things work on the web. Now, I focus on building clean, scalable applications using **Node.js, Java, or PHP** on the backend and **React or Flutter** for web and mobile interfaces.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              When I'm not coding, I'm learning new technologies, contributing to projects, or helping other developers. I believe in continuous learning and staying updated with modern web development practices.
            </p>

            <div className="pt-6">
              <a href="#contact" className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200">
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6" data-reveal style={{ "--reveal-delay": "100ms" }}>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-orange-500 mb-2">3+</div>
              <p className="text-gray-600 font-medium">Full Stack Projects</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-600 font-medium">Commitment to Quality</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-orange-500 mb-2">2+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-orange-500 mb-2">∞</div>
              <p className="text-gray-600 font-medium">Always Learning</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16" data-reveal style={{ "--reveal-delay": "200ms" }}>
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Technical Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-500">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ProgressHighway />

        {/* CTA */}
        <div className="text-center py-12 px-8 bg-white rounded-xl border border-gray-200" data-reveal>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to collaborate?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new projects and opportunities. Let's build something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
