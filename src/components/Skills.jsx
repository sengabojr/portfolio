import React from 'react';
import PageTransition from './PageTransition';
import GitHubGraph from './GithubGraph';

export default function Skills() {
  const languages = [
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "Dart", icon: "fa-solid fa-bullseye", color: "text-blue-400" }, // Added Dart
    { name: "Flutter", icon: "fa-solid fa-mobile-screen", color: "text-cyan-400" }, // Added Flutter
    { name: "React JS", icon: "fa-brands fa-react", color: "text-cyan-400" },
    { name: "Node JS", icon: "fa-brands fa-node-js", color: "text-green-500" },
    { name: "Python", icon: "fa-brands fa-python", color: "text-blue-500" },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-sky-400" },
    { name: "MongoDB", icon: "fa-solid fa-database", color: "text-green-600" },
  ];

  const tools = [
    { name: "VS Code", icon: "fa-solid fa-code", color: "text-blue-500" },
    { name: "Windows", icon: "fa-brands fa-windows", color: "text-blue-400" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "text-purple-500" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "text-white" },
  ];

  const SkillCard = ({ name, icon, color }) => (
    <div className="group relative p-5 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className={`${color} text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <i className={icon}></i>
        </div>
        {/* "NOW PLAYING" STYLE TEXT */}
        <h3 className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] font-bold">
          {name}
        </h3>
      </div>
    </div>
  );

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Technical Stack</h2>
          <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">/ Languages & Frameworks</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-20">
          {languages.map((skill, i) => <SkillCard key={i} {...skill} />)}
        </div>

        <div className="text-center mb-10">
          <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">/ Workspace & Tools</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => <SkillCard key={i} {...tool} />)}
        </div>
        <GitHubGraph />
      </section>
    </PageTransition>
  );
}