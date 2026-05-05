import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/ciyacarelogo.svg'
import { Menu, X, Bell, ChevronDown, ShoppingBag } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import useAppointmentStore from '../store/useAppointmentStore';
import UseBlognews from '../store/Blognews';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useCartStore((state) => state.cartItems);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const toggleAppointment = useAppointmentStore((state) => state.toggleAppointment);
    const openblog = UseBlognews((state) => state.openblog);
    const navigate = useNavigate()

    const itemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem("healthcare_user_id");
        localStorage.removeItem("healthcare_user_email");
        if (setIsAuthenticated) setIsAuthenticated(false);
        navigate("/Login");
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='w-full h-24 flex justify-between items-center bg-white/80 backdrop-blur-md px-6 md:px-12 border-b border-gray-50 z-[100] sticky top-0 transition-all duration-300'>
            {/* Logo Section */}
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
                <img src={logo} alt="CiyaCare Logo" className="h-10 md:h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-10 text-[#1A2547] font-bold text-sm tracking-tight'>
                <Link to="/" className='hover:text-[#37CBD1] transition-all relative group py-2'>
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#37CBD1] transition-all group-hover:w-full"></span>
                </Link>
                
                {/* Services Dropdown */}
                <div className='relative group py-2 cursor-pointer'>
                    <div className='flex items-center gap-1 group-hover:text-[#37CBD1] transition-colors'>
                        Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-gray-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 z-[110]'>
                        <Link to="/services" className='px-6 py-2.5 hover:bg-[#37CBD1]/5 hover:text-[#37CBD1] block'>Medical Services</Link>
                        <Link to="/consultation" className='px-6 py-2.5 hover:bg-[#37CBD1]/5 hover:text-[#37CBD1] block'>Booking Dashboard</Link>
                        <Link to="/consultation-room" className='px-6 py-2.5 hover:bg-[#37CBD1]/5 hover:text-[#37CBD1] block'>Virtual Room</Link>
                    </div>
                </div>

                {/* Consultations Dropdown */}
                <div className='relative group py-2 cursor-pointer'>
                    <div className='flex items-center gap-1 group-hover:text-[#37CBD1] transition-colors'>
                        Consultations <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-100 shadow-2xl rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 z-[110] overflow-hidden'>
                        <div className="px-6 pb-2 mb-2 border-b border-gray-50">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Patient Care</p>
                        </div>
                        <Link to="/consultation" className='px-6 py-3 hover:bg-[#37CBD1]/5 hover:text-[#37CBD1] flex flex-col'>
                            <span className="text-sm">Schedule Meeting</span>
                            <span className="text-[10px] text-gray-400 font-medium">Book a professional slot</span>
                        </Link>
                        <Link to="/consultation-room" className='px-6 py-3 hover:bg-[#37CBD1]/5 hover:text-[#37CBD1] flex flex-col'>
                            <span className="text-sm">Enter Virtual Room</span>
                            <span className="text-[10px] text-gray-400 font-medium">Live video consultation</span>
                        </Link>
                    </div>
                </div>

                <Link to="/blogs" className='hover:text-[#37CBD1] transition-all relative group py-2'>Blogs</Link>
                <Link to="/shop" className='hover:text-[#37CBD1] transition-all relative group py-2'>Shop</Link>
                <Link to="/about-us" className='hover:text-[#37CBD1] transition-all relative group py-2'>About</Link>
            </div>

            {/* Actions Section */}
            <div className='hidden lg:flex items-center gap-6'>
                {/* Cart Icon */}
                <button onClick={toggleCart} className="relative p-2.5 text-[#1A2547] hover:text-[#37CBD1] transition-colors bg-gray-50 rounded-xl group">
                    <ShoppingBag size={20} />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#37CBD1] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-lg">
                            {itemCount}
                        </span>
                    )}
                </button>

                {/* Notifications */}
                <button onClick={openblog} className="relative p-2.5 text-[#1A2547] hover:text-[#37CBD1] transition-colors bg-gray-50 rounded-xl">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                {/* Auth Button */}
                <button
                    onClick={() => navigate(isAuthenticated ? "/dashboard" : "/Login")}
                    className='px-6 h-12 rounded-2xl font-black text-sm transition-all relative overflow-hidden group border border-[#1A2547]/10 hover:border-[#37CBD1] text-[#1A2547] hover:text-white'
                >
                    <span className='relative z-10'>{isAuthenticated ? 'Dashboard' : 'Sign In'}</span>
                    <div className='absolute inset-0 bg-[#37CBD1] translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                </button>

                {/* Main CTA */}
                <button
                    onClick={toggleAppointment}
                    className='bg-[#37CBD1] text-white px-8 h-12 rounded-2xl font-black text-sm hover:bg-[#1A2547] transition-all shadow-xl shadow-[#37CBD1]/20 hover:shadow-[#1A2547]/20 active:scale-95'
                >
                    Book Appointment
                </button>
            </div>

            {/* Mobile Controls */}
            <div className='lg:hidden flex items-center gap-4'>
                <button onClick={toggleCart} className="relative p-2 text-[#1A2547]">
                    <ShoppingBag size={24} />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#37CBD1] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white">
                            {itemCount}
                        </span>
                    )}
                </button>
                <button onClick={toggleMobileMenu} className='text-[#1A2547] p-1 bg-gray-50 rounded-lg'>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className='fixed inset-0 top-24 bg-white z-[90] lg:hidden flex flex-col p-8 space-y-6 overflow-y-auto'
                    >
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-3">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Main Menu</p>
                                <Link to="/" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Home</Link>
                                <Link to="/services" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Services</Link>
                                <Link to="/blogs" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Blogs</Link>
                                <Link to="/shop" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Shop</Link>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Patient Care</p>
                                <Link to="/consultation" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Consultation</Link>
                                <Link to="/consultation-room" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Virtual Room</Link>
                            </div>

                            <div className="flex flex-col space-y-3">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Information</p>
                                <Link to="/about-us" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>About Us</Link>
                                <Link to="/contact" onClick={toggleMobileMenu} className='text-2xl font-black text-[#1A2547]'>Contact</Link>
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-gray-100 flex flex-col gap-4 pb-12">
                            <button
                                onClick={() => { toggleCart(); toggleMobileMenu(); }}
                                className='w-full py-4 bg-gray-50 text-[#1A2547] rounded-2xl font-black flex items-center justify-center gap-3'
                            >
                                <ShoppingBag size={20} />
                                View Cart ({itemCount})
                            </button>
                            <button
                                onClick={() => { navigate(isAuthenticated ? "/dashboard" : "/Login"); toggleMobileMenu(); }}
                                className='w-full py-4 bg-gray-50 text-[#1A2547] rounded-2xl font-black'
                            >
                                {isAuthenticated ? 'Go to Dashboard' : 'Sign In / Register'}
                            </button>
                            <button
                                onClick={() => { toggleAppointment(); toggleMobileMenu(); }}
                                className='w-full py-4 bg-[#37CBD1] text-white rounded-2xl font-black shadow-lg shadow-[#37CBD1]/20'
                            >
                                Book Appointment
                            </button>
                            {isAuthenticated && (
                                <button onClick={handleLogout} className='text-red-500 font-bold py-2 text-center'>Logout</button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar