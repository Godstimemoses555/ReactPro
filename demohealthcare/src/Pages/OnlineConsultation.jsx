import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Video,
    User,
    Calendar,
    Clock,
    Shield,
    MessageSquare,
    Activity,
    ChevronRight,
    ExternalLink,
    AlertCircle,
    CheckCircle2
} from 'lucide-react';

const OnlineConsultation = () => {
    const [consultationStatus, setConsultationStatus] = useState('upcoming'); // upcoming, live, completed
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const surgeon = {
        name: "Dr. Sarah Johnson",
        specialty: "Senior Orthopedic Surgeon",
        experience: "15+ Years",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200",
        meetLink: "https://meet.google.com/abc-defg-hij", // Mock link
        status: "Online"
    };

    const patientNotes = [
        "Chronic knee pain for 3 months",
        "Recent X-ray results uploaded",
        "Pain increases during evening"
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 pt-24">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-3xl md:text-4xl font-black text-[#1A2547] tracking-tight"
                        >
                            Virtual <span className="text-[#37CBD1]">Consultation Room</span>
                        </motion.h1>
                        <p className="text-gray-500 mt-2 font-medium">Secure video consultation with your specialist</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Local Time</span>
                            <span className="text-lg font-bold text-[#1A2547]">
                                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                        <div className="w-px h-8 bg-gray-100"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">System Status</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-[#1A2547]">Encrypted</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Consultation Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Video Interface Mock/Join Card */}
                        <div className="bg-[#1A2547] rounded-[32px] overflow-hidden aspect-video relative group shadow-2xl shadow-[#1A2547]/20">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                                alt="Consultation Background"
                                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-[#1A2547] via-transparent to-transparent">
                                <div className="w-20 h-20 bg-[#37CBD1] rounded-full flex items-center justify-center text-white mb-6 animate-bounce shadow-xl shadow-[#37CBD1]/30">
                                    <Video size={40} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Your Surgeon is Ready</h2>
                                <p className="text-gray-300 max-w-md mb-8 font-medium">
                                    Click the button below to launch the secure Google Meet session with {surgeon.name}.
                                </p>

                                <a
                                    href={surgeon.meetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setConsultationStatus('live')}
                                    className="px-10 py-5 bg-[#37CBD1] text-white rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-white hover:text-[#37CBD1] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-[#37CBD1]/20 group"
                                >
                                    Join Consultation
                                    <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>

                            {/* Status Overlay */}
                            <div className="absolute top-6 left-6 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-black text-white uppercase tracking-widest">Live Room</span>
                            </div>
                        </div>

                        {/* Consultation Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Scheduled Date</p>
                                        <p className="text-lg font-bold text-[#1A2547]">Today, May 5th</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</p>
                                        <p className="text-lg font-bold text-[#1A2547]">45 Minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar Information */}
                    <div className="space-y-8">

                        {/* Specialist Profile */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#37CBD1]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <img
                                        src={surgeon.image}
                                        alt={surgeon.name}
                                        className="w-16 h-16 rounded-2xl object-cover border-2 border-[#37CBD1]/20"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1A2547]">{surgeon.name}</h3>
                                    <p className="text-[#37CBD1] text-xs font-bold uppercase tracking-wider">{surgeon.specialty}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 font-medium">Experience</span>
                                    <span className="text-[#1A2547] font-bold">{surgeon.experience}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400 font-medium">Rating</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[#1A2547] font-bold">4.9</span>
                                        <div className="text-amber-400 font-bold text-xs">★★★★★</div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-4 bg-gray-50 text-[#1A2547] rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                                <User size={18} />
                                View Full Profile
                            </button>
                        </motion.div>

                        {/* Consultation Notes */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                                        <AlertCircle size={18} />
                                    </div>
                                    <h3 className="font-bold text-[#1A2547]">Pre-Call Notes</h3>
                                </div>
                                <button className="text-[#37CBD1] text-xs font-black uppercase hover:underline">Edit</button>
                            </div>

                            <ul className="space-y-4">
                                {patientNotes.map((note, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#37CBD1] shrink-0"></div>
                                        <p className="text-gray-500 font-medium leading-relaxed">{note}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#37CBD1] transition-colors">
                                    <MessageSquare size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Add a quick note for the doctor..." 
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-[#37CBD1] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#1A2547] placeholder:text-gray-300 text-sm shadow-sm"
                                />
                            </div>
                        </motion.div>

                        {/* Security Disclaimer */}
                        <div className="bg-[#1A2547]/5 p-4 rounded-2xl flex gap-4">
                            <Shield className="text-[#1A2547] shrink-0" size={20} />
                            <p className="text-[10px] text-gray-500 font-medium leading-normal">
                                Your consultation is fully encrypted and HIPAA compliant. We do not record video sessions without explicit consent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineConsultation;
