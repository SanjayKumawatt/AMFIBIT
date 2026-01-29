import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Boxes, CloudCog, LockKeyhole, Ruler, Anchor } from 'lucide-react';

const Architecture = () => {
  const principles = [
    {
      title: "AI-First System Design",
      desc: "Integrating artificial intelligence at the foundational level, not just as an add-on.",
      icon: <Bot size={36} />,
      color: "blue"
    },
    {
      title: "Modular Microservices",
      desc: "Decoupled architecture ensuring independent deployment, maintenance, and agility.",
      icon: <Boxes size={36} />,
      color: "orange"
    },
    {
      title: "Cloud Scalability & Resilience",
      desc: "Designed for high availability with auto-scaling capabilities on modern cloud infrastructure.",
      icon: <CloudCog size={36} />,
      color: "purple"
    },
    {
      title: "Security-by-Default",
      desc: "Embedded security protocols and compliance checks throughout the development lifecycle.",
      icon: <LockKeyhole size={36} />,
      color: "emerald"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* --- Background: Blueprint Grid Effect --- */}
      <div className="absolute inset-0 opacity-[0.07]" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Decorative Blur Spots */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-3"
          >
            <Ruler size={16} /> Engineering Standards
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Architecture Principles</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Our platforms are built upon a foundation of robustness, ensuring they stand the test of time and scale.
          </p>
        </div>

        {/* --- 4 Pillars Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((item, index) => {
            // Dynamic styling based on color
            const colors = {
              blue: "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-400",
              orange: "bg-orange-500/10 text-orange-400 border-orange-500/20 group-hover:border-orange-400",
              purple: "bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:border-purple-400",
              emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-400",
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 transition-all duration-300"
              >
                {/* Connector Line Visual (Engineering look) */}
                <div className="absolute top-8 right-8 text-slate-700 opacity-20 group-hover:opacity-100 transition-opacity">
                  <Anchor size={64} strokeWidth={1} />
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border ${colors[item.color]} transition-colors duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 ${colors[item.color].replace('text', 'bg').split(' ')[0].replace('/10','')} transition-all duration-500 group-hover:w-full rounded-b-2xl`}></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Architecture;