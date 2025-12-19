import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
  ];

  const linkStyles = ({ isActive }) => 
    `relative py-1 transition-colors duration-300 ${
      isActive ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-[100] backdrop-blur-xl border-b border-white/5 bg-[#0f172a]/80 px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        

        <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black tracking-tighter text-white z-[110]">
          S<span className="text-cyan-500">JR</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkStyles}>
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && <motion.span layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 rounded-full" />}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block px-5 py-2 rounded-lg bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all">
            Let's Talk
          </Link>

          {/* Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 z-[110] md:hidden p-2"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-[#0f172a] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                <NavLink 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold text-white hover:text-cyan-500 transition-colors"
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl"
            >
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}