"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProcessDNA = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const steps = [
    {
      title: "Seed Thought",
      color: "bg-[#FFEFDE]", // Light Orange tint
      borderColor: "border-[#F97316]",
      textColor: "text-orange-950",
      delay: 0,
      icon: "01"
    },
    {
      title: "Innovation",
      color: "bg-[#EBF2FF]", // Light Blue tint
      borderColor: "border-blue-500",
      textColor: "text-blue-950",
      delay: 0.2,
      icon: "02"
    },
    {
      title: "Execution",
      color: "bg-[#F0FDF4]", // Light Green tint
      borderColor: "border-green-600",
      textColor: "text-green-950",
      delay: 0.4,
      icon: "03"
    }
  ];

  return (
    <div className="w-full py-40 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[600px] font-heading">

      {/* Large Circular Background Frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl opacity-50" />
        <div className="absolute w-[600px] h-[600px] border border-accent/10 rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-accent/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* The Steps Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 relative z-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: step.delay, duration: 0.8, type: "spring" as const }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Perfectly Circular Marker */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" as const, delay: i * 0.7 }}
                className={`relative w-48 h-48 lg:w-64 lg:h-64 ${step.color} border-4 ${step.borderColor} rounded-full flex items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] group cursor-default overflow-hidden`}
              >
                <div className="text-center px-4 relative z-10">
                  <span className="block text-accent font-black text-xl mb-2 opacity-50">{step.icon}</span>
                  <p className={`text-2xl lg:text-3xl font-black ${step.textColor} uppercase tracking-tighter leading-tight`}>
                    {step.title}
                  </p>
                </div>

                {/* Internal Decorative Ring */}
                <div className={`absolute inset-4 rounded-full border border-dashed ${step.borderColor} opacity-20`} />

                {/* Hover Glow / Slide theme */}
                <div className="absolute inset-0 bg-white/40 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Improved Double-Helix DNA Background */}
        <div className="absolute top-1/2 left-0 w-full h-80 -translate-y-1/2 pointer-events-none overflow-visible">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 320" preserveAspectRatio="none">
            {/* Strand 1 (Main) */}
            <motion.path
              d="M 0 160 Q 150 10, 300 160 T 600 160 T 900 160 T 1200 160"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
            />
            {/* Strand 2 (Complementary) */}
            <motion.path
              d="M 0 160 Q 150 310, 300 160 T 600 160 T 900 160 T 1200 160"
              stroke="#334155"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Connecting Bases (Bars) */}
            {mounted && [...Array(12)].map((_, i) => (
              <motion.line
                key={i}
                x1={100 * i}
                y1={160 + 100 * Math.sin((100 * i) / 95)}
                x2={100 * i}
                y2={160 - 100 * Math.sin((100 * i) / 95)}
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="4,4"
                opacity="0.3"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="text-center px-6">
        <p className="text-3xl mt-20 text-accent/80 leading-relaxed font-heading">
          Is in our DNA.
        </p>
        <p className="text-lg max-w-4xl mx-auto mt-5 text-muted leading-relaxed font-body">
          Industrial Food Processing Requires wide range of machines & Equipments. Kailas Engineering Systems has developed extensive variety of solutions that allow to customer choose best product for their specific requirements.
        </p>
      </div>
    </div>
  );
};

export default ProcessDNA;
