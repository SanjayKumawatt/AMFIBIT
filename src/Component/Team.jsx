import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const leaders = [
    {
      name: "Narendra Kumar",
      role: "Founder & Chief Executive Officer",
      focus: "Product vision, business strategy, and growth",
      color: "bg-blue-600",
      lightColor: "bg-blue-50 text-blue-700"
    },
    {
      name: "Kavya Nair",
      role: "Chief Technology Officer (CTO)",
      focus: "AI systems architecture, machine learning, cloud infrastructure",
      color: "bg-orange-500",
      lightColor: "bg-orange-50 text-orange-700"
    },
    {
      name: "Rakesh Iyer",
      role: "Head of Engineering",
      focus: "Backend systems, security, and platform scalability",
      color: "bg-purple-600",
      lightColor: "bg-purple-50 text-purple-700"
    },
    {
      name: "Sneha Kulkarni",
      role: "Head of Product & Experience",
      focus: "Product roadmap, UX strategy, and customer success",
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50 text-emerald-700"
    }
  ];

  // Function to extract initials
  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('');
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-slate-500 uppercase bg-slate-100 rounded-full"
          >
            Leadership
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Meet Our <span className="text-blue-700">Leadership</span>
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Initials Avatar (No Image) */}
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${leader.lightColor}`}>
                {getInitials(leader.name)}
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${leader.lightColor.split(' ')[1]}`}>
                {leader.role}
              </p>

              {/* Separator Line */}
              <div className="w-8 h-1 mx-auto bg-slate-100 rounded-full mb-4 group-hover:bg-slate-200 transition-colors"></div>

              {/* Focus Area */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {leader.focus}
              </p>

              {/* Bottom Color Bar */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${leader.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Closing Team Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Our Team</h4>
            <p className="text-slate-600 leading-relaxed">
              AMFIBIT Technologies is powered by a multidisciplinary team of AI engineers, full-stack developers, and cloud specialists committed to building secure, reliable, and enterprise-grade platforms.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;