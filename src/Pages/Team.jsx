import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  
  // Data: Leadership Team
  const leaders = [
    {
      name: "Narendra Kumar",
      role: "Founder & Chief Executive Officer",
      focus: "Product vision, business strategy, and growth",
      color: "blue",
      initials: "NK"
    },
    {
      name: "Kavya Nair",
      role: "Chief Technology Officer (CTO)",
      focus: "AI systems architecture, machine learning, cloud infrastructure",
      color: "orange",
      initials: "KN"
    },
    {
      name: "Rakesh Iyer",
      role: "Head of Engineering",
      focus: "Backend systems, security, and platform scalability",
      color: "purple",
      initials: "RI"
    },
    {
      name: "Sneha Kulkarni",
      role: "Head of Product & Experience",
      focus: "Product roadmap, UX strategy, and customer success",
      color: "emerald",
      initials: "SK"
    }
  ];

  // Helper for dynamic themes
  const getTheme = (color) => {
    const themes = {
      blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700", avatar: "bg-blue-600 text-white", shadow: "shadow-blue-100" },
      orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", avatar: "bg-orange-500 text-white", shadow: "shadow-orange-100" },
      purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700", avatar: "bg-purple-600 text-white", shadow: "shadow-purple-100" },
      emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700", avatar: "bg-emerald-600 text-white", shadow: "shadow-emerald-100" }
    };
    return themes[color];
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Users size={14} /> The People
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Meet the Minds Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Amfibit Technologies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are a group of engineers, strategists, and problem solvers dedicated to building the future of AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Leadership Grid (No Images, Initials Only) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => {
              const theme = getTheme(leader.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative bg-white rounded-2xl p-8 border ${theme.border} hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center h-full`}
                >
                  {/* Avatar Circle */}
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${theme.avatar}`}>
                    {leader.initials}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${theme.bg} ${theme.text}`}>
                    {leader.role}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mt-auto">
                    {leader.focus}
                  </p>
                  
                  {/* Hover Bottom Bar */}
                  <div className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-${leader.color}-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- Section 3: Team Philosophy (Your Text Expanded) --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                More Than Just Code
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                "AMFIBIT Technologies is powered by a multidisciplinary team of <span className="font-bold text-blue-700">AI engineers, full-stack developers, and cloud specialists</span> committed to building secure, reliable, and enterprise-grade platforms."
              </p>
              
              <ul className="space-y-4">
                 {[
                   "Commitment to scalable architecture",
                   "Focus on data security and privacy",
                   "Continuous innovation in AI models"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-600">
                     <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                       <Target size={14} />
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>
            </motion.div>

            {/* Visual Cards (Abstract representation of team) */}
            <div className="grid grid-cols-2 gap-4">
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
               >
                  <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
                  <h4 className="font-bold text-slate-900">Innovation</h4>
                  <p className="text-xs text-slate-500 mt-2">Solving complex problems with simple solutions.</p>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8"
               >
                  <Heart className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-bold text-slate-900">Passion</h4>
                  <p className="text-xs text-slate-500 mt-2">Dedicated to delivering excellence every day.</p>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: Join Us CTA --- */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Want to work with us?</h2>
          <p className="text-slate-400 mb-8">
            We are always looking for talented individuals to join our mission.
          </p>
          <Link 
            to="/careers" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-1"
          >
            Check Openings <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default TeamPage;