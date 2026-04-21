"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-secondary/20 min-h-screen">
      {/* Page Header */}
     <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                  {/* Background Layer with Parallax & Ken Burns */}
                  <motion.div
                    className="absolute inset-0 z-0"
                  >
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, ease: "linear" as const }}
                      className="relative w-full h-full"
                    >
                      <img
                        src="Contact.jpg"
                        alt="Precision Industrial Engineering"
                        className="object-cover contrast-[1.1]"
                        sizes="100vw"
                      />
                    </motion.div>
                  </motion.div>
                </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black text-primary mb-12 uppercase tracking-tight font-heading">Rich Us.</h2>
                <div className="space-y-10 font-body">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-2 text-accent font-heading">Headquarters</h4>
                      <p className="text-muted font-medium text-sm leading-relaxed">Sector No.7, Plot No. 206, PCNTDA, Bhosari, Pune - 411026, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-2 text-accent font-heading">Primary number</h4>
                      <p className="text-muted font-medium text-sm">+91 94231 62196 / +91 98223 49983</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px] mb-2 text-accent font-heading">Tel phone number</h4>
                      <p className="text-muted font-medium text-sm">+91 20-66350062</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   <Phone size={64} />
                </div>
                <h4 className="font-black mb-8 uppercase tracking-widest text-xs text-accent font-heading">Service Scale</h4>
                <div className="space-y-5 text-sm font-medium">
                  <div className="flex justify-between border-b border-white/10 pb-5">
                    <span className="text-white/60">Operations:</span>
                    <span className="font-bold uppercase tracking-tighter font-heading">Mon - Sat</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-white/60">Global Reach:</span>
                    <span className="text-accent font-black uppercase font-heading">24 Countries</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-transparent p-12 md:p-20 rounded-[1rem]  border border-orange-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-4xl font-black text-orange-500 mb-12 uppercase tracking-tight font-heading">Contact With us.</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-muted uppercase tracking-[0.4em] font-heading">Identity</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-secondary/50 border border-orange-200 px-8 py-5 rounded-2xl focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted/50 font-medium font-body"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-muted uppercase tracking-[0.4em] font-heading">Communication</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-secondary/50 border border-orange-200  px-8 py-5 rounded-2xl focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted/50 font-medium font-body"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[11px] font-black text-muted uppercase tracking-[0.4em] font-heading">Project Scope</label>
                  <input 
                    type="text" 
                    placeholder="Specific Subject"
                    className="w-full bg-secondary/50 border border-orange-200  px-8 py-5 rounded-2xl focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted/50 font-medium font-body"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                   <label className="text-[11px] font-black text-muted uppercase tracking-[0.4em] font-heading">Specifications</label>
                  <textarea 
                    rows={6}
                    placeholder="Details about components, materials, or timelines..."
                    className="w-full bg-secondary/50 border border-orange-200  px-8 py-5 rounded-2xl focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-muted/50 font-medium font-body"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button 
                    type="submit"
                    className="group relative overflow-hidden w-full md:w-auto bg-accent text-white font-black py-6 px-16 rounded-2xl transition-all uppercase tracking-[0.4em] font-heading text-xs active:scale-95"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Submit Brief <Send size={18} className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Micro Interaction */}
      <section className="h-[500px] bg-secondary relative overflow-hidden flex items-center justify-center p-6 md:p-12 group/map">
        <div className="container mx-auto h-full rounded-[4rem] overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 bg-primary/5 backdrop-blur-[2px] flex flex-col items-center justify-center group-hover/map:backdrop-blur-none transition-all duration-700">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mb-8"
              >
                <MapPin size={80} className="text-accent drop-shadow-2xl" />
              </motion.div>
              <span className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tighter font-heading">Bhosari Industrial Estate</span>
              <p className="text-muted font-bold mt-4 uppercase tracking-[0.4em] text-[11px] font-heading">PUNE • MAHARASHTRA • INDIA</p>
           </div>
           {/* Micro interaction: subtle grid overlay */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
