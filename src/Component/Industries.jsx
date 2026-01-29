import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Megaphone, Truck, Briefcase, Building2, Globe2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Digital Commerce & Online Businesses",
      icon: <ShoppingCart size={32} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "group-hover:border-blue-400"
    },
    {
      title: "Marketing & Advertising Agencies",
      icon: <Megaphone size={32} />,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "group-hover:border-orange-400"
    },
    {
      title: "Logistics & Operations Teams",
      icon: <Truck size={32} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "group-hover:border-emerald-400"
    },
    {
      title: "Financial & Professional Services",
      icon: <Briefcase size={32} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "group-hover:border-purple-400"
    },
    {
      title: "Enterprise Digital Operations",
      icon: <Building2 size={32} />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "group-hover:border-cyan-400"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background World Map / Network Effect (Decoration) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Globe2 size={14} /> Global Impact
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Key Industries</span>
          </h2>
        </div>

        {/* Industries Grid (Centered Layout) */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 ${item.border}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
        >
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 max-w-3xl mx-auto shadow-2xl">
                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                    "Our AI platforms are adaptable across industries where <span className="text-white font-semibold">automation, analytics, and intelligent decision-making</span> provide competitive advantage."
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;