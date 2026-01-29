import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Megaphone, Truck, Briefcase, Building2, 
  ArrowRight, BarChart3, Bot, Zap, Globe2 
} from 'lucide-react';

const Solutions = () => {
  
  // Data: User's List with Added Context for "Page Length"
  const industries = [
    {
      title: "Digital Commerce & Online Businesses",
      desc: "Optimizing customer journeys through hyper-personalization and inventory intelligence.",
      features: ["Personalized Product Recommendations", "Dynamic Pricing Models", "Customer Churn Prediction"],
      icon: <ShoppingCart size={32} />,
      color: "blue"
    },
    {
      title: "Marketing & Advertising Agencies",
      desc: "Automating creative workflows and maximizing ROAS with predictive analytics.",
      features: ["Automated Ad Copy Generation", "Cross-Channel Attribution", "Audience Segmentation"],
      icon: <Megaphone size={32} />,
      color: "orange"
    },
    {
      title: "Logistics & Operations Teams",
      desc: "Streamlining supply chains with real-time tracking and predictive maintenance.",
      features: ["Route Optimization", "Demand Forecasting", "Fleet Management Analytics"],
      icon: <Truck size={32} />,
      color: "green"
    },
    {
      title: "Financial & Professional Services",
      desc: "Enhancing security and decision-making with automated data processing.",
      features: ["Fraud Detection Systems", "Automated Risk Assessment", "Document Processing (OCR)"],
      icon: <Briefcase size={32} />,
      color: "purple"
    },
    {
      title: "Enterprise Digital Operations",
      desc: "Unifying data silos and automating repetitive corporate workflows.",
      features: ["Workflow Automation (RPA)", "Internal Knowledge Bots", "Data Warehousing Integration"],
      icon: <Building2 size={32} />,
      color: "cyan"
    }
  ];

  // Helper for themes
  const getTheme = (color) => {
    const themes = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", iconBg: "bg-blue-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", iconBg: "bg-orange-100" },
      green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", iconBg: "bg-emerald-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", iconBg: "bg-purple-100" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", iconBg: "bg-cyan-100" }
    };
    return themes[color];
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Globe2 size={14} /> Industry Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Industries We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Support & Transform
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Applying intelligent automation to solve sector-specific challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Main Industry List --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-12">
            {industries.map((item, index) => {
              const theme = getTheme(item.color);
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow bg-white`}
                >
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center ${theme.iconBg} ${theme.text}`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {item.desc}
                    </p>
                    
                    {/* Added "Features" to fill space professionally */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {item.features.map((feature, i) => (
                        <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${theme.bg} ${theme.border} ${theme.text}`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow CTA */}
                  <div className="hidden md:block">
                    <Link to="/contact" className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 ${theme.border} ${theme.text}`}>
                       <ArrowRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- Section 3: The "Why" (User's Closing Statement Expanded) --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"><Bot /></div>
                <h3 className="font-bold text-slate-900 mb-2">Automation</h3>
                <p className="text-sm text-slate-500">Reducing manual effort.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"><BarChart3 /></div>
                <h3 className="font-bold text-slate-900 mb-2">Analytics</h3>
                <p className="text-sm text-slate-500">Data-driven insights.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"><Zap /></div>
                <h3 className="font-bold text-slate-900 mb-2">Intelligent Decision</h3>
                <p className="text-sm text-slate-500">Smarter outcomes.</p>
             </div>
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-8 border-blue-600"
          >
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic">
              "Our AI platforms are adaptable across industries where <span className="text-blue-600 font-bold">automation, analytics, and intelligent decision-making</span> provide competitive advantage."
            </p>
          </motion.div>

        </div>
      </section>

      {/* --- Section 4: CTA --- */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Find the Right Solution for Your Industry</h2>
           <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              Consult an Expert <ArrowRight size={20} />
            </Link>
        </div>
      </section>

    </div>
  );
};

export default Solutions;