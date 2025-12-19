import React from 'react';
import { GitHubCalendar } from 'react-github-calendar'; 
import { motion } from 'framer-motion';

export default function GitHubGraph() {
  const theme = {
    light: ['#1e293b', '#0e7490', '#0891b2', '#06b6d4', '#22d3ee'],
    dark: ['#1e293b', '#0e7490', '#0891b2', '#06b6d4', '#22d3ee'],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-white font-bold text-xl tracking-tight mb-1">Code Continuity</h3>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">Live GitHub Activity</p>
        </div>
        <a 
          href="https://github.com/sengabojr" 
          target="_blank" 
          rel="noreferrer"
          className="text-cyan-500 text-xs font-bold hover:underline transition"
        >
          Follow @sengabojr <i className="fa-brands fa-github ml-1"></i>
        </a>
      </div>

      <div className="flex justify-center overflow-x-auto pb-4">
        <GitHubCalendar 
          username="sengabojr" 
          theme={theme}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          loadingProps={{ color: '#22d3ee' }}
        />
      </div>
    </motion.div>
  );
}