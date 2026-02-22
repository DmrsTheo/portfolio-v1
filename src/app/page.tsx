"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaLinkedin, FaGithub, FaEnvelope,
  FaCode, FaServer, FaTerminal,
  FaDownload, FaArrowUp, FaChevronLeft, FaChevronRight,
  FaBrain
} from "react-icons/fa";

// DONNÉES DES PROJETS
const projectsData = [
  {
    title: "Full Stack Software Engineer",
    date: "Present",
    desc: "Apprenticeship at the French Ministry of Justice. Development and modernization of HR management tools. Implementation of dashboards (Chart.js, OpenLayers). Maintained legacy apps (ASP Classic/PL/SQL) reducing load times by 50%.",
    tags: ["Symfony", "React.js", "PL/SQL"],
    icon: <FaCode className="text-6xl text-[#333] group-hover:text-[#00fafe] transition-colors" />,
    github: null
  },
  {
    title: "Distributed Actor Framework",
    date: "Dec. 2025",
    desc: "Engineered a modular Java framework implementing the Actor Model (Virtual Threads/Loom). Created a resilient Hexagonal Microservices architecture with Kafka and Docker, alongside a real-time IoT monitoring dashboard.",
    tags: ["Java", "Kafka", "React 19 & WebSockets"],
    icon: <FaServer className="text-6xl text-[#333] group-hover:text-[#b366ff] transition-colors" />,
    github: "https://github.com/DmrsTheo/saf_platform"
  },
  {
    title: "2D Video Game",
    date: "May 2024",
    desc: "Full development of a 2D video game allowing character control and interaction within a world populated by creatures, NPCs, and objects.",
    tags: ["Java", "OOP", "Algorithms"],
    icon: <FaTerminal className="text-6xl text-[#333] group-hover:text-[#00fafe] transition-colors" />,
    github: "https://github.com/DmrsTheo/Level-One"
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * 0.03; 
      const y = (window.innerHeight / 2 - e.clientY) * 0.03;
      setMouseOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* LOADER */}
      <div className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden mb-6 shadow-[0_0_15px_rgba(0,250,254,0.2)]">
          <div className="h-full w-full bg-gradient-to-r from-[#b366ff] to-[#00fafe] animate-loader"></div>
        </div>
        <p className="text-[#00fafe] font-mono tracking-[0.3em] text-sm animate-pulse glow-cyan">SYSTEM BOOT...</p>
      </div>

      <div className="min-h-screen relative overflow-hidden selection:bg-[#b366ff] selection:text-white">

        {/* FOND ET PARALLAXE */}
        <div className="fixed inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out" style={{ transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)` }}>
          <div className="absolute inset-0 animate-space-drift opacity-40 mix-blend-screen"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M100 100 L300 200 L500 100 L700 300'/%3E%3Cpath d='M200 600 L400 400 L600 700'/%3E%3C/g%3E%3Cg fill='%2300fafe' opacity='0.6'%3E%3Ccircle cx='100' cy='100' r='1.5'/%3E%3Ccircle cx='300' cy='200' r='1'/%3E%3Ccircle cx='500' cy='100' r='1.5'/%3E%3Ccircle cx='700' cy='300' r='1'/%3E%3Ccircle cx='200' cy='600' r='1.5'/%3E%3Ccircle cx='400' cy='400' r='1'/%3E%3Ccircle cx='600' cy='700' r='1.5'/%3E%3Ccircle cx='50' cy='400' r='1'/%3E%3Ccircle cx='750' cy='50' r='1'/%3E%3C/g%3E%3Cg fill='%23b366ff' opacity='0.5'%3E%3Ccircle cx='150' cy='350' r='1'/%3E%3Ccircle cx='550' cy='150' r='1'/%3E%3Ccircle cx='350' cy='750' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '800px 800px'
            }}
          ></div>
        </div>
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b366ff]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00fafe]/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed top-1/2 left-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-0 pointer-events-none opacity-20 animate-galaxy mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(179,102,255,0.15) 25%, rgba(0,250,254,0.1) 50%, transparent 70%)' }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 space-y-32">

          {/* 1. INTRO */}
          <ScrollReveal>
            <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[75vh] scroll-mt-24 relative">
              <div className="flex-1 space-y-6 z-10 text-center md:text-left">
                <div className="inline-block">
                  <p className="text-[#00fafe] font-mono tracking-widest text-sm glow-cyan uppercase typewriter-text pr-2">Initializing system...</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b366ff] to-[#00fafe] glow-purple pb-2 block mt-2 leading-[1.1]">Théo <br /> De Morais</span>
                </h1>
                <div className="text-lg md:text-xl text-gray-400 font-light max-w-xl border-l-2 border-[#b366ff] pl-4 space-y-3">
                  <p>
                    🎓 Computer Science Engineering student (Master&apos;s level).
                  </p>
                  <p>
                    💼 Currently <strong>Full Stack Apprentice</strong> at the French Ministry of Justice.
                  </p>
                  <p>
                    🚀 Upcoming <strong>Software Engineer Intern</strong> at Natixis (Porto).
                  </p>
                </div>
                <div className="pt-8 flex items-center justify-center md:justify-start gap-6">
                  <a href="/CV_Theo_De_Morais.pdf" download="CV_Theo_De_Morais.pdf" className="group relative px-6 py-3 font-mono font-bold tracking-widest text-white uppercase border border-[#b366ff]/50 bg-[#b366ff]/10 hover:bg-[#b366ff]/20 transition-all rounded overflow-hidden flex items-center gap-3">
                    <span className="relative z-10 flex items-center gap-2"><FaDownload className="text-[#00fafe] group-hover:animate-bounce" /> Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b366ff] to-[#00fafe] opacity-0 group-hover:opacity-30 transition-opacity z-0 blur-md"></div>
                  </a>
                  <div className="flex gap-6 text-3xl text-gray-500">
                    <a href="https://github.com/DmrsTheo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/théo-de-morais-555401225/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaLinkedin /></a>
                    <a href="mailto:demoraistheo@gmail.com" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaEnvelope /></a>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-1 justify-end relative items-center z-0">
                <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                  <svg className="w-full h-full text-[#00fafe] animate-[spin_15s_linear_infinite] drop-shadow-[0_0_20px_rgba(0,250,254,0.4)] absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22Z" />
                    <path d="M22 12C22 14.7614 17.5228 17 12 17C6.47715 17 2 14.7614 2 12C2 9.23858 6.47715 7 12 7C17.5228 7 22 9.23858 22 12Z" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                  <svg className="w-[70%] h-[70%] text-[#b366ff] animate-[spin_10s_linear_infinite_reverse] drop-shadow-[0_0_15px_rgba(179,102,255,0.6)] absolute opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><path d="M12 2L12 22M2 12L22 12" />
                  </svg>
                  <div className="absolute top-[10%] right-[15%] text-[#00fafe] animate-float drop-shadow-[0_0_10px_rgba(0,250,254,0.8)]"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L22 20H2L12 2Z" /></svg></div>
                  <div className="absolute bottom-[20%] left-[10%] text-[#b366ff] animate-float-delayed drop-shadow-[0_0_10px_rgba(179,102,255,0.8)] opacity-80"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" /></svg></div>
                  <div className="absolute top-[40%] -right-[5%] text-[#00fafe] animate-[pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(0,250,254,0.6)]"><div className="w-4 h-4 rounded-full border-2 border-current"></div></div>
                  <div className="absolute -bottom-[5%] right-[30%] text-[#b366ff] animate-float drop-shadow-[0_0_10px_rgba(179,102,255,0.8)]" style={{ animationDelay: '1.5s' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2V22M2 12H22" /></svg></div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* 2. SKILLS */}
          <ScrollReveal>
            <section id="skills" className="scroll-mt-24 mt-32">
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-[#b366ff]">01.</span> <span className="glow-purple">Areas of Expertise</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowCard className="p-8">
                  <FaCode className="text-4xl text-[#00fafe] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Front-End Dev</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">Creation of responsive interfaces and smooth experiences. Advanced Data Visualization integration (interactive dashboards, dynamic mapping).</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#b366ff]"><span>#ReactJS</span> <span>#Tailwind</span> <span>#ChartJS</span></div>
                </GlowCard>
                <GlowCard className="p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#b366ff]/10 rounded-full blur-[30px] -mr-10 -mt-10"></div>
                  <FaServer className="text-4xl text-[#00fafe] mb-6 group-hover:scale-110 transition-transform relative z-10" />
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">Back-End & Architecture</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">Design of robust APIs, microservices, complex SQL query optimization, and database management.</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#b366ff] relative z-10"><span>#Java</span> <span>#Symfony</span> <span>#OracleSQL</span></div>
                </GlowCard>
                <GlowCard className="p-8">
                  <FaTerminal className="text-4xl text-[#00fafe] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">Methodologies & DevOps</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">Agile environment development, containerization, and asynchronous flow management.</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[#b366ff]"><span>#Docker</span> <span>#Kafka</span> <span>#Agile</span></div>
                </GlowCard>
              </div>
            </section>
          </ScrollReveal>

          {/* 3. PROJECTS */}
          <section id="projects" className="scroll-mt-24 mt-32 relative">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-[#b366ff]">02.</span> <span className="glow-purple">Experience & Projects</span>
              </h2>
            </ScrollReveal>
            
            <div className="w-full relative">
               <ProjectCarousel projects={projectsData} />
            </div>
          </section>

          {/* 4. EDUCATION */}
          <section id="education" className="scroll-mt-24 mt-32">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-[#b366ff]">03.</span> <span className="glow-purple">Education</span>
              </h2>
            </ScrollReveal>
            
            <InteractiveTimeline>
              <TimelineItem title="Computer Science Engineering" institution="CY Tech, Cergy" date="2023 - 2027" align="left" grade="Master's Level">
                Computer science: programming projects, Unix commands, operating systems, network architecture, cybersecurity, AI. Mathematics: statistics, algebra.
              </TimelineItem>
              <TimelineItem title="Integrated Preparatory Class" institution="CY Tech, Pau" date="2021 - 2023" align="right" grade="Math, Physics, CS">
                Intensive specializations in computer science, mathematics, and physics in preparation for the engineering cycle.
              </TimelineItem>
              <TimelineItem title="High School Diploma" institution="Lycée Paul Langevin, Beauvais" date="2018 - 2021" align="left" grade="With Honors">
                Specializations in mathematics and engineering sciences.
              </TimelineItem>
            </InteractiveTimeline>
          </section>

          {/* 5. SKILLS & LANGUES */}
          <ScrollReveal>
            <section id="soft-skills" className="scroll-mt-24 mt-32">
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-[#b366ff]">04.</span> <span className="glow-purple">Languages & Soft Skills</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <GlowCard className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><FaCode className="text-[#00fafe]" /> Communication</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-mono mb-2"><span className="text-[#b366ff]">French (native)</span><span className="text-gray-400">100%</span></div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#b366ff] shadow-[0_0_10px_#b366ff]" style={{ width: '100%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-mono mb-2"><span className="text-[#00fafe]">English (B2)</span><span className="text-gray-400">80%</span></div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#00fafe] shadow-[0_0_10px_#00fafe]" style={{ width: '80%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-mono mb-2"><span className="text-[#b366ff]">Portuguese (B2)</span><span className="text-gray-400">80%</span></div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#b366ff] shadow-[0_0_10px_#b366ff]" style={{ width: '80%' }}></div></div>
                    </div>
                  </div>
                </GlowCard>
                <GlowCard className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><FaBrain className="text-[#00fafe]" /> Profile</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 border border-[#00fafe]/30 bg-[#00fafe]/5 text-[#00fafe] rounded font-mono text-sm shadow-[0_0_10px_rgba(0,250,254,0.1)] hover:bg-[#00fafe]/20 transition-all cursor-default">Teamwork</span>
                    <span className="px-4 py-2 border border-[#b366ff]/30 bg-[#b366ff]/5 text-[#b366ff] rounded font-mono text-sm shadow-[0_0_10px_rgba(179,102,255,0.1)] hover:bg-[#b366ff]/20 transition-all cursor-default">Autonomous</span>
                    <span className="px-4 py-2 border border-[#00fafe]/30 bg-[#00fafe]/5 text-[#00fafe] rounded font-mono text-sm shadow-[0_0_10px_rgba(0,250,254,0.1)] hover:bg-[#00fafe]/20 transition-all cursor-default">Adaptability</span>
                    <span className="px-4 py-2 border border-gray-600/50 bg-gray-800/30 text-gray-400 rounded font-mono text-sm cursor-default">Chess & Badminton</span>
                  </div>
                </GlowCard>
              </div>
            </section>
          </ScrollReveal>

          {/* 6. TERMINAL DE CONTACT */}
          <ScrollReveal>
            <section id="contact" className="scroll-mt-24 mt-32">
              <h2 className="text-3xl font-bold mb-10 text-white flex items-center gap-3">
                <span className="text-[#b366ff]">05.</span> <span className="glow-purple">Contact</span>
              </h2>
              <TerminalContact />
            </section>
          </ScrollReveal>

          {/* 7. FOOTER */}
          <footer className="relative w-full h-48 mt-32 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
            <FooterParticles />
            <div className="relative z-10 text-center space-y-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-widest text-white mb-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b366ff] to-[#00fafe] glow-purple">Théo De Morais</span></h2>
                <p className="text-gray-400 font-mono text-sm">Software Engineer</p>
              </div>
              <div className="flex justify-center space-x-8 text-sm font-mono text-gray-400">
                <a href="#home" className="hover:text-[#00fafe] transition-colors">Home</a>
                <a href="#projects" className="hover:text-[#00fafe] transition-colors">Projects</a>
                <a href="#contact" className="hover:text-[#00fafe] transition-colors">Contact</a>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>
              <div className="flex justify-center items-center w-full text-xs font-mono text-gray-500">
                <p>© {new Date().getFullYear()} Théo De Morais. All rights reserved.</p>
              </div>
              <div className="flex justify-center gap-6 text-gray-500 pt-2">
                <a href="https://github.com/DmrsTheo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaGithub size={18} /></a>
                <a href="https://www.linkedin.com/in/théo-de-morais-555401225/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaLinkedin size={18} /></a>
                <a href="mailto:demoraistheo@gmail.com" className="hover:text-[#00fafe] hover:glow-cyan transition-all"><FaEnvelope size={18} /></a>
              </div>
            </div>
          </footer>

        </div>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[#00fafe]/50 text-[#00fafe] shadow-[0_0_15px_rgba(0,250,254,0.3)] hover:shadow-[0_0_25px_rgba(0,250,254,0.8)] hover:bg-[#00fafe]/20 hover:-translate-y-2 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`} title="Back to top">
        <FaArrowUp size={20} />
      </button>

    </>
  );
}

// INTERFACES
interface ProjectType {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  github: string | null;
}

interface Particle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  isCyan: boolean;
}

interface TimelineItemProps {
  title: string;
  institution: string;
  date: string;
  grade: string;
  children: React.ReactNode;
  align: "left" | "right";
}

// ============================================================================
// SOUS-COMPOSANTS LOGIQUES & VISUELS
// ============================================================================

// LE CARROUSEL COVERFLOW
function ProjectCarousel({ projects }: { projects: ProjectType[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 732 : window.innerWidth * 0.85 + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full relative group">
      <button 
        onClick={() => scroll("left")}
        className={`absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 bg-[#0a0a0a]/80 border border-[#00fafe]/50 text-[#00fafe] rounded-full backdrop-blur-md transition-all duration-300 hover:bg-[#00fafe]/20 hover:shadow-[0_0_15px_rgba(0,250,254,0.6)] hidden md:flex items-center justify-center cursor-pointer ${
          activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
        }`}
        title="Projet précédent"
      >
        <FaChevronLeft size={24} />
      </button>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        // flex-col sur mobile, et flex-row + overflow-x-auto sur md:
        className="flex flex-col md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory gap-8 pb-12 md:pb-16 pt-4 md:pt-8 px-[5vw] md:px-[calc(50vw-350px)] no-scrollbar items-center md:items-stretch"
      >
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} isActive={activeIndex === idx} />
        ))}
      </div>

      <button 
        onClick={() => scroll("right")}
        className={`absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-40 p-3 md:p-4 bg-[#0a0a0a]/80 border border-[#b366ff]/50 text-[#b366ff] rounded-full backdrop-blur-md transition-all duration-300 hover:bg-[#b366ff]/20 hover:shadow-[0_0_15px_rgba(179,102,255,0.6)] hidden md:flex items-center justify-center cursor-pointer ${
          activeIndex === projects.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
        }`}
        title="Projet suivant"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}

// LA CARTE INDIVIDUELLE
function ProjectCard({ project, isActive }: { project: ProjectType, isActive: boolean }) {
  return (
    <div 
      // Les effets de flou et réduction sont désactivés sur mobile
      className={`w-full max-w-[90vw] md:max-w-none md:w-[700px] md:snap-center md:shrink-0 transition-all duration-700 ease-out flex 
        scale-100 opacity-100 blur-0 shadow-lg md:shadow-none
        ${isActive 
          ? 'md:scale-100 md:opacity-100 md:blur-0 md:shadow-[0_0_30px_rgba(179,102,255,0.2)]' 
          : 'md:scale-90 md:opacity-40 md:blur-[2px]'
        }
      `}
    >
      <GlowCard className="p-6 md:p-8 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch h-full">
          <div className="w-full md:w-1/3 min-h-[160px] md:min-h-[200px] shrink-0 bg-[#1a1a1a] rounded-lg border border-[#333] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#00fafe]/10 group-hover:bg-transparent transition-colors z-10"></div>
            {project.icon}
          </div>
          <div className="w-full md:w-2/3 flex flex-col flex-grow text-left">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className="flex items-center gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-bold text-white hover:text-[#00fafe] transition-colors cursor-pointer leading-tight">
                  {project.title}
                </h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:scale-110 transition-all cursor-pointer z-20" title="View Source">
                    <FaGithub size={22} />
                  </a>
                )}
              </div>
              <span className="text-[#00fafe] font-mono text-xs border border-[#00fafe]/30 px-2 py-1 rounded bg-[#00fafe]/5 shrink-0 whitespace-nowrap">
                {project.date}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs mt-auto">
              {project.tags.map((tag: string, i: number) => (
                <span key={i} className="text-[#b366ff] bg-[#b366ff]/10 px-2 py-1 rounded-sm border border-[#b366ff]/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

// TIMELINE INTERACTIVE
function InteractiveTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight / 2;
      const max = rect.height;

      let currentProgress = -start;
      if (currentProgress < 0) currentProgress = 0;
      if (currentProgress > max) currentProgress = max;

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto mt-16 py-10">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 md:-translate-x-1/2 z-0"></div>
      <div
        className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#b366ff] to-[#00fafe] shadow-[0_0_15px_#00fafe] md:-translate-x-1/2 z-0 transition-all duration-100 ease-out"
        style={{ height: `${progress}px` }}
      ></div>
      <div className="space-y-12 relative z-10">
        {children}
      </div>
    </div>
  );
}

// ÉLÉMENT DE LA TIMELINE 
function TimelineItem({ title, institution, date, grade, children, align }: TimelineItemProps) {
  const isLeft = align === "left";
  const [isActive, setIsActive] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsActive(true);
      });
    }, { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" });

    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <div ref={domRef} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-[3px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 transition-all duration-700 ${
        isActive 
          ? 'bg-[#0a0a0a] border-[#00fafe] shadow-[0_0_15px_rgba(0,250,254,0.8)] scale-125' 
          : 'bg-gray-900 border-gray-700 scale-100'
      }`}></div>
      <div className={`w-full pl-14 md:pl-0 md:w-5/12 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <GlowCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00fafe] transition-colors">{title}</h3>
          <div className="text-gray-400 text-sm mb-4 font-mono">{institution} • {date}</div>
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-yellow-400/80 bg-yellow-400/10 text-yellow-400 text-xs font-bold font-mono shadow-[0_0_10px_rgba(250,204,21,0.2)]">
            {grade}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {children}
          </p>
        </GlowCard>
      </div>
    </div>
  );
}

function TerminalContact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formEndpoint = "https://formspree.io/f/mkovqaoa";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json", },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("success"); setEmail(""); setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error"); setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error"); 
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden border border-[#333] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      <div className="bg-[#111] px-4 py-2 flex items-center gap-2 border-b border-[#333]">
        <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-xs font-mono text-gray-500">guest@server:~</span>
      </div>
      <div className="bg-[#0a0a0a]/90 backdrop-blur p-6 font-mono text-sm md:text-base">
        <p className={`mb-4 ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
          {status === 'idle' && "Connection established... Awaiting transmission request."}
          {status === 'loading' && "Encrypting data... Transmitting to server... [||||||||||]"}
          {status === 'success' && "Transmission successful! Message securely delivered."}
          {status === 'error' && "Transmission failed. Please check your connection or try later."}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-300">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-[#00fafe]">guest@recruiter:~$</span><span className="text-[#b366ff]">set</span> email=
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === "loading"} placeholder="your@email.com" required className="flex-1 bg-transparent border-b border-[#333] focus:border-[#00fafe] outline-none text-white px-2 py-1 placeholder:text-gray-700 transition-colors disabled:opacity-50" />
          </div>
          <div className="flex flex-col gap-2">
            {/* Correction des guillemets */}
            <div><span className="text-[#00fafe]">guest@recruiter:~$</span><span className="text-[#b366ff]"> echo</span> &quot;Message&quot; <span className="text-[#00fafe]">&gt;</span> transmission.txt</div>
            <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} disabled={status === "loading"} placeholder="Type your message here..." required className="w-full bg-black/50 border border-[#333] focus:border-[#b366ff] outline-none text-white p-3 rounded resize-none placeholder:text-gray-700 transition-colors disabled:opacity-50" />
          </div>
          <div className="pt-4 flex items-center gap-4">
            <span className="text-[#00fafe]">guest@recruiter:~$</span>
            <button type="submit" disabled={status === "loading"} className={`text-black px-6 py-1 font-bold transition-all ${status === "loading" ? "bg-gray-500 cursor-not-allowed" : "bg-[#00fafe] hover:bg-white hover:shadow-[0_0_15px_#00fafe]"}`}>
              {status === "loading" ? "Sending..." : "./send.sh"}
            </button>
            {status !== "loading" && <span className="animate-pulse text-white">_</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

function FooterParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 60 }).map((_, i) => {
      const left = Math.random() * 100 + '%'; const size = Math.random() * 2 + 1 + 'px';
      const duration = Math.random() * 3 + 2 + 's'; const delay = Math.random() * 5 + 's';
      const isCyan = Math.random() > 0.5;
      return { id: i, left, size, duration, delay, isCyan };
    });
    setParticles(newParticles);
  }, []);
  if (particles.length === 0) return null;
  return (
    <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" style={{ WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' }}>
      {particles.map((p) => (<div key={p.id} className={`absolute bottom-0 rounded-full animate-rise ${p.isCyan ? 'bg-[#00fafe] shadow-[0_0_5px_#00fafe]' : 'bg-[#b366ff] shadow-[0_0_5px_#b366ff]'}`} style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.duration, animationDelay: p.delay, }} />))}
    </div>
  );
}

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setIsVisible(true); }); }, { threshold: 0.15 }); 
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);
  return (<div ref={domRef} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>{children}</div>);
}

function GlowCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div onMouseMove={handleMouseMove} className={`relative neon-glass-card rounded-xl group overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" style={{ background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 250, 254, 0.15), transparent 40%)` }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}