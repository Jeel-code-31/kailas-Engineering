"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Droplets, Sun, Flame, Package } from "lucide-react";

// Mock Data for Tomato Processing
const processingSteps = [
  {
    id: 1,
    title: "Fruit Washer",
    category: "Step 01",
    icon: <Sun size={20} />,
    image: "/Products/Pulp/second.png",
    content: [
      <span key="text1">The Fruit washer by Kailas Engineering Solutions pvt.ltd is an essential machine in modern fruit pulp processing lines, ensuring that only clean, Contaminant-free fruits enter the production cycle manufactured from high-grade stainless steel(ss 304), the washer is designed for strength, durability and strict compliance with food safety standards making t suitable for both domestic and export-oriented processors</span>,
      <br key="br1"></br>,
      <span key="text2">At the Core of it&apos;s operation, the washer combines bubble agitation, water circulation and high pressure spray nozzle to deliver through cleaning. This multi-stage approach ensures that fruits are effectively rid of dirt, pesticide residues, Dust, and other foreign particles. It can handle a wide variety of fruits, including mangoes, guavas, papayas, pineapples, without causing surface damage. The system is engineered to reduce mechanical stress, Thereby preserving the fruit&apos;s natural texture and integrity- an important factor in producing premium- Quality pulp</span>,
       <br key="br2"></br>,
     <span key="text3">The Washer also integrates a water recirculation and filtration Unit, promoting sustainable by minimizing water consumption while maintaing high standards of hygiene. This eco-efficient design not only reduce operatonal costs but also aligns with modern processors cosuce on resource conservation. An optional outfeed conveyor system further enhance work flow efficiency by ensuring smooth transfer of cleaned fruits to the next stage, such as inspection, pulping, destoning</span>,
     <br key="br3"></br>,
     <span key="text4">Hygiene and microbial control at the forefront of it design. By minimizing microbial load during washing the machine supports longer shelf life and better stablility of the final pulp products. Available in various capacty and both semi-automatic and fully automatic models, the washer offers processors the flexiblity to scale operations according to production requirements.</span>
    ]
 },
  {
    id: 2,
    title: "Inspection cum cutting belt converyor",
    category: "Step 02",
    icon: <Droplets size={20} />,
    image: "/Products/Pulp/third.png",
    content: [
      <span key="text1">The Inspection cum cutting belt conveyor by kailas engineering solutions Pvt. Ltd. is a vital component in tropical fruit pulp and puree processing lines, designed to bring precision, hygiene, and efficiency to the inital stages of fruit handling. This system allows for thorugh manual inspection and cutting of raw fruits before they proceed to pulping, ensuring that only the best-quality produce enters the next stage of processing.</span>,
      <br key="br1"></br>,
      <span key="text2">Built with a robust stainless steel frame and equipped with a food-grade modular blet, the conveyor guarantees smooth, controlled, and contamination-free movement of fruits. The modular belt design helps reduce friction and prevents unnecessary bruiing or damage to delicate fruits like mangoes, gauvas or papayas. The conveyor is thoughtfully engineered with an ergonomically designed working platform on boh sides, enabling operators to comfortably inspect, cut, and remove unwanted portions such as blemished skin, overripe sections, or foregin materials. To further enhance accuracy, the system integrates dedicated lighting, providing clear visiblitity that supports high-quality inspection standards.</span>,
       <br key="br2"></br>,
     <span key="text3">For hygiene and ease of operation the conveyor incluedes an efficient drainage system, ensuring that the working area remains clean, dry, and free from water or juice accumulation. Adjustable speed controls make it easy to synchronize conveyor&apos;s operation with upstream fruit washing and downstream pulpinh or destoning equipment, maintainging a seamless production flow. During and ease of maintenance are also central to its design. the stainless steel construction resists corrosion, while the modular belt can be easlity cleand serviced, minimizing downtime</span>,
     
    ]
  },
  {
    id: 3,
    title: "Destoner",
    category: "Step 03",
    icon: <Flame size={20} />,
    image: "/Products/Pulp/Forth.png",
     content: [
      <span key="text1">The Destoner By Kailas Engineering Solutions Pvt. Ltd. is a critical machine in large-sclae fruit pulp processing operations, designed to deliver precision, Hygience, and efficiency. Built from high-grade stainless steel(SS 304), the destoner combines durablity with strict adherence to food safety standards, making it an ideal solution for processors aiming to produce premium-quality fruit pulp for domestic and export markets. At its core, the destoner operates using a combination of centrigugal force and mechanical sepration to remove stones, seeds, and foregin particles from fruit pulp. This advanced mechanism ensures minimal pulp loss and maximizes recover, which is especially vital for high-values fruits such as mangoes, peaches and apricots. By seprating the hard, non-edible components from the soft fruit tissue with precision, the destoner protects both product quality and downstream equipment from unnecessary wear and tear.</span>,
      <br key="br1"></br>,
      <span key="text2">The machine is designed for continous operation, allowing processors to achieve high throughout without frequent intrruptions. its modular constructioin not only simpilifice c;eaning but also reduces downtime during maintenance. Easy accessiblity to key parts ensures that sanitation and servicing can be performed efficiently , maintaining consistent hygienic standards Adaptablity is another stremgh og this system the destoner can handle a wide Verity of stone fruits, acommodating differences in size,texture,and pulp content with ease. Adjustable settings allow processors to fine-tune operations based on fruit type and desired pulp characteristics, ensurng consistent results across batches.</span>,
    
     
    ]  },
    {
    id: 4,
    title: "pulp finisher",
    category: "Step 06",
    icon: <Package size={20} />,
    image: "/Products/Pulp/Six.png",
    content:[ 
    <span key="text1">The pulp finisher is a adavanced mchine purpose for the extraction and refinement of fruit pulp in large-scale processing operations. Designed to meet the damanding requirements of modern food processors, it combines rugged engineering with precise functionality ensuring both efficiency and product consistency. constrcuted from high-grade stainless steel(ss 304), The pulper finisher offers superior durablity, Resistance to corrosion , and strict compliance with food safety standards. It&apos;s hyienc design ensures that the pulp remains contamination-free, while smooth surfaces and easy-to-access components allow for thorough cleaning and maintenance, reducing downtime and ensuring uninterrupted operations.</span>,
      <br key="br1"></br>,
      <span key="text2">The Machine employs a dual-stage processing mechanism. In the first stage, fruit are broken down as they pass through a rotating cylindrical sieve, which seprates the pulp from seed, skins and coarse fibers. in the second stage, the pulp undergoes further refinement to achieve a smoothe and uniform texture, meeting the stringent requirements of juice, Puree, bby food Ketchup and other fruit-based products. </span>,
      <br key="br2"></br>,
     <span key="text3">Equipeed with varible speed controls, the pulper finisher offers flexibility to adjust processing intensity based on fruit type and desired pulp characteristics. The customizable sieve sizes allow processors to tailor the output for different fruits-wheather it&apos;s fibrous mangoes, delicate berries, tomatoes, or citrus fruits. KES ensures each machine is optimized for maximum yeild consistent performance. In effence, the pulper finisher from KES is more than just a machine- its a critical quality-assurance tool, empowering processors to meet domestic and intrenational standars for premium fruit products.</span>
] },
  {
    id: 5,
    title: "Blending tank",
    category: "Step 04",
    icon: <Flame size={20} />,
    image: "/Products/Pulp/fifth.png",
   content: [
      <span key="text1"> the blending tank for tropical fruit pulp puree is an essential component in large-scale fruit processing linesm designed to deliver prevcise, Efficient, and hygienic mixing of pulp various additives. Built from high grade sutainless steel (SS 304), The tank offers long-lasting durablity and corrosion resistance while fully complying with international food safety standrds. It&apos;s robust design makes it suitable for handling continuous, high-capcity operations without compromising on product quality. The tanks is equipped with a bottom-or0side-mounted agitator that operates with variable speed controls, allowing processors to fine-tune mixing intensity bsaed on the product and formulation needs. this ensures thorugh distribution of ingredients such as sugar, stabilizers, flavors and preservatives, while still maintaining the delicate texture and natural mouthfeel of the fruit pulp. The agitator&apos;s gental yet effiective motion prevents over-shearing, foaming or breaking of fruit fibers, resulting in a smooth uniform blend</span>,
      <br key="br1"></br>,
      <span key="text2">By maintaining consitent blending conditions and preventing contamination, the tank direcly enhances product stability, Shelf life, and batch-to batch uniformity. It also integrates seamless into automated processing lines, supporting  modern food manufacturing demands for efficiency and reliablity. In summary the Blending tank for tropical fruit/puree is not just a mixing vessel but a quality assurance tool, ensuring premium results in every batch. It is one of the many advanced solutions offerd by KES to empower fruit processors worldwide.</span>,

     ]},

 
  {
    id: 6,
    title: "Tube in Tube Pasteurizer cum Cooler",
    category: "Step 07",
    icon: <Package size={20} />,
    image: "/Products/Pulp/last.png",
   content:[
    <span key="text1">The Tube in Tube Pasteurizer cum Cooler is a vital Machine in modern tropical pulp and puree lines, designed to ensure food Safety, Extended shelf life, And premium product quality. Thermal processing is a critical step pulp production, as it eliminates harmful micro-organisms while maintaining the natural characteristics of the fruit. This pasteuizer cum cooler is engineered to deliver consisent performance with high throughout and minimal prouduct degration. Consturected From high-grade stainless steel(SS 304), The unit is durable, corrosion-resistant, and fully cmpliant with international food safety and hygiene standars. Its sanitary construction with smooth finishes and rounded edeges reduces the risk contamination and make cleaning simple and efficient.</span>,
    <br key="br1"></br>,
    <span key="text2">the system integrates a Continuous heating and cooling process,where fruit pulp is heated to a controlled tempreature to eliminate microbial load and then rapidly cooled to preserve freshness. This precise temprature profiling ensure that the pup retains its natural flavor, color, aroma and nutritional value., which are crucial for premium ednd products such  as jusices, jams, and baby foods. Depending on the products requirements, the unit can be configured with either a tublar or plate-type heat exchanger. Both Configurations are optimized for energy efficiency and product safety, While precision temperature controllers ensure accurate monitoring and adjustment throughout the process. For Ease of maintenance and sanitation, The machine is also equipped with an automatic CIP (Clean-In-Place) System, Minimizing downtime between batches.</span>
   ] }
];

// Reusable Flip Card Component
const FlipCard = ({ data }: { data: typeof processingSteps[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full aspect-[5/3] sm:aspect-[4/3] md:aspect-[4/3] [perspective:1500px] group cursor-pointer">
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >

        {/* --- FRONT OF CARD --- */}
        <div className="absolute inset-0 w-full h-full rounded-[1rem] overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          {/* Front Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="self-end bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">

            </div>

            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

              <button
                onClick={(e) => {
                  e.stopPropagation();
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
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

          <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
            <div className="w-12 h-12 bg-orange-100 text-[#FF6A00] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              {data.icon}
            </div>

            <h3 className="text-2xl font-black text-neutral-900 mb-4 leading-tight">
              {data.title}
            </h3>

            <div className="text-neutral-500 text-sm md:text-base leading-relaxed flex-grow font-medium">
              {data.content}
            </div>

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

export default function TomatoProcessingSection() {
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
          <span className="text-[#FF6A00] font-black text-xs uppercase tracking-widest block mb-4">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-24 text-neutral-900 tracking-tight">
            Tropical Fruit & pulp Processing
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