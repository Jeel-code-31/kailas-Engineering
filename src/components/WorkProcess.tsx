"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Ruler, Factory, ClipboardCheck, ArrowDownToLine, Handshake } from 'lucide-react';

const WorkProcess = () => {
    const steps = [
        {
            title: "Conceptual Design",
            icon: <Lightbulb size={40} strokeWidth={1.5} />,
            delay: 0
        },
        {
            title: "Detail Engineering",
            icon: <Ruler size={40} strokeWidth={1.5} />,
            delay: 0.5
        },
        {
            title: "Manufacturing",
            icon: <Factory size={40} strokeWidth={1.5} />,
            delay: 1
        },
        {
            title: "FAT (Factory Acceptance Test)",
            icon: <ClipboardCheck size={40} strokeWidth={1.5} />,
            delay: 1.5
        },
        {
            title: "Site Installation",
            icon: <ArrowDownToLine size={40} strokeWidth={1.5} />,
            delay: 2
        },
        {
            title: "Commissioning & Handover",
            icon: <Handshake size={40} strokeWidth={1.5} />,
            delay: 2.5
        }
    ];

    return (
        <section className="py-32 bg-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase font-heading">
                        Our <span className="text-accent underline decoration-4 underline-offset-8">Work Process</span>
                    </h2>
                </div>

                <div className="relative md:min-h-[600px] flex flex-col justify-between">
                    
                    {/* SVG Connecting Path - Desktop Only */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 1000 600" fill="none">
                        <motion.path
                            d="M 150 150 Q 300 50, 500 150 T 850 150 Q 1000 300, 850 450 T 150 450"
                            stroke="#F97316"
                            strokeWidth="3"
                            strokeDasharray="10,10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 5, ease: "linear" as const }}
                            viewport={{ once: true }}
                        />
                        {/* Arrows */}
                        <motion.path d="M 480 140 L 500 150 L 480 160" fill="#F97316" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} />
                        <motion.path d="M 830 140 L 850 150 L 830 160" fill="#F97316" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} />
                        <motion.path d="M 170 440 L 150 450 L 170 460" fill="#F97316" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3 }} />
                    </svg>

                    {/* Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 relative z-10 mb-10 md:mb-40">
                        {steps.slice(0, 3).map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: step.delay, duration: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-32 h-32 rounded-full border-2 border-accent flex items-center justify-center text-accent mb-6 bg-white shadow-xl hover:bg-accent hover:text-white transition-all duration-500 relative">
                                    {step.icon}
                                    <div className="absolute -inset-2 border-2 border-accent/20 rounded-full group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-accent text-center uppercase tracking-tight">{step.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 relative z-10">
                        {steps.slice(3, 6).map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: step.delay, duration: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-32 h-32 rounded-full border-2 border-accent flex items-center justify-center text-accent mb-6 bg-white shadow-xl hover:bg-accent hover:text-white transition-all duration-500 relative">
                                    {step.icon}
                                    <div className="absolute -inset-2 border-2 border-accent/20 rounded-full group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-accent text-center uppercase tracking-tight">{step.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
