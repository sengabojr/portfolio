import React from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0f172a]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-5xl font-black tracking-tighter text-white"
        >
          S<span className="text-cyan-500">JR</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-6 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-cyan-500"
          />
        </div>
        
        <p className="mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
          Initializing Experience
        </p>
      </div>
    </motion.div>
  );
}