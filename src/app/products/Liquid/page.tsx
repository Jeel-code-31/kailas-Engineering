"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Chocolate/ Fat Mixer",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/Products/Liquid/First.jpg",
    content: [
      <span key='s1'>The Chocolate/Fat Melter by Kailas Engineering Solutions Pvt. Ltd. is a precision-engineered machine designed for the seamless melting of chocolate, fats, and similar materials. It is built to maintain the integrity of sensitive ingredients by ensuring uniform heat distribution and precise temperature control.</span>,
      <br key='b1'></br>,
      <span key='b2'>System Highlights
1.Uniform Melting: Utilizes an advanced temperature control system to prevent overheating or scorching, preserving the flavor and texture of the chocolate.

2.Double-Jacketed Design: Features a double-jacketed vessel that optimizes heat transfer for rapid and even melting throughout the batch.

3.Energy Efficient: Robust insulation reduces heat loss, keeping operational costs low while enhancing efficiency.

4.Versatile & Customizable: Suitable for both small-scale and high-volume production lines, with customizable options to meet specific manufacturing needs.

5.Hygienic Construction: Built with high-quality, food-grade materials and a user-friendly interface to ensure easy cleaning and compliance with food safety standards.</span>,
    
    ] },
  {
    id: 2,
    title: "Chocolate Storage Tank",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/Liquid/second.png",
    content: [
      <span key='s1'>The Chocolate Storage Tank by Kailas Engineering Solutions Pvt. Ltd. is a state-of-the-art solution designed for storing chocolate and other liquid food products under optimal conditions. It focuses on maintaining product workability and preventing crystallization through precision thermal management.</span>,
      <br key='b1'></br>,
      <span key='s2'>
System Highlights
1.Precise Temperature Control: Maintains the ideal temperature to prevent crystallization and preserve the smooth texture and consistency of the chocolate.

2.Integrated Agitation Mechanism: Continuously stirs the contents to promote uniform mixing and prevent the solidification or settling of fats and cocoa solids.

3.Hygienic Construction: Built with high-quality, food-grade stainless steel with smooth interior surfaces to facilitate easy cleaning and prevent residue buildup.

4.Advanced Insulation: Minimizes energy loss and operational costs while ensuring efficient thermal management.

5.Industrial Reliability: Engineered for high-volume production, ensuring the product remains ready for subsequent processing stages like tempering or molding.</span>,
    ]  },
  {
    id: 3,
    title: "Jacketed Pipline",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/Products/Liquid/three.webp",
    content: [
      <span key='s1'>The Jacketed Pipeline by Kailas Engineering Solutions Pvt. Ltd. is a high-performance transfer solution designed for viscous liquids like chocolate and syrups. It ensures a smooth, consistent flow of sensitive products by maintaining precise temperature control throughout the production line.</span>,
      <br key='b1'></br>,
      <span key='s2'>System Highlights
1.Jacketed Design: Allows for the circulation of heating or cooling media around the pipe, preventing chocolate solidification and maintaining consistent viscosity in syrups.

2.Hygienic Construction: Built from high-grade stainless steel with a seamless design to minimize product retention and reduce contamination risks.

3.Thermal Integrity: Protects the quality, texture, and flavor of sensitive products during transfer between storage, melting, mixing, and filling stations.

4.Maintenance Friendly: Features smooth interior surfaces that adhere to strict hygiene protocols, including CIP (Clean-In-Place) standards, ensuring minimal downtime.

5.Seamless Integration: Engineered to fit into complex industrial production lines, supporting continuous operation and reducing product waste.</span>
    ] }
];

// Reusable Flip Card Component
const FlipCard = ({ data }: { data: typeof processingSteps[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[4/3] [perspective:1500px] group cursor-pointer">
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }} // Premium smooth spring curve
      >
        
        {/* --- FRONT OF CARD --- */}
        <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-neutral-900 shadow-lg [backface-visibility:hidden]">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
      
          
          {/* Front Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="self-end bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
           
            </div>
            
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering other click events
                  setIsFlipped(true);
                }}
                className="flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E55A00] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-orange-500/40 active:scale-95"
              >
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* --- BACK OF CARD --- */}
        <div className="absolute inset-0 w-full h-full rounded-[2rem] bg-white border border-neutral-100 shadow-2xl overflow-hidden flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Decorative Background Blob */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
          
          <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
            <div className="w-12 h-12 bg-orange-100 text-[#FF6A00] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              {data.icon}
            </div>
            
            <h3 className="text-2xl font-black text-neutral-900 mb-4 leading-tight">
              {data.title}
            </h3>
            
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed flex-grow font-medium">
              {data.content}
            </p>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="mt-6 flex items-center justify-center gap-2 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors duration-300 active:scale-95"
            >
              <RotateCcw size={16} /> View Image
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default function LiquidSection() {
  return (
    <section className="py-24 bg-[#F9F6F0] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-24 text-neutral-900 tracking-tight">
           Chocolate and Liquid Handling System
          </h2>
          <div className="w-24 h-1.5 bg-[#FF6A00] mx-auto mt-8 rounded-full" />
          
        </motion.div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 xl:gap-10">
          {processingSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlipCard data={step} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}