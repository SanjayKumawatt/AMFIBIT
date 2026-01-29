import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Megaphone, ScanEye, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      id: "socialflux",
      name: "SocialFlux AI™",
      tagline: "AI-Powered Social Media & Digital Growth Platform",
      desc: "SocialFlux AI is designed to help businesses manage and grow their digital presence using intelligent automation and analytics. The platform assists marketing teams and founders in planning, creating, scheduling, and analyzing social media content at scale.",
      capabilities: [
        "AI-assisted content ideation and caption generation",
        "Automated post scheduling across multiple platforms",
        "Engagement and audience growth analytics",
        "Performance trend analysis and optimization insights",
        "Centralized dashboard for social media operations"
      ],
      icon: <Share2 size={28} />,
      color: "blue", // Theme Color
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "admorph",
      name: "AdMorph AI™",
      tagline: "AI Advertising Intelligence & Optimization Platform",
      desc: "AdMorph AI enables businesses to design, test, and optimize advertising campaigns using data-driven artificial intelligence. The platform focuses on improving ad effectiveness, targeting accuracy, and conversion performance.",
      capabilities: [
        "AI-generated advertising copy and creative suggestions",
        "Audience segmentation and targeting insights",
        "Campaign performance analysis",
        "Conversion optimization recommendations",
        "Continuous learning based on campaign results"
      ],
      icon: <Megaphone size={28} />,
      color: "orange", // Theme Color
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "visionsense",
      name: "VisionSense AI™",
      tagline: "AI Image Analysis & Visual Intelligence Platform",
      desc: "VisionSense AI provides advanced image analysis capabilities for businesses that rely on visual data. The platform uses computer vision models to interpret, classify, and extract insights from images.",
      capabilities: [
        "Image classification and tagging",
        "Object and pattern detection",
        "Visual data analytics and reporting",
        "API-first design for easy integration",
        "Scalable cloud deployment for high-volume processing"
      ],
      icon: <ScanEye size={28} />,
      color: "purple", // Theme Color
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Helper for dynamic colors
  const getTheme = (color) => {
    const themes = {
      blue: { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700", btn: "bg-blue-600 hover:bg-blue-700" },
      orange: { text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", badge: "bg-orange-100 text-orange-700", btn: "bg-orange-500 hover:bg-orange-600" },
      purple: { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700", btn: "bg-purple-600 hover:bg-purple-700" }
    };
    return themes[color];
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* --- Section 1: Hero Header --- */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Our Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Product Suite
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Discover the platforms driving automation, intelligence, and growth for modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Products List (Alternating Layout) --- */}
      <div className="py-24 space-y-24 lg:space-y-32">
        {products.map((product, index) => {
          const theme = getTheme(product.color);
          const isEven = index % 2 === 0; // To alternate Left/Right

          return (
            <section key={product.id} className="relative scroll-mt-24" id={product.id}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* --- Visual Side (Image) --- */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                      <div className={`absolute inset-0 ${theme.bg} opacity-20 mix-blend-multiply`}></div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                         <div className={`p-1.5 rounded-full ${theme.badge}`}>
                           <Zap size={16} fill="currentColor" />
                         </div>
                         <span className="text-sm font-bold text-slate-800">AI Powered</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* --- Content Side (Text) --- */}
                  <motion.div 
                     initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="flex-1"
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 ${theme.badge} text-xs font-bold uppercase tracking-wider`}>
                      {product.icon} {product.name}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                      {product.tagline}
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-slate-200 pl-4">
                      {product.desc}
                    </p>

                    <div className="space-y-6">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className={theme.text} /> Core Capabilities
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {product.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                             <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.text.replace('text', 'bg')}`}></div>
                             <span className="text-sm text-slate-700 font-medium">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link 
                        to="/contact" 
                        className={`inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/10 transition-transform active:scale-95 ${theme.btn}`}
                      >
                        Request Demo <ArrowRight size={18} />
                      </Link>
                    </div>

                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* --- Bottom CTA --- */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our engineering team can tailor our platforms to fit your specific enterprise requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;