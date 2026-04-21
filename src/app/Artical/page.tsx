"use client";

import Link from "next/link";
import { articalData } from "@/lib/article"; 
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function ArticleFeedPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-32 lg:pt-48 pb-32">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Editorial Feed Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <span className="text-[#FF6A00] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Latest Insights</span>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-8">
            The Journal
          </h1>
          <p className="text-neutral-500 text-xl font-medium leading-relaxed">
            Explorations, case studies, and engineering milestones shaping the future of global food processing infrastructure.
          </p>
        </motion.div>

        {!articalData || articalData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2rem] border-2 border-neutral-200 border-dashed">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No articles found</h3>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {articalData.map((item, index) => (
              <motion.div key={item.slug} variants={itemVariants}>
                <Link 
                  href={`/Artical/${item.slug}`} 
                  className="group block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-neutral-200 mb-6 shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      loading="lazy"
                      className="object-cover w-full h-full transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.03]" 
                    />
                    
                    {/* Floating Category Badge */}
                    {item.category && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#FF6A00] text-[10px] font-black uppercase tracking-[0.2em] rounded-md shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Dark gradient overlay on hover (optional) */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="px-2">
                    <div className="flex items-center gap-2 text-neutral-400 font-semibold text-xs tracking-widest mb-4">
                      <Calendar size={14} /> {item.date}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4 leading-[1.15] group-hover:text-[#FF6A00] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 font-medium leading-relaxed line-clamp-3 mb-6">
                      {Array.isArray(item.description) 
                        ? (typeof item.description[0] === 'object' && item.description[0] !== null && 'text' in item.description[0] ? item.description[0].text : item.description[0] as string) 
                        : typeof item.description === 'string' ? item.description : ''}
                    </p>
                    <div className="flex items-center gap-2 text-[#FF6A00] text-[11px] font-bold tracking-[0.2em] uppercase">
                      <span>Read Article</span>
                      <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
