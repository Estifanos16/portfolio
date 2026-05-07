const contactEmail = "abrhamestifanos17@gmail.com";
const contactPhone = "+251977787709";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={darkMode ? "py-20 px-6 bg-black text-white" : "py-20 px-6 bg-white text-gray-950"}
    >
      
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6" data-reveal>
          Contact Me
        </h2>

        <p data-reveal style={{ "--reveal-delay": "80ms" }} className={darkMode ? "text-gray-400 mb-10" : "text-gray-600 mb-10"}>
          Got a project or opportunity? Feel free to reach out.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10" data-reveal style={{ "--reveal-delay": "160ms" }}>
          
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {contactEmail}
          </a>

          <a
            href={`tel:${contactPhone}`}
            className={
              darkMode
                ? "px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
                : "px-6 py-3 border border-gray-300 rounded-xl hover:border-blue-600 transition"
            }
          >
            {contactPhone}
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className={
              darkMode
                ? "px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
                : "px-6 py-3 border border-gray-300 rounded-xl hover:border-blue-600 transition"
            }
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/estifanos-abrham-90408a35a/"
            target="_blank"
            rel="noreferrer"
            className={
              darkMode
                ? "px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
                : "px-6 py-3 border border-gray-300 rounded-xl hover:border-blue-600 transition"
            }
          >
            LinkedIn
          </a>

        </div>

        <form
          action={`https://formsubmit.co/${contactEmail}`}
          method="POST"
          data-reveal
          style={{ "--reveal-delay": "240ms" }}
          className={
            darkMode
              ? "max-w-xl mx-auto bg-gray-900 p-6 rounded-2xl border border-gray-800"
              : "max-w-xl mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-200"
          }
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={
              darkMode
                ? "w-full mb-3 p-3 bg-black text-white placeholder:text-gray-500 border border-gray-700 rounded-lg outline-none"
                : "w-full mb-3 p-3 bg-white text-gray-950 placeholder:text-gray-500 border border-gray-300 rounded-lg outline-none"
            }
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={
              darkMode
                ? "w-full mb-3 p-3 bg-black text-white placeholder:text-gray-500 border border-gray-700 rounded-lg outline-none"
                : "w-full mb-3 p-3 bg-white text-gray-950 placeholder:text-gray-500 border border-gray-300 rounded-lg outline-none"
            }
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className={
              darkMode
                ? "w-full mb-4 p-3 bg-black text-white placeholder:text-gray-500 border border-gray-700 rounded-lg outline-none"
                : "w-full mb-4 p-3 bg-white text-gray-950 placeholder:text-gray-500 border border-gray-300 rounded-lg outline-none"
            }
          ></textarea>

          <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}
