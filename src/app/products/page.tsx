"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Settings, Layers, Box, ArrowRight, Factory, Zap, Package, Droplets } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Scroll Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(scale, springConfig);
  const rotateXSpring = useSpring(rotateX, springConfig);

  // Product Categories Navigation
  const productCategories = [
    {
      name: "Candies",
      slug: "Candies",
      icon: <Package size={24} />,
      description: "Confectionery equipment for mixing, forming, and coating",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Frozen Products",
      slug: "Frozan",
      icon: <Box size={24} />,
      description: "Cold-chain systems for washing, cutting, and freezing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Fruit Dehydration",
      slug: "Fruit-Dehydration",
      icon: <Droplets size={24} />,
      description: "Drying systems for preserving fruits and vegetables",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Jaggery Processing",
      slug: "Jaggery-Procesing",
      icon: <Factory size={24} />,
      description: "Traditional and modern jaggery processing systems",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Liquid Processing",
      slug: "Liquid",
      icon: <Droplets size={24} />,
      description: "Liquid filling and capping lines for beverages",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Paste Processing",
      slug: "Paste-Processing",
      icon: <Settings size={24} />,
      description: "Paste processing solutions for food products",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Pastes",
      slug: "Pastes",
      icon: <Layers size={24} />,
      description: "Paste processing solutions for various products",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "RTE Pouches",
      slug: "RTE-Pouche",
      icon: <Package size={24} />,
      description: "Flexible packaging lines for aseptic pouches",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Sauce Processing",
      slug: "Sauce",
      icon: <Zap size={24} />,
      description: "Custom sauce preparation equipment",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Tomato Processing",
      slug: "Tomato-processing",
      icon: <Factory size={24} />,
      description: "Complete paste systems for tomato products",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="flex flex-col bg-secondary/20 min-h-screen"> 
      
      {/* Product Categories Navigation */}
      <section className="py-16 mt-40 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
              Product <span className="text-accent">Categories</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of food processing solutions across different categories
            </p>
          </motion.div>

          <motion.div
            ref={containerRef}
            style={{
              scale: scaleSpring,
              rotateX: rotateXSpring,
              opacity: opacity,
              transformStyle: "preserve-3d"
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {productCategories.map((category, i) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { type: "spring" as const, stiffness: 300 }
                }}
                className="group relative"
              >
                <Link href={`/products/${category.slug}`}>
                  <div className="relative h-64 rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-accent/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent/20">
                    {/* 3D Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                      {[...Array(3)].map((_, j) => (
                        <motion.div
                          key={j}
                          className="absolute w-2 h-2 bg-accent/30 rounded-full"
                          style={{
                            left: `${20 + j * 30}%`,
                            top: `${30 + j * 20}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3 + j,
                            repeat: Infinity,
                            ease: "easeInOut" as const,
                          }}
                        />
                      ))}
                    </div>

                    <div className="relative h-full p-6 flex flex-col justify-between text-center">
                      <div className="flex-1 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-center text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Explore <ArrowRight size={16} className="ml-2" />
                        </div>
                      </div>
                    </div>

                    {/* 3D Border Effect */}
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-accent/30 transition-all duration-500 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     

   
    </div>
  );
}
