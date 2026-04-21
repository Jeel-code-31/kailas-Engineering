"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollManager() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Magnetic effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.4);
    mouseY.set(y * 0.4);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Smooth out the progress value for the top bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform for the circle dash offset (282.7 is for r=45)
  const dashOffset = useTransform(scrollYProgress, [0, 1], [289, 0]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. Global Horizontal Progress Bar (Ultra-thin, elegant) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left shadow-[0_0_10px_rgba(58,90,64,0.3)]"
        style={{ scaleX }}
      />

      {/* 2. Premium Magnetic Back to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 50,
          scale: isVisible ? 1 : 0.8
        }}
        transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
        className="fixed bottom-10 right-10 z-[100]"
      >
        <motion.button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={scrollToTop}
          style={{ x: mouseX, y: mouseY }}
          className="relative group w-16 h-16 bg-white/10 backdrop-blur-2xl text-primary rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-accent/20 transition-all duration-300 border border-white/20 flex items-center justify-center overscroll-none"
        >
          {/* Circular Progress Ring with subtle glow */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1 pointer-events-none drop-shadow-sm" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              className="text-black/5"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="289"
              className="text-accent"
              style={{ strokeDashoffset: dashOffset }}
              strokeLinecap="round"
            />
          </svg>
          
          <div className="relative z-10 flex flex-col items-center">
             <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform text-primary/80 group-hover:text-accent duration-500" />
             <div className="text-[7px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity absolute top-6">Top</div>
          </div>

          {/* Magnetic Background Glow */}
          <div className="absolute inset-0 bg-accent/5 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl" />
        </motion.button>
      </motion.div>
      
    </>
  );
}
