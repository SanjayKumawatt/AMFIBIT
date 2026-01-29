import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Server, RefreshCw, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <ShieldCheck size={14} /> Legal Documentation
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-slate max-w-none space-y-8"
        >
          
          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-4 pr-4 rounded-r-lg">
            <strong>AMFIBIT TECHNOLOGIES PRIVATE LIMITED</strong> respects your privacy and is committed to protecting the personal information you share with us.
          </p>

          {/* Information We Collect */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-blue-500" size={24} />
              <h2 className="text-xl font-bold text-slate-900 m-0">Information We Collect</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We may collect personal information such as name, email address, company details, and usage data when you interact with our website or products.
            </p>
          </section>

          {/* Use of Information */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="text-orange-500" size={24} />
              <h2 className="text-xl font-bold text-slate-900 m-0">Use of Information</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Collected information is used to provide services, improve our products, communicate updates, and ensure platform security.
            </p>
          </section>

          {/* Data Protection */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-green-500" size={24} />
              <h2 className="text-xl font-bold text-slate-900 m-0">Data Protection</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to safeguard data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Server className="text-purple-500" size={24} />
              <h2 className="text-xl font-bold text-slate-900 m-0">Third-Party Services</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our platforms may use trusted third-party services, including cloud infrastructure providers, in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCw className="text-slate-500" size={24} />
              <h2 className="text-xl font-bold text-slate-900 m-0">Policy Updates</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              This policy may be updated periodically. Continued use of our services constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* --- Legal & Compliance Note (Added as requested) --- */}
          <div className="mt-12 p-6 bg-slate-900 text-slate-300 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <ShieldCheck className="text-orange-400" /> Legal & Compliance Note
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

export default PrivacyPolicy;