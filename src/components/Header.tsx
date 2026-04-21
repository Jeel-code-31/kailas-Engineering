"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Tropical Fruit/pulp processing', href: '/products/Tomato-processing' },
      { name: 'Tomato puree/Paste Processing', href: '/products/Paste-Processing' },
      { name: 'Ready-To-Eat Pouches', href: '/products/RTE-Pouche' },
       { name: 'Frozen Veg/Fruit Processing', href: '/products/Frozan' },
        { name: 'Sauces', href: '/products/Sauce' },
          { name: 'Liquid Packaging', href: '/products/Liquid' },
            { name: 'Pastes', href: '/products/Pastes' },
              { name: 'Candies', href: '/products/Candies' },
              {name:'Jaggery processing',href:'/products/Jaggery-Processing'},
              {name:'Fruit & vegetable Dehydration',href:'/products/Fruit-Dehydration'},
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Careers', href: '/careers' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[1000] font-heading bg-[#D2DEB9]">
      {/* Top Bar - Premium Info */}
      <div className="bg-black/5 text-black py-2.5 px-6 overflow-hidden text-[10px] sm:text-[11px] border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-widest font-bold uppercase">
          <div className="flex space-x-6">
            <a href="tel:+919423162196" className="flex items-center hover:text-accent transition-colors gap-2 group">
              <Phone size={12} className="text-accent" />
              <span>+91 94231 62196</span>
            </a>
            <a href="mailto:sales@kailasengineering.com" className="hidden sm:flex items-center hover:text-accent transition-colors gap-2 group">
              <Mail size={12} className="text-accent" />
              <span>sales@kailasengineering.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <MapPin size={12} className="text-accent" /> Bhosari, Pune
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo Branding */}
        <Link href="/" className="flex items-center gap-4 group">
          <Image src="/Logo.png" alt="Logo" width={150} height={48} className="h-10 sm:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-[12px] font-black text-black hover:text-accent transition-all flex items-center gap-1.5 uppercase tracking-[0.2em] relative py-2"
              >
                {item.name}
                {item.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180 opacity-40" />}
                {/* Micro Interaction: Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
              {item.children && (
                <div className={`absolute top-full left-0 mt-4 bg-white shadow-2xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-black/5 transform translate-y-2 group-hover:translate-y-0 z-[60] ${item.name === 'Products' ? 'w-max grid grid-cols-3 gap-2' : 'w-56'}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-3 text-[11px] font-bold text-gray-700 hover:bg-secondary/20 hover:text-accent rounded-xl transition-all"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-accent text-white px-8 py-3.5 rounded-xl font-black tracking-[0.2em] transition-all hover:shadow-[0_10px_30px_rgba(58,90,64,0.3)] uppercase text-[10px] active:scale-95 ml-4"
          >
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black p-2 bg-black/5 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#D2DEB9] border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-black uppercase tracking-tighter text-black hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-accent text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}