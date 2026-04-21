"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Award, Factory } from 'lucide-react';

const StatsInfographic = () => {
    const stats = [
        {
            value: "45+",
            unit: "Countries",
            title: "Exported",
            topIcon: <Plane size={24} />,
            position: "top",
            lineColor: "text-orange-500"
        },
        {
            value: "25+",
            unit: "Lacs Tons",
            bottomLabel: "Fruits and Vegetable Processed per Year",
            position: "bottom",
            lineColor: "text-amber-500"
        },
        {
            value: "300+",
            unit: "Projects",
            title: "Completed",
            topIcon: <Award size={24} />,
            position: "top",
            lineColor: "text-emerald-500"
        },
        {
            value: "5+",
            unit: "Lacs Tons",
            bottomLabel: "Mango Processed per Year",
            position: "bottom",
            lineColor: "text-cyan-500"
        },
        {
            value: "1500+",
            unit: "Tons",
            title: "Tons of Steel Fabricated",
            topIcon: <Factory size={24} />,
            position: "top",
            lineColor: "text-indigo-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0, y: 20 },
        visible: { 
            scale: 1, 
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 100, damping: 12 }
        }
    };

    const lineVariants = {
        hidden: { pathLength: 0 },
        visible: { 
            pathLength: 1, 
            transition: { duration: 2, ease: "easeInOut" as const }
        }
    };

    return (
        <div className="w-full py-24 lg:py-40 bg-white overflow-hidden font-heading">
            <div className="max-w-7xl mx-auto px-6 relative h-auto lg:h-[700px] flex items-center justify-center">
                
                {/* Multi-colored Wavy Connecting Line (Desktop Only) */}
                <svg className="absolute w-full h-full pointer-events-none z-0 hidden lg:block" viewBox="0 0 1200 600" fill="none">
                    {/* Background faint line */}
                    <path
                        d="M 100 300 C 100 450, 325 450, 325 300 C 325 150, 550 150, 550 300 C 550 450, 775 450, 775 300 C 775 150, 1000 150, 1000 300"
                        stroke="#f3f4f6"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    
                    {/* Animated Colored Segments */}
                    <motion.path d="M 100 300 C 100 450, 325 450, 325 300" stroke="#f97316" strokeWidth="8" strokeLinecap="round" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
                    <motion.path d="M 325 300 C 325 150, 550 150, 550 300" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} />
                    <motion.path d="M 550 300 C 550 450, 775 450, 775 300" stroke="#10b981" strokeWidth="8" strokeLinecap="round" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1 }} />
                    <motion.path d="M 775 300 C 775 150, 1000 150, 1000 300" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.5 }} />
                    <motion.path d="M 1000 300 C 1000 450, 1150 450, 1150 300" stroke="#6366f1" strokeWidth="8" strokeLinecap="round" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 2 }} />
                </svg>

                <motion.div 
                    className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-32 lg:gap-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center relative lg:w-1/5">
                            
                            {/* Top Element (Icon with Dashed Loop) */}
                            {stat.position === 'top' && (
                                <div className="lg:absolute -top-48 flex flex-col items-center">
                                    <motion.div 
                                        className="relative flex items-center justify-center mb-6"
                                        variants={itemVariants}
                                    >
                                        {/* Dashed Loop */}
                                        <svg className="absolute w-20 h-20 -top-8 animate-spin-slow" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4" fill="none" />
                                        </svg>
                                        <div className="text-gray-400">
                                            {stat.topIcon}
                                        </div>
                                    </motion.div>
                                    <h4 className="text-xl font-black text-gray-800 uppercase tracking-tighter text-center max-w-[120px] leading-none mb-4">
                                        {stat.title}
                                    </h4>
                                    {/* Vertical Dotted Connector */}
                                    <div className="w-[3px] h-12 bg-accent rounded-full mb-2" />
                                    <div className="w-3 h-3 bg-accent rounded-full mb-1" />
                                </div>
                            )}

                            {/* Main Circle (Always Orange) */}
                            <motion.div 
                                className="w-40 h-40 lg:w-52 lg:h-52 bg-[#F97316] rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative border-8 border-white z-20 group cursor-pointer overflow-hidden"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative z-10 flex flex-col items-center">
                                  <span className="text-4xl lg:text-6xl font-black tracking-tighter drop-shadow-lg">{stat.value}</span>
                                  <span className="text-[10px] lg:text-[14px] font-bold uppercase tracking-[0.2em] text-white/90">{stat.unit}</span>
                                </div>

                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                
                                {/* Decoration Dots for Bottom labels */}
                                {stat.position === 'bottom' && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center mt-2">
                                        <div className="w-3 h-3 bg-accent rounded-full" />
                                        <div className="w-[3px] h-10 bg-accent rounded-full mt-1" />
                                    </div>
                                )}
                            </motion.div>

                            {/* Bottom Label (for fruits/mango) */}
                            {stat.position === 'bottom' && (
                                <motion.div 
                                    className="lg:absolute -bottom-48 text-center max-w-[200px] flex flex-col items-center"
                                    variants={itemVariants}
                                >
                                    <p className="text-lg lg:text-xl font-black text-gray-800 leading-[1.1] uppercase tracking-tighter">
                                        {stat.bottomLabel}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
            
            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default StatsInfographic;
