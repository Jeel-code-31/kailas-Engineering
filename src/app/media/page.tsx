"use client";

import Link from "next/link";
import { mediaData } from "@/lib/media"; 
import { ImageIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function MediaGalleryPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-50 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 uppercase tracking-tight mb-6 leading-none">
            Media <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Browse our visual assets. Click on any image to view details, related galleries, and edit asset information.
          </p>
        </motion.div>

        {!mediaData || mediaData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[2rem] border-2 border-neutral-200 border-dashed">
            <ImageIcon className="text-neutral-300 w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No media found</h3>
            <p className="text-neutral-500">Upload some assets to see them here.</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {mediaData.map((item) => (
              <motion.div key={item.slug} variants={itemVariants}>
                <Link 
                  href={`/media/${item.slug}`} 
                  className="group block relative aspect-square md:aspect-[5/4] rounded-[1rem] overflow-hidden bg-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    loading="lazy"
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {item.category && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                        {item.category}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-black uppercase mb-3 leading-tight">{item.title}</h3>
                      <div className="flex items-center gap-2 text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">
                        <span>View Details</span>
                        <ArrowRight size={16} className="ml-1 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-75" />
                      </div>
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