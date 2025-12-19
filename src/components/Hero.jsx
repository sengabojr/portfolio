import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Elements - Keep yours if different */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Available for Freelance & Full-time
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
            Sengabo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Junior</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Building high-performance digital architectures with a focus on 
            aesthetic precision and seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          

            {/* LINK TO ABOUT */}
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all w-48 shadow-xl"
              >
                About Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-cyan-500 rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;