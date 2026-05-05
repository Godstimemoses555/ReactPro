import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    Users,
    Bell,
    CheckCircle2,
    AlertCircle,
    ChevronRight,
    Sun,
    CloudSun,
    Moon,
    User,
    Mail,
    Phone,
    FileText,
    MessageSquare,
    Shield
} from 'lucide-react';

const Consultation = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        note: ''
    });

    const initialSlots = [
        { id: 1, time: '11:00 AM', session: 'Morning', capacity: 10, booked: 8, isBlurred: false },
        { id: 2, time: '12:00 PM', session: 'Morning', capacity: 10, booked: 10, isBlurred: true },
        { id: 3, time: '01:00 PM', session: 'Morning', capacity: 10, booked: 5, isBlurred: false },
        { id: 4, time: '02:00 PM', session: 'Afternoon', capacity: 10, booked: 10, isBlurred: true },
        { id: 5, time: '03:00 PM', session: 'Afternoon', capacity: 10, booked: 3, isBlurred: false },
        { id: 6, time: '04:00 PM', session: 'Afternoon', capacity: 10, booked: 7, isBlurred: false },
        { id: 7, time: '05:00 PM', session: 'Evening', capacity: 10, booked: 0, isBlurred: false },
        { id: 8, time: '06:00 PM', session: 'Evening', capacity: 10, booked: 2, isBlurred: false },
    ];

    const [slots, setSlots] = useState(initialSlots);

    const totalBookedToday = slots.reduce((acc, slot) => acc + slot.booked, 0);
    const dailyLimit = 30;

    const handleBooking = (e) => {
        e.preventDefault();
        if (!selectedSlot || totalBookedToday >= dailyLimit) return;

        // Simulate booking process
        setTimeout(() => {
            setBookingSuccess(true);
            console.log("Booking Data:", { ...formData, slot: selectedSlot.time });

            // Mark slot as blurred after booking
            setSlots(prev => prev.map(s => s.id === selectedSlot.id ? { ...s, isBlurred: true, booked: s.booked + 1 } : s));

            setTimeout(() => {
                setBookingSuccess(false);
                setSelectedSlot(null);
                setFormData({ name: '', email: '', phone: '', note: '' });
            }, 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 pt-28">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                    >
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-[#37CBD1]/10 text-[#37CBD1] text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                                Appointment Portal
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-[#1A2547] tracking-tight leading-none">
                                Premium <span className="text-[#37CBD1]">Consultation</span> Booking
                            </h1>
                            <p className="text-gray-500 mt-4 font-medium max-w-xl">
                                Select your preferred session and enter your details to schedule a professional medical consultation.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-2 rounded-[24px] border border-gray-100 shadow-sm">
                            <div className="px-6 py-3">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 text-right">Daily Limit</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#37CBD1] transition-all duration-1000"
                                            style={{ width: `${(totalBookedToday / dailyLimit) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xl font-black text-[#1A2547]">{totalBookedToday}/{dailyLimit}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Time Slots */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-[#37CBD1]" size={24} />
                                    <h3 className="text-xl font-black text-[#1A2547]">Select Your Slot</h3>
                                </div>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="px-4 py-2 bg-gray-50 rounded-xl outline-none font-bold text-[#1A2547] text-sm border-2 border-transparent focus:border-[#37CBD1] transition-all"
                                />
                            </div>

                            <div className="space-y-10">
                                {['Morning', 'Afternoon', 'Evening'].map((session) => (
                                    <div key={session} className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-400">
                                            {session === 'Morning' && <Sun size={18} />}
                                            {session === 'Afternoon' && <CloudSun size={18} />}
                                            {session === 'Evening' && <Moon size={18} />}
                                            <span className="text-xs font-black uppercase tracking-widest">{session} Session</span>
                                            <div className="h-px grow bg-gray-50"></div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {slots.filter(s => s.session === session).map((slot) => (
                                                <button
                                                    key={slot.id}
                                                    onClick={() => !slot.isBlurred && setSelectedSlot(slot)}
                                                    className={`group relative p-4 rounded-2xl border-2 transition-all text-left ${slot.isBlurred
                                                            ? 'bg-gray-50 border-gray-100 opacity-40 cursor-not-allowed'
                                                            : selectedSlot?.id === slot.id
                                                                ? 'bg-[#37CBD1] border-[#37CBD1] shadow-lg shadow-[#37CBD1]/30'
                                                                : 'bg-white border-gray-50 hover:border-[#37CBD1] hover:shadow-md'
                                                        }`}
                                                >
                                                    {slot.isBlurred && (
                                                        <div className="absolute inset-0 backdrop-blur-[1px] flex items-center justify-center">
                                                            <span className="text-[8px] font-black bg-gray-800 text-white px-2 py-0.5 rounded-full">BOOKED</span>
                                                        </div>
                                                    )}
                                                    <p className={`text-sm font-black ${selectedSlot?.id === slot.id ? 'text-white' : 'text-[#1A2547]'
                                                        }`}>
                                                        {slot.time}
                                                    </p>
                                                    <p className={`text-[9px] font-bold mt-1 ${selectedSlot?.id === slot.id ? 'text-white/70' : 'text-gray-400'
                                                        }`}>
                                                        {slot.capacity - slot.booked} Free Spots
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#1A2547] rounded-[32px] p-6 text-white flex items-center justify-between group cursor-help">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Bell className="text-[#37CBD1]" />
                                </div>
                                <div>
                                    <p className="font-bold">Instant Notifications</p>
                                    <p className="text-xs text-white/50">You and the surgeon will be notified immediately.</p>
                                </div>
                            </div>
                            <ChevronRight className="text-white/20 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Booking Form */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl relative"
                        >
                            <h3 className="text-xl font-black text-[#1A2547] mb-8 flex items-center gap-3">
                                <FileText className="text-[#37CBD1]" size={24} />
                                Patient Information
                            </h3>

                            <form onSubmit={handleBooking} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#37CBD1] transition-colors">
                                            <User size={18} />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-[#37CBD1] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#1A2547] text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#37CBD1] transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-[#37CBD1] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#1A2547] text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#37CBD1] transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-[#37CBD1] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#1A2547] text-sm"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute left-4 top-5 text-gray-400 group-focus-within:text-[#37CBD1] transition-colors">
                                            <MessageSquare size={18} />
                                        </div>
                                        <textarea
                                            placeholder="Symptoms or brief reason for visit..."
                                            rows="4"
                                            value={formData.note}
                                            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-[#37CBD1] focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#1A2547] text-sm resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!selectedSlot || totalBookedToday >= dailyLimit}
                                    className={`w-full py-5 rounded-[24px] font-black text-lg transition-all transform active:scale-95 shadow-xl ${!selectedSlot
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-[#37CBD1] text-white hover:bg-[#1A2547] shadow-[#37CBD1]/20'
                                        }`}
                                >
                                    {selectedSlot ? `Confirm Booking for ${selectedSlot.time}` : 'Select a Time Slot First'}
                                </button>

                                <div className="flex gap-4 p-4 bg-amber-50 rounded-2xl">
                                    <Shield className="text-amber-500 shrink-0" size={18} />
                                    <p className="text-[10px] text-amber-700 font-medium">
                                        By confirming, you agree to our terms. A secure session link will be sent to your email after approval.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Booking Success Overlay */}
                <AnimatePresence>
                    {bookingSuccess && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A2547]/60 backdrop-blur-sm"
                        >
                            <motion.div
                                className="bg-white rounded-[48px] p-10 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#37CBD1]"></div>
                                <div className="w-24 h-24 bg-[#37CBD1]/10 text-[#37CBD1] rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-3xl font-black text-[#1A2547] mb-4">Awesome!</h2>
                                <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                                    Your consultation for <span className="text-[#1A2547] font-bold">{selectedSlot?.time}</span> has been scheduled. Check your email for the confirmation details.
                                </p>
                                <button
                                    onClick={() => setBookingSuccess(false)}
                                    className="w-full py-4 bg-[#1A2547] text-white rounded-2xl font-black hover:bg-[#37CBD1] transition-all shadow-lg"
                                >
                                    Got it, thanks!
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Consultation;