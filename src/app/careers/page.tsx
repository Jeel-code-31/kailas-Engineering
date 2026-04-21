"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Lightbulb, TrendingUp, Heart, ChevronRight, X, UploadCloud, FileText } from "lucide-react";

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [fileName, setFileName] = useState("");
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);

  const benefits = [
    { title: "Skill Growth", desc: "Access to latest CNC/VMC technology and engineering software.", icon: <TrendingUp /> },
    { title: "Great Culture", desc: "Collaborative and supportive environment in our Pune units.", icon: <Users /> },
    { title: "Innovation", desc: "Work on complex projects for global industrial leaders.", icon: <Lightbulb /> },
    { title: "Care", desc: "Comprehensive health and safety standards for all members.", icon: <Heart /> }
  ];

  const jobs = [
    { 
      role: "CNC Operator", 
      location: "Bhosari, Pune", 
      type: "Full-Time",
      description: "Responsible for setting up, operating, and maintaining CNC machines. You will read blueprints, monitor machine operations, and inspect finished products to ensure they meet our rigorous quality and precision standards.",
      responsibilities: [
        "Set up and manage CNC machines to perform different jobs including drilling, grinding, and milling.",
        "Translate engineering drawings and requirements into dimensions for production.",
        "Monitor machine operations to ensure proper functioning and safety.",
        "Inspect and measure finished products to ensure precise conformance to specifications.",
        "Perform routine machine maintenance and troubleshoot minor mechanical issues."
      ],
      requirements: [
        "ITI / Diploma in Mechanical Engineering, Machining, or a related field.",
        "Proven experience (2+ years) working as a CNC Operator.",
        "Ability to read and interpret mechanical documents and blueprints.",
        "Proficiency in using precision measuring tools (calipers, micrometers, etc.).",
        "Strong attention to detail and a commitment to workplace safety."
      ]
    },
    { 
      role: "Quality Control Engineer", 
      location: "Bhosari, Pune", 
      type: "Full-Time",
      description: "Oversee the quality assurance process for all manufactured food processing machinery components. Duties include conducting precise measurements, running tests, maintaining ISO documentation, and driving continuous improvement.",
      responsibilities: [
        "Perform incoming, in-process, and final quality inspections on machined parts and assemblies.",
        "Maintain accurate documentation of test results, defects, and corrective actions.",
        "Collaborate with the production team to identify root causes of manufacturing defects.",
        "Ensure all processes adhere to company quality standards and ISO requirements.",
        "Propose improvements to the manufacturing process to enhance product quality."
      ],
      requirements: [
        "Bachelor&apos;s Degree in Mechanical Engineering, Manufacturing Engineering, or similar.",
        "3+ years of experience in a quality control role within a manufacturing environment.",
        "Expertise in operating standard measuring equipment (CMM, Vernier calipers, gauges).",
        "Solid understanding of GD&T (Geometric Dimensioning and Tolerancing).",
        "Excellent analytical and problem-solving skills."
      ]
    },
    { 
      role: "Project Manager", 
      location: "Corporate Office", 
      type: "Full-Time",
      description: "Lead end-to-end manufacturing projects. You will coordinate between design, engineering, and production teams, manage timelines, oversee budgets, and ensure our custom machinery is delivered to clients on schedule.",
      responsibilities: [
        "Develop comprehensive project plans, including timelines, resource allocation, and budgets.",
        "Act as the primary point of contact between clients and internal engineering/production teams.",
        "Monitor project progress and proactively identify and mitigate potential risks or delays.",
        "Facilitate regular project status meetings and provide clear reports to management.",
        "Ensure final machinery delivery meets client specifications and company quality standards."
      ],
      requirements: [
        "Bachelor&apos;s Degree in Engineering, Business Administration, or a relevant field.",
        "Minimum 5 years of proven project management experience, preferably in heavy machinery or manufacturing.",
        "PMP (Project Management Professional) certification is highly desirable.",
        "Strong proficiency in project management software (MS Project, Jira, etc.).",
        "Exceptional leadership, negotiation, and communication skills."
      ]
    }
  ];

  const handleApplyClick = (role: string) => {
    setSelectedJob(role);
    setIsModalOpen(true);
    setFileName(""); // Reset file on new open
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const toggleJobDetails = (index: number | null) => {
    setExpandedJobIndex(expandedJobIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-secondary/20 min-h-screen">
      {/* Page Header */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Layer with Parallax & Ken Burns */}
        <motion.div
          className="absolute inset-0 z-0"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" as const }}
            className="relative w-full h-full"
          >
            <img
              src="/Apply.jpg"
              alt="Precision Industrial Engineering"
              className="object-cover brightness-[1] contrast-[1.1]"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-8 font-heading text-orange-500 uppercase">Start Your Career At Kailas Engineering Solutions Pvt.Ltd</h2>
            <p className="text-muted max-w-3xl font-medium text-lg sm:text-xl leading-relaxed mx-auto lg:mx-0 font-body">
              At<strong className="text-black"> Kailas Engineering Solutions Pvt.Ltd</strong>.
              we Believe that Great people build great machines. As a leading manufacturer of <strong className="text-black">Food Processing Machinery</strong>.We are committed to designing innovative,reliable,and high-performance solutions that empower food businesses across india and beyond.<br/> 
              Our success is powered by our team of Engineers, Designers, Technicians, and Professionals who share a passion for Technology, Problem-solving, And Delivery excellence. If you are driven to create meaningful impact and grow with an organization that values Innovation, Collaboration, And Continuous Learning- you&apos;ve come to the right place. 
            </p>
          </div>
        </div>
      </section>

      {/* Why KES Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold text-primary mb-8 font-heading tracking-tight uppercase">Craft Your Career Escalation</h2>
            <p className="text-muted text-lg font-body leading-relaxed">
              At Kailas Engineering Services, we believe our people are our most precise assets. 
              We provide an environment that fosters technical mastery and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-transparent rounded-[2.5rem]  transition-all border border-orange-500 group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 font-heading">{benefit.title}</h4>
                <p className="text-muted text-sm leading-relaxed font-body">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-32 bg-secondary border border-orange-500 text-mute">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
               <h2 className="text-5xl md:text-5xl font-black text-orange-500 tracking-tighter leading-none uppercase font-heading">Active <br /> Roles.</h2>
            </div>
            <p className="max-w-md text-mute/60 font-medium text-lg leading-relaxed mb-4 border-l-4 border-accent/20 pl-8 font-body">
              If you don&apos;t see a role that fits but think you belong here, send us your brief.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="p-8 md:p-10 bg-transparent border border-orange-500 rounded-[2rem] flex flex-col group transition-all"
              >
                {/* Main Row Content */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h4 className="text-2xl font-bold font-heading mb-2 text-black group-hover:text-accent transition-colors">{job.role}</h4>
                    <p className="text-white/40 text-sm font-body uppercase tracking-widest">{job.location} • {job.type}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-8 md:mt-0">
                    <button 
                      onClick={() => toggleJobDetails(i)}
                      className="text-sm font-bold text-orange-500 hover:text-orange-600 underline underline-offset-4 transition-colors"
                    >
                      {expandedJobIndex === i ? "Show Less" : "Read More"}
                    </button>
                    <button 
                      onClick={() => handleApplyClick(job.role)}
                      className="group/btn relative overflow-hidden bg-accent text-primary px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all active:scale-95"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Apply Now <ChevronRight size={16} />
                      </span>
                      <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Expandable Details Section */}
                <AnimatePresence>
                  {expandedJobIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="pt-6 border-t border-orange-500/30">
                        <h5 className="text-xl font-bold text-black mb-3 font-heading">Role Overview</h5>
                        <p className="text-muted/80 text-base leading-relaxed font-body max-w-4xl mb-8">
                          {job.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                          {/* Responsibilities */}
                          <div>
                            <h6 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Key Responsibilities</h6>
                            <ul className="space-y-3">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start text-muted/80 text-sm font-body leading-relaxed">
                                  <span className="text-orange-500 mr-3 mt-1 text-lg leading-none">•</span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h6 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Qualifications & Requirements</h6>
                            <ul className="space-y-3">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start text-muted/80 text-sm font-body leading-relaxed">
                                  <span className="text-orange-500 mr-3 mt-1 text-lg leading-none">•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10 my-auto"
            >
              {/* Modal Header */}
              <div className="bg-primary p-8 text-white flex justify-between items-start">
                <div>
                  <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">Application Form</p>
                  <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight">
                    {selectedJob}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-8 md:p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider font-body">Full Name</label>
                      <input type="text" className="w-full bg-secondary/10 border border-gray-200 text-primary px-5 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors font-body" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider font-body">Email Address</label>
                      <input type="email" className="w-full bg-secondary/10 border border-gray-200 text-primary px-5 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors font-body" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider font-body">Phone Number</label>
                    <input type="tel" className="w-full bg-secondary/10 border border-gray-200 text-primary px-5 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors font-body" placeholder="+91 98765 43210" required />
                  </div>

                  {/* Custom File Upload Area */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider font-body">Upload Resume (PDF, DOCX)</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-accent hover:bg-accent/5 transition-colors group text-center cursor-pointer">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                        required 
                      />
                      <div className="flex flex-col items-center justify-center pointer-events-none relative z-10">
                        {fileName ? (
                          <>
                            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-3">
                              <FileText size={24} />
                            </div>
                            <span className="font-bold text-primary font-body">{fileName}</span>
                            <span className="text-xs text-muted mt-1">Click to change file</span>
                          </>
                        ) : (
                          <>
                            <div className="w-12 h-12 bg-secondary/20 text-primary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                              <UploadCloud size={24} />
                            </div>
                            <span className="font-bold text-primary font-body">Drag & Drop your resume here</span>
                            <span className="text-sm text-muted mt-1">or browse files</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-wider font-body">Cover Letter (Optional)</label>
                    <textarea rows={4} className="w-full bg-secondary/10 border border-gray-200 text-primary px-5 py-4 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors font-body resize-none" placeholder="Tell us why you are a great fit..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-accent text-primary font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-orange-400 transition-colors active:scale-[0.98]">
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}