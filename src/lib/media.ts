export type GalleryItem = {
  src: string;
  alt: string;
};

export type MediaItem = {
  slug: string;
  src: string;
  title: string;
  category: string;
  date: string;
  description: string | string[];
  gallery: GalleryItem[];
};

export const mediaData: MediaItem[] = [
  {
    slug: "anuga-food-tech-exhibition",
    src: "/event/Anuga.jpg",
    title: "Anuga Food Tech Exhibition-20th to 22nd August 2025",
    category: "Event-1",
    date: "22-08-2025",
    description: [
      "As a global platform for innovation, The Anuga FoodTec Exhibiton 2025 provided Kailas Engineering Systems with an exceptional opportunity to Showcase its Technological leadrship in food processing machinery System design. Our Team presented a range of advanced equipment engineered for efficiency, Consistency, And hygiene- reflecting our dedication to excellence and reliblity.",
      "Througut the three-day event, We Engaged with international partners, Industry experts, and Prospective clients, Discussing Cutting edge development in automatio, Energy optimization and process innovation. The exhibition also allowed us to explore collabrative opportunities for exporting Indian engineering solutions to global markets.",
      "Our Participation At Anuga reinforced Kailas Engineering Systems Global presence and commitment to contributing to the evolution of modern food innovation, Customer-centric design, And Quality-driven Manufacturing can postion India Engieering compnies at forefront of Global food industry transformation."
    ],
    gallery: [
      { src: "/Event/Event1/1.jpeg", alt: "Event image-1" },
      { src: "/Event/Event1/2.jpeg", alt: "Event image-2" },
      { src: "/Event/Event1/3.jpeg", alt: "Event image-3" },
      { src: "/Event/Event1/4.jpeg", alt: "Event image-4" },
      { src: "/Event/Event1/5.jpeg", alt: "Event image-5" },
      { src: "/Event/Event1/6.jpeg", alt: "Event image-6" },
      {src: "/Event/Event1/7.jpeg", alt: "Event image-7" },
      { src: "/Event/Event1/8.jpeg", alt: "Event image-8" },
      { src: "/Event/Event1/9.jpeg", alt: "Event image-9" },
      { src: "/Event/Event1/10.jpeg", alt: "Event image-10" },
      { src: "/Event/Event1/11.jpeg", alt: "Event image-11" },
      { src: "/Event/Event1/12.jpeg", alt: "Event image-12" },
      { src: "/Event/Event1/13.jpeg", alt: "Event image-13" }

    ]
  },
  {
    slug: "csir-cftro-food-enterprise-conclave",
    src: "/event/Green.jpg",
    title: "CSIR-CFTRO Food Enterprise Conclave 2025-15th july 2025",
    category: "Event-2",
    date: "15th-07-2025",
    description: [
      "Kailas Engineering Systems was honored to participste in the CSIR-CFTRI Food Enterprise Conclave 2025, a premier gathering of scientists, Enterpreneurs, and Technology leaders from the food processing sector. The event served as collabrative platform to discuss advancements in food science, Engineering Solutions, and enterpreneurhip opportunities shaping Indian's food Economy.",
      "Our team showcased expertise in process design, Automation and equipment innovation, Contributing valuable insights into optimizing efficency and product quality. Engaging with researchers and food technologists allowed us to exchange ideas on sustainable process systems and Scalable engineering models for small and medium enterprises.  ",
      "Participation in this conclave aligned with our mission to bridge the gap between scientific research and industrial applicatio. It also strengthened our partnerships with leading institutions dedicated to advancing food technology. Through such engagements, Kailas Engineering Systems Continues to play an active role in driving india's vision for a globally competitive and sustainable food processing industry."
    ],
    gallery: [
     
    ]
  },
  {
    slug: "blood-donation-camp",
    src: "/event/Blood.jpg",
    title: "Blood Donation Camp",
    category: "Culture",
    date: "09-07-2025",
    description: [
      "Corporate responsiblity extends beyond business objectives- it involves giving back to socitey. On 9th july 2025, Kailas Engineering Systems organized a Blood Donation Camp in Collboration with a local Healthcare Organization. The initiative witness enthusiastic Participation from employees across departments, United by a shared purpose of saving lives.",
      "The event aimed to raise awareness about the importance of regular blood donation and its impact on public health. Medical profesionals guided the process, Ensuring safety and comfort for all donors. The overwhelming response reflected the strong sense of compassion and social responsiblity within our organization.",
      "For Kailas Engineering Systems, The blood donation camp represented more than single-day-event- it was embodiment of our core values: Humanity integrity, and Community support. By Engaging our workforce ub such initiatives, We Continue to strengthen our corporate culture of empathy and collaboration, Reinforcing our belief that collective action can bring real, Positive change to society"
    ],
    gallery: [
      { src: "/Event/Event2/1.jpg", alt: "Event image-1" },
      { src: "/Event/Event2/2.jpg", alt: "Event image-2" },
      { src: "/Event/Event2/3.jpg", alt: "Event image-3" },
      { src: "/Event/Event2/4.jpg", alt: "Event image-4" },
      { src: "/Event/Event2/5.jpg", alt: "Event image-5" },
      { src: "/Event/Event2/6.jpg", alt: "Event image-6" },
      {src: "/Event/Event2/7.jpg", alt: "Event image-7" },
      { src: "/Event/Event2/8.jpg", alt: "Event image-8" },
      { src: "/Event/Event2/9.jpg", alt: "Event image-9" },
      { src: "/Event/Event2/10.jpg", alt: "Event image-10" },
    ]
  },
  {
    slug: "green-cold-chan-convlave",
    src: "/event/Grun.png",
    title: "Green Cold Chan Convlave",
    category: "Culture",
    date: "29-06-2025",
    description: [
      "Sustainability lies at the coe of modern engineering, and Kailas Engineering Systems proudly participated in the Green Cold Chain Conclave 2025, Held to promote energy-efficient and eco-friendly food preservation solutions. As a leader in food processing technology, Our Team shared insights on designing sustaiable system that minimize waste, Optimize energy use, and Ensure Food Safety across the supply chain",
      "Our Participation emphasized the importance of integratining Green Technologies into cold chain operations- from advancd refrigeration systems to intellient process automation. The event brought togeather key stakeholders, including industrt experts, Policymakers, and Technology uinnovators, all working towards a unified goal of reducing the environmental footprint of food logistics.",
      "For Kailas Engineering Systems, This conclave was more than exhibition for capabilities- it was an opportunity to contribute to the larger dialogue on responsible engerring partner dedicated to balacing technological advancement with environmental stewarship.",
      
    ],
          gallery: [
      
    ]
  },
  {
    slug: "international-yoga-day",
    src: "/event/Yoga.jpg",
    title: "International Yoga Day",
    category: "Culture",
    date: "28-05-2025",
    description:[
        "At Kailas Engineering Systems, We organize that well-being of our people is vital to innovation and productivity. To celebrate Internation Yoga day 2025, Our Tean cane togeather for a rejuvenating session promoting physica;, Mental, and emotional balance. The event Began with guided yoga session conducted by a Certified instrutor, Focusing on postures that reduce stress and improve posture for employess working in demanding technical environments. Meditation and breathing exercise followed, Helping everyone reconnect with mindfukness and focuse.",
        "Beyond Physical health, the day symbolized the company's dedication to holistic development-fostering a workplace where employees thrive personally and proffesionally. By encouraging wellness initiative like this, Kailas Engineering Systems Reinforces it's Commitment to creating a culture of harmony, Awarness, And self-care. The enthusiastic participation and shared energy made this yoga day celebration a meaningful reminder that true engineering excellence begins with a healthy, Focused mind and body",
    ],
    gallery: [
      
    ]
  }
];