const contactEmail = "abrhamestifanos17@gmail.com";
const contactPhone = "+251977787709";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-reveal>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-2 flex justify-center items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity? I'm always interested in hearing about new ideas and collaborations.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-reveal style={{ "--reveal-delay": "100ms" }}>
          
          {/* Email */}
          <a
            href={`mailto:${contactEmail}`}
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-center group"
          >
            <div className="text-3xl mb-4 text-orange-500 group-hover:scale-110 transition-transform" role="img" aria-label="Email icon">✉️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 break-all hover:text-orange-500">{contactEmail}</p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${contactPhone}`}
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-center group"
          >
            <div className="text-3xl mb-4 text-orange-500 group-hover:scale-110 transition-transform" role="img" aria-label="Phone icon">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 hover:text-orange-500">{contactPhone}</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/estifanos-abrham-90408a35a/"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 text-center group"
          >
            <div className="text-3xl mb-4 text-orange-500 group-hover:scale-110 transition-transform" role="img" aria-label="LinkedIn icon">💼</div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 hover:text-orange-500">Connect with me</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto" data-reveal style={{ "--reveal-delay": "200ms" }}>
          <form
            action={`https://formsubmit.co/${contactEmail}`}
            method="POST"
            className="bg-gray-50 border border-gray-200 rounded-xl p-8"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Estifanos"
                required
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project inquiry"
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center" data-reveal style={{ "--reveal-delay": "300ms" }}>
          <p className="text-gray-600 mb-6">Or find me on social media:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Estifanos16"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/estifanos-abrham-90408a35a/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
