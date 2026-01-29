import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Globe, Cpu, Users, Zap } from 'lucide-react';
import CTA from '../Component/CTA';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero / Header --- */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Building Practical, Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We engineer intelligent platforms that solve real-world business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Company Overview & Challenge --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                About <span className="text-blue-700">AMFIBIT Technologies</span>
              </h2>
              <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>AMFIBIT TECHNOLOGIES PRIVATE LIMITED</strong> is headquartered in <span className="inline-flex items-center gap-1 font-semibold text-slate-800"><MapPin size={18} className="text-red-500" /> Bengaluru, Karnataka, India</span>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The company was founded with a clear objective: to build <strong>practical, scalable artificial intelligence platforms</strong> that deliver real business value.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 italic text-slate-700">
                "We believe that AI should be accessible, reliable, and aligned with real-world business needs."
              </div>
            </motion.div>

            {/* Right: The Challenge & Solution (Visual Cards) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
               {/* Card 1: The Problem */}
               <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                 <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                   <Zap size={24} />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">The Challenge</h3>
                   <p className="text-sm text-slate-600 leading-relaxed">
                     In a rapidly evolving digital ecosystem, businesses struggle with fragmented tools, manual workflows, and underutilized data.
                   </p>
                 </div>
               </div>

               {/* Card 2: The Solution */}
               <div className="flex gap-4 p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
                 <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                   <Cpu size={24} />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold mb-2">Our Solution</h3>
                   <p className="text-sm text-slate-300 leading-relaxed">
                     AMFIBIT creates integrated AI platforms that simplify operations, improve decision-making, and enable digital growth.
                   </p>
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Section 3: Mission & Vision --- */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background Icons */}
        <Target className="absolute top-10 left-10 text-slate-200 w-64 h-64 opacity-20 -rotate-12 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-orange-500 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower businesses with <strong>secure, scalable, and intelligent AI platforms</strong> that automate workflows, improve efficiency, and drive measurable outcomes.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg border-t-8 border-blue-600 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become a <strong>globally trusted AI product company</strong> delivering cloud-based platforms that help digital businesses operate with intelligence and agility.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Section 4: Team Expertise --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <Users size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Powered by Expertise</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
                "Our team brings together expertise in <span className="text-purple-600 font-semibold">artificial intelligence, cloud computing, backend engineering, and product design</span>."
            </p>
        </div>
      </section>

      <section>
        <CTA/>
      </section>

    </div>
  );
};

export default AboutPage;