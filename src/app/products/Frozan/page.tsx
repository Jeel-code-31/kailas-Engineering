"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Inspection Belt conveyor for fruit and  vegetable frozen processing",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/products/Frozen/First.png",
    content:[
      <span key="txt1">The Inspection Belt Conveyor is a precision-engineered system designed to optimize quality control and streamline inspection processes across multiple industries. Its primary purpose is to provide a smooth, continuous, and controlled movement of products, enabling operators or automated systems to efficiently identify and remove defective items, contaminants, or inconsistencies before they move further along the production line. By serving as a critical checkpoint, the conveyor significantly reduces the risk of defective batches and ensures consistent product quality.

Equipped with a high-performance belt system, the conveyor offers adjustable speed controls, allowing operators to set the pace according to product type, inspection intensity, and overall line requirements. The ergonomic design ensures operator comfort, while the option of customizable belt widths makes it suitable for a wide range of products across industries. In food processing, for example, it helps maintain hygiene and safety by facilitating the removal of unwanted pieces. In pharmaceuticals, it ensures compliance with stringent standards by allowing thorough inspection of tablets, capsules, or packaged goods. Similarly, in electronics, it aids in detecting defects or irregularities that could compromise performance.</span>,
      <br key="br1"></br>,
      <span key="txt2">To further enhance accuracy and efficiency, the conveyor can be integrated with specialized lighting systems, providing clear visibility for manual inspection, or with automated reject mechanisms, enabling real-time removal of faulty products without halting production. Built from durable, high-quality materials, it is designed for long service life, easy cleaning, and minimal maintenance, making it both cost-effective and reliable.

Seamless integration with upstream and downstream equipment ensures smooth operation in continuous production environments, reinforcing its role as a vital component in modern inspection systems.</span>,
      <br key="br2"></br>,
      <span key="txt3">This advanced solution is developed and delivered by Kailas Engineering Solutions Pvt. Ltd., a trusted partner in providing innovative, high-performance machinery for global industrial applications.</span>,
    ]  },
  {
    id: 2,
    title: "Rotary Washer",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/products/Frozen/second.png",
  content:[
    <span key="txt1">The Rotary Washer for Fruit & Vegetable Frozen Processing is an advanced cleaning solution specifically engineered to deliver high efficiency, reliability, and superior hygiene in food processing operations. Its primary function is to clean frozen fruits and vegetables thoroughly, ensuring they are free from dirt, debris, or residual ice crystals before moving to the next stage of processing or packaging. By incorporating a rotating drum mechanism, the washer ensures that every surface of the product is uniformly exposed to water sprays and gentle agitation, achieving consistent and effective cleaning without damaging the delicate texture of the produce.

The system utilizes a carefully balanced combination of water circulation, high-pressure spray jets, and mechanical rotation, enabling it to dislodge impurities while maintaining the integrity of the fruits and vegetables. This design makes it particularly well-suited for high-volume processing lines where speed and accuracy are critical. Its ability to preserve the natural freshness, appearance, and nutritional quality of frozen produce makes it a valuable asset for food processors aiming to meet both domestic and international standards.</span>,
    <br key="br1"></br>,
     <span key="txt2"></span>,
    <br key="br2"></br>,
     <span key="txt3">Built with durable, food-grade stainless steel, the rotary washer ensures long-lasting performance and strict compliance with food safety requirements. Its easy-to-clean design, along with optional CIP (Clean-in-Place) systems, minimizes downtime and enhances sanitation, while the low-maintenance construction helps reduce operational costs. User-friendly controls and an ergonomic layout further improve efficiency, making it simple for operators to manage and monitor the washing process.

Designed to integrate seamlessly into modern frozen fruit and vegetable processing lines, this washer provides consistent output, improved product quality, and greater overall productivity. It is a vital component for processors who demand reliable, hygienic, and energy-efficient washing solutions.</span>,
    <br key="br3"></br>,
     <span key="txt4">This cutting-edge rotary washer is proudly offered by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in innovative food processing technologies.</span>,
  ] },
  {
    id: 3,
    title: "Continuous Peeler for fruit and vegetable frozen processing",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/products/Frozen/three.png",
   content:[
    <span key="txt1">The Continuous Peeler for Fruit & Vegetable Frozen Processing is a precision-engineered solution designed to streamline one of the most critical stages of food processing — peeling. In large-scale operations, where speed, uniformity, and product quality are essential, this machine offers a highly efficient and automated approach to peeling frozen fruits and vegetables. By eliminating the need for extensive manual labor, it not only improves productivity but also reduces labor costs and human error, ensuring consistent output across every batch.

The system employs advanced peeling technology that combines mechanical action with precise control to deliver smooth, accurate, and uniform peeling. Capable of handling a wide variety of fruits and vegetables, the machine maintains the natural shape and integrity of the product while effectively removing skins. Its design is optimized to minimize product waste, allowing processors to maximize yield and achieve better process economics, especially in high-volume operations.</span>,
    <br key="br"></br>,
    <span key="txt2">Constructed from durable, food-grade stainless steel, the peeler is built to withstand continuous operation in demanding industrial environments while complying with strict hygiene and safety standards. Its user-friendly interface allows operators to easily monitor and adjust parameters, ensuring flexibility for different types of produce and peeling requirements. With low maintenance needs and easy-to-clean components, downtime is significantly reduced, making the system both reliable and cost-effective.

The continuous processing capability of the machine allows it to integrate seamlessly with upstream washing and downstream cutting or freezing equipment, creating a smooth and efficient workflow. This integration enhances overall line performance while ensuring consistent product quality that meets both domestic and international food industry standards.</span>,
    <br key="br1"></br>,
    <span key="txt3">This advanced peeler is proudly designed and delivered by Kailas Engineering Systems Pvt. Ltd., a trusted partner in providing innovative, reliable, and high-performance machinery for global food processing industries.</span>,

   ] },
  {
    id: 4,
    title: "Bubble Washer ",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/products/Frozen/four.png",
    content:[
      <span key="txt1">The Bubble Washer for Fruit & Vegetable Frozen Processing is an innovative cleaning solution designed to meet the growing demands of hygiene, safety, and efficiency in the food processing industry. Washing is one of the most critical steps in vegetable and fruit processing, as it directly impacts the quality and safety of the final product. This advanced machine ensures superior cleaning while preserving the natural structure, freshness, and appearance of fruits and vegetables.

The system works on the principle of combining high-pressure water jets with air bubbles that create gentle yet powerful agitation. This process dislodges dirt, pesticides, and other contaminants effectively, even from hard-to-reach surfaces and crevices of the produce. Unlike conventional washing methods, the bubble technology ensures that cleaning is both thorough and non-damaging, making it ideal for delicate products that require special care during processing.</span>,
      <br key="b1"></br>,
      <span key="txt2">Equipped with an adjustable water flow system, the Bubble Washer offers flexibility to handle a wide range of fruits and vegetables with varying cleaning needs. The machine is also integrated with a robust filtration mechanism, which continuously removes impurities from the water, ensuring optimal cleaning efficiency and reducing the need for frequent water replacement. This not only maintains the highest hygiene standards but also contributes to minimal water wastage, supporting sustainable processing practices.

Constructed from food-grade stainless steel, the washer is built for durability, easy maintenance, and compliance with international food safety standards. Its design enables quick cleaning of internal parts, reducing downtime and ensuring smooth operation in high-volume production environments.</span>,
      <br key="b2"></br>,
      <span key="txt3">With its superior performance, energy efficiency, and ability to safeguard product integrity, the Bubble Washer has become an essential component in modern vegetable and fruit frozen processing lines. This state-of-the-art solution is proudly engineered and delivered by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in food processing machinery.</span>,
      <br key="b3"></br>,
    ] },
  {
    id: 5,
    title: "Marigo Round Three-Tier Conveyor for fruit and vegetable frozen processing",
    category: "Step 05",
    icon: <Droplets size={20} />,
    image: "/products/Frozen/five.jpeg",
    content: [
      <span key="t1">The Marigo Round Three-Tier Belt Conveyor is a modern and highly efficient material handling system, specifically designed to address the unique needs of Fruit & Vegetable Frozen Processing industries. In today&apos;s food processing plants, where efficiency, hygiene, and space optimization are critical, this conveyor system stands out as a smart and reliable solution. Its distinctive three-tier round belt design is engineered to maximize floor space utilization, allowing processors to achieve a continuous and smooth product flow without requiring expansive layouts. This makes it especially valuable in facilities where available space is limited but production demands are high.

The conveyor ensures seamless and hygienic product handling, minimizing manual intervention and reducing the risk of contamination. Built with food-grade, high-quality materials, it meets stringent international food safety and hygiene standards. The design also allows for easy cleaning and maintenance, ensuring minimal downtime and consistent performance in demanding production environments.</span>,
      <br key="b1"></br>,
      <span key="t2">Durability is another hallmark of this system. With robust construction and precision engineering, the Marigo Round Three-Tier Belt Conveyor offers long service life even under continuous operation. Its smooth belt movement ensures that products are transported gently yet efficiently, preserving their integrity throughout the freezing or processing stages. Additionally, its modular design allows easy integration into existing processing lines, enhancing operational flexibility.

By streamlining movement and minimizing bottlenecks, this conveyor contributes to higher throughput, better productivity, and improved workflow management. Its innovative structure not only optimizes processing efficiency but also provides long-term savings by reducing operational costs and enhancing output consistency.</span>,
      <br key="b2"></br>,
      <span key="t3">With its advanced design, hygienic construction, and commitment to efficiency, the Marigo Round Three-Tier Belt Conveyor has become an indispensable asset for modern food processors. This cutting-edge equipment is proudly offered by Kailas Engineering Solutions Pvt. Ltd., a trusted name in delivering innovative, reliable, and productivity-driven food processing solutions.</span>
    ]},
  {
    id: 6,
    title: "Pea Podder for fruit and vegetable frozen processing",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/products/Frozen/six.png",
    content:[
      <span key="t1">
The Pea Podder Machine is an advanced solution designed to streamline the processing of green peas with accuracy, efficiency, and care. In the food industry, where quality and uniformity are essential, this machine ensures that the delicate task of removing the outer layer of peas is performed with precision while maintaining the integrity of the inner pea. Unlike traditional methods, which often risk crushing or damaging the product, this system has been engineered to gently separate the outer skin, ensuring maximum yield and consistent quality output.

Built from food-grade stainless steel, the machine guarantees the highest levels of hygiene, making it suitable for use in large-scale food processing environments. Its design supports continuous operation, enabling processors to handle significant volumes without interruptions, thereby improving overall productivity. The machine&apos;s gentle handling mechanism preserves the natural taste, texture, and nutritional value of the peas, which is critical for industries that rely on clean and intact raw materials for further processing.</span>,
      <br key="b1"></br>,
      <span key="t2">The Pea Podder Machine is ideal for pre-processing stages such as grinding, cooking, or freezing, where the removal of the outer skin is a prerequisite. With minimal maintenance requirements and user-friendly operation, it ensures a cost-effective and efficient solution for modern processing plants. Its robust construction also ensures durability, allowing it to perform reliably even under demanding industrial conditions.

By reducing manual labor and enhancing efficiency, this equipment not only saves time but also ensures consistent product quality. Its precision-engineered design reflects a balance of innovation, durability, and functionality, making it an essential investment for food manufacturers focused on delivering high-quality pea-based products.</span>,
      <br key="b2"></br>,
      <span key="t3">This state-of-the-art machine is proudly offered by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in providing advanced and reliable food processing machinery tailored to meet the growing demands of the industry.</span>,
    ]},
  {
    id: 7,
    title: "Two Stage Grader for fruit and vegetable frozen processing",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/Products/Frozen/Seven.png",
    content: [
      <span key="t1">The Two-Stage Grader for Frozen Processed Fruits and Vegetables is a technologically advanced solution designed to meet the growing demands of modern food processing industries. Grading is one of the most critical steps in ensuring that only the highest quality produce proceeds to packaging and distribution. This specialized machine provides a highly accurate and efficient grading process, ensuring that fruits and vegetables are sorted precisely according to size and quality.

The grader operates on a two-stage separation system for enhanced precision. In the first stage, vibrating screens are used to separate the produce based on size, ensuring uniformity and consistency in the output. This step helps to eliminate undersized or oversized pieces early in the process. The second stage employs adjustable rollers and refined mechanisms to classify the produce according to specific quality parameters such as firmness, surface defects, or other visual indicators. This two-layered approach guarantees a more reliable and accurate grading system compared to single-stage graders.</span>,
      <br key="b1"></br>,
      <span key="t2">Constructed with robust and food-grade materials, the grader is designed for continuous operation in demanding industrial environments. Its ergonomic design and user-friendly controls allow operators to manage the grading process with ease, while the low-maintenance construction reduces downtime and operating costs. The system can handle large volumes of frozen processed fruits and vegetables, making it an ideal solution for companies aiming to maximize productivity while maintaining strict quality standards.

By integrating this grader into their production line, processors can significantly improve efficiency, reduce manual intervention, and enhance the overall value of their products. With its combination of reliability, precision, and durability, this equipment stands out as a critical investment for high-volume frozen processing plants.</span>,
      <br key="b2"></br>,
      <span key="t3">The Two-Stage Grader is proudly manufactured and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted name in delivering innovative and reliable food processing machinery.</span>,
    ] },
  {
    id: 8,
    title: "Float Washer for fruit and vegetable frozen processing",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/Products/Frozen/Eight.png",
    content: [
      <span key="s1">The Float Washer is an advanced and reliable cleaning system designed to meet the stringent hygiene and quality requirements of modern fruit and vegetable frozen processing industries. Effective cleaning is a crucial step in food processing, as it ensures that the raw materials entering further stages of production are free from contaminants while preserving their natural integrity. The Float Washer achieves this balance by employing a gentle flotation-based washing process that is both efficient and safe for delicate produce.

The machine works by submerging fruits and vegetables in water, where lighter materials, such as leaves, dirt, and debris, are separated naturally as the produce floats. This process not only enhances cleaning efficiency but also minimizes mechanical stress, preventing damage to sensitive products like peas, beans, carrots, or leafy vegetables. The flotation mechanism ensures a uniform wash across the batch, resulting in consistently clean produce ready for freezing, cutting, or packaging.</span>,
      <br key="b1"></br>,
      <span key="s2">Built with high-quality food-grade stainless steel, the Float Washer guarantees durability, corrosion resistance, and easy maintenance. It is equipped with advanced automation features that allow continuous operation with minimal manual intervention, reducing labor costs while improving productivity. The system also incorporates efficient water circulation and filtration mechanisms, ensuring hygienic operation and minimizing water wastage—an essential feature for sustainable food processing.

With its robust construction and user-friendly design, the Float Washer integrates seamlessly into modern processing lines, offering processors a dependable solution for high-capacity cleaning. Its hygienic design ensures compliance with international food safety standards, making it suitable for export-oriented and large-scale facilities.</span>,
      <br key="b2"></br>,
      <span key="s3">The Float Washer not only delivers superior cleaning performance but also enhances product quality, safety, and efficiency throughout the processing chain. This cutting-edge machine is designed, engineered, and supplied by Kailas Engineering Solutions Pvt. Ltd., a trusted leader in innovative food processing equipment.</span>,
    ] },
   {
    id: 9,
    title: "IQF Feeding",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/Products/Frozen/nine.png",
    content: [
      <span key="s1">The IQF Feeding Elevator is an advanced system specifically designed to ensure the smooth, efficient, and hygienic transfer of fruits and vegetables in frozen processing lines. As a critical link in Individually Quick Frozen (IQF) operations, this elevator guarantees a consistent product flow from the preparation stage to the freezing stage, reducing manual handling and improving overall productivity. By automating the feeding process, it not only enhances efficiency but also ensures greater food safety and reliability.

Engineered with gentle product handling in mind, the elevator minimizes breakage or damage to delicate produce such as peas, diced carrots, corn, beans, and other frozen items. Its precision design ensures that products are transported evenly and steadily, maintaining their natural shape, texture, and quality throughout the process. This is especially important in IQF systems, where uniform freezing is essential for preserving nutritional value and appearance.</span>,
      <br key="b1"></br>,
      <span key="s2">Constructed from food-grade stainless steel, the elevator is highly durable, corrosion-resistant, and compliant with strict international hygiene standards. Its surfaces are designed for easy cleaning, and the structure is compatible with CIP (Clean-In-Place) systems, ensuring quick sanitation with minimal downtime. This makes the equipment not only efficient but also sustainable for large-scale food processing operations.

Equipped with variable speed and load control mechanisms, the IQF Feeding Elevator offers processors flexibility to adjust to different product types, batch sizes, or downstream processing requirements. This adaptability ensures seamless integration with existing IQF lines and maximizes output efficiency.</span>,
      <br key="b2"></br>,
      <span key="s3">With its combination of robust construction, advanced automation, and user-friendly design, the IQF Feeding Elevator has become an indispensable component in modern frozen food production. Manufactured with precision and reliability, this system reflects the expertise and commitment of Kailas Engineering Solutions Pvt. Ltd., a trusted name in innovative food processing equipment.</span>
    ]}
];

// Reusable Flip Card Component
const FlipCard = ({ data }: { data: typeof processingSteps[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[5/4] [perspective:1500px] group cursor-pointer">
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
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
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

export default function FrozenProcessingSection() {
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
           Fruit And Vegetable Frozen Processing
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