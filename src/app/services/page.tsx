"use client";

import { motion } from "framer-motion";
import { Settings, Hammer, Ruler, Factory, Shield, Zap } from "lucide-react";

export default function ServicesPage() {
  // Facility views data
  const facilityViews = [
    { 
      img: "/Service/One.jpg", 
      title: "Manufacturing unit-1", 
      details: "Spacious 30,000 sq ft facility designed for scale and efficiency.",
      machines: ["30,000 sq ft modern facility", "CNC common machining", "Common machining internal configuration"],
      focus: "Integrated Workflow & Modern Space"
    },
    { 
      img: "/Service/Two.jpg", 
      title: "Manufacturing Unit-2", 
      details: "High-precision laser cutting capabilities for complex shapes and materials.",
      machines: ["CNC laser cutting machine", "Highly versatile cutting"],
      focus: "Precision Cutting Excellence"
    },
    { 
      img: "/Service/Three.jpg", 
      title: "In house Advance Facility", 
      details: "Efficient and accurate punching operations for diverse manufacturing needs.",
      machines: ["CNC punching machine"],
      focus: "Efficient Material Shaping"
    },
    { 
      img: "/Service/Four.jpg", 
      title: "CNC Bending", 
      details: "Expert bending and dedicated service team for final product completion.",
      machines: ["CNC bending machine", "Dedicated service team"],
      focus: "Meticulous Finishing & Setup"
    },
    { 
      img: "/Service/Five.jpeg", 
      title: "True Punching", 
      details: "Expert bending and dedicated service team for final product completion.",
      machines: ["CNC bending machine", "Dedicated service team"],
      focus: "Meticulous Finishing & Setup"
    },
      {
       img: "/Service/Six.jpeg", 
      title: "True Punching", 
      details: "Expert bending and dedicated service team for final product completion.",
      machines: ["CNC bending machine", "Dedicated service team"],
      focus: "Meticulous Finishing & Setup"
    }
  ];

  // Core Services Data with Keys for specific animations
  const coreServices = [
    {
      key: "FMCG Machinery",
      title: "FMCG Machinery",
      desc: "High-precision turning, milling, and grinding services for complex mechanical components with micron-level accuracy.",
      icon: Settings, 
      info: "0.005mm Tolerance"
    },
    {
      key: "fabrication",
      title: "Manufacturing",
      desc: "Custom sheet metal solutions including laser cutting, bending, and specialized welding for diverse industrial sectors.",
      icon: Hammer,
      info: "Advanced Laser Cutting"
    },
    {
      key: "engineering",
      title: "Processing Equipments",
      desc: "Comprehensive process optimization, advanced tool design, and engineering consultancy for manufacturing excellence.",
      icon: Ruler,
      info: "Process Optimization"
    },
    {
      key: "infrastructure",
      title: "Processing Equipments for FMCG",
      desc: "Specialized engineering support and component manufacturing for large-scale infrastructure and heavy construction.",
      icon: Factory,
      info: "Heavy Duty Solutions"
    },
    {
      key: "quality",
      title: "Problem Solving & Quality Control",
      desc: "Advanced metrology, CMM inspection, and non-destructive testing services to ensure absolute component integrity.",
      icon: Shield,
      info: "ISO Standard QC"
    },
    {
      key: "maintenance",
      title: "Engineering & Maintenance",
      desc: "Periodic technical support, machinery refurbishment, and efficiency auditing for industrial factory units.",
      icon: Zap,
      info: "Machinery Refurbishment"
    }
  ];

  // Icon Hover Animation Variants
  const iconVariants = {
    default: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.15, y: -5, transition: { duration: 0.4, ease: "easeOut" } }
    },
    machining: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.2, rotate: 360, transition: { duration: 1.2, ease: "linear", repeat: Infinity } }
    },
    fabrication: {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.15, rotate: [-15, 10, 0], transition: { duration: 0.6, ease: "easeInOut" } }
    },
    engineering: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.1, y: -10, transition: { duration: 0.5, ease: "backOut" } }
    }
  };

  // Gallery Text Animation Variants
  const textContainerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, ease: "easeOut" }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col bg-secondary min-h-screen">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-24 sm:pt-48 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-1.5 w-24 bg-secondary mb-10 mx-auto lg:mx-0" />
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-black text-heading mb-8 uppercase font-heading">
              <span className="text-accent">Manufacturing SETUP.</span>
            </h1>
            <p className="text-muted max-w-3xl font-medium text-lg sm:text-xl leading-relaxed mx-auto lg:mx-0 font-body">
              We have a <strong className="text-black">modern 30000 square foot manufacturing facility</strong>. 
              Installation is equipped with <strong className="text-black">CNC laser cutting, CNC punching machine, CNC bending machine, 
              CNC router type non-metallic cutting machine</strong>, internal configuration of all kinds of common machining. 
              We are proud to say that our infrastructure is supported by a team of highly qualified and experienced 
              engineers and technicians. With Extensive experience in Design, Development, Production and Dedication Service and installation Team.
            </p>
          </motion.div>
        </div>
      </section>
 {/* Core Services Section with Hover Animations */}
      <section className="py-24 sm:py-32 bg-secondary relative z-20 border border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-accent" />
              <span className="text-accent font-body text-sm uppercase tracking-[0.25em]">What We Do</span>
              <div className="h-1 w-12 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary font-heading uppercase ">
              <span className="text-accent"> Our Core Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              const currentIconVariants = iconVariants[service.key] || iconVariants.default;

              return (
                <motion.div
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="bg-secondary/5 p-10 rounded-[2.5rem] border border-orange-300 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                  
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-8 relative z-10 overflow-hidden">
                    <motion.div variants={currentIconVariants}>
                      <IconComponent size={32} className="text-accent" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-primary mb-4 font-heading relative z-10 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed font-body mb-8 relative z-10">
                    {service.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm relative z-10">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {service.info}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Sticky Scroll Gallery Sections */}
      <div className="w-full relative z-10 bg-secondary ">
        {facilityViews.map((view, index) => (
          <section key={index} className="relative w-full h-[200vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <img
                src={view.img}
                alt={view.title}
                className="w-full h-full object-cover object-center brightness-[0.85] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center px-6 pointer-events-none">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={textContainerVariants}
                className="bg-secondary/50 backdrop-blur-xl border border-black-500 p-10 md:p-16 rounded-[.5rem] shadow-2xl w-full max-w-4xl text-center pointer-events-auto"
              >
                <motion.div variants={textItemVariants} className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-1 w-12 bg-accent" />
                  <span className="text-accent font-body text-xs sm:text-sm uppercase tracking-[0.25em]">
                    Unit View 0{index + 1}
                  </span>
                  <div className="h-1 w-12 bg-accent" />
                </motion.div>

                <motion.h2 variants={textItemVariants} className="text-4xl md:text-6xl font-black text-white font-heading uppercase tracking-tighter leading-none mb-6">
                  {view.title.split(' ')[0]} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
                    {view.title.split(' ').slice(1).join(' ')}
                  </span>
                </motion.h2>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

     
    </div>
  );
}