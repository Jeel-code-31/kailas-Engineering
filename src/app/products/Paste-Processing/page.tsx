"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Washer",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/products/Paste-processing/first.png",
    content:[
    <span key="text1">The Tomato Puree/Paste Washer is a specialized machine designed to deliver thorough and hygienic cleaning of fresh tomatoes before they enter the next stage of processing into puree or paste. In tomato-based product manufacturing, maintaining high hygiene standards at the pre-processing stage is essential to ensure product safety, consistency, and quality. This washer has been engineered to meet the rigorous demands of industrial-scale operations while ensuring gentle handling of the produce</span>,
    <br key="br1"></br>,
    <span key="text2">Constructed from food-grade stainless steel, the machine offers long-lasting durability and complete compliance with food safety requirements. Its robust structure is designed for continuous operation, making it highly suitable for high-volume production lines in tomato paste and puree plants. Despite its heavy-duty performance, the system is user-friendly, with features that minimize manual handling and reduce operator fatigue, ultimately improving productivity and process efficiency.The washer employs advanced washing mechanisms such as bubble agitation, water circulation, and high-pressure sprays. These mechanisms work in combination to remove dirt, dust, pesticide residues, and surface impurities from the tomatoes, ensuring that only clean, high-quality fruit progresses further in the processing line. Gentle washing action prevents damage to the tomato skin, helping preserve freshness, flavor, and nutritional integrity..</span>,
     <br key="br2"></br>,
     <span key="text3">To support sustainability, the system can be equipped with water recirculation and filtration units, which reduce water consumption while maintaining hygienic washing conditions. This not only lowers operating costs but also aligns with modern processors&apos; focus on eco-friendly practices.

By ensuring a consistent supply of clean, contaminant-free tomatoes, the washer plays a critical role in maintaining product safety, extending shelf life, and protecting downstream equipment from premature wear.

In essence, the Tomato Puree/Paste Washer is a key quality-assurance asset and forms part of the advanced, reliable solutions offered by Kailas Engineering Solutions Pvt. Ltd. to processors worldwide.</span>  
  ] },
  {
    id: 2,
    title: "Inspection Belt Conveyor",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/Paste-processing/second.png",
   content:[
    <span key="text1">The Inspection Belt Conveyor for Tomato Puree/Paste is a vital piece of equipment in modern tomato processing lines, ensuring that only the finest quality produce is carried forward for puree or paste production. Effective quality control begins at the inspection stage, and this conveyor system is designed to provide a smooth, hygienic, and efficient platform for identifying and removing defective tomatoes, foreign materials, or overripe sections.

Constructed from high-grade, food-safe materials, the conveyor is engineered to meet stringent hygiene and safety standards, while also withstanding the demanding conditions of industrial food processing. The belt surface is designed for smooth product movement without causing damage, ensuring tomatoes remain intact during inspection. Its ergonomic, user-friendly layout allows operators to comfortably sort and remove unwanted materials, improving both inspection accuracy and overall line productivity.</span>,
    <br key="br1"></br>,
    <span key="text2">The system can be adapted for manual or automated inspection, depending on the requirements of the processor. For manual setups, the conveyor provides ample working space with clear visibility, while automated systems can be integrated with sensors and reject mechanisms to further enhance precision and efficiency.</span>,
    <br key="br2"></br>,
    <span key="text3">Ease of cleaning and maintenance is a key design feature. The conveyor is built with sanitary fittings, accessible components, and a streamlined frame, making washdowns quick and effective. This minimizes downtime, maintains consistent hygiene levels, and ensures compliance with food safety regulations.</span>
   ]  },
  {
    id: 3,
    title: "Pulp Finisher for Tomato Puree/Paste",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/products/Paste-processing/third.png",
   content:[
         <span key="text1">The Pulper Finisher for Tomato Puree/Paste is an advanced machine specifically designed to ensure the efficient extraction of smooth, high-quality puree from fresh tomatoes. In large-scale tomato processing, achieving the right texture and consistency is a critical factor in meeting both domestic and international product standards. This machine addresses that challenge by separating seeds, skin, and fibrous material from the tomato pulp with remarkable efficiency. The result is a puree that is uniform, refined, and ready for further processing or packaging.

Constructed with durable stainless steel contact parts, the Pulper Finisher guarantees superior hygiene, long-lasting durability, and easy cleaning, all of which are vital in food-grade operations. Its robust design supports continuous, heavy-duty operation, allowing processors to maintain high throughput while minimizing downtime. The machine is equipped with precision-engineered components and customizable sieve options, enabling it to handle varying levels of fineness depending on product requirements.</span>,
         <br key="br1"></br>,
         <span key="text2">One of the standout features of this Pulper Finisher is its ability to deliver maximum yield with minimal wastage, ensuring cost efficiency for processors. By optimizing extraction and reducing raw material loss, the system not only preserves the natural flavor and color of the tomatoes but also enhances overall productivity. Its ergonomic design and ease of maintenance further contribute to streamlined operations, lowering maintenance costs and ensuring long-term reliability.</span>,
         <br key="br2"></br>,
         <span key="text3">Whether used for puree or concentrated paste production, the Pulper Finisher integrates seamlessly into modern tomato processing lines. Its consistent performance and advanced technology make it an indispensable part of any facility that values efficiency, quality, and scalability. This reliable solution is brought to the industry by Kailas Engineering Solutions Pvt. Ltd., a trusted manufacturer known for its precision-engineered food processing machinery.</span>
   ]  },
  {
    id: 4,
    title: "Fix Kettle for Tomato Puree/Paste",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/products/Paste-processing/fourth.png",
    content:[
      <span key="text1">The Fix Kettle for Tomato Puree/Paste is a highly efficient and durable solution designed to meet the demanding requirements of large-scale tomato processing. Cooking and concentration are critical stages in tomato puree and paste production, as they directly affect the flavor, texture, color, and nutrient retention of the final product. The Fix Kettle is specifically engineered to deliver consistent and reliable performance, ensuring that processors can maintain high product quality while optimizing operational efficiency.

Constructed from premium-grade stainless steel, the kettle guarantees hygienic processing and long-lasting durability. Its sturdy fixed design offers exceptional stability during operation, reducing vibration and wear while enabling continuous use in industrial environments. The kettle incorporates an advanced heating system that ensures uniform heat distribution across the product, thereby minimizing hot spots, reducing cooking time, and maintaining consistency throughout each batch. This uniformity is essential for producing tomato puree and paste with the desired viscosity and sensory profile.</span>,
      <br key="br1"></br>,
      <span key="text2">Ease of operation and maintenance is another key advantage of the Fix Kettle. The smooth, food-grade interior surfaces facilitate quick cleaning and comply with stringent food safety standards. Designed for long service life and low downtime, the kettle allows food processors to operate more efficiently, reduce operational costs, and ensure continuous production without frequent interruptions.

Ideal for a wide range of food processing industries, the Fix Kettle provides not only reliable performance but also flexibility in handling varying production capacities. Its precision engineering makes it an indispensable part of modern tomato processing lines, delivering superior results batch after batch.</span>,
      <br key="br2"></br>,
      <span key="text3">This advanced equipment is proudly developed and delivered by Kailas Engineering Solutions Pvt. Ltd., a company committed to providing robust, innovative, and hygienic food processing machinery for global markets.</span>
    ] },
  {
    id: 5,
    title: "Vacuum Pan",
    category: "Step 05",
    icon: <Droplets size={20} />,
    image: "/products/Paste-processing/five.png",
    content:[
      <span key="text1">The Vacuum Pan for Tomato Puree/Paste is a specialized evaporation system meticulously engineered to address the critical need for efficient concentration in modern tomato processing. Concentrating tomato puree or paste is a delicate process, as it must balance consistency and thickness with the preservation of the natural color, flavor, and nutritional value of the raw material. The vacuum pan achieves this balance by operating under reduced pressure conditions, which significantly lowers the boiling point of the product. This approach minimizes thermal caramelization, and ensures that the end product maintains its fresh, vibrant quality.

One of the standout features of this system is its ability to achieve the desired concentration levels in a shorter processing time compared to conventional open-pan systems. By reducing cooking time, the vacuum pan not only preserves sensory and nutritional attributes but also contributes to energy savings and operational efficiency. This makes it a practical and sustainable choice for processors aiming to meet both quality and cost-effectiveness targets.</span>,
      <br key="br1"></br>,
      <span key="text2">Constructed with robust stainless-steel materials, the vacuum pan is designed for long-term durability, high hygiene standards, and ease of cleaning. Its precision engineering supports continuous operation in demanding industrial environments, while its compact and ergonomic design simplifies installation and integration into existing production lines. The system is also adaptable, capable of handling varying production capacities and product specifications with consistent results.

For large-scale food processors, the vacuum pan offers a reliable solution that enhances productivity while ensuring compliance with stringent food safety and quality standards. It stands as a vital component in tomato processing lines where uniformity, reliability, and efficiency are top priorities.</span>,
      <br key="br2"></br>,
      <span key="text3">This advanced evaporation system is proudly offered by Kailas Engineering Solutions Pvt. Ltd., a trusted name in innovative and high-performance food processing machinery.</span>
    ]  },
  {
    id: 6,
    title: "Holding Tank",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/Paste-processing/six.png",
   content:[
    <span key="text1">The Holding Tank for Tomato Puree/Paste plays a vital role in ensuring smooth, continuous, and efficient operations within modern tomato processing lines. Designed to provide safe and hygienic intermediate storage, this tank helps maintain the quality of tomato puree or paste before it moves to the next stage of production. By serving as a buffer between processing steps, the holding tank ensures uninterrupted workflow, reducing downtime and improving overall productivity for large-scale food manufacturers.

Constructed from high-grade stainless steel, the tank upholds the highest standards of durability and hygiene. Its smooth internal surfaces are carefully finished to prevent product buildup and allow for effortless cleaning, minimizing the risk of contamination while ensuring compliance with strict food safety regulations. The tank is also designed with sanitary fittings that enable seamless integration into existing production lines, making it highly versatile for both new installations and retrofit applications.</span>,
    <br key="br1"></br>,
    <span key="text2">To maintain product quality, the holding tank comes equipped with insulation and temperature-control features, which prevent unwanted fluctuations during storage. This ensures the natural flavor, color, texture, and nutritional value of the tomato product remain intact. Uniform consistency is maintained throughout the holding period, guaranteeing a reliable output when the puree or paste is transferred downstream for further processing, packaging, or concentration.

In addition to its functional advantages, the holding tank is engineered for easy maintenance and long service life. Its robust design supports continuous operation, while its compact and practical structure makes it user-friendly for operators. These features collectively make it an indispensable asset for processors who demand efficiency, hygiene, and reliability.</span>,
    <br key="br2"></br>,
    <span key="text3">This advanced holding solution is proudly developed and offered by Kailas Engineering Solutions Pvt. Ltd., a company recognized for delivering innovative and precision-engineered machinery for the global food processing industry.</span>
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
        <div className="absolute inset-0 w-full h-full rounded-[1rem] overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-covergroup-hover:scale-110 transition-transform duration-1000 ease-out"
          />
      
          
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
        <div className="absolute inset-0 w-full h-full rounded-[2rem] bg-white border border-neutral-100 shadow-2xl overflow-hidden flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
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

export default function TomatoSection() {
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
           Tomato Puree/ Paste Processing
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