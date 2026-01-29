import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Globe, Users, Cpu, Rocket } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
      
      {/* Background Decoration (Skewed split background) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Who We Are</span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2"
            >
              About AMFIBIT Technologies
            </motion.h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- Main Content Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-lg text-slate-600 leading-relaxed"
            >
                <p>
                    <strong className="text-slate-900">AMFIBIT TECHNOLOGIES PRIVATE LIMITED</strong> is headquartered in <span className="text-blue-700 font-medium inline-flex items-center gap-1 bg-blue-100 px-2 py-0.5 rounded text-base"><MapPin size={16}/> Bengaluru, Karnataka</span>. The company was founded with a clear objective: to build practical, scalable artificial intelligence platforms that deliver real business value.
                </p>
                <p>
                    In a rapidly evolving digital ecosystem, businesses struggle with fragmented tools, manual workflows, and underutilized data. <span className="text-slate-800 font-semibold">AMFIBIT Technologies</span> addresses these challenges by creating integrated AI platforms that simplify operations, improve decision-making, and enable digital growth.
                </p>
                <p>
                    Our team brings together expertise in <span className="underline decoration-orange-300 decoration-2 underline-offset-2">artificial intelligence, cloud computing, backend engineering, and product design</span>. We believe that AI should be accessible, reliable, and aligned with real-world business needs.
                </p>
            </motion.div>

            {/* Visual/Info Side */}
            <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="relative"
            >
                 <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                    {/* Decorative Background Icon */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.05] text-blue-900 pointer-events-none">
                        <Cpu size={140} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Core DNA</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Users size={24}/>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Expert Team</h4>
                                <p className="text-sm text-slate-500">Engineers, Data Scientists & Designers.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 group">
                             <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Rocket size={24}/>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Practical Innovation</h4>
                                <p className="text-sm text-slate-500">Solutions that solve real problems.</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 {/* Floating Element behind */}
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-xl -z-10"></div>
            </motion.div>
        </div>

        {/* --- Mission & Vision Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 relative overflow-hidden group hover:shadow-2xl transition-all"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
                        <Target size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        To empower businesses with <span className="font-medium text-slate-800">secure, scalable, and intelligent AI platforms</span> that automate workflows, improve efficiency, and drive measurable outcomes.
                    </p>
                </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 relative overflow-hidden group hover:shadow-2xl transition-all"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                        <Globe size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        To become a <span className="font-medium text-slate-800">globally trusted AI product company</span> delivering cloud-based platforms that help digital businesses operate with intelligence and agility.
                    </p>
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;