import React from 'react';
import logo from '../assets/ciyacarelogo.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-[#1A2547] text-white py-12 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="CiyaCare Logo" className="h-10 w-auto brightness-0 invert" />
                        <span className="text-2xl font-bold tracking-tight">Ciya<span className="text-[#37CBD1]">Care</span></span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Leading the way in medical excellence with innovative technology and compassionate care. Your health journey starts here.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder - Using div as placeholders for icons */}
                        <div className="w-9 h-9 rounded-full bg-[#37CBD1]/10 border border-[#37CBD1]/20 flex items-center justify-center cursor-pointer hover:bg-[#37CBD1] text-[#37CBD1] hover:text-white transition-all duration-300">
                            <span className="text-lg">f</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#37CBD1]/10 border border-[#37CBD1]/20 flex items-center justify-center cursor-pointer hover:bg-[#37CBD1] text-[#37CBD1] hover:text-white transition-all duration-300">
                            <span className="text-lg">t</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#37CBD1]/10 border border-[#37CBD1]/20 flex items-center justify-center cursor-pointer hover:bg-[#37CBD1] text-[#37CBD1] hover:text-white transition-all duration-300">
                            <span className="text-lg">i</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                        Quick Links
                        <span className="absolute -bottom-1 left-0 w-8 h-1 bg-[#37CBD1] rounded-full"></span>
                    </h3>
                    <ul className="flex flex-col gap-4 text-gray-400">
                        <Link to="/" className="hover:text-[#37CBD1] cursor-pointer transition-colors flex items-center gap-2">
                            Home
                        </Link>
                        <Link to="/services" className="hover:text-[#37CBD1] cursor-pointer transition-colors flex items-center gap-2">
                            Services
                        </Link>
                        <Link to="/shop" className="hover:text-[#37CBD1] cursor-pointer transition-colors flex items-center gap-2">
                            Shop
                        </Link>
                        <Link to="/about" className="hover:text-[#37CBD1] cursor-pointer transition-colors flex items-center gap-2">
                            About Us
                        </Link>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                        Our Services
                        <span className="absolute -bottom-1 left-0 w-8 h-1 bg-[#37CBD1] rounded-full"></span>
                    </h3>
                    <ul className="flex flex-col gap-4 text-gray-400">
                        <li className="hover:text-[#37CBD1] cursor-pointer transition-colors">Digital Consultations</li>
                        <li className="hover:text-[#37CBD1] cursor-pointer transition-colors">Advanced Diagnostics</li>
                        <li className="hover:text-[#37CBD1] cursor-pointer transition-colors">Online Pharmacy</li>
                        <li className="hover:text-[#37CBD1] cursor-pointer transition-colors">Emergency Support</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                        Stay Updated
                        <span className="absolute -bottom-1 left-0 w-8 h-1 bg-[#37CBD1] rounded-full"></span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">Join our newsletter for the latest health tips and updates.</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-[#25315a] border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#37CBD1] transition-colors w-full"
                        />
                        <button className="bg-[#37CBD1] text-white py-3 rounded-xl font-bold hover:bg-[#2ca6ac] transform hover:-translate-y-0.5 transition-all shadow-lg shadow-[#37CBD1]/20">
                            Subscribe Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                <div className='flex w-[400px]'>
                    <p>&copy; 2026 CiyaCare Healthcare System. All rights reserved.</p>
                    <span className='text-[#37CBD1] font-bold hover:text-white cursor-pointer transition-colors'>@MoshTech</span>

                </div>

                <div className="flex gap-8">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;