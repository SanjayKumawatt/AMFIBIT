import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

import logo from "../assets/logo.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">

                    {/* --- Left Column: Company Info --- */}
                    <div className="space-y-6 max-w-sm">

                        <div className=' flex gap-2'>
                            <img src={logo} className="h-12 w-auto" alt="AMFIBIT Logo" />
                            <div className='flex flex-col'>
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                AMFIBIT
                            </h2>
                            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em]">
                                Technologies Private Limited
                            </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            We are an AI product company building next-gen platforms to automate business workflows. Our mission is to make artificial intelligence accessible, scalable, and secure for enterprises worldwide.
                        </p>
                    </div>

                    {/* --- Center Column: Essential Links (Reduced) --- */}
                    <div className="flex flex-col md:flex-row gap-12 lg:justify-center">
                        {/* Group 1: Company */}
                        <div>
                            <h3 className="text-white font-bold mb-6">Company</h3>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                                <li><Link to="/team" className="hover:text-orange-400 transition-colors">Leadership</Link></li>
                                <li><Link to="/careers" className="hover:text-orange-400 transition-colors">Careers</Link></li>
                                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Group 2: Product & Tech */}
                        <div>
                            <h3 className="text-white font-bold mb-6">Platform</h3>
                            <ul className="space-y-4 text-sm">
                                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Products</Link></li>
                                <li><Link to="/technology" className="hover:text-blue-400 transition-colors">Tech Stack</Link></li>
                                <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">Solutions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* --- Right Column: Contact Info (Shifted Here) --- */}
                    <div className="lg:text-right space-y-6">
                        <h3 className="text-white font-bold mb-6 border-b border-slate-800 pb-2 inline-block lg:block">
                            Get in Touch
                        </h3>

                        {/* Address */}
                        <div className="group flex lg:justify-end items-start gap-3">
                            <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0 lg:order-2" />
                            <p className="text-sm leading-relaxed lg:order-1">
                                A-502, Sterling Shalom Apartment,<br />
                                ITPL Main Road, Kundalahalli,<br />
                                Bangalore North - 560037,<br />
                                Karnataka, India.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="group flex lg:justify-end items-center gap-3">
                            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 lg:order-2" />
                            <a
                                href="mailto:support@amfibittechnologies.in"
                                className="text-sm font-medium text-white hover:text-blue-400 transition-colors lg:order-1"
                            >
                                support@amfibittechnologies.in
                            </a>
                        </div>
                    </div>

                </div>

                {/* --- Bottom Bar --- */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                    <p>&copy; {currentYear} AMFIBIT TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>

                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;