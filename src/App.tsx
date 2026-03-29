import { useState } from "react";
import LiquidEther from "./components/LiquidEther";
import ProfileCard from "./components/ProfileCard";
import IconCloud from "./components/IconCloud";
import hydromatic from "./components/hydromatic.jfif";
import casa from "./components/casa.jfif";
import shd from "./components/shd.png"

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/earl.sheik23/",
  github:   "https://github.com/shikkkk",
  linkedin: "https://www.linkedin.com/in/sheikmateo/",
  twitter:  "https://x.com/shikmateooo",
};


const PROJECTS = [
  {
    title: "HydroMatic - IoT Monitoring System",
    desc: "A smart hydroponic farming system integrated with IOT device and sensors to automate remote monitoring",
    tags: ["ExpressJS", "HTML", "TailwindCSS", "NodeJS","PHP"],
    img: hydromatic,
  },
  {
    title: "Casa",
    desc: "Casa is a user-friendly apartment finder designed to simplify your search for the perfect home.",
    tags: ["Python", "HTML", "CSS", "Bootstrap","MySQL"],
    img: casa,
  },
  {
    title: "SHD Technology",
    desc: "SHD Technology Corporation, a cross-border brand enabler that helps international consumer-tech brands enter and scale in Southeast Asia",
    tags: ["WordPress", "Flatsome", "Woocommerce"],
    img: shd,
  },
];

const EXPERIENCE = [
  {
    period: "July 2025 – January 2026",
    role: "Freelance WordPress Developer",
    company: "SHD-Technology",
    desc: "Designed, built, and maintained custom WordPress websites using Elementor, focusing on responsive design and performance optimization. Customized themes and plugins to meet client requirements and improve user experience.",
    current: true,
  },
  {
    period: "Jan 2025 – May 2025",
    role: "IT Specialist (Internship)",
    company: "NIA-UPRIIS National Irrigation Administration",
    desc: "Provided technical support to employees by troubleshooting PC performance problems and software compatibility concerns. Verified and updated employee records in the DTR system. Designed secure database modifications and interfaces for managing extended employee data.",
    current: false,
  },
];


const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const GithubIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);


const FloatingSocialBar = () => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div
      className="flex items-center gap-1 px-4 py-2 rounded-full border border-white/15"
      style={{ background: "rgba(20,20,30,0.85)", backdropFilter: "blur(12px)" }}
    >
      {[
        { Icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: "Facebook" },
        { Icon: GithubIcon, href: SOCIAL_LINKS.github, label: "GitHub" },
        { Icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
        { Icon: TwitterIcon, href: SOCIAL_LINKS.twitter, label: "Twitter" },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* Floating Social Bar */}
      <FloatingSocialBar />

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-16 pb-32">
          <div className="max-w-2xl">
            <p className="text-[#6c63ff] text-sm tracking-[0.2em] uppercase mb-6">
              · Web Developer
            </p>

            <h1 className="text-7xl md:text-8xl font-black mb-2">
              Earl Sheik
            </h1>

            <h1 className="text-7xl md:text-8xl font-black text-[#6c63ff] mb-8">
              Mateo
            </h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <ProfileCard
                  name="Earl Sheik Mateo"
                  title="Web Developer"
                  handle="shikkkk"
                  status="Available"
                  contactText="Contact Me"
                  avatarUrl="src/components/earl-removebg-preview.png"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => scrollTo("contact")}
                  behindGlowColor="rgba(255,255,255,0.08)"
                  behindGlowEnabled
                  innerGradient= "linear-gradient(145deg ,
                                  rgba(5,5,7,0.98) 0%,
                                  rgba(25,25,30,0.65) 100%
                                )"
                />
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-black mb-6 tracking-tight">About Me</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>I'm an aspiring IT professional passionate about contributing to innovative projects, exploring emerging technologies, and growing through collaboration and continuous learning in the dynamic tech industry.</p>
                <p>I recently graduated with a Bachelor of Science in Information Technology from Nueva Ecija University of Science and Technology, majoring in Web Systems Technology with a GWA of 1.76. I'm also a proud member of the NEUST CICT WebTech Society.</p>
                <p>My expertise includes developing IoT-based monitoring systems, building custom WordPress websites, and creating database management solutions. I'm skilled in Python, Java, JavaScript, PHP, and various design tools including Figma and Canva.</p>
              </div>
              <div className="mt-8 flex gap-10">
                {[["1.76", "GWA"], ["3+", "Projects"], ["8+", "Technologies"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-black text-[#6c63ff]">{val}</div>
                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-gray-500 text-sm">A selection of my recent work across web development, design, and more.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#6c63ff]/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold mb-2 leading-snug">{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TECH STACK */}
      <section id="stack" className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">
              Tech Stack
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Technologies and tools I use to design, develop, and deploy modern web applications.
            </p>
          </div>

          <div className="flex justify-center">
            <IconCloud />
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">Experience</h2>
            <p className="text-gray-500 text-sm">My professional journey and key milestones.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-10">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[#6c63ff] via-[#6c63ff]/40 to-transparent" />
              <div className="space-y-12">
                {EXPERIENCE.map((e, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-10 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${e.current ? "border-[#6c63ff] bg-[#6c63ff]/20" : "border-gray-600 bg-[#0d0d0d]"}`}>
                      {e.current && <div className="w-2 h-2 rounded-full bg-[#6c63ff]" />}
                    </div>
                    <p className="text-[#6c63ff] text-sm font-semibold mb-1">{e.period}</p>
                    <h3 className="text-xl font-bold mb-1">{e.role}</h3>
                    <p className="text-gray-500 text-sm mb-3">{e.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 pb-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">Get In Touch</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">Have a project in mind? Let's work together to create something amazing.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              <div className="flex items-center gap-3 text-gray-400 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">sheikmateo@gmail.com</span>
              </div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Follow Me</h4>
              {/* Inline social icons matching the pill bar style */}
              <div className="flex gap-3">
                {[
                  { Icon: GithubIcon, href: SOCIAL_LINKS.github, label: "GitHub" },
                  { Icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                  { Icon: TwitterIcon, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6c63ff]/60 transition-all duration-200">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#6c63ff]/60 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#6c63ff]/60 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#6c63ff]/60 transition-colors resize-none"
              />
              <button className="w-full bg-[#6c63ff] hover:bg-[#5a52e0] text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm">
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 pb-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white font-semibold">Earl Sheik Mateo</span>
          <span className="text-gray-600 text-xs">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}