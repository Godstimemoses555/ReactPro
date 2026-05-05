import React from 'react';
import { motion } from 'framer-motion';
import { 
    Stethoscope, 
    Heart, 
    Baby, 
    FlaskConical, 
    Syringe, 
    Activity,
    ChevronRight,
    ShieldCheck,
    Clock
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <FlaskConical className="text-[#37CBD1]" size={32} />,
            title: "Advanced Diagnostics",
            description: "State-of-the-art laboratory testing and imaging services for precise medical results.",
            delay: 0.1
        },
        {
            icon: <Heart className="text-[#37CBD1]" size={32} />,
            title: "Cardiac Care",
            description: "Specialized heart health monitoring and surgical procedures by top cardiologists.",
            delay: 0.2
        },
        {
            icon: <Baby className="text-[#37CBD1]" size={32} />,
            title: "Pediatric Clinic",
            description: "Dedicated care for children from birth through adolescence in a friendly environment.",
            delay: 0.3
        },
        {
            icon: <Stethoscope className="text-[#37CBD1]" size={32} />,
            title: "General Consultation",
            description: "Comprehensive health evaluations and expert medical advice for all age groups.",
            delay: 0.4
        },
        {
            icon: <Syringe className="text-[#37CBD1]" size={32} />,
            title: "Immunization",
            description: "Safe and essential vaccination services to protect you and your family.",
            delay: 0.5
        },
        {
            icon: <Activity className="text-[#37CBD1]" size={32} />,
            title: "Emergency Care",
            description: "Rapid response medical support available 24/7 for urgent health situations.",
            delay: 0.6
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-[#37CBD1] mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-[#1A2547] tracking-tighter mb-6"
                    >
                        Comprehensive Medical <br /> Solutions for Everyone
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-2xl mx-auto"
                    >
                        We combine cutting-edge technology with world-class specialists to deliver 
                        healthcare that is both advanced and deeply personal.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[40px] shadow-2xl shadow-[#1A2547]/5 border border-white hover:border-[#37CBD1]/20 transition-all group"
                        >
                            <div className="w-16 h-16 bg-[#37CBD1]/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#37CBD1] group-hover:text-white transition-colors duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#1A2547] mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-black text-[#1A2547] group-hover:text-[#37CBD1] transition-colors">
                                Explore Detail <ChevronRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 bg-[#1A2547] rounded-[48px] p-12 md:p-20 relative overflow-hidden text-white"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#37CBD1] rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Ready for a professional consultation?</h2>
                            <p className="text-gray-400 text-lg mb-8">Speak with our specialists today and take the first step towards a healthier you.</p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <ShieldCheck size={20} className="text-[#37CBD1]" />
                                    </div>
                                    <span className="text-sm font-bold">100% Secure</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Clock size={20} className="text-[#37CBD1]" />
                                    </div>
                                    <span className="text-sm font-bold">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#37CBD1] text-white px-10 py-5 rounded-3xl font-black hover:bg-white hover:text-[#1A2547] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#37CBD1]/20">
                            Book Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
