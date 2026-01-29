import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Cloud, Layers, Database, Cpu, Globe } from 'lucide-react';

const TechStack = () => {
  const stack = [
    {
      category: "Frontend Technologies",
      icon: <Code2 size={32} />,
      desc: "Building responsive, high-performance user interfaces.",
      techs: ["React", "Next.js", "Tailwind CSS"],
      color: "blue"
    },
    {
      category: "Backend Technologies",
      icon: <Server size={32} />,
      desc: "Robust server-side logic and scalable APIs.",
      techs: ["Python", "Node.js", "NestJS"],
      color: "green"
    },
    {
      category: "AI & Machine Learning",
      icon: <BrainCircuit size={32} />,
      desc: "Advanced models driving intelligence and automation.",
      techs: ["NLP", "LLMs", "RAG", "TensorFlow", "PyTorch"],
      color: "purple"
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud size={32} />,
      desc: "Secure, scalable deployment on modern architecture.",
      techs: ["Containerization", "Microservices", "Secure Cloud Hosting"],
      color: "orange"
    }
  ];

  // Helper for dynamic colors
  const getColorStyles = (color) => {
    const styles = {
      blue: { icon: "text-blue-600 bg-blue-100", border: "hover:border-blue-400", badge: "bg-blue-50 text-blue-700 border-blue-100" },
      green: { icon: "text-emerald-600 bg-emerald-100", border: "hover:border-emerald-400", badge: "bg-emerald-50 text-emerald-700 border-emerald-100" },
      purple: { icon: "text-purple-600 bg-purple-100", border: "hover:border-purple-400", badge: "bg-purple-50 text-purple-700 border-purple-100" },
      orange: { icon: "text-orange-600 bg-orange-100", border: "hover:border-orange-400", badge: "bg-orange-50 text-orange-700 border-orange-100" }
    };
    return styles[color];
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Layers size={14} /> Technology Stack
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Built with Modern <span className="text-blue-700">Standards</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We leverage a cutting-edge technology stack to ensure our platforms are fast, secure, and ready for future scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => {
            const style = getColorStyles(item.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ${style.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${style.icon} transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.category}</h3>
                <p className="text-sm text-slate-500 mb-6 h-10">{item.desc}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${style.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;