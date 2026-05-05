import profile from "../assets/profile.jpg";

export default function Hero({ darkMode }) {
  const skills = ["React", "Node.js", "PHP", "MySQL"];

  return (
    <section
      className={
        darkMode
          ? "min-h-screen px-6 pt-32 pb-16 bg-gradient-to-b from-black via-gray-950 to-black text-white"
          : "min-h-screen px-6 pt-32 pb-16 bg-gradient-to-b from-white via-blue-50 to-white text-gray-950"
      }
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-left" data-reveal>
          <p className={darkMode ? "mb-4 text-lg text-gray-400" : "mb-4 text-lg text-gray-600"}>
            Hi, I&apos;m Estifanos,
          </p>

          <h1 className="mb-6 text-6xl font-black leading-none md:text-8xl">
            Estifanos
          </h1>

          <h2 className={darkMode ? "mb-6 max-w-3xl text-2xl font-semibold leading-tight text-gray-200 md:text-4xl" : "mb-6 max-w-3xl text-2xl font-semibold leading-tight text-gray-900 md:text-4xl"}>
            A computer science student building modern full-stack web experiences.
          </h2>

          <p className={darkMode ? "mb-8 max-w-2xl text-lg text-gray-400" : "mb-8 max-w-2xl text-lg text-gray-600"}>
            I create scalable and interactive applications with clean interfaces, practical backend logic, and a focus on turning ideas into real projects.
          </p>

          <div className="mb-10">
            <p className={darkMode ? "mb-3 text-sm uppercase tracking-wide text-gray-500" : "mb-3 text-sm uppercase tracking-wide text-gray-500"}>
              Building with
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={
                    darkMode
                      ? "rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-200"
                      : "rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className={
                darkMode
                  ? "rounded-full border border-gray-600 px-7 py-3 text-center font-semibold transition hover:border-white"
                  : "rounded-full border border-gray-300 px-7 py-3 text-center font-semibold transition hover:border-blue-600"
              }
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end" data-reveal style={{ "--reveal-delay": "160ms" }}>
          <img
            src={profile}
            alt="Estifanos profile"
            className={
              darkMode
                ? "h-72 w-72 rounded-[2rem] border-4 border-gray-800 object-cover shadow-2xl shadow-blue-900/30 md:h-96 md:w-80"
                : "h-72 w-72 rounded-[2rem] border-4 border-white object-cover shadow-2xl shadow-blue-200/70 md:h-96 md:w-80"
            }
          />
        </div>
      </div>
    </section>
  );
}
