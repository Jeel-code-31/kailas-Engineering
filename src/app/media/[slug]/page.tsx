"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mediaData } from "@/lib/media";
import { ArrowLeft, Calendar, Tag, Image as ImageIcon, X } from "lucide-react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function MediaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();

  // Unwrap the params promise (Next.js 15+ required)
  const resolvedParams = use(params);
  const rawSlug = resolvedParams.slug || "";
  const slug = typeof rawSlug === "string" ? decodeURIComponent(rawSlug) : "";

  // Look up the item in our data file (case-insensitive match)
  const currentItem = mediaData.find((media) => media.slug.toLowerCase() === slug.toLowerCase()) ?? null;
  const data = currentItem;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Custom Cursor Tracking Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 48); // offset by half the width of the custom cursor (96px / 2)
      cursorY.set(e.clientY - 48);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  // Fallback UI if the slug doesn't match anything
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F6F0] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="max-w-md w-full bg-white p-12 rounded-[2rem] shadow-2xl border border-neutral-100 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-6">
            <ImageIcon size={32} />
          </div>
          <h2 className="text-3xl font-black text-neutral-900 mb-2">Not Found</h2>
          <p className="text-neutral-500 mb-8 text-base leading-relaxed">
            We couldn&apos;t find the media asset matching: <br />
            <span className="inline-block mt-3 font-mono text-xs bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg border border-neutral-200">
              {slug || "undefined"}
            </span>
          </p>
          <button
            onClick={() => router.push('/media')}
            className="w-full flex items-center justify-center gap-2 bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-[#E55A00] transition-colors shadow-lg shadow-orange-500/30"
          >
            <ArrowLeft size={16} /> Return to Gallery
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F0] py-24 text-neutral-900 pt-50 overflow-hidden">
      <div className="w-full mx-auto">

        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex"
        >
          <button
            onClick={() => router.push('/media')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#FF6A00] text-neutral-600 hover:text-white rounded-full font-black tracking-widest uppercase text-[11px] sm:text-xs transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 border border-neutral-100"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Media Gallery
          </button>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full aspect-video md:aspect-auto rounded-[1rem] overflow-hidden bg-neutral-100  mb-10 relative group"
        >
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" as const }}
            src={data.src}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Content Section */}
        <div className="max-w-auto mx-auto">
          {/* VIEW MODE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center md:text-left bg-transparent p-8 md:p-14 border border-orange-300 relative overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none" />

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-orange-50 text-orange-500 font-black text-xs uppercase tracking-widest rounded-full border border-orange-100">
                <Tag size={14} /> {data.category}
              </span>
              <span className="flex items-center gap-2 text-neutral-400 font-bold text-sm tracking-wide">
                <Calendar size={16} className="text-neutral-300" /> {data.date}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 mb-8 leading-[1.1] tracking-tight relative z-10">
              {data.title}
            </motion.h1>

            <motion.div variants={itemVariants} className="prose prose-lg text-muted-500 max-w-none leading-relaxed font-medium relative z-10">
              {Array.isArray(data.description) ? (
                data.description.map((paragraph, idx) => (
                  <p key={idx} className="text-lg md:text-xl mb-6">{paragraph}</p>
                ))
              ) : (
                <p className="text-lg md:text-xl">{data.description}</p>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-24 border-neutral-200/60 max-w-2xl mx-auto"
        />

        {/* Extended Gallery Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Project Gallery</h2>
            <div className="w-24 h-1.5 bg-[#FF6A00] mx-auto mt-6 rounded-full" />
            <p className="text-neutral-500 mt-6 font-medium text-lg max-w-2xl mx-auto">
              Explore more detailed imagery from the {data.title.toLowerCase()} process.
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
          >
            {data.gallery.map((image, index) => (
              <motion.div
                variants={itemVariants}
                key={`${data.slug}-gallery-${index}`}
                onMouseEnter={() => setIsHoveringGallery(true)}
                onMouseLeave={() => setIsHoveringGallery(false)}
                onClick={() => setSelectedImage(image.src)}
                className="group relative overflow-hidden rounded-[1rem] transition-all duration-500 break-inside-avoid cursor-none"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>

      {/* Custom Tracking Mouse Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-[#FF6A00] rounded-full pointer-events-none z-50 flex items-center justify-center shadow-2xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHoveringGallery ? 1 : 0,
          opacity: isHoveringGallery ? 1 : 0
        }}
        transition={{ duration: 0.15, ease: "easeOut" as const }}
      >
        <div className="text-white font-black text-[10px] uppercase tracking-widest text-center leading-tight drop-shadow-md">
          View<br />
        </div>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring" as const, damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}