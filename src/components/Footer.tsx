"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Media", href: "/media" },
  { name: "Articles", href: "/Artical" },
  { name: "Technical Services", href: "/services" },
  { name: "Career Openings", href: "/careers" },
  { name: "Contact Project Desk", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/KailasEngineeringSystems" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UC6eZFUGO0pTXDXTpQ52zGcQ/about" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/kailasengineeringsystems/" },
  { icon: Instagram, href: "https://www.instagram.com/kailasengineeringsolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
];

export default function Footer() {
  return (
    <footer className="bg-[#D2DEB9] text-black pt-24 pb-12 relative z-50 font-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={150} height={48} className="h-10 sm:h-12 w-auto object-contain" />
            </Link>

            <p className="text-gray-700 text-sm leading-relaxed max-w-xs font-bold">
              Precision engineering solutions for industrial leaders worldwide.
              Founded in 2005, based in Bhosari, Pune.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-8">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-black transition-colors text-sm font-bold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-8">
              Reach Us
            </h4>
            <div className="flex flex-col gap-6 text-sm text-gray-700 font-bold">
              
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#3A5A40] shrink-0" />
                <p>
                  Sector No.7, Plot No. 206, PCNTDA, Bhosari, Pune - 411026,
                  Maharashtra, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-[#3A5A40] shrink-0" />
                <p>+91 94231 62196</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-[#3A5A40] shrink-0" />
                <p>+91 9822349983</p>
              </div>


              <div className="flex gap-3">
                <Phone size={18} className="text-[#3A5A40] shrink-0" />
                <p>+91 2066350062</p>
              </div>

            </div>
          </div>

          {/* Quick Connect */}
          <div>
            <h4 className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-8">
              Quick Connect
            </h4>

            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/5 border border-black/10 px-4 py-3 rounded-lg text-sm text-black focus:outline-none focus:border-[#3A5A40] placeholder:text-gray-500 font-bold"
              />

              <button className="relative overflow-hidden bg-accent text-white px-6 py-4 rounded-xl font-black tracking-widest transition-all hover:shadow-[0_0_40px_rgba(58,90,64,0.3)] uppercase text-[11px] group active:scale-95">
                <span className="relative z-10">Send Info</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-2 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-bold">
          <p>CopyRight © 2025 Kailas Engineering Systems.</p>
        </div>

      </div>
    </footer>
  );
}