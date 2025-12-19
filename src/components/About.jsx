import React from "react";
import PageTransition from "./PageTransition";
export default function About() {
  const education = [
    {
      period: "2023 — Present",
      level: "Advanced Level",
      focus: "Software Development - Saint Laurent Gaseke TSS",
      description: "Deep diving into full-stack architectures and modern frameworks."
    },
    {
      period: "2020 — 2023",
      level: "Ordinary Level",
      focus: "General Studies - GS Kirwa",
      description: "Building the foundation of logical thinking and problem solving."
    },
    {
      period: "2014 — 2019",
      level: "Primary School",
      focus: "Initials - GS Kirwa",
      description: "Where my journey and curiosity for technology first began."
    }
  ];

  return (
    <PageTransition>
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Personality */}
        <div>
          <h2 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 uppercase">/ The Story</h2>
          <h1 className="text-5xl font-bold text-white mb-8">Sengabo Jr.</h1>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a developer who lives at the intersection of logic and creativity. 
              While others prefer the morning rush, I find my peak productivity in the 
              <span className="text-white font-medium"> quiet hours of the night.</span>
            </p>
            <p>
              My workflow is simple: a dark room, a focused playlist, and a burning 
              desire to solve complex problems. When I'm not pushing code to GitHub, 
              you'll find me on the basketball court or exploring the latest sounds in music.
            </p>
            
            {/* Hobbies Visual */}
            <div className="flex gap-4 pt-4">
              {['Basketball', 'Music', 'Coding'].map((hobby) => (
                <span key={hobby} className="px-4 py-1 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="relative">
          <h2 className="text-slate-500 font-mono text-sm tracking-widest mb-8 uppercase">/ Education</h2>
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative pl-8 border-l border-white/10">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                
                <span className="text-cyan-500 font-mono text-xs mb-2 block">{item.period}</span>
                <h3 className="text-xl font-bold text-white">{item.level}</h3>
                <p className="text-cyan-400/80 text-sm mb-2">{item.focus}</p>
                <p className="text-slate-500 text-sm max-w-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SECTION B: NEW MASTERCLASS ADDITION (APPENDED UNDERNEATH) */}
        <div className="mt-24 pt-20 border-t border-white/5">
          <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-12 text-center opacity-50">Professional Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5">
              <i className="fa-solid fa-code text-cyan-500 mb-4 block text-xl"></i>
              <h4 className="text-white font-bold mb-2">Scalable Code</h4>
              <p className="text-slate-400 text-sm">Focusing on maintainable architectures that grow with your business.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5">
              <i className="fa-solid fa-layer-group text-cyan-500 mb-4 block text-xl"></i>
              <h4 className="text-white font-bold mb-2">UX First</h4>
              <p className="text-slate-400 text-sm">Every interaction is designed to be intuitive and visually stunning.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5">
              <i className="fa-solid fa-bolt text-cyan-500 mb-4 block text-xl"></i>
              <h4 className="text-white font-bold mb-2">High Performance</h4>
              <p className="text-slate-400 text-sm">Optimized loading speeds and smooth 60fps frame rates.</p>
            </div>
          </div>
        </div>

    </section>
    </PageTransition>
  );
}