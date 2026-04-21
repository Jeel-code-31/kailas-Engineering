"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Batch type Peeler for RTE in Retortable Pouches",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/products/RTE/first.png",
    content:[
      <span key="text1">The Batch Type Peeler for Ready-to-Eat (RTE) in Retortable Pouches is a high-performance and precision-engineered solution designed to meet the demanding requirements of modern RTE food industry. Efficient peeling of vegetables and fruits is a critical step in ensuring product quality, consistency, and visual appeal, especially for packaged ready-to-eat meals. This machine is designed to remove skins effectively while preserving the integrity of the produce, minimizing wastage, and maintaining the natural texture and nutritional value of the ingredients.

Constructed with robust, food-grade stainless steel, the batch type peeler ensures durability, hygiene, and long-lasting operational reliability. Its batch processing design provides operators with precise control over the peeling cycle, allowing for uniform processing across different types of vegetables and fruits. This flexibility is particularly important for RTE applications, where consistency in appearance and texture directly impacts product acceptance and customer satisfaction.</span>,
      <br key="br1"></br>,
      <span key="text2">The machine incorporates advanced peeling technology, which combines gentle mechanical action with optimized abrasion or water-based peeling systems, depending on the produce type. This ensures efficient skin removal without damaging the inner flesh, maintaining the quality required for further processing and packaging into retortable pouches. The system is designed for ease of operation and maintenance, with intuitive controls, simple loading and unloading, and easy cleaning, which helps minimize downtime and improve overall productivity.

By delivering consistent, high-quality peeling results, the batch type peeler enhances downstream processing efficiency, supports standardized production, and reduces wastage, making it an indispensable tool in RTE food manufacturing lines. It accommodates varying batch sizes and production volumes, providing flexibility for manufacturers of all scales.</span>,
      <br key="br2"></br>,
      <span key="text3">This advanced and reliable Batch Type Peeler for RTE in Retortable Pouches is engineered and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in innovative food processing equipment designed to optimize efficiency, hygiene, and product quality in modern food production facilities.</span>
    ] },
  {
    id: 2,
    title: "Continuos peeler machine",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/RTE/second.png",
   content:[
    <span key="text1">The Continuous Peeler for Ready-to-Eat (RTE) Foods is a state-of-the-art, automated processing machine designed to meet the rigorous demands of modern large-scale food production. Developed for the efficient and consistent peeling of various vegetables and fruits, this machine ensures that food products retain their integrity, appearance, and nutritional value while minimizing wastage. The continuous operation of the peeler allows manufacturers to achieve high throughput, making it ideal for large-scale RTE food production lines where efficiency and reliability are paramount.

Engineered with advanced peeling technology, the Continuous Peeler combines precision mechanical action with optimized surface contact to remove skins effectively without damaging the inner flesh of the produce. This ensures that the peeled ingredients are uniform, visually appealing, and ready for downstream processing such as cutting, cooking, or packaging into retortable pouches. By minimizing product loss during peeling, the system enhances overall production efficiency and reduces operational costs.</span>,
    <br key="br1"></br>,
    <span key="text2">The machine is built from high-grade stainless steel, offering robust construction for long-term durability, ease of cleaning, and compliance with stringent food safety standards. Its automated controls and user-friendly interface allow operators to make quick adjustments to accommodate different types of produce or changing production requirements, providing flexibility in batch sizes and operational speed.

In addition to performance and precision, the Continuous Peeler is designed to integrate seamlessly into existing RTE food processing lines, ensuring smooth coordination with upstream washing and cutting units, as well as downstream packaging equipment. This integration facilitates continuous, uninterrupted production while maintaining consistent product quality.</span>,
    <br key="br2"></br>,
    <span key="text3">The Continuous Peeler for Ready-to-Eat Foods is developed and supplied by Kailas Engineering Systems Pvt. Ltd., a trusted leader in advanced food processing equipment, delivering solutions that optimize efficiency, maintain hygiene, and ensure the highest standards of quality for modern RTE food manufacturing operations.</span>
   ] },
  {
    id: 3,
    title: "Pulverizer for RTE in Retortable Pouches",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/products/RTE/third.png",
    content:[
      <span key="text1">The Pulverizer for Ready-to-Eat (RTE) Foods is a high-performance, precision-engineered machine designed to optimize the grinding and pulverizing processes in modern food manufacturing. In RTE food production, achieving a consistent particle size is essential for maintaining product quality, flavor, and texture, and this pulverizer is specifically designed to meet those stringent requirements. By delivering uniform and efficient grinding, it ensures that ingredients such as spices, herbs, vegetables, and other food materials are processed to the desired specification without compromising their natural properties.

Built with robust construction and advanced engineering, the pulverizer is capable of continuous operation, making it suitable for high-volume production environments. Its powerful motor and optimized grinding mechanisms provide consistent performance, while adjustable settings allow operators to tailor the output according to specific product requirements. This flexibility ensures that the pulverizer can handle a wide range of ingredients with varying textures, densities, and moisture levels, all while maintaining smooth operation and high efficiency.</span>,
      <br key="br1"></br>,
      <span key="text2">Hygiene and ease of maintenance are critical in RTE food processing, and the pulverizer is designed with easy-to-clean components and food-grade materials, ensuring compliance with strict sanitation standards. The system supports minimal downtime during cleaning and maintenance, which enhances productivity and ensures uninterrupted operations.

In addition to its mechanical precision, the pulverizer preserves the integrity and flavor of the food, preventing overheating, discoloration, or loss of essential nutrients during the grinding process. This makes it an indispensable tool in RTE food production lines, where both quality and efficiency are of paramount importance.</span>,
      <br key="br2"></br>,
      <span key="text3">The Pulverizer for RTE Foods is engineered and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in innovative, high-performance food processing equipment that helps manufacturers optimize operations, maintain hygiene, and deliver consistent, premium-quality products.</span>
    ]  },
  {
    id: 4,
    title: "Trolley Tilter for RTE",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/products/RTE/four.png",
  content:[
    <span key="text1">The Trolley Tilter for Ready-to-Eat (RTE) Foods is an advanced, high-performance piece of equipment designed to streamline the handling and unloading of food trolleys in modern food processing facilities. In RTE food production, efficient transfer of ingredients, semi-processed, or finished products is crucial to maintaining operational flow, reducing downtime, and ensuring consistent product quality. The Trolley Tilter addresses these challenges by enabling controlled and smooth tilting of trolleys to an optimal angle, facilitating quick and safe discharge of contents with minimal manual intervention.

Constructed from food-grade materials, the machine prioritizes hygiene, durability, and compliance with stringent food safety standards. Its robust design ensures reliable performance even under continuous production demands, while the precision-engineered tilting mechanism allows operators to handle trolleys with various capacities safely and efficiently. By reducing manual handling, the Trolley Tilter enhances ergonomics for workers, lowers the risk of injuries, and minimizes product spillage or damage, thereby protecting both labor and food quality.</span>,
    <br key="br1"></br>,
    <span key="text2">Equipped with advanced control systems, the Trolley Tilter provides smooth, adjustable tilting, ensuring that the unloading process is consistent and efficient across different types of trolleys and food products. The system can be integrated seamlessly into RTE production lines, supporting automated workflows and improving overall productivity. Its ease of operation, low maintenance requirements, and durability make it a valuable addition to any large-scale food processing setup.

This machine is particularly beneficial in high-volume environments where speed, precision, and hygiene are paramount, supporting the safe and effective handling of ingredients or finished RTE products. By optimizing trolley management, it contributes significantly to process efficiency and operational excellence.</span>,
    <br key="br2"></br>,
    <span key="text3">The Trolley Tilter for RTE Foods is designed, engineered, and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in innovative food processing solutions that combine performance, safety, and reliability to meet the evolving demands of modern food production facilities.</span>
  ] 
  },
  {
    id: 5,
    title: "Tilting kettle",
    category: "Step 05",
    icon: <Droplets size={20} />,
    image: "/products/RTE/Five.png",
     content:[
      <span key="text1">The Tilting Kettle for Ready-to-Eat (RTE) Foods is a high-performance cooking solution designed to optimize large-scale food production while ensuring product quality, safety, and operational efficiency. This advanced kettle is specifically engineered to handle a wide variety of RTE foods packaged in retortable pouches, making it an indispensable tool for modern food processing facilities. Its robust and durable construction ensures long-lasting performance under continuous operation, while the tilting mechanism facilitates smooth and efficient unloading of hot food products, minimizing manual labor and reducing the risk of spillage or accidents.

Equipped with state-of-the-art heating systems, available in electric or steam-based models, the Tilting Kettle ensures uniform heat distribution throughout the vessel. This uniformity significantly reduces cooking time while preserving the natural flavor, texture, and nutritional value of the food, which is critical for maintaining high-quality standards in RTE production. Precision temperature control allows operators to fine-tune the cooking process for different types of products, ensuring consistent outcomes batch after batch.</span>,
      <br key="br1"></br>,
      <span key="text2">Hygiene and safety are key considerations in its design. The kettle features easy-to-clean surfaces, CIP (Clean-In-Place) compatibility, and integrated safety mechanisms to protect operators and maintain strict food safety compliance. Its ergonomic tilting mechanism reduces strain on workers, improving operational efficiency and enabling safe handling of hot or heavy food batches.

The Tilting Kettle seamlessly integrates into RTE food processing lines, complementing upstream and downstream equipment to support continuous, uninterrupted operations. Its combination of durability, advanced heating technology, and user-friendly features makes it ideal for high-volume food production, enhancing both productivity and overall product quality.</span>,
      <br key="br2"></br>,
      <span key="text3">This Tilting Kettle for RTE Foods is designed, engineered, and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in advanced food processing solutions that deliver efficiency, safety, and superior performance for modern food manufacturing operations.</span>
     ] },
  {
    id: 6,
    title: "Rice Cooking System for RTE Foods",  
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/RTE/Seven.png",
    content:[
      <span key="txt1">The rice cooking system for Ready-to-Eat(RTE) Foods is a high-performance, fully automated solution developed to optimize rice preparation in large-scale food production environments. in the RTE food industry, Consistent and perfectly cooked rice is a critical component for maintaining product Quality, Taste, And customer satisfaction. This system is engineered to handle high-volume production while ensuring uniform cooking and minimal variation in texture and flavor across every batch. Utilizing advanced steam cooking technology, The system ensure even heat distribution throughout allowing each grain of rice and achieve the desired level of softness, Fluffiness, Mositure content. Precision tempreature and pressure controls provide operators with the ability to fine-tune cooking parameters according to specific rice type of rice of recipe requirements, ensuring consistency and repeaability in production. This automated control not only improvee quality but also reduces the dependence on manual labor, minimizing human error and increasing overall efficiency in the production line</span>,
      <br key="br1"></br>,
      <span key="txt2"> Designed with efficiency in mind, the system optimize energy consumption by using steam effectively and maintaqin thermal stability throughout the cooking process. It Robust construction with food grade, Hygienic materials ensures compliance with international food safety standards and allows for easy cleaning and maintenance, which is critical in maintaining hygiene in high-capacity food processing operations. The Rice Cooking System integrates seamlessly into RTE production lines, Complementing upstream and downstream equipmnet, such as mixing packaging and retrot system. it scalable design allows manufactuers to expand production capacity without compromising quality or operational efficiency, making it an ideal solution for growing food processing businesses.</span>,
      <br key="br2"></br>,
      <span key="txt3">This Advanced Rice Cooking System for RTE food is designed, Engineered and supplied by KES pvt. Ltd, a trusted leader in innovative food processing solutions committed to delivering reliable, efficiency, and quality for modern industrial food production.</span>
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
        <div className="absolute inset-0 w-full h-full rounded-[2rem] bg-white border border-neutral-100 shadow-2xl overflow-hidden flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Decorative Background Blob */}

          
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

export default function RTEPouchSection() {
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
           Ready to Eat In Retortable Pouches
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