import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Flag, Briefcase, Mail, ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        {/* Background Abstract */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Briefcase size={14} /> Careers
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Build the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Intelligent Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join a team working at the intersection of artificial intelligence, cloud computing, and product engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Life at AMFIBIT (Culture) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Life at <span className="text-blue-700">AMFIBIT Technologies</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                "We foster a culture of <span className="font-bold text-slate-800">innovation, learning, and ownership</span>. Our team works on challenging problems at the intersection of artificial intelligence, cloud computing, and product engineering."
              </p>
              <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            </motion.div>

            {/* Visual Side (Values Cards from Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Innovation */}
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-6 bg-blue-50 rounded-2xl border border-blue-100"
               >
                 <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                   <Rocket size={20} />
                 </div>
                 <h3 className="font-bold text-slate-900">Innovation</h3>
                 <p className="text-sm text-slate-600 mt-1">Solving challenging problems.</p>
               </motion.div>

               {/* Learning */}
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-6 bg-orange-50 rounded-2xl border border-orange-100 sm:translate-y-8"
               >
                 <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-3">
                   <BookOpen size={20} />
                 </div>
                 <h3 className="font-bold text-slate-900">Learning</h3>
                 <p className="text-sm text-slate-600 mt-1">Continuous growth & skills.</p>
               </motion.div>

               {/* Ownership */}
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="p-6 bg-purple-50 rounded-2xl border border-purple-100 sm:col-span-2 sm:w-2/3 sm:mx-auto"
               >
                 <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                   <Flag size={20} />
                 </div>
                 <h3 className="font-bold text-slate-900">Ownership</h3>
                 <p className="text-sm text-slate-600 mt-1">Taking charge of impactful products.</p>
               </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Section 3: Open Application (No Openings Message) --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-full blur-[80px] -mr-32 -mt-32"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
               <Mail size={32} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Join Our Talent Pool
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              "While we may not have immediate openings, we welcome profiles from individuals passionate about <span className="font-semibold text-slate-800">AI, engineering, and building impactful technology products</span>."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <p className="text-xs text-slate-400 mt-6">
              Drop us an email at careers@amfibittechnologies.in
            </p>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;