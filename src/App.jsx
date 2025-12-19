import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Hooks
import useMousePosition from './hooks/useMousePosition';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/PreLoader';
import ScrollsToTop from './components/ScrollsToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { x, y } = useMousePosition();

  // Create 20 random background particles
  const particles = Array.from({ length: 20 });

  useEffect(() => {
    // Artificial delay to ensure the "SJR" preloader feels intentional
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. INITIAL LOADING SCREEN */}
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <main className="relative bg-[#0f172a] min-h-screen overflow-hidden selection:bg-cyan-500/30">
        
        {/* 2. DYNAMIC MOUSE GLOW (Behind Content) */}
        <motion.div 
          className="pointer-events-none fixed inset-0 z-0"
          animate={{
            background: `radial-gradient(800px at ${x}px ${y}px, rgba(34, 211, 238, 0.08), transparent 80%)`
          }}
        />

        {/* 3. FLOATING BACKGROUND PARTICLES */}
<div className="fixed inset-0 pointer-events-none z-0">
  {particles.map((_, i) => (
    <motion.div
      key={i}
      className="absolute bg-cyan-500/20 rounded-full blur-[1px] shadow-lg shadow-cyan-500/10"
      style={{
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
      animate={{
        y: [0, -150, 0],
        opacity: [0, 0.6, 0],
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: Math.random() * 15 + 15,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 10
      }}
    />
  ))}
</div>

        {/* 4. MAIN CONTENT LAYER */}
        <div className="relative z-10">
          <ScrollsToTop />
          <Navbar />
          
          {/* mode="wait" ensures current page exits before new page enters */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/work" element={<Work />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback to Home if route doesn't exist */}
              <Route path="*" element={<Hero />} />
            </Routes>
          </AnimatePresence>

          <Footer />
          <ScrollToTop />
        </div>
      </main>
    </>
  );
}

export default App;