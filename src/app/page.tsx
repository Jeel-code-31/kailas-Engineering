"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Settings, Award, Users, ShieldCheck, Factory, Building2, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
 
 const StatsInfographic = dynamic(() => import("@/components/StatsInfographic"), { 
   ssr: true,
   loading: () => <div className="h-96 flex items-center justify-center">Loading Stats...</div>
 });
 
 const WorkProcess = dynamic(() => import("@/components/WorkProcess"), { 
   ssr: true,
   loading: () => <div className="h-96 flex items-center justify-center">Loading Process...</div>
 });

// Counter Component for Animated Numbers
const Counter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number and suffix
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 fps
    const increment = target / (duration / (1000 / steps));
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span id={`counter-${value}`}>
      {count}{suffix}
    </span>
  );
};

const stats = [
  { label: "Years of Excellence", value: "20+", icon: <Award className="text-accent" /> },
  { label: "Manufacturing Units", value: "03", icon: <Factory className="text-accent" /> },
  { label: "Satisfied Clients", value: "50+", icon: <Users className="text-accent" /> },
  { label: "Expert Professionals", value: "25+", icon: <Settings className="text-accent" /> },
];

const services = [
  {
    title: "Manufacturing Solutions",
    desc: "Precision manufacturing using state-of-the-art CNC and VMC machinery for industrial components.",
    icon: <Building2 size={40} className="text-primary" />,
  },
  {
    title: "Engineering Services",
    desc: "Comprehensive engineering support from design to prototype development and mass production.",
    icon: <Cpu size={40} className="text-primary" />,
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous quality control processes ensuring 100% compliance with international standards.",
    icon: <ShieldCheck size={40} className="text-primary" />,
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col bg-secondary font-body overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Layer with Parallax & Ken Burns */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" as const }}
            className="relative w-full h-full"
          >
            <Image
              src="/Home.jpeg"
              alt="Precision Industrial Engineering"
              fill
              className="object-cover brightness-[0.5] contrast-[1.1]"
              priority
              sizes="100vw"
            />
          </motion.div>
       

        
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10 -mt-20 mx-6 rounded-[3rem] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-5xl font-black text-primary mb-2 tracking-tighter font-heading group-hover:text-accent transition-all duration-500">
                  <Counter value={stat.value} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted font-heading">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-15 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-block bg-accent/10 py-1.5 px-4 rounded-lg text-[21px] font-bold text-accent uppercase mb-2  font-heading">
               Design //Manufacture //Installation
              </div>
              <h2 className="text-xl sm:text-4xl md:text-7xl font-bold text-primary mb-10 tracking-tighter leading-[0.9] font-heading">
               <span className="text-accent">FMCG.</span>
              </h2>
              <p className="text-xl text-muted mb-10 leading-relaxed font-body">
                Ever Since it&apos;s inception,  <span className="font-bold">Kailas Engineering Systems</span> has been one of the Leaders in Manufacturing a wide range of food processing-related equipment, Which include Fruit & Vegetables Processing, Beverages, Confectionery, Ready-To-Eat and Ready-To-Serve Processsing Equipment.Latest Technology, Maintenance & Repair, On time delivery, 24x7 Support Staff
              </p>
              <div className="grid grid-cols-2 gap-10 mb-12">
                <div className="space-y-4 group">
                  <div className="h-1 w-12 bg-accent group-hover:w-full transition-all duration-500" />
                  <p className="font-bold text-primary text-sm uppercase tracking-widest font-heading">ISO Certified</p>
                  <p className="text-xs text-muted leading-relaxed">Meeting all international manufacturing benchmarks.</p>
                </div>
                <div className="space-y-4 group">
                  <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-500" />
                  <p className="font-bold text-primary text-sm uppercase tracking-widest font-heading">Technical Edge</p>
                  <p className="text-xs text-muted leading-relaxed">Adopting next-gen automation and CNC processing.</p>
                </div>
              </div>
              <Link
                href="/about"
                className="group relative overflow-hidden inline-flex items-center gap-4 bg-accent text-white hover:text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Learn Our History <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
                <Image
                  src="/Dummy1.jpg"
                  alt="Industrial Plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-12 -left-12 bg-secondary p-12 rounded-[2.5rem] shadow-2xl border border-gray-200 hidden md:block">
                <div className="flex items-center gap-6">
                  <img src="/Bees.png" alt="Logo" className="w-24 h-24" />
                  <div className="flex flex-col uppercase font-black text-[24px] font-heading">
                    <span className="text-primary">+ Years of Design & Manufacture The Machinery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Success Metrics Section */}
      <StatsInfographic />
      
      {/* Advanced Machinery Section */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Heading & Action */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-40"
              >
                 <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-primary mb-10 tracking-tighter leading-[0.9] font-heading">
               <span className="text-accent">Machines and Equipments.</span>
              </h2>
                <p className="text-muted text-lg mb-12 font-medium leading-relaxed">
                  Expertise in delivering customized, high-precision solutions for turnkey industrial projects across the food and beverage industry.
                </p>
                
                <Link
                  href="/products"
                  className="group relative overflow-hidden inline-flex items-center gap-4 bg-accent text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] transition-all shadow-2xl active:scale-95"
                >
                  <span className="relative z-10">Machinery List</span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Machinery Categories */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    cat: "Processing Lines",
                    items: [
                      "Tropical Fruit Pulp/Puree",
                      "Tomato Puree/Paste Systems",
                      "Ginger-Garlic/Chilli Paste",
                      "Fruit & Vegetable Dehydration"
                    ]
                  },
                  {
                    cat: "Specialty Systems",
                    items: [
                      "Aseptic & Evaporation",
                      "Frozen Processing (IQF)",
                      "Ready to Eat (Retortable)",
                      "Liquid Handling Systems"
                    ]
                  },
                  {
                    cat: "Confectionery & More",
                    items: [
                      "Chocolate & Soft Bar Systems",
                      "Ketchup, Jam & Sauces",
                      "Peanut Butter Processing",
                      "Tooty-Fryity & Fruit Candy",
                      "Jaggery Manufacturing"
                    ]
                  }
                ].map((group, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={cn(
                      "p-10 rounded-[3rem] border border-black/5 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group",
                      i === 2 ? "md:col-span-2" : ""
                    )}
                  >
                    <h3 className="text-2xl font-black text-primary mb-8 font-heading uppercase tracking-tight flex items-center gap-4">
                      <div className="w-1.5 h-6 bg-accent" />
                      {group.cat}
                    </h3>
                    <ul className="space-y-4">
                      {group.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-muted group-hover:text-primary transition-colors font-medium">
                          <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  {/*Reaserch Center*/}
      <section className="py-15 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Image Section (now on the left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[5/4] rounded-[0.5rem] overflow-hidden relative">
                <Image
                  src="/Center.jpeg"
                  alt="Industrial Plant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Content Section (now on the right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 order-1 lg:order-2"
            >
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-primary mb-10 tracking-tighter leading-[0.9] font-heading">
               <span className="text-accent">Research & Development Center.</span>
              </h2>
              <p className="text-xl text-muted mb-10 leading-relaxed font-body">
               <span className="font-bold">Sophisticated R&D Facility is constantly working on new and innovative Technologies for food processing equipment. Kailas Engineering offers unparalleled experience in the design, Manufacture and after-sales service of food processing equipment. The Organization can boast more than 10 year&apos;s Experience in forced convection Technology serving a range of industries
                </span> 
              </p>
              <Link
                href="/about"
                className="group relative overflow-hidden inline-flex items-center gap-4 bg-accent text-white hover:text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Learn More <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-20 w-1/2 h-full bg-accent/5 skew-x-10 -translate-x-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* Content Section (now on the left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 order-1 lg:order-1"
            >
              <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-primary mb-10 tracking-tighter leading-[0.9] font-heading">
               <span className="text-accent">Turnkey Solutions.</span>
              </h2>
              <p className="text-xl text-muted mb-10 leading-relaxed font-body">
                <span className="font-normal">
                  Industrial food processing requires a wide range of machines & Equipments. Kailas Engineering Systems has developed an extensive variety of solutions that allow to customer to choose the best product for their specific application.
                </span> 
              </p>
              <Link
                href="/services"
                className="group relative overflow-hidden inline-flex items-center gap-4 bg-accent text-white hover:text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[11px] transition-all shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Know More <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </motion.div>

            {/* Image Section (now on the right) */}
           <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative order-2 lg:order-2"
>
  <div className="aspect-[5/8] rounded-[1rem] overflow-hidden relative">
    <Image
      src="/Machine.png"
      alt="Turnkey Solutions"
      fill
      className="object-contain" // <-- Changed from object-cover
      sizes="" // <-- Fixed invalid sizes property
    />
  </div>
</motion.div>
          </div>
        </div>
      </section>
      {/* Industrial Work Process Section */}
      <WorkProcess />

      {/* Solutions Section */}
      <section className="py-24 sm:py-48 bg-secondary relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="h-1.5 w-24 bg-accent mb-10" />
              <h2 className="text-6xl md:text-8xl font-bold text-primary tracking-tighter leading-none font-heading uppercase">SOLUTIONS.</h2>
            </div>
            <p className="max-w-md text-muted font-medium text-lg leading-relaxed mb-4">We deliver end-to-end industrial engineering encompassing precision manufacturing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group p-16 bg-secondary border border-primary/20 hover:bg-transparent transition-all duration-700 rounded-[2.5rem] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 text-primary/5 group-hover:text-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6 transition-colors font-heading">{service.title}</h3>
                <p className="text-muted  transition-colors leading-relaxed font-body text-[15px] mb-12">{service.desc}</p>
                <Link
                  href="/services"
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-accent text-white px-6 py-3 rounded-lg font-black uppercase tracking-[0.3em] text-[11px] transition-all active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Analyze Portfolio <ChevronRight size={16} />
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
