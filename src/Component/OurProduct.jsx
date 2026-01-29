import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Megaphone, ScanEye, CheckCircle2, ArrowRight } from 'lucide-react';

const OurProducts = () => {
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
      footer: "SocialFlux AI reduces manual effort while improving consistency, reach, and engagement across digital channels.",
      icon: <Share2 size={32} />,
      color: "blue",
      // Reliable Placeholder Image: Social Media Dashboard
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
      footer: "AdMorph AI helps marketing teams make informed decisions and maximize return on advertising spend.",
      icon: <Megaphone size={32} />,
      color: "orange",
      // Reliable Placeholder Image: Analytics & Growth Charts
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
      footer: "VisionSense AI enables automation and intelligence in workflows involving visual content and imagery.",
      icon: <ScanEye size={32} />,
      color: "purple",
      // Reliable Placeholder Image: AI Vision / Scanning Eye
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Helper to get updated color classes and shadows
  const getTheme = (color) => {
    const themes = {
      blue: { 
          bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600", iconBg: "bg-blue-500", iconText: "text-white",
          shadow: "shadow-blue-200/50", hoverBorder: "group-hover:border-blue-300"
      },
      orange: { 
          bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-600", iconBg: "bg-orange-500", iconText: "text-white",
          shadow: "shadow-orange-200/50", hoverBorder: "group-hover:border-orange-300"
      },
      purple: { 
          bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600", iconBg: "bg-purple-500", iconText: "text-white",
          shadow: "shadow-purple-200/50", hoverBorder: "group-hover:border-purple-300"
      }
    };
    return themes[color];
  };

  return (
    <section className="py-24 bg-slate-50 relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Product Suite
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Intelligent Platforms</span>
          </motion.h2>
          <p className="text-lg text-slate-600">
            Scalable, secure, and specialized AI solutions built to accelerate your digital transformation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const theme = getTheme(product.color);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                // Updated Styling: Added shadow-xl on hover and smoother border transition
                className={`flex flex-col bg-white rounded-2xl border ${theme.border} shadow-md hover:shadow-2xl ${theme.hoverBorder} transition-all duration-300 group overflow-hidden`}
              >
                {/* --- Product Feature Image (Taller height: h-56) --- */}
                <div className="h-56 w-full overflow-hidden relative bg-slate-100">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Stronger gradient for better text contrast if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-30"></div>
                </div>

                {/* Product Header */}
                <div className={`p-8 pt-10 ${theme.bg} border-b ${theme.border} relative`}>
                  {/* Icon Styling Updated: Solid color background, white icon, and colored shadow glow */}
                  <div className={`absolute -top-10 left-8 w-20 h-20 ${theme.iconBg} ${theme.iconText} rounded-2xl flex items-center justify-center shadow-lg ${theme.shadow} group-hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                    {product.icon}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800">
                        {product.name}
                    </h3>
                    <p className={`font-bold text-xs ${theme.text} uppercase tracking-widest`}>
                        {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
                    {product.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                      <span className={`w-8 h-1 ${theme.iconBg} rounded-full`}></span>
                      Key Capabilities
                    </h4>
                    <ul className="space-y-4">
                      {product.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                           {/* Icon color matches theme */}
                          <CheckCircle2 size={18} className={`mt-0.5 flex-shrink-0 ${theme.text}`} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer / Conclusion */}
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <p className="text-sm font-medium text-slate-500 italic">
                      "{product.footer}"
                    </p>
                    
                    
                  </div>
                </div>
                
                {/* Bottom Color Bar (Thicker on hover) */}
                <div className={`h-1.5 group-hover:h-2 transition-all duration-300 w-full ${theme.text.replace('text', 'bg')}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;