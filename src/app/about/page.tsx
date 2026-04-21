"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Eye, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ProcessDNA from "@/components/ProcessDNA";

export default function AboutPage() {
  const values = [
    {
      title: "Quality First",
      desc: "Our commitment to high-precision engineering is non-negotiable and strictly follows international standards.",
      icon: <CheckCircle2 size={32} />
    },
    {
      title: "Innovation",
      desc: "Integrating next-gen technology and optimized processes to solve complex industrial challenges.",
      icon: <Target size={32} />
    },
    {
      title: "Reliability",
      desc: "A proven track record of consistent, on-time delivery and operational stability since 2005.",
      icon: <Shield size={32} />
    }
  ];

  const specialization = [
    "Pulp & Juice Processing",
    "Frozen Fruits & Vegetables",
    "Jam, Ketchup & Sauces",
    "Pickles",
    "Fruit / Vegetable Paste",
    "RTE & RTS Products",
    "Tooty – Fruity Processing",
    "Confectionery",
    "Amla Process Equipments"
  ];

  const customization = [
    { label: "Capacity", icon: <CheckCircle2 size={16} /> },
    { label: "Applications", icon: <CheckCircle2 size={16} /> },
    { label: "Material used for construction", icon: <CheckCircle2 size={16} /> },
    { label: "Energy Resources", icon: <CheckCircle2 size={16} /> }
  ];

  return (
    <div className="flex flex-col bg-secondary/20 min-h-screen">
      {/* Page Header */}
      <section className="relative w-full h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-screen flex items-center justify-center overflow-hidden">

        <motion.div className="absolute mt-28 inset-0 z-0">

          <Image
            src="/Team.png"
            alt="Precision Industrial Engineering"
            fill
            className="object-contain object-center"
            priority
            sizes="(max-width: auto) 100vw,
             (max-width: auto) 100vw,
             100vw"
          />

        </motion.div>

      </section>

      {/* Intro Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-orange-500 mb-10 tracking-tighter leading-none font-heading uppercase">About us.</h2>
                <p className="text-xl text-muted leading-relaxed font-body mb-8">
                  Kailas Engineering Systems a Pune based manufacturing firm was set up during march 2003 by visionary mechanical engineer Mr. Kailas Chopade. He was well supported by Mr.Suhans Patil from initial stages
                </p>
                <p className="text-lg text-muted/80 leading-relaxed font-body">
                  Ever Since it&apos;s inception, Kailas Engineering Systems has been one of the leaders in manufacturing wide range of food processing related equipments, Which include Fruit & Vegetable Processing, Beverages, Dairy, Confectionery, Ready-To-Eat and Ready-To-Serve processing equipments. The comprehensive range offered by us has been appreciated for features such as quality,durability,efficiency and functionality.
                </p>
                <p className="text-lg mt-10 text-muted/80 leading-relaxed font-body">
                  Our organization also holds expertise in delivering customized solutions for turnkey projects.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[1rem] overflow-hidden  h-[500px]"
              >
                <Image src="/Center.jpeg" alt="Engineering Team" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <ProcessDNA />
      {/* Values Grid */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 bg-secondary/30 rounded-[3rem]  transition-all duration-700 border border-accent/50"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6  transition-colors font-heading uppercase tracking-tight">{value.title}</h3>
                <p className="text-muted group- transition-colors leading-relaxed font-body">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-secondary p-16 rounded-[4rem] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-4xl font-black text-primary mb-8 font-heading uppercase tracking-tighter">Our Mission</h3>
              <p className="text-muted text-lg leading-relaxed font-body">
                To provide innovative and high-quality engineering services that exceed our clients&apos;
                expectations through continuous improvement, technical expertise, and a commitment
                to excellence in every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-primary text-white p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10"><Eye size={120} /></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-4xl font-black mb-8 font-heading uppercase tracking-tighter">Our Vision</h3>
              <p className="text-white/70 text-lg leading-relaxed font-body">
                To be a global leader in industrial engineering solutions, recognized for our
                precision, reliability, and contribution to the advancement of manufacturing
                technologies across the industrial landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZATION ── */}
      <section className="py-32 bg-secondary overflow-hidden relative">
        {/* Decorative background ring */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-[350px] h-[350px] rounded-full border border-accent/10 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-secondary" />
            </div>
            <h2 className="text-5xl md:text-4xl font-bold text-orange-500 mb-10 tracking-tighter leading-none font-heading uppercase">
              Customization
            </h2>
            <p className="text-muted font-body text-lg max-w-auto leading-relaxed">
              Our Organization is a Customer Centric, Hence we diligently attend to customization. We Offer Customization as per the specifications detailed to us by the clients. This implies that we are capable of manufacturing our entire range of food processing equipment as per the exact demands of the clients. We offer following facility of customization on parameters.
            </p>
          </motion.div>

          {/* Customization parameter cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customization.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-orange-500 rounded-3xl p-8 transition-all duration-500 cursor-default"
              >
                {/* Number */}
                <span className="text-6xl font-black font-heading text-white/5 group-hover:text-white/10 absolute top-4 right-6 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent  transition-all duration-500">
                  <CheckCircle2 size={22} />
                </div>
                <p className="text-black font-body text-lg font-medium leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALISATION ── */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left – heading + description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-accent" />
                <span className="text-accent font-body text-sm uppercase tracking-[0.25em]">What We Do Best</span>
              </div>
              <h2 className="text-5xl md:text-4xl font-black text-orange-500 font-heading uppercase mb-8">
                Specialisation
              </h2>
              <p className="text-muted font-body text-lg leading-relaxed mb-10">
                With over two decades of hands-on manufacturing expertise, Kailas Engineering Systems
                has built an unmatched portfolio across the food processing industry. Our comprehensive
                range includes solutions across the following domains:
              </p>
              {/* Accent stripe decoration */}
              <div className="flex gap-2">
                <div className="h-2 w-16 bg-accent rounded-full" />
                <div className="h-2 w-8 bg-accent/40 rounded-full" />
                <div className="h-2 w-4 bg-accent/20 rounded-full" />
              </div>
            </motion.div>

            {/* Right – specialization tag grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-3"
            >
              {specialization.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-5 bg-white border border-gray-100 hover:border-accent hover:bg-accent/5 rounded-2xl px-7 py-5 transition-all duration-300 cursor-default"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-accent/10 group-hover:bg-accent rounded-xl flex items-center justify-center text-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="font-body text-primary text-base font-medium group-hover:text-accent transition-colors duration-300">
                    {item}
                  </span>
                  <span className="ml-auto text-gray-200 group-hover:text-accent/30 font-heading text-sm font-bold transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
