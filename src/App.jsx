import React, { useState } from "react";
import profileImage from "./assets/profile.jpg";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaReact, FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ciscoLogo from "./assets/cisco-logo.jpg";
import Button from "./components/Button";
import Contact from "./components/Contact";



// Single-file responsive portfolio app (Tailwind CSS required)
// Save as src/App.jsx in a React + Tailwind project (Vite/CRA)

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    description: "Credential validating cloud knowledge with AWS services.",
    tags: ["AWS", "Cloud"],
    link: "#",
    logo: "/public/cisco-logo.jpg"   // 🟢 tambahkan path logo
  },
  {
    id: 2,
    title: "Google Associate Android Developer",
    description: "Certification for Android development fundamentals and apps.",
    tags: ["Android", "Java"],
    link: "#",
    logo: "/logos/android.png"
  },
  {
    id: 3,
    title: "Cisco CCNA",
    description: "Networking fundamentals, IP connectivity, and security basics.",
    tags: ["Networking", "Cisco"],
    link: "#",
    logo: "/logos/cisco.png"
  }

];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-slate-800">
    
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/60 border-b border-slate-200">
        <div className="w-full px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">Portfolio</a>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:underline">About</a>
            <a href="#certifications" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#resume" className="px-3 py-1 border rounded-md text-sm">Resume</a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/80">
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#certifications" onClick={() => setMobileOpen(false)}>Certifications</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href="#resume" className="mt-2 inline-block px-3 py-1 border rounded-md">Resume</a>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="w-full px-6 py-12">
        {/* Hero */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m <span className="text-indigo-600">Riski Mardianto</span><br className="hidden md:inline"/> — a Frontend Developer.</h1>
            <p className="mt-4 text-slate-600">I build performant, accessible, and beautiful web experiences using React, Tailwind CSS, and modern tooling. Here are some of my projects and what I’m currently working on.</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <Button text="See Certifications" href="#certifications" />
            </div>

            <div className="mt-8 flex flex-row gap-6 items-center text-slate-500">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin className="w-6 h-6 transition-colors duration-200" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <FaGithub className="w-6 h-6 transition-colors duration-200" />
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <FaWhatsapp className="w-6 h-6 transition-colors duration-200" />
              </a>

              {/* Gmail */}
              <a href="mailto:email@example.com" className="hover:text-red-500">
                <SiGmail className="w-6 h-6 transition-colors duration-200" />
              </a>
            </div>

          </div>

        <div className="order-first md:order-last">
          <div className="w-full max-w-sm mx-auto md:ml-auto md:mr-0">

              <img
  
                src={profileImage}
                alt="Profile photo"
                className="w-40 md:w-56 lg:w-72 aspect-square object-cover rounded-full shadow-lg"
              
              />

          </div>
        </div>


        </section>


        {/* About */}
        <section id="about" className="mt-16 rounded-2xl p-8 bg-gradient-to-br from-white via-slate-50 to-indigo-50 shadow-md">
          <h2 className="text-3xl font-bold text-slate-800">About Me</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            I’m a developer focused on crafting delightful user experiences. My stack
            centers on <span className="font-semibold text-indigo-600">React</span>,{" "}
            <span className="font-semibold text-cyan-600">TailwindCSS</span>, and modern JavaScript.  
            I care about <span className="font-medium">performance, accessibility, and clean code</span>.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Experience */}
            <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg hover:scale-105 transition transform duration-300 flex flex-col items-center text-center">
              <FaLaptopCode className="w-10 h-10 text-indigo-600 mb-3" />
              <div className="text-lg font-semibold">Experience</div>
              <div className="mt-1 text-slate-600">3+ years</div>
            </div>

            {/* Specialties */}
            <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg hover:scale-105 transition transform duration-300 flex flex-col items-center text-center">
              <div className="flex gap-3 mb-3">
                <FaReact className="w-10 h-10 text-sky-500" />
                <SiTailwindcss className="w-10 h-10 text-cyan-500" />
              </div>
              <div className="text-lg font-semibold">Specialties</div>
              <div className="mt-1 text-slate-600">React, Tailwind, UI</div>
            </div>

            {/* Education */}
            <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg hover:scale-105 transition transform duration-300 flex flex-col items-center text-center">
              <FaUserGraduate className="w-10 h-10 text-emerald-600 mb-3" />
              <div className="text-lg font-semibold">Education</div>
              <div className="mt-1 text-slate-600">Bachelor in Computer Science</div>
            </div>
          </div>
        </section>


    <section id="certifications" className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-5 bg-white rounded-xl shadow-sm border hover:shadow-lg hover:border-indigo-500 transition duration-300"
          >
            {/* Logo */}
            <div className="w-14 h-14 flex items-center justify-center">
              {cert.logo ? (
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-12 h-12 object-contain mx-auto"
                />
              ) : (
                <span className="text-indigo-600 font-bold text-lg">🏆</span>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-base font-semibold text-slate-800 text-center">
              {cert.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 mt-1 text-center">
              {cert.description}
            </p>

            {/* Tags with playful animation */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {cert.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 
                            hover:bg-indigo-100 hover:text-indigo-600 
                            hover:scale-110 transition-all duration-300 ease-out cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>      

        {/* Contact */}
        <Contact />  

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Risktbh — Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}
