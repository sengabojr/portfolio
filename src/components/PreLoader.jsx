import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo (2).png'; // Path to your new logo

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
    >
      <div className="relative">
        {/* 1. The Glowing Aura behind the logo */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-full animate-pulse" />

        {/* 2. The Animated Logo */}
        <motion.img
          src={logo}
          alt="Sengabo Logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.05, 1],
            opacity: 1 
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10"
        />

        {/* 3. The "Scanning" Line effect */}
        <motion.div 
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_15px_cyan] z-20"
        />
      </div>

      {/* 4. The Branding Caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center"
      >
        <h1 className="text-white font-mono tracking-[0.5em] uppercase text-sm">
          Sengabo <span className="text-cyan-500">Junior</span>
        </h1>
        <div className="w-48 h-[1px] bg-white/10 mt-4 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;