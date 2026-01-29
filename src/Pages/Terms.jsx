import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertTriangle, Copyright, ServerCrash, Gavel, ShieldCheck, CheckCircle } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            <Scale size={14} /> Usage Agreement
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-8"
        >
          
          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-4 bg-orange-50 py-4 pr-4 rounded-r-lg">
            By accessing or using <strong>AMFIBIT Technologies’</strong> website or products, you agree to comply with these terms.
          </p>

          {/* Use of Services */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-blue-600 group-hover:scale-110 transition-transform" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Use of Services</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Users must use our platforms in compliance with applicable laws and regulations.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
              <Copyright className="text-purple-600 group-hover:scale-110 transition-transform" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Intellectual Property</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              All content, software, and trademarks are the property of AMFIBIT TECHNOLOGIES PRIVATE LIMITED.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-orange-500 group-hover:scale-110 transition-transform" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We are not liable for indirect or consequential damages arising from the use of our services.
            </p>
          </section>

          {/* Service Availability */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
              <ServerCrash className="text-emerald-600 group-hover:scale-110 transition-transform" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Service Availability</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We aim for high availability but do not guarantee uninterrupted service.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 mb-3">
              <Gavel className="text-slate-700 group-hover:scale-110 transition-transform" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Governing Law</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              These terms are governed by the laws of India.
            </p>
          </section>

           {/* --- Legal & Compliance Note (Added as requested) --- */}
           <div className="mt-12 p-6 bg-slate-900 text-slate-300 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" /> Legal & Compliance Note
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              AMFIBIT Technologies develops scalable, secure, and reliable AI platforms following modern software engineering best practices. Our products are designed with a strong focus on data protection, system reliability, and long-term maintainability suitable for business and enterprise environments.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;