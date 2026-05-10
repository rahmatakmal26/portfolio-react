import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Calendar, MapPin,
  Facebook, Twitter, Instagram, Github,
  ExternalLink, BrainCircuit, Globe,
  ArrowUpRight, Command, Layout, Code, Award, Map, Sun, Moon, X
} from 'lucide-react';
import { portfolioData } from './data/portfolio';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('01');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      // Force dark mode as default
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize dark mode immediately on mount to prevent flash
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const tabs = [
    { id: '01', name: 'About', icon: Layout },
    { id: '02', name: 'Resume', icon: Code },
    { id: '03', name: 'Projects', icon: Command },
    { id: '04', name: 'Awards', icon: Award },
    { id: '05', name: 'Location', icon: Map },
  ];

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const renderContent = () => {
    switch (activeTab) {
      case '01':
        return (
          <div className="space-y-12 max-w-5xl pt-8">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase">System Initialization / 01</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Designing the future <br />
                <span className="text-accent italic">with precision</span> and AI.
              </h2>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-teal-100/50 dark:bg-teal-900/20 backdrop-blur-sm p-8 rounded-3xl border border-teal-200/50 dark:border-teal-800/50 shadow-xl shadow-teal-500/5">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-50 dark:border-teal-900 flex-shrink-0">
                    <img src={portfolioData.personal.avatar} alt={portfolioData.personal.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-[var(--text-main)]">{portfolioData.personal.name}</h3>
                    <p className="text-accent font-mono text-sm tracking-widest font-bold uppercase">{portfolioData.personal.title}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                       <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                         <MapPin size={14} className="text-accent" /> {portfolioData.personal.location}
                       </div>
                       <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                         <Calendar size={14} className="text-accent" /> {portfolioData.personal.birthday}
                       </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8 text-lg font-normal text-[var(--text-muted)] leading-relaxed">
                  {portfolioData.about.intro.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-8 lg:border-l border-[var(--border)] lg:pl-12">
                <h3 className="font-mono text-[10px] uppercase tracking-widest font-black text-accent">Core Focus</h3>
                <div className="space-y-8">
                  {portfolioData.about.services.map((service, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={cn(
                          "p-3 rounded-xl transition-all duration-300",
                          service.title === "AI Engineer"
                            ? "bg-[var(--primary)] text-white dark:bg-slate-800 dark:text-white group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-accent"
                            : "bg-[var(--primary)] text-white dark:bg-slate-800 dark:text-white group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-accent"
                        )}>
                          {service.title === "AI Engineer" ? <BrainCircuit size={20} /> : <Globe size={20} />}
                        </div>
                        <h4 className="text-lg font-bold group-hover:text-accent transition-colors">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case '02':
        return (
          <div className="space-y-16 pt-8 pb-24 max-w-5xl">
            <header className="space-y-4">
              <span className="font-mono text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Development Lifecycle / 02</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Experience.</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section className="space-y-12">
                <h3 className="text-sm font-bold uppercase tracking-widest opacity-30">The Timeline</h3>
                <div className="relative space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)] pl-10">
                  {portfolioData.resume.experience.map((exp, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[44.5px] top-1.5 w-2 h-2 rounded-full bg-accent ring-4 ring-white dark:ring-slate-900" />
                      <p className="font-mono text-[10px] text-accent font-bold mb-2 uppercase tracking-wider">{exp.period}</p>
                      <h4 className="text-2xl font-bold mb-1">{exp.company}</h4>
                      <p className="text-slate-500 font-medium mb-4">{exp.title}</p>
                      <p className="text-[var(--text-muted)] text-sm font-light leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-20">
                <section className="space-y-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-30">Pendidikan</h3>
                  <div className="space-y-8">
                    {portfolioData.resume.education.map((edu, i) => (
                      <div key={i} className="card-modern shadow-none hover:shadow-md py-6 px-7">
                        <p className="font-mono text-[10px] text-accent font-bold mb-2 uppercase">{edu.period}</p>
                        <h4 className="text-lg font-bold">{edu.school}</h4>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-30">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {portfolioData.resume.skills.map((skill, i) => (
                      <div key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-full">
                        <span className="block font-bold text-xs">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case '03':
        return (
          <div className="space-y-16 pt-8 pb-24">
            <header className="space-y-4">
              <span className="font-mono text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Portfolio Artifacts / 03</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Work.</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, i) => (
                <div key={i} className="card-modern p-0 overflow-hidden group">
                  <div
                    className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                    onClick={() => {
                      setSelectedImage(project.image);
                      setModalOpen(true);
                    }}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                       <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                         {project.category}
                       </span>
                       {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case '04':
        return (
          <div className="space-y-16 pt-8 pb-24">
            <header className="space-y-4">
              <span className="font-mono text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Distinctions / 04</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Recognitions.</h2>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolioData.certificates.map((cert, i) => (
                <div key={i} className="card-modern group flex flex-col gap-8">
                  <div
                    className="aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] cursor-pointer"
                    onClick={() => {
                      setSelectedImage(cert.image);
                      setModalOpen(true);
                    }}
                  >
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent font-mono text-[10px] font-bold">
                       <Calendar size={14} /> {cert.date}
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight">{cert.title}</h4>
                    <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case '05':
        return (
          <div className="space-y-16 pt-8 h-full flex flex-col">
            <header className="space-y-4">
              <span className="font-mono text-accent text-[10px] font-bold tracking-[0.3em] uppercase">Coordinates / 05</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">Location.</h2>
            </header>

            <div className="flex-1 card-modern p-2 overflow-hidden min-h-[400px] flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative rounded-2xl overflow-hidden group">
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63623.84432576599!2d96.10812813945824!3d4.137205654911767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303f3a7e0a86f0ed%3A0xda6307d6cf916e2d!2sMeulaboh%2C%20Johan%20Pahlawan%2C%20West%20Aceh%20Regency%2C%20Aceh%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1688303534656!5m2!1sen!2sid"
                 className={cn("w-full h-full grayscale-[0.5] opacity-80 dark:opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105", theme === 'dark' && "invert")}
                 style={{ border: 0 }}
                 allowFullScreen={true}
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
               <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-80">Operational Base</p>
                  <p className="text-3xl font-black">{portfolioData.personal.location}</p>
               </div>
              </div>
              
              <div className="md:w-[350px] bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-10 flex flex-col justify-between">
                <div className="space-y-12">
                   <div className="space-y-2">
                     <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Inquiries</p>
                     <a href={`mailto:${portfolioData.personal.email}`} className="text-xl font-bold font-mono tracking-tight block hover:text-accent transition-colors truncate">{portfolioData.personal.email}</a>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Voice</p>
                     <p className="text-2xl font-bold font-mono">{portfolioData.personal.phone}</p>
                   </div>
                </div>
                
                <div className="flex gap-4">
                  <SocialLink href={portfolioData.personal.socials.github} icon={Github} />
                  <SocialLink href={portfolioData.personal.socials.twitter} icon={Twitter} />
                  <SocialLink href={portfolioData.personal.socials.instagram} icon={Instagram} />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="noise" />
      <div className="subtle-grid" />

      {/* Modern Header Nav */}
      <header className="sticky top-0 z-[100] w-full border-b border-[var(--border)] bg-[var(--background)]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center overflow-hidden border border-teal-200 dark:border-teal-800 shadow-sm shadow-teal-500/5">
              <img src={portfolioData.personal.avatar} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-sm tracking-tight leading-none text-[var(--text-main)]">{portfolioData.personal.name}</p>
              <p className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest mt-1 opacity-80">@rahmatakmall</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2 p-1 bg-teal-50/50 dark:bg-slate-900/40 rounded-2xl border border-[var(--border)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "nav-pill",
                  activeTab === tab.id && "nav-pill-active"
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-[var(--border)] bg-teal-50/30 dark:bg-teal-950/10 py-8 px-6 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
               <span className="text-white font-black text-xs">AK</span>
             </div>
             <p className="text-xs md:text-sm font-bold opacity-40 uppercase tracking-widest px-2">Rahmat Akmal © {new Date().getFullYear()}</p>
           </div>

           <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
             {tabs.map(tab => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[var(--primary)] transition-colors"
                >
                  {tab.name}
                </button>
             ))}
           </nav>
        </div>
      </footer>

      {/* Mobile Nav Bar */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-[101] flex items-center justify-between p-2 bg-teal-900/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "p-3 rounded-xl transition-all",
              activeTab === tab.id 
                ? "bg-[var(--primary)] text-white shadow-lg shadow-teal-500/40" 
                : "text-white/40 hover:text-white"
            )}
          >
            <tab.icon size={20} />
          </button>
        ))}
      </nav>

      {/* Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh]"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors p-2"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Project preview"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ElementType }> = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-teal-600 dark:hover:text-accent hover:border-teal-600 dark:hover:border-accent transition-all hover:scale-110"
  >
    <Icon size={18} />
  </a>
);

export default App;
