import React, { useState } from 'react'
import logo from '../assets/ciyacarelogo.svg'
import { Menu, X, Bell } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/useCartStore';
import useAppointmentStore from '../store/useAppointmentStore';
import UseBlognews from '../store/Blognews';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    // State to toggle the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useCartStore((state) => state.cartItems);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const toggleAppointment = useAppointmentStore((state) => state.toggleAppointment);
    const openblog = UseBlognews((state) => state.openblog);
    const navigate = useNavigate()

    // Derived count for reactivity
    const itemCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("healthcare_user_id");
        localStorage.removeItem("healthcare_user_email");
        if (setIsAuthenticated) setIsAuthenticated(false);
        navigate("/Login");
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='w-full h-20 flex justify-between items-center bg-white px-8 shadow-sm border-b border-gray-100 z-50 sticky top-0'>
            {/* Logo */}
            <img src={logo} alt="CiyaCare Logo" className="h-10 cursor-pointer" />

            {/* Desktop Navigation Links */}
            <div className='hidden md:flex space-x-8 text-[#1A2547] font-medium items-center'>
                <Link to={"/"} className='hover:text-[#37CBD1] transition-colors'>Home</Link>
                <div className='relative group py-6'>
                    <Link to={"/"} className='hover:text-[#37CBD1] transition-colors flex items-center'>Services</Link>
                    {/* Hover Dropdown Menu */}
                    <div className='absolute top-[70px] -left-6 w-48 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-3 z-50 overflow-hidden'>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Consultations</a>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Diagnostics</a>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Surgeries</a>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Pharmacy</a>
                    </div>
                </div>
                <div className='relative group py-6'>
                    <a href="Blogs" className='hover:text-[#37CBD1] transition-colors'>Blogs</a>
                    <div className='absolute top-[70px] -left-6 w-48 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-3 z-50 overflow-hidden'>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>News</a>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Legit Blogs</a>
                        <a href="#" className='px-6 py-2 hover:bg-[#f0fafa] hover:text-[#37CBD1] font-medium transition-colors'>Health Tips</a>
                    </div>

                </div>

                <Link to="/contact" className='hover:text-[#37CBD1] transition-colors'>Contact</Link>
                <Link to="/about-us" className='hover:text-[#37cbd1] transition-colors'>About Us</Link>
                <Link to="/shop" className='hover:text-[#37cbd1] transition-colors'>Shop</Link>
            </div>

            {/* Desktop Call to Action & Cart */}
            <div className='hidden md:flex items-center gap-8'>
                <button
                    onClick={toggleCart}
                    className="relative flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                    <span className="font-bold text-[#1A2547] group-hover:text-[#37CBD1]">Cart</span>
                    {itemCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#37CBD1] text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-lg shadow-[#37CBD1]/30">
                            {itemCount}
                        </div>
                    )}
                </button>

                <button
                    onClick={() => navigate(isAuthenticated ? "/dashboard" : "/Register")}
                    className='flex w-[130px] items-center justify-center h-[40px] bg-white rounded-full shadow-lg border border-gray-100 hover:border-[#37CBD1] transition-all group overflow-hidden relative'
                >
                    <span className='text-[#37CBD1] font-bold text-[15px] relative z-10 group-hover:text-white transition-colors duration-300'>
                        {isAuthenticated ? 'Dashboard' : 'Sign In'}
                    </span>
                    <div className='absolute inset-0 bg-[#37CBD1] translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                </button>
                <button
                    onClick={openblog}
                    className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                    <Bell className="w-6 h-6 text-[#1A2547] group-hover:text-[#37CBD1]" />
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm shadow-red-500/20"></div>
                </button>
                <button
                    onClick={toggleAppointment}
                    className='bg-[#37CBD1] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#2ca6ac] transition-colors shadow-sm'
                >
                    Book Appointment
                </button>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className='md:hidden flex items-center'>
                <button onClick={openblog} className='text-[#1A2547] focus:outline-none mr-4 relative'>
                    <Bell size={24} />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                </button>
                <button onClick={toggleMobileMenu} className='text-[#1A2547] focus:outline-none'>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className='absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col items-center py-6 space-y-4 md:hidden text-[#1A2547] font-medium'>
                    <Link to="/" onClick={toggleMobileMenu} className='hover:text-[#37CBD1] transition-colors w-full text-center'>Home</Link>
                    <Link to="/services" onClick={toggleMobileMenu} className='hover:text-[#37CBD1] transition-colors w-full text-center'>Services</Link>
                    <Link to="/blogs" onClick={toggleMobileMenu} className='hover:text-[#37CBD1] transition-colors w-full text-center'>Blogs</Link>
                    <Link to="/contact" onClick={toggleMobileMenu} className='hover:text-[#37CBD1] transition-colors w-full text-center'>Contact</Link>
                    <Link to="/about-us" onClick={toggleMobileMenu} className='hover:text-[#37cbd1] transition-colors w-full text-center'>About Us</Link>
                    <Link to="/shop" onClick={toggleMobileMenu} className='hover:text-[#37cbd1] transition-colors w-full text-center font-bold text-[#37CBD1]'>Shop (Items: {itemCount})</Link>
                    
                    <button
                        onClick={() => {
                            if (isAuthenticated) {
                                navigate("/dashboard");
                            } else {
                                navigate("/Register");
                            }
                            toggleMobileMenu();
                        }}
                        className='text-[#37CBD1] font-bold py-2'
                    >
                        {isAuthenticated ? 'My Dashboard' : 'Login / Register'}
                    </button>

                    {isAuthenticated && (
                        <button
                            onClick={handleLogout}
                            className='text-red-500 font-bold py-2'
                        >
                            Logout
                        </button>
                    )}

                    <button
                        onClick={() => { toggleCart(); toggleMobileMenu(); }}
                        className='bg-[#37CBD1] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2ca6ac] transition-colors shadow-sm w-11/12'
                    >
                        View My Cart
                    </button>
                    <button
                        onClick={() => { toggleAppointment(); toggleMobileMenu(); }}
                        className='bg-[#1A2547] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors shadow-sm w-11/12'
                    >
                        Book Appointment
                    </button>
                </div>
            )}

        </nav>
    )
}

export default Navbar