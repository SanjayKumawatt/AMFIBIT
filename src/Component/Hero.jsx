import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import img from "../assets/hero.webp"

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-16 lg:pt-25 lg:pb-24">
      
      {/* --- Background Elements (Subtle Tech Grid & Gradients) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left Column: Text Content --- */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Next-Gen AI Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Engineering Intelligent <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                AI Platforms
              </span>{' '}
              for Scalable Digital Growth
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-10">
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="font-semibold text-slate-800">AMFIBIT Technologies Private Limited</span> is an Indian AI product startup building next-generation, cloud-based platforms that help businesses automate operations, enhance digital presence, and unlock actionable insights from data.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our products are designed for modern digital-first organizations that require reliability, scalability, and security from day one. By combining artificial intelligence, automation, and cloud infrastructure, we enable businesses to operate smarter, faster, and with greater confidence.
              </p>
            </div>

            {/* CTA Buttons (Clickable Links) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-0.5"
              >
                Request Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/team" 
                className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-[15px] transition-all hover:bg-blue-50"
              >
                Talk to Our Team
              </Link>
            </div>

            {/* Trust Indicators (Optional small addition for credibility) */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Secure
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Scalable
              </div>
            </div>
          </div>

          {/* --- Right Column: Illustration Image --- */}
          <div className="flex-1 w-full relative">
             {/* Decorative blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-orange-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Placeholder for Tech/Cartoon Illustration */}
                <img 
                  src={img} 
                  alt="AMFIBIT Technology Illustration" 
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
                {/* Floating Badge Example */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">AI</div>
                        <div>
                            <p className="text-xs text-slate-500 font-semibold uppercase">Automation</p>
                            <p className="text-sm font-bold text-slate-800">100% Efficient</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;