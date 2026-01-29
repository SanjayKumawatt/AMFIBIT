import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CloudFog, ShieldCheck, TrendingUp, Check } from 'lucide-react';

import img from '../assets/ww.jpg'

const WhyChooseUsWithImage = () => {
  const reasons = [
    {
      icon: <BrainCircuit size={28} />,
      title: "AI-Centric Product Development",
      desc: "Artificial intelligence is embedded at the core of every product we build, enabling automation, prediction, and continuous improvement.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <CloudFog size={28} />,
      title: "Cloud-Native & Scalable",
      desc: "Our systems are designed using microservices and containerized architectures that scale reliably as business demand grows.",
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Security & Compliance Ready",
      desc: "We follow secure development practices, data protection standards, and access control mechanisms suitable for enterprise use.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Long-Term Product Vision",
      desc: "We focus on sustainable product development with clear roadmaps, regular enhancements, and evolving AI capabilities.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  // Animation variants for staggered list
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
       {/* Background subtle pattern */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- Left Column: Content & List --- */}
          <div className="flex-1 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Check size={14} /> Why Us?
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Engineering the Future with <span className="text-blue-700">Intelligent Platforms</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                Partner with AMFIBIT to leverage cutting-edge technology designed for resilience, security, and scalable growth.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {reasons.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-5 group">
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* --- Right Column: Professional Tech Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative lg:h-[600px]"
          >
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-bl from-blue-100 to-orange-50 rounded-[3rem] -z-10 rotate-3"></div>
            
            {/* Main Image Container */}
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                {/* Placeholder for a Professional Abstract Tech Image.
                   This image depicts network/data connection in blue/orange tones.
                */}
                <img 
                  src={img} 
                  alt="Advanced Technology and Data Network" 
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Optional: Tech Overlay Effect */}
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating Badge Example (Optional) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] animate-bounce hidden md:block" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                 <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Enterprise Grade</p>
                    <p className="text-lg font-extrabold text-slate-900">Security First</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWithImage;