import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';

export default function Work() {
  const projects = [
    {
      title: "Stock Management",
      category: "Fullstack Development",
      tech: ["React", "Node.js", "MySQL"],
      description: "A high-performance store with real-time inventory and secure checkout.",
      link: "https://github.com/sengabojr/la-la-sims",
    },
    {
      title: "Smart Student Tracking System",
      category: "Fullstack Development",
      tech: ["HTML", "TailwindCSS", "MySQL"],
      description: "Automating workflow management using machine learning algorithms.",
      link: "https://github.com/sengabojr/smart-student-mgt-app",
    },
    {
      title: "Portfolio Website",
      category: "Design",
      tech: ["React", "Vite", "Tailwind"],
      description: "A collection of reusable, masterclass-level UI components.",
      link: "https://github.com/sengabojr/portfolio",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0, scale: 0.95 },
    onscreen: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, 
        duration: 0.8 
      } 
    }
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-cyan-500 font-mono text-sm tracking-widest mb-2 uppercase">/ Case Studies</h2>
            <h1 className="text-5xl font-bold text-white tracking-tight">Selected Works</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }} // amount: 0.2 means it triggers when 20% visible
                className="group relative flex flex-col bg-slate-900/50 border border-white/5 rounded-[2rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              >
                {/* Image Placeholder with Reveal Overlay */}
                <div className="h-56 bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center justify-center h-full text-slate-700 font-black text-7xl group-hover:text-cyan-500/20 transition-all duration-700 group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-cyan-500 font-mono text-[10px] tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 uppercase font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" className="inline-flex items-center text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Source Code <i className="fa-brands fa-github ml-2"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}