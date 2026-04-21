"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { articalData } from "@/lib/article"; 
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { motion } from "framer-motion";
 
 interface ArticleParagraph {
   heading?: string;
   text: string | string[];
 }

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  
  // Unwrap the params promise
  const resolvedParams = use(params);
  const rawSlug = resolvedParams.slug || "";
  const slug = typeof rawSlug === "string" ? decodeURIComponent(rawSlug) : "";

  // Look up the item
  const currentItem = articalData.find((a) => a.slug.toLowerCase() === slug.toLowerCase()) ?? null;
  const data = currentItem;

  // Fallback UI
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F6F0] px-6 text-center">
        <h2 className="text-3xl font-black text-neutral-900 mb-6">Article Not Found</h2>
        <button 
          onClick={() => router.push('/Artical')}
          className="flex items-center justify-center gap-2 bg-[#FF6A00] text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase text-xs"
        >
          <ArrowLeft size={16} /> Return to Journal
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-neutral-900 font-sans selection:bg-[#FF6A00] selection:text-white pb-32">
      
      {/* 
        PREMIUM MINIMALIST STRUCTURE
        No overlapping elements. Clean, discrete vertical blocks. 
      */}

      {/* 1. TOP NAVIGATION */}
      <div className="pt-32 pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push('/Artical')}
          className="group flex items-center justify-center gap-3 px-6 py-3 bg-white border border-neutral-200 text-neutral-500 hover:text-[#FF6A00] hover:border-[#FF6A00] rounded-full font-bold tracking-widest uppercase text-[11px] transition-all duration-300 shadow-sm"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Journal
        </motion.button>
      </div>

      {/* 2. ARTICLE HEADER (Typography Only) */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="px-4 sm:px-8 md:px-12 max-w-screen-2xl mx-auto mb-16 text-center"
      >
        {/* Meta Info */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="flex items-center gap-2 text-[#FF6A00] font-black text-xs uppercase tracking-[0.2em]">
            <Tag size={12} /> {data.category}
          </span>
          <span className="w-1 h-1 bg-neutral-300 rounded-full" />
          <span className="flex items-center gap-2 text-neutral-400 font-bold text-xs uppercase tracking-widest">
            <Calendar size={12} /> {data.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-12">
          {data.title}
        </h1>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-neutral-200" />
      </motion.header>

      

      {/* 4. MAIN ARTICLE CONTENT */}
      <div className="px-4 sm:px-8 md:px-12 max-w-screen-2xl w-full mx-auto pb-10">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full"
        >
          {Array.isArray(data.description) ? (
            data.description.map((paragraph, idx) => {
              if (typeof paragraph === 'object' && paragraph.heading) {
                return (
                  <div key={idx} className="mb-10 w-full">
                    <h3 className="text-2xl font-bold text-[#FF6A00] mb-2">{paragraph.heading}</h3>
                    <p className="text-lg md:text-xl text-neutral-500 leading-relaxed whitespace-pre-line">
                      {Array.isArray(paragraph.text)
                        ? paragraph.text.join("\n\n")
                        : paragraph.text}
                    </p>
                  </div>
                );
              }
              // Fallback for plain strings
              return (
                <p
                  key={idx}
                  className="mb-10 text-lg md:text-xl text-neutral-500 leading-relaxed whitespace-pre-line w-full"
                >
                  {typeof paragraph === 'string'
                    ? paragraph
                    : Array.isArray(paragraph.text)
                      ? paragraph.text.join("\n\n")
                      : paragraph.text}
                </p>
              );
            })
          ) : (
            <p className="mb-10 text-lg md:text-xl text-neutral-500 leading-relaxed whitespace-pre-line w-full">
              {data.description as string}
            </p>
          )}
        </motion.article>

        {/* 5. ARTICLE FOOTER / SHARE */}
        <div className="pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-8 md:px-12 max-w-screen-2xl mx-auto w-full pb-20">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-full border border-neutral-100 shadow-sm">
              <img src="/placeholder-logo.png" alt="Kailas Engineering" className="w-6 h-6 opacity-0" /> {/* Replaced completely with minimalist styling below */}
             
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#FF6A00]">Kailas Engineering Systems</p>
              <p className="text-xs font-medium text-neutral-400">Editorial Team</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
