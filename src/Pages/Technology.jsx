import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, Server, BrainCircuit, Cloud, 
  Database, Lock, ArrowRight, Layers, Terminal 
} from 'lucide-react';

const Technology = () => {
  
  // Data for Tech Stack
  const techCategories = [
    {
      title: "Frontend & Experience",
      icon: <Code2 size={32} />,
      desc: "Creating responsive, high-performance, and accessible user interfaces.",
      tools: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Vite"],
      color: "blue"
    },
    {
      title: "Backend & API",
      icon: <Server size={32} />,
      desc: "Robust server-side architecture built for speed and reliability.",
      tools: ["Node.js", "Python (FastAPI)", "NestJS", "GraphQL", "PostgreSQL", "MongoDB"],
      color: "green"
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={32} />,
      desc: "Advanced intelligence models driving automation and insights.",
      tools: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "RAG Pipelines"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={32} />,
      desc: "Scalable infrastructure with automated deployment pipelines.",
      tools: ["AWS", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Redis", "Nginx"],
      color: "orange"
    }
  ];

  // Helper for dynamic colors
  const getTheme = (color) => {
    const themes = {
      blue: { border: "border-blue-200", badge: "bg-blue-50 text-blue-700 border-blue-100", icon: "text-blue-600 bg-blue-100" },
      green: { border: "border-emerald-200", badge: "bg-emerald-50 text-emerald-700 border-emerald-100", icon: "text-emerald-600 bg-emerald-100" },
      purple: { border: "border-purple-200", badge: "bg-purple-50 text-purple-700 border-purple-100", icon: "text-purple-600 bg-purple-100" },
      orange: { border: "border-orange-200", badge: "bg-orange-50 text-orange-700 border-orange-100", icon: "text-orange-600 bg-orange-100" }
    };
    return themes[color];
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero --- */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Terminal size={14} /> Engineering
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Built on a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Modern Tech Stack
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build platforms that are fast, secure, scalable, and future-proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Full Tech Stack Grid --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((cat, index) => {
              const theme = getTheme(cat.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-2xl shadow-sm border ${theme.border} hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${theme.icon}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-3">
                    {cat.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className={`px-4 py-2 rounded-lg text-sm font-semibold border ${theme.badge} hover:scale-105 transition-transform cursor-default`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Section 3: Architecture Principles --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Architecture Principles</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Our engineering philosophy ensures that every line of code contributes to a robust and scalable system.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "AI-First Design", icon: <BrainCircuit />, desc: "Intelligence embedded at the core." },
                    { title: "Microservices", icon: <Layers />, desc: "Decoupled for agility and scale." },
                    { title: "Security First", icon: <Lock />, desc: "End-to-end encryption & compliance." },
                    { title: "Cloud Native", icon: <Cloud />, desc: "Built for modern cloud infrastructure." }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all">
                        <div className="w-12 h-12 mx-auto bg-slate-200 text-slate-700 rounded-full flex items-center justify-center mb-4">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Section 4: Bottom CTA (Requested) --- */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with <span className="text-orange-400">Amfibit?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you need a custom AI solution or want to integrate our platforms, our engineering team is ready to help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              Start a Project <ArrowRight size={20} />
            </Link>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technology;