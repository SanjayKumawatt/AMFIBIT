import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cloud, Zap, Target, Users, ScanEye } from 'lucide-react';

const WhatWeDo = () => {
  // Data for the 3 visual cards based on your text
  const features = [
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Marketing Automation",
      desc: "AI-driven tools to optimize campaigns and reach."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Digital Engagement",
      desc: "Smart platforms that enhance user interaction."
    },
    {
      icon: <ScanEye className="w-6 h-6 text-purple-500" />,
      title: "Visual Intelligence",
      desc: "Processing images and video for actionable insights."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- Left Column: Main Text Content --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Zap size={14} className="fill-blue-700" />
              What We Do
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Building Scalable <span className="text-blue-700">AI Platforms</span> <br/>
              Not Just Projects.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                We design and develop <span className="font-semibold text-slate-800">AI-powered software platforms</span> that solve real operational challenges across marketing, digital engagement, and visual intelligence.
              </p>
              
              <div className="pl-6 border-l-4 border-orange-400 bg-white p-4 rounded-r-lg shadow-sm">
                <p className="italic text-slate-700">
                  "Our focus is on building <span className="text-orange-600 font-bold">reusable, scalable products</span> rather than one-off custom projects. This allows our customers to grow without constantly re-engineering their technology stack."
                </p>
              </div>

              <p>
                Our platforms are built with <span className="font-semibold text-slate-800">cloud-based principles</span>, enabling seamless deployment, monitoring, and scaling on modern infrastructure.
              </p>
            </div>

          </motion.div>

          {/* --- Right Column: Visual Feature Grid --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
              
              {/* Decorative Blur behind cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 blur-3xl rounded-full -z-10"></div>

              {/* Card 1: Marketing (Spans full width on mobile, 1 col on desktop) */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow sm:col-span-2">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  {features[0].icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{features[0].title}</h3>
                <p className="text-slate-600">{features[0].desc}</p>
              </div>

              {/* Card 2 & 3: Split columns */}
              {features.slice(1).map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}

              {/* Abstract 'Stack' Visual to represent Scalability */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-dashed border-slate-200 rounded-2xl hidden sm:block"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;