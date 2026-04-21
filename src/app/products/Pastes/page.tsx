"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Sun-Ripened Harvesting",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/products/Paste/first.png",
    content: "Our tomatoes are left on the vine until the very last moment. Harvesting happens at peak ripeness to ensure maximum sweetness, vibrant red color, and optimal lycopene content. Each batch is carefully hand-picked to avoid bruising."
  },
  {
    id: 2,
    title: "Hydro-Purification",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/Paste/second.png",
    content: "The harvested tomatoes undergo a rigorous, multi-stage washing process using purified water channels. This hydro-sorting method not only cleans the fruit but gently separates the perfect tomatoes from any floating debris."
  },
  {
    id: 3,
    title: "Thermal Peeling",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/products/Paste/three.png",
    content: "Using a flash-steam technique, the tomatoes are exposed to high heat for mere seconds before being plunged into ice water. This thermal shock causes the skins to slip off effortlessly, preserving the delicate flesh beneath."
  },
  {
    id: 4,
    title: "Slow Reduction",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/products/Paste/four.png",
    content: "The peeled tomatoes are crushed and slowly simmered in large, temperature-controlled vats. This slow evaporation process intensifies the natural umami flavors and achieves that rich, thick texture without artificial thickeners."
  },
  {
    id: 5,
    title: "Precision Straining",
    category: "Step 05",
    icon: <Droplets size={20} />,
    image: "/products/Paste/five.png",
    content: "The reduced mixture is passed through micro-mesh sieves to extract any remaining seeds and tough fibers. This guarantees a velvety, luxurious mouthfeel that is perfect for premium sauces and passatas."
  },
  {
    id: 6,
    title: "Aseptic Packaging",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/Paste/six.png",
    content: "To lock in the freshnes7s without chemical preservatives, the finished product is flash-pasteurized and sealed in sterile, oxygen-free environments. This ensures a long shelf life while tasting like it was just picked."
  },
   {
    id: 7,
    title: "Aseptic Packaging",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/Paste/seven.png",
    content: "To lock in the freshness without chemical preservatives, the finished product is flash-pasteurized and sealed in sterile, oxygen-free environments. This ensures a long shelf life while tasting like it was just picked."
  },
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
        <div className="absolute inset-0 w-full h-full rounded-[1rem] overflow-hidden ">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          {/* Gradient Overlay */}
       
          
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

export default function PasteProcessingSection() {
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
           Ginger Garlic-Chili-Tamarind Paste
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