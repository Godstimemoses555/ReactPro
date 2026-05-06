import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Bell, ChevronDown, ShoppingBag,
    Home, Stethoscope, BookOpen, ShoppingCart,
    Info, Phone, Video, CalendarCheck,
    LogIn, UserPlus, LayoutDashboard, LogOut
} from 'lucide-react';
import logo from '../assets/ciyacarelogo.svg';
import useCartStore from '../store/useCartStore';
import useAppointmentStore from '../store/useAppointmentStore';
import UseBlognews from '../store/Blognews';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [consultOpen, setConsultOpen] = useState(false);

    const cartItems = useCartStore((state) => state.cartItems);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const itemCount = useCartStore((state) => state.getItemCount());
    const toggleAppointment = useAppointmentStore((state) => state.toggleAppointment);
    const openblog = UseBlognews((state) => state.openblog);
    const navigate = useNavigate();

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
        setConsultOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("healthcare_user_id");
        localStorage.removeItem("healthcare_user_email");
        if (setIsAuthenticated) setIsAuthenticated(false);
        navigate("/Login");
        closeMobileMenu();
    };

    return (
        <>
            {/* Desktop & Mobile Top Navbar */}
            <nav className='sticky top-0 z-[200] w-full h-20 md:h-24 flex justify-between items-center bg-white/90 backdrop-blur-lg px-4 md:px-10 border-b border-gray-100 shadow-sm transition-all duration-300'>
                {/* Logo */}
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
                    <img src={logo} alt="CiyaCare Logo" className="h-8 md:h-12 w-auto" />
                </div>

                {/* Desktop Links */}
                <div className='hidden lg:flex items-center gap-8 text-[#1A2547] font-bold text-[15px]'>
                    <Link to="/" className='hover:text-[#37CBD1] transition-colors'>Home</Link>
                    
                    {/* Services Dropdown */}
                    <div className='relative group py-2 cursor-pointer'>
                        <div className='flex items-center gap-1 group-hover:text-[#37CBD1] transition-colors'>
                            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                        <div className='absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-[110]'>
                            <Link to="/services" className='px-5 py-2 hover:bg-[#37CBD1]/10 hover:text-[#37CBD1] block transition-colors'>Medical Services</Link>
                            <Link to="/consultation" className='px-5 py-2 hover:bg-[#37CBD1]/10 hover:text-[#37CBD1] block transition-colors'>Booking Dashboard</Link>
                            <Link to="/consultation-room" className='px-5 py-2 hover:bg-[#37CBD1]/10 hover:text-[#37CBD1] block transition-colors'>Virtual Room</Link>
                        </div>
                    </div>

                    {/* Consultations Dropdown */}
                    <div className='relative group py-2 cursor-pointer'>
                        <div className='flex items-center gap-1 group-hover:text-[#37CBD1] transition-colors'>
                            Consultations <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                        <div className='absolute top-full left-0 mt-2 w-60 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 z-[110]'>
                            <div className="px-5 pb-2 mb-2 border-b border-gray-50">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Patient Care</p>
                            </div>
                            <Link to="/consultation" className='px-5 py-2 hover:bg-[#37CBD1]/10 hover:text-[#37CBD1] block transition-colors'>
                                <span className="block text-sm font-bold">Schedule Meeting</span>
                                <span className="block text-[10px] text-gray-400 font-medium mt-0.5">Book a professional slot</span>
                            </Link>
                            <Link to="/consultation-room" className='px-5 py-2 hover:bg-[#37CBD1]/10 hover:text-[#37CBD1] block transition-colors'>
                                <span className="block text-sm font-bold">Enter Virtual Room</span>
                                <span className="block text-[10px] text-gray-400 font-medium mt-0.5">Live video consultation</span>
                            </Link>
                        </div>
                    </div>

                    <Link to="/blogs" className='hover:text-[#37CBD1] transition-colors'>Blogs</Link>
                    <Link to="/shop" className='hover:text-[#37CBD1] transition-colors'>Shop</Link>
                    <Link to="/about-us" className='hover:text-[#37CBD1] transition-colors'>About</Link>
                    <Link to="/contact" className='hover:text-[#37CBD1] transition-colors'>Contact</Link>
                </div>

                {/* Desktop Actions */}
                <div className='hidden lg:flex items-center gap-5'>
                    <button onClick={toggleCart} className="relative p-2.5 text-[#1A2547] hover:text-[#37CBD1] bg-gray-50 hover:bg-cyan-50 rounded-xl transition-colors">
                        <ShoppingBag size={20} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#37CBD1] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <button onClick={openblog} className="relative p-2.5 text-[#1A2547] hover:text-[#37CBD1] bg-gray-50 hover:bg-cyan-50 rounded-xl transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    
                    <button
                        onClick={() => navigate(isAuthenticated ? "/dashboard" : "/Login")}
                        className='px-6 h-12 rounded-2xl font-black text-sm transition-all relative overflow-hidden group border border-[#1A2547]/10 hover:border-[#37CBD1] text-[#1A2547] hover:text-white'
                    >
                        <span className='relative z-10'>{isAuthenticated ? 'Dashboard' : 'Sign In'}</span>
                        <div className='absolute inset-0 bg-[#37CBD1] translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                    </button>
                    
                    <button
                        onClick={toggleAppointment}
                        className='bg-[#37CBD1] text-white px-8 h-12 rounded-2xl font-black text-sm hover:bg-[#1A2547] transition-all shadow-xl shadow-[#37CBD1]/20 hover:shadow-[#1A2547]/20 active:scale-95'
                    >
                        Book Appointment
                    </button>
                </div>

                {/* Mobile Hamburger & Cart */}
                <div className='flex items-center gap-3 lg:hidden'>
                    <button onClick={toggleCart} className="relative p-2 text-[#1A2547] bg-gray-50 rounded-lg">
                        <ShoppingBag size={22} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#37CBD1] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 bg-gray-50 text-[#1A2547] rounded-lg">
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[990] lg:hidden"
                        />
                        
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-[999] shadow-2xl flex flex-col lg:hidden"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-100">
                                <img src={logo} alt="CiyaCare Logo" className="h-8" />
                                <button onClick={closeMobileMenu} className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Mobile Links Container */}
                            <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
                                <div className="space-y-1 mb-6">
                                    <p className="px-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Menu</p>
                                    
                                    <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <Home size={18} /> Home
                                    </Link>

                                    {/* Services */}
                                    <div>
                                        <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                            <div className="flex items-center gap-3"><Stethoscope size={18} /> Services</div>
                                            <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-[#37CBD1]' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-10 pr-3 space-y-1 mt-1">
                                                    <Link to="/services" onClick={closeMobileMenu} className="block py-2 px-3 text-sm text-gray-500 hover:text-[#37CBD1] hover:bg-cyan-50 rounded-lg font-semibold">Medical Services</Link>
                                                    <Link to="/consultation" onClick={closeMobileMenu} className="block py-2 px-3 text-sm text-gray-500 hover:text-[#37CBD1] hover:bg-cyan-50 rounded-lg font-semibold">Booking Dashboard</Link>
                                                    <Link to="/consultation-room" onClick={closeMobileMenu} className="block py-2 px-3 text-sm text-gray-500 hover:text-[#37CBD1] hover:bg-cyan-50 rounded-lg font-semibold">Virtual Room</Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Consultations */}
                                    <div>
                                        <button onClick={() => setConsultOpen(!consultOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                            <div className="flex items-center gap-3"><Video size={18} /> Consultations</div>
                                            <ChevronDown size={16} className={`transition-transform duration-300 ${consultOpen ? 'rotate-180 text-[#37CBD1]' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {consultOpen && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-10 pr-3 space-y-1 mt-1">
                                                    <Link to="/consultation" onClick={closeMobileMenu} className="block py-2 px-3 text-sm text-gray-500 hover:text-[#37CBD1] hover:bg-cyan-50 rounded-lg font-semibold">Schedule Meeting</Link>
                                                    <Link to="/consultation-room" onClick={closeMobileMenu} className="block py-2 px-3 text-sm text-gray-500 hover:text-[#37CBD1] hover:bg-cyan-50 rounded-lg font-semibold">Enter Virtual Room</Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link to="/blogs" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <BookOpen size={18} /> Blogs
                                    </Link>
                                    <Link to="/shop" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <ShoppingCart size={18} /> Shop
                                    </Link>
                                    
                                    <button onClick={() => { toggleCart(); closeMobileMenu(); }} className="w-full flex items-center justify-between px-3 py-3 rounded-xl bg-gray-50 hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <div className="flex items-center gap-3"><ShoppingBag size={18} /> View Cart</div>
                                        {itemCount > 0 && (
                                            <span className="min-w-[24px] h-[24px] px-2 bg-[#37CBD1] text-white text-[11px] font-black rounded-full flex items-center justify-center">
                                                {itemCount}
                                            </span>
                                        )}
                                    </button>
                                    <Link to="/about-us" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <Info size={18} /> About Us
                                    </Link>
                                    <Link to="/contact" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                        <Phone size={18} /> Contact
                                    </Link>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <p className="px-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Account</p>
                                    {isAuthenticated ? (
                                        <>
                                            <Link to="/dashboard" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                                <LayoutDashboard size={18} /> Dashboard
                                            </Link>
                                            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-red-50 text-red-500 font-bold transition-colors">
                                                <LogOut size={18} /> Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/Login" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                                <LogIn size={18} /> Login
                                            </Link>
                                            <Link to="/Register" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 hover:text-[#37CBD1] text-[#1A2547] font-bold transition-colors">
                                                <UserPlus size={18} /> Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            {/* Mobile Bottom Actions */}
                            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                                <button onClick={() => { toggleAppointment(); closeMobileMenu(); }} className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#37CBD1] text-white rounded-xl font-bold hover:bg-[#1A2547] transition-colors shadow-md shadow-[#37CBD1]/20">
                                    <CalendarCheck size={18} /> Book Appointment
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;