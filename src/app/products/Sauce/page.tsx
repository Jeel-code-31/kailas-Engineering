"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Sugar Syrup preparation system",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/products/Sauce/first.png",
    content: [
      <span key="s1">The Sugar Syrup Preparation System is a vital piece of equipment in modern food processing, designed to deliver consistent, high-quality syrup that serves as a key ingredient in products such as jams, ketchups, sauces, and other confectioneries. Built with advanced engineering and hygienic design, this system ensures precise preparation, uniform consistency, and reliable performance, meeting the rigorous demands of large-scale food production.

At the heart of the system is a stainless-steel jacketed vessel that provides excellent durability, corrosion resistance, and easy maintenance. The vessel is equipped with a high-speed agitator to facilitate rapid dissolution of sugar, ensuring a lump-free solution and preventing caramelization. Integrated with precise temperature control and powered by either steam or electric heating mechanisms, the system guarantees uniform heat distribution, enabling accurate dissolution and consistent product results.</span>,
      <br key='b1'></br>,
      <span key="s2">To further enhance quality, the system is fitted with a recirculation pump and inline filtration unit, which ensures the syrup remains homogeneous and free from impurities. This helps maintain controlled Brix levels, an essential factor in ensuring product stability, shelf life, and taste consistency. Such precision is especially critical in the preparation of jams and sauces, where texture and flavor directly influence consumer acceptance.

The design emphasizes hygiene and safety, with all contact parts made from food-grade stainless steel and polished for smooth cleaning. The system&apos;s CIP (Clean-in-Place) compatibility enables automated cleaning, reducing downtime, labor, and the risk of contamination. Additionally, its user-friendly automation and control panel allow operators to manage processes effortlessly, ensuring accuracy and repeatability in every batch.</span>,
      <br key="b2"></br>,
      <span key="s3">By streamlining syrup preparation and enhancing product quality, the Sugar Syrup Preparation System significantly boosts efficiency for food processors. Manufactured with precision and reliability, this equipment reflects the engineering excellence of Kailas Engineering Solutions Pvt. Ltd., a trusted partner in innovative food processing technologies.</span>
    ]  },
  {
    id: 2,
    title: "Pectin mixer",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/Sauce/second.png",
    content: [
      <span key='s1'>The Pectin Mixer is an advanced piece of equipment designed to meet the demanding requirements of modern food manufacturing, particularly in the preparation of jams, ketchups, sauces, and other pectin-based products. Pectin plays a vital role in achieving the right texture, consistency, and stability in these formulations, and its uniform dispersion is crucial for product quality. This mixer ensures that pectin is incorporated evenly into the liquid medium, preventing lumps and guaranteeing a smooth, homogenous mixture.

Constructed entirely from high-grade stainless steel, the Pectin Mixer offers exceptional durability, resistance to corrosion, and compliance with stringent food safety standards. Its high-shear mixing mechanism is engineered to break down particles quickly and disperse them uniformly, which helps reduce preparation time and improve overall production efficiency. With variable speed control, operators can adjust the mixing intensity to match specific product requirements, ensuring precision and flexibility across different recipes and batch sizes.</span>,
      <br key="b1"></br>,
      <span key="s2">A user-friendly interface makes the system simple to operate, even in fast-paced production environments. Designed with hygiene in mind, the equipment is fully CIP (Clean-in-Place) compatible, allowing thorough and automated cleaning of all contact surfaces without dismantling. This minimizes downtime, reduces labor costs, and ensures contamination-free operation, which is especially critical in food processing.

The Pectin Mixer is suitable for both batch and inline processing, making it adaptable to various manufacturing setups. Its robust construction ensures long service life, while its advanced engineering delivers consistent results, enhancing product quality and reducing waste.</span>,
      <br key='b2'></br>,
      <span key="s3">By combining efficiency, hygiene, and precision, the Pectin Mixer not only streamlines production but also helps food processors meet high consumer expectations for texture and quality. This reliable solution is proudly offered by Kailas Engineering Solutions Pvt. Ltd., a leader in innovative food processing equipment tailored for modern industry needs.</span>
    ] },
  {
    id: 3,
    title: "Fix Kettle",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/products/Sauce/three.png",
    content:[
      <span key="sp1">The Fix Kettle is a highly reliable and efficient cooking solution designed to meet the needs of large-scale food processing industries engaged in the production of jam, ketchup, sauces, and similar semi-liquid products. Constructed from premium stainless steel, the kettle ensures maximum durability, resistance to corrosion, and compliance with stringent food safety standards. Its design is optimized to maintain hygiene while delivering consistent cooking performance in demanding production environments.

One of the standout features of the Fix Kettle is its steam or electrically heated jacket, which guarantees uniform heat distribution across the vessel. This feature is critical in preventing hotspots that can cause product burning or uneven cooking. Paired with a heavy-duty anchor-type agitator, the kettle ensures that ingredients are mixed thoroughly and continuously throughout the process, resulting in consistent product texture, flavor, and quality.</span>,
      <br key="b1"></br>,
      <span key="sp2">Equipped with precise temperature controls, operators can adjust and maintain the cooking conditions required for different recipes, ensuring repeatability and accuracy across batches. The fixed design provides enhanced stability during operation, making it an excellent choice for batch processing where safety and reliability are essential. Its top-mounted motor ensures powerful mixing action while optimizing space utilization in processing plants.

Ease of cleaning is another major advantage, as the kettle&apos;s hygienic design minimizes product residues and supports compliance with international food safety regulations. This reduces downtime between production cycles and improves operational efficiency.</span>,
      <br key="b2"></br>,
      <span key="sp3">By combining robust construction, advanced engineering, and operator-friendly features, the Fix Kettle delivers superior performance and long service life. It is a trusted choice for food processors who require dependable equipment to streamline production while maintaining high product standards.</span>
    ]  },
  {
    id: 4,
    title: "Tube in Tube Pasteurizer cum cooler",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/products/Sauce/four.png",
    content: [
      <span key="s1">The Tube in Tube Pasteurizer cum Cooler is an advanced and efficient solution engineered for the thermal processing of ketchup, jam, sauces, and other semi-liquid food products. Thermal treatment is a critical step in ensuring food safety, extending shelf life, and maintaining the natural quality of processed products. This system is designed to provide uniform pasteurization, effectively eliminating harmful microorganisms while preserving essential attributes such as flavor, color, aroma, and texture.

At the heart of the system is a tube-in-tube heat exchanger, which allows for precise control of the heating and cooling process. The pasteurization section carefully brings the product to the desired temperature profile, ensuring complete microbial inactivation without overcooking or compromising quality. Following thermal treatment, the integrated cooling section rapidly reduces the product temperature to the required level for storage or filling, enhancing product stability and safety while preventing any loss in sensory characteristics.</span>,
      <br key="b1"></br>,
      <span key='s2'>Constructed from high-grade stainless steel, the machine is built for durability, hygiene, and long-term performance. Its smooth surfaces and sanitary design facilitate easy cleaning and maintenance, supporting compliance with stringent international food safety standards. The system is equipped with user-friendly controls, allowing operators to monitor and adjust temperature profiles, flow rates, and other critical parameters with precision.

The Tube in Tube Pasteurizer cum Cooler is ideal for continuous operations, offering reliable performance in large-scale production environments. Its compact footprint and robust construction make it suitable for integration into modern processing lines, optimizing workflow and efficiency.</span>,
      <br key="b2"></br>,
      <span key="b3">By combining precision engineering, operational flexibility, and hygienic design, this system ensures consistent quality, safety, and efficiency in processed food products. The Tube in Tube Pasteurizer cum Cooler is manufactured by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in providing innovative, high-performance equipment for the food processing industry.</span>
    ] },
  {
    id: 5,
    title: "Holding Tank for ketchup and jams",
    category: "Step 05",
    icon: <Droplets size={20} />,
    image: "/products/Sauce/five.png",
    content: [
      <span key='s1'>The Holding Tank for Ketchup, Jam, and all types of Sauces is a highly reliable and hygienically designed stainless steel vessel, purpose-built to provide efficient intermediate storage in modern food processing lines. In high-volume production environments, maintaining product quality and safety during temporary storage is critical. This tank ensures that processed food products remain consistent in temperature, texture, and composition until they are ready for further handling, filling, or packaging.

Constructed from high-grade food-grade stainless steel (SS304 or SS316), the tank offers exceptional durability, corrosion resistance, and compliance with international food safety and hygiene standards. Its surface finish is smooth and polished to facilitate cleaning, while CIP (Clean-In-Place) compatibility allows automated sanitation, minimizing downtime and reducing labor requirements. The tank design includes a conical or dished bottom, enabling complete drainage of product and preventing residue build-up, which is essential for contamination-free operations.</span>,
      <br key='b1'></br>,
      <span key="s2">Optional jacketed or insulated configurations allow for precise temperature control, ensuring that sauces, jams, and ketchups maintain their desired viscosity and quality during storage. The tank is also equipped with level indicators for accurate monitoring of product volumes, helping operators maintain consistent inventory control and streamline production scheduling.</span>,
      <br key="b2"></br>,
      <span key="s3">Available in various capacities to accommodate different production requirements, the holding tank integrates seamlessly with upstream processing equipment and downstream filling or packaging systems. Its robust design supports continuous production operations, making it a critical component for maintaining efficiency in large-scale food processing facilities.</span>
    ] },
  {
    id: 6,
    title: "Mayonnaise Sauce Preparation",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/Sauce/six.png",
    content: [
      <span key='s1'>The Mayonnaise Sauce Preparation System by Kailas Engineering Solutions Pvt. Ltd. is a fully integrated, high-performance solution designed to produce premium-quality mayonnaise. It focuses on achieving stable emulsions, uniform textures, and consistent product quality through precision engineering and hygienic design.</span>,
      <br key='b1'></br>,
      <span key='s2'>Key Components
Oil Dosing System:
Ensures precise and consistent oil supply to mixing tanks. Accurate dosing is critical for the stability, texture, and mouthfeel of the final emulsion. It features food-grade stainless steel construction and advanced controls to monitor dosing accuracy.

Emulsifier:
A vital component that combines oil and water-based ingredients. It works by breaking down oil droplets into fine, evenly dispersed particles, resulting in a smooth, homogenous mixture free from separation or graininess.

High-Speed Mixing Tank:
The core of the homogenization process. It utilizes a dual-position agitator (top and bottom) and operates under vacuum conditions to prevent air entrapment, which preserves the product&apos;s natural quality, color, and shelf life.</span>,
      <br key='b2'></br>,
      <span key='s3'>System Highlights
Stable Emulsification: Employs high-speed emulsifiers and anchor stirrers to prevent ingredient separation and maintain desired viscosity.

Vacuum Deaeration: Removes entrapped air to ensure a smooth final product and prevent foaming or oxidation.

Hygienic & Durable: Constructed from food-grade stainless steel with CIP (Clean-in-Place) compatibility for rapid, automated sanitation.

Operational Flexibility: The modular design supports both batch and semi-continuous operations, making it suitable for small to large-scale manufacturing.

Precision Control: Includes automated dosing units and adjustable parameters to ensure batch-to-batch consistency and reduce human error.</span>
    ]  }
];

// Reusable Flip Card Component
const FlipCard = ({ data }: { data: typeof processingSteps[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[4/3] [perspective:1500px] group cursor-pointer">
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }} // Premium smooth spring curve
      >
        
        {/* --- FRONT OF CARD --- */}
        <div className="absolute inset-0 w-full h-full rounded-[1rem] overflow-hidden ">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          {/* Gradient Overlay */}

          
          {/* Front Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="self-end bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            </div>
            
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering other click events
                  setIsFlipped(true);
                }}
                className="flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E55A00] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-orange-500/40 active:scale-95"
              >
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* --- BACK OF CARD --- */}
        <div className="absolute inset-0 w-full h-full rounded-[1rem] bg-white border border-neutral-100 shadow-2xl overflow-hidden flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Decorative Background Blob */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
          
          <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
            <div className="w-12 h-12 bg-orange-100 text-[#FF6A00] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              {data.icon}
            </div>
            
            <h3 className="text-2xl font-black text-neutral-900 mb-4 leading-tight">
              {data.title}
            </h3>
            
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed flex-grow font-medium">
              {data.content}
            </p>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="mt-6 flex items-center justify-center gap-2 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors duration-300 active:scale-95"
            >
              <RotateCcw size={16} /> View Image
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default function SauceProcessingSection() {
  return (
    <section className="py-24 bg-[#F9F6F0] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-24 text-neutral-900 tracking-tight">
            Ketchup, Jam & All types of Sauces
          </h2>
          <div className="w-24 h-1.5 bg-[#FF6A00] mx-auto mt-8 rounded-full" />
          
        </motion.div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 xl:gap-10">
          {processingSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlipCard data={step} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}