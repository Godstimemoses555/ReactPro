import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronRight, 
    ShieldCheck, 
    Stethoscope, 
    Calendar, 
    ArrowRight,
    Heart,
    UserCircle,
    BellRing
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const steps = [
        {
            title: "Welcome to CiyaCare",
            subtitle: "Your premium journey to better health starts here.",
            icon: <Heart className="text-[#37CBD1]" size={48} />,
            description: "We've designed a seamless experience for your medical consultations and health needs. Let's get you set up in less than a minute.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Expert Consultations",
            subtitle: "Access world-class specialists anytime.",
            icon: <Stethoscope className="text-[#37CBD1]" size={48} />,
            description: "From virtual video calls to in-person scheduling, booking an expert has never been more elegant or efficient.",
            image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Secure & Private",
            subtitle: "Your data is protected with elite security.",
            icon: <ShieldCheck className="text-[#37CBD1]" size={48} />,
            description: "We use hospital-grade encryption to ensure your medical records and consultation history remain strictly confidential.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const handleNext = () => {
        if (step < steps.length) {
            setStep(step + 1);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 md:p-8">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-5xl w-full bg-white rounded-[48px] shadow-2xl shadow-[#1A2547]/5 overflow-hidden flex flex-col md:flex-row min-h-[600px]"
            >
                {/* Left Side: Visuals */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-[#1A2547]">
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            src={steps[step-1].image} 
                            alt="Onboarding Visual" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2547] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                        <motion.div 
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#37CBD1] mb-2 block">CiyaCare Elite</span>
                            <h2 className="text-3xl font-black leading-tight tracking-tight">{steps[step-1].subtitle}</h2>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
                    <div>
                        {/* Progress Header */}
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex gap-2">
                                {steps.map((_, i) => (
                                    <div 
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${
                                            step === i + 1 ? 'w-8 bg-[#37CBD1]' : 'w-2 bg-gray-100'
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Step 0{step} of 0{steps.length}</span>
                        </div>

                        {/* Content Animation */}
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="w-20 h-20 bg-[#37CBD1]/10 rounded-3xl flex items-center justify-center mb-8">
                                    {steps[step-1].icon}
                                </div>
                                <h1 className="text-4xl font-black text-[#1A2547] tracking-tighter leading-none">
                                    {steps[step-1].title}
                                </h1>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                                    {steps[step-1].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-12 flex items-center justify-between">
                        <button 
                            onClick={() => navigate('/dashboard')}
                            className="text-sm font-black text-gray-400 hover:text-[#1A2547] transition-colors uppercase tracking-widest"
                        >
                            Skip
                        </button>
                        
                        <button 
                            onClick={handleNext}
                            className="group flex items-center gap-3 bg-[#1A2547] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#37CBD1] transition-all shadow-xl shadow-[#1A2547]/20 hover:shadow-[#37CBD1]/20 active:scale-95"
                        >
                            {step === steps.length ? 'Get Started' : 'Continue'}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Onboarding;