"use client";

import { motion } from "framer-motion";

export default function ClientsPage() {
  const clientLogos = [
    { name: "Client One", logo: "/Logos/Logo1.jpg" },
    { name: "Client Two", logo: "/Logos/Logo2.jpg" },
    { name: "Client Three", logo: "/Logos/Logo3.jpg" },
    { name: "Client Four", logo: "/Logos/Logo4.jpg" },
    { name: "Client Five", logo: "/Logos/Logo5.jpg" },
    { name: "Client Six", logo: "/Logos/Logo6.jpg" },
    { name: "Client Seven", logo: "/Logos/Logo7.jpg" },
    { name: "Client Eight", logo: "/Logos/Logo8.jpg" },
    { name: "Client Nine", logo: "/Logos/Logo9.jpg" },
    { name: "Client Ten", logo: "/Logos/Logo10.jpg" },
    { name: "Client Eleven", logo: "/Logos/Logo11.jpg" },
    { name: "Client Twelve", logo: "/Logos/Logo12.jpg" },
    { name: "Client Thirteen", logo: "/Logos/Logo13.jpg" },
    { name: "Client Fourteen", logo: "/Logos/Logo14.jpg" },
    { name: "Client Fifteen", logo: "/Logos/Logo15.jpg" },
    { name: "Client Sixteen", logo: "/Logos/Logo16.jpg" },
    { name: "Client Seventeen", logo: "/Logos/Logo17.jpg" },
    { name: "Client Eighteen", logo: "/Logos/Logo18.jpg" },
    { name: "Client Nineteen", logo: "/Logos/Logo19.jpg" },
    { name: "Client Twenty", logo: "/Logos/Logo20.jpg" },
    { name: "Client Twenty-One", logo: "/Logos/Logo21.jpg" },
    { name: "Client Twenty-Two", logo: "/Logos/Logo22.jpg" },   
    { name: "Client Twenty-Four", logo: "/Logos/Logo24.jpg" },
    { name: "Client Twenty-Five", logo: "/Logos/Logo25.jpg" },
    { name: "Client Twenty-Six", logo: "/Logos/Logo26.jpg" },
    { name: "Client Twenty-Seven", logo: "/Logos/Logo27.jpg" },
    { name: "Client Twenty-Eight", logo: "/Logos/Logo28.jpg" },
    { name: "Client Twenty-Nine", logo: "/Logos/Logo29.jpg" },
    { name: "Client Thirty", logo: "/Logos/Logo30.jpg" },
    { name: "Client Thirty-One", logo: "/Logos/Logo31.jpg" },
    { name: "Client Thirty-Two", logo: "/Logos/Logo32.jpg" },
    { name: "Client Thirty-Three", logo: "/Logos/Logo33.jpg" },
    { name: "Client Thirty-Four", logo: "/Logos/Logo34.jpg" },
    { name: "Client Thirty-Five", logo: "/Logos/Logo35.jpg" },
    { name: "Client Thirty-Six", logo: "/Logos/Logo36.jpg" },
    { name: "Client Thirty-Seven", logo: "/Logos/Logo37.jpg" },
    { name: "Client Thirty-Eight", logo: "/Logos/Logo38.jpg" },
    { name: "Client Thirty-Nine", logo: "/Logos/Logo39.jpg" },
    { name: "Client Forty", logo: "/Logos/Logo40.jpg" },
    { name: "Client Forty-One", logo: "/Logos/Logo41.jpg" },
    { name: "Client Forty-Two", logo: "/Logos/Logo42.jpg" },
    { name: "Client Forty-Three", logo: "/Logos/Logo43.jpg" },
    { name: "Client Forty-Four", logo: "/Logos/Logo44.jpg" },
    { name: "Client Forty-Five", logo: "/Logos/Logo45.jpg" },
  ];

  return (
    <div className="flex flex-col bg-secondary min-h-screen selection:bg-accent selection:text-white">

      {/* Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        {/* Header */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary/50 uppercase tracking-[0.5em] text-[10px] font-bold">
              Trusted Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl sm:text-8xl md:text-[9rem] font-black text-primary leading-[0.8] tracking-tighter uppercase font-heading"
          >
            GLOBAL <br />
            <span className="text-accent italic">PARTNERS.</span>
          </motion.h1>
        </header>

        {/* Logo Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientLogos.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-[4/3] bg-white  flex items-center justify-center p-10"
            >
              

              {/* Logo */}
              <div className="relative z-10 w-40 h-50 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </section>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-8"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-black text-primary uppercase font-heading">500+</h3>
            <p className="text-xs uppercase tracking-widest text-primary/40 font-bold">
              Successful Deployments
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-black text-primary uppercase font-heading">24</h3>
            <p className="text-xs uppercase tracking-widest text-primary/40 font-bold">
              Countries Reached
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-black text-primary uppercase font-heading">99%</h3>
            <p className="text-xs uppercase tracking-widest text-primary/40 font-bold">
              Client Retention
            </p>
          </div>
        </motion.div>

      </main>
    </div>
  );
}