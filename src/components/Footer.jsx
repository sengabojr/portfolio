import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [trackIndex, setTrackIndex] = useState(0);

  const playlist = [
    { title: "Mockingbird", artist: "Eminem", icon: "fa-solid fa-compact-disc" },
    { title: "Dandelions", artist: "Ruth B.", icon: "fa-solid fa-headphones" },
    { title: "Minefields", artist: "Faouzia & John Legend", icon: "fa-solid fa-music" },
    { title: "Chat Chat", artist: "Ish Kevin", icon: "fa-solid fa-record-vinyl" },
    { title: "Treasure", artist: "Logan Joe", icon: "fa-solid fa-radio" }
  ];

  const socials = [
    { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", link: "https://linkedin.com/in/sengabojr", color: "hover:text-[#0077B5]" },
    { name: "GitHub", icon: "fa-brands fa-github", link: "https://github.com/sengabojr", color: "hover:text-white" },
    { name: "X", icon: "fa-brands fa-x-twitter", link: "https://x.com/OfficialSengabo", color: "hover:text-white" },
    { name: "Instagram", icon: "fa-brands fa-instagram", link: "https://instagram.com/sengabo_", color: "hover:text-[#E4405F]" },
    { name: "Threads", icon: "fa-brands fa-threads", link: "https://threads.net/@sengabo_", color: "hover:text-white" },
    { name: "Facebook", icon: "fa-brands fa-facebook-f", link: "https://facebook.com/sengabojr", color: "hover:text-[#1877F2]" },
  ];

  // Auto-cycle tracks every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTrackIndex((prev) => (prev + 1) % playlist.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#0f172a] border-t border-white/5 pt-20 pb-10 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="text-3xl font-black tracking-tighter text-white block mb-6">
              S<span className="text-cyan-500">JR</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Frontend Designer & Full-Stack Developer crafting high-end digital experiences during the late hours.
            </p>
            <div className="flex flex-wrap gap-6">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xl text-slate-500 transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-col md:items-center">
            <div>
              <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="text-slate-400 hover:text-cyan-400 transition">Home</Link></li>
                <li><Link to="/work" className="text-slate-400 hover:text-cyan-400 transition">Selected Work</Link></li>
                <li><Link to="/skills" className="text-slate-400 hover:text-cyan-400 transition">Tech Stack</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition">The Story</Link></li>
              </ul>
            </div>
          </div>

          {/* DYNAMIC MUSIC WIDGET */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Late Night Vibe</h3>
            <div className="bg-slate-900/50 border border-white/5 p-6 rounded-3xl relative h-32 overflow-hidden group">
              
              {/* Visualizer bars bg */}
              <div className="absolute bottom-0 left-0 w-full flex items-end gap-1 px-6 opacity-10 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-cyan-500 animate-pulse" 
                    style={{ height: `${Math.random() * 30 + 10}px`, animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={trackIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center gap-5 relative z-10"
                >
                  <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-500 shadow-inner group-hover:rotate-[360deg] transition-all duration-700">
                    <i className={`${playlist[trackIndex].icon} text-xl`}></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] font-bold block mb-1">
                      Most Played On Playlist
                    </span>
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {playlist[trackIndex].title}
                    </h4>
                    <p className="text-slate-400 text-xs">
                      {playlist[trackIndex].artist}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase">
            &copy; {currentYear} SENGABO JR — EST. 2025
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">Available for projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}