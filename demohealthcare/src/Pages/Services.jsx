import React from 'react';
import { motion } from 'framer-motion';
import { 
    Video, 
    Calendar, 
    Stethoscope, 
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const mainServices = [
        {
            title: "Virtual Consultation",
            subtitle: "Connect from Anywhere",
            description: "High-definition video consultations with our top specialists. Get medical advice, prescriptions, and follow-ups from the comfort of your home.",
            icon: <Video size={32} className="text-[#37CBD1]" />,
            path: "/consultation-room",
            color: "bg-cyan-50",
            features: ["HD Video Quality", "Secure & Private", "Instant Prescription"]
        },
        {
            title: "Physical Consultation",
            subtitle: "In-Person Expert Care",
            description: "Schedule a visit to our modern facility for comprehensive physical examinations, diagnostics, and personalized treatment plans.",
            icon: <Calendar size={32} className="text-[#37CBD1]" />,
            path: "/consultation",
            color: "bg-blue-50",
            features: ["Modern Facilities", "No Waiting Time", "Expert Diagnostics"]
        }
    ];

    const additionalServices = [
        { title: "Cardiac Care", icon: <HeartIcon /> },
        { title: "Pediatrics", icon: <BabyIcon /> },
        { title: "Diagnostics", icon: <FlaskIcon /> },
        { title: "Pharmacy", icon: <PillsIcon /> }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-[#37CBD1] mb-4 block"
                    >
                        Our Service Hub
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-[#1A2547] tracking-tighter mb-6"
                    >
                        Medical Excellence <br /> Simplified for You
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg leading-relaxed"
                    >
                        Whether you need a virtual chat or an in-person visit, we've organized our services 
                        to be as accessible and professional as possible.
                    </motion.p>
                </div>

                {/* Main Hub: Consultation Options */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {mainServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[48px] p-10 md:p-14 shadow-2xl shadow-[#1A2547]/5 border border-white flex flex-col justify-between group hover:shadow-cyan-500/10 transition-all"
                        >
                            <div>
                                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-8`}>
                                    {service.icon}
                                </div>
                                <span className="text-[#37CBD1] font-black text-xs uppercase tracking-widest mb-2 block">
                                    {service.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black text-[#1A2547] mb-6 tracking-tight">
                                    {service.title}
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-4 mb-12">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                            <CheckCircle2 size={20} className="text-[#37CBD1]" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button 
                                onClick={() => navigate(service.path)}
                                className="w-full py-5 bg-[#1A2547] text-white rounded-2xl font-black flex items-center justify-center gap-3 group-hover:bg-[#37CBD1] transition-all transform group-hover:-translate-y-1 shadow-xl shadow-[#1A2547]/10"
                            >
                                {index === 0 ? 'Start Online Session' : 'Book Appointment Now'}
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Care Grid */}
                <div className="bg-white rounded-[64px] p-12 md:p-20 shadow-2xl shadow-[#1A2547]/5 border border-white">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-black text-[#1A2547] tracking-tight mb-4">Specialized Medical Care</h3>
                            <p className="text-gray-500">Access our elite departments for specific health needs.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black text-[#1A2547]">50+</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Specialists</span>
                            </div>
                            <div className="w-px h-12 bg-gray-100"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black text-[#1A2547]">24/7</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Available</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {additionalServices.map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-8 bg-gray-50 rounded-[40px] hover:bg-[#37CBD1]/5 transition-colors cursor-pointer group"
                            >
                                <div className="mb-4 text-[#1A2547] group-hover:text-[#37CBD1] transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-black text-[#1A2547]">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple Icon Components for the Grid
const HeartIcon = () => <ShieldCheck size={32} />;
const BabyIcon = () => <Users size={32} />;
const FlaskIcon = () => <Stethoscope size={32} />;
const PillsIcon = () => <Clock size={32} />;

export default Services;
