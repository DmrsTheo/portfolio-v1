"use client"; // Obligatoire pour utiliser useState et l'interactivité

import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaBars, FaTimes, FaHome, FaCode, 
  FaFolderOpen, FaGraduationCap, FaEnvelope, FaBrain 
} from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dustKey, setDustKey] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setDustKey(prev => prev + 1);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "education", "soft-skills", "contact"];
      let current = "home"; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">

      <body className="bg-[#0f0c29] text-white min-h-screen font-sans cursor-none">
        <title>Théo De Morais</title>
        <meta name="description" content="Portfolio of Théo De Morais, Full Stack Software Engineer." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />
        <button 
          onClick={toggleMenu}
          className="fixed top-6 left-6 z-40 p-3 bg-[#151030]/80 backdrop-blur-md rounded-xl text-cyan-400 hover:text-white border border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all"
        >
          <FaBars size={24} />
        </button>

        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
            onClick={toggleMenu}
          ></div>
        )}

        <nav 
          className={`fixed top-0 left-0 h-screen w-[280px] bg-[#0a0710] border-r border-white/5 z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.5)] ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button 
            onClick={toggleMenu} 
            className="absolute top-6 left-6 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors z-50"
          >
            <FaTimes size={18} className="text-gray-400" />
          </button>

          {isOpen && <PixieDust key={dustKey} />}

          <div className="flex flex-col items-center mt-20 mb-8 px-6 relative z-10">
            <div className="relative w-24 h-24 mb-4 flex items-center justify-center group cursor-default">
              <div className="absolute inset-0 rounded-full overflow-hidden z-0">
                <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,#00fafe_85%,#b366ff_100%)] animate-[spin_2.5s_linear_infinite]"></div>
              </div>
              <div className="absolute inset-[3px] bg-[#0a0a0a] rounded-full z-10"></div>
              <div className="absolute inset-0 border-[3px] border-dotted border-cyan-500/40 rounded-full z-20 pointer-events-none"></div>
              <div className="absolute inset-[7px] rounded-full overflow-hidden border-2 border-[#0a0710] z-30 bg-[#0a0a0a]">
                <Image src="/images/photo.jpg" alt="Théo" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-[3px] border-[#0a0a0a] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] z-40"></div>
            </div>
            
            <h2 className="text-2xl font-bold mb-1 tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Théo</span>
            </h2>
            <p className="text-[10px] text-gray-400 tracking-[0.2em]">SOFTWARE ENGINEER</p>
          </div>

          <div className="flex-1 overflow-y-auto w-full space-y-2 mt-4 relative z-10">
            <NavItem href="#home" icon={<FaHome size={18} />} text="Home" 
              isActive={activeSection === "home"} onClick={toggleMenu} 
            />
            <NavItem href="#skills" icon={<FaCode size={18} />} text="Skills" 
              isActive={activeSection === "skills"} onClick={toggleMenu} 
            />
            <NavItem href="#projects" icon={<FaFolderOpen size={18} />} text="Projects" 
              isActive={activeSection === "projects"} onClick={toggleMenu} 
            />
            <NavItem href="#education" icon={<FaGraduationCap size={18} />} text="Education" 
              isActive={activeSection === "education"} onClick={toggleMenu} 
            />
            <NavItem href="#soft-skills" icon={<FaBrain size={18} />} text="Soft Skills" 
              isActive={activeSection === "soft-skills"} onClick={toggleMenu} 
            />
            <NavItem href="#contact" icon={<FaEnvelope size={18} />} text="Contact" 
              isActive={activeSection === "contact"} onClick={toggleMenu} 
            />
          </div>

          <RisingParticles />

          <div className="p-6 text-center text-[10px] text-gray-500 tracking-wider relative z-10">
            © Théo De Morais
          </div>
        </nav>

        <CustomCursor />

        <main className="transition-all duration-300">
          {children}
        </main>

      </body>
    </html>
  );
}

// INTERFACES
interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface Particle {
  id: number;
  tx?: string;
  ty?: string;
  left?: string;
  duration: string;
  isCyan: boolean;
  size: string;
  delay?: string;
}

// LIENS DU MENU
function NavItem({ href, icon, text, isActive = false, onClick }: NavItemProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`flex items-center pl-8 py-3 transition-all duration-300 relative group
        ${isActive 
          ? 'text-white bg-gradient-to-r from-cyan-900/40 to-transparent' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
    >
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.8)] rounded-r-md"></div>
      )}
      <span className={`mr-4 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-400' : ''}`}>
        {icon}
      </span>
      <span className="font-medium tracking-widest text-sm">{text}</span>
    </Link>
  );
}

function PixieDust() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 40 + Math.random() * 110; 
      const tx = Math.cos(angle) * velocity + 'px';
      const ty = Math.sin(angle) * velocity + 'px';
      const duration = 0.6 + Math.random() * 0.8 + 's';
      const size = 2 + Math.random() * 4 + 'px';
      const isCyan = Math.random() > 0.5;
      return { id: i, tx, ty, duration, isCyan, size };
    });
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute top-32 left-1/2 -translate-x-1/2 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full animate-pixie ${
            p.isCyan 
              ? 'bg-[#00fafe] shadow-[0_0_10px_#00fafe]' 
              : 'bg-[#b366ff] shadow-[0_0_10px_#b366ff]'
          }`}
          style={{
            width: p.size,
            height: p.size,
            '--tx': p.tx,
            '--ty': p.ty,
            animationDuration: p.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function RisingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => {
      const left = Math.random() * 100 + '%';
      const size = Math.random() * 2 + 1 + 'px';
      const duration = Math.random() * 3 + 2 + 's';
      const delay = Math.random() * 5 + 's';
      const isCyan = Math.random() > 0.5;
      return { id: i, left, size, duration, delay, isCyan };
    });
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div 
      className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute bottom-0 rounded-full animate-rise ${
            p.isCyan 
              ? 'bg-[#00fafe] shadow-[0_0_5px_#00fafe]' 
              : 'bg-[#b366ff] shadow-[0_0_5px_#b366ff]'
          }`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(target.closest('a, button') !== null);
    };
    
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen transition-all duration-100 ease-out"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00fafe] rounded-full shadow-[0_0_10px_#00fafe] transition-transform ${isHovering ? 'scale-0' : 'scale-100'}`}></div>
      <div className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b366ff] shadow-[0_0_15px_#b366ff] transition-all duration-300 ${isHovering ? 'w-12 h-12 opacity-100' : 'w-8 h-8 opacity-50'}`}></div>
    </div>
  );
}