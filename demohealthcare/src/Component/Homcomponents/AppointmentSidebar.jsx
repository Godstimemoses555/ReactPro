import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, FileText, ChevronRight, ChevronDown, Activity } from 'lucide-react';
import useAppointmentStore from '../../store/useAppointmentStore';

const AppointmentSidebar = () => {
    const isAppointmentOpen = useAppointmentStore((state) => state.isAppointmentOpen);
    const toggleAppointment = useAppointmentStore((state) => state.toggleAppointment);
    const closeAppointment = useAppointmentStore((state) => state.closeAppointment);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        type: 'General Consultation',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/appointment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.status === 201) {
                alert("Appointment booked successfully");
                setSuccess(true);
                
                // Clear form and close after delay
                setTimeout(() => {
                    setSuccess(false);
                    closeAppointment();
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        type: 'General Consultation',
                        description: ''
                    });
                }, 2000);
            } else {
                alert("Appointment not booked. Please try again.");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Error connecting to the server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-[#1A2547]/40 backdrop-blur-md z-[60] transition-all duration-500 ease-in-out ${isAppointmentOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeAppointment}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-[500px] bg-white z-[70] shadow-[-20px_0_60px_-15px_rgba(26,37,71,0.15)] transition-transform duration-700 ease-out transform ${isAppointmentOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full overflow-hidden relative">

                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#37CBD1]/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A2547]/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>

                    {/* Header */}
                    <div className="p-8 pb-6 flex items-center justify-between border-b border-gray-100 relative z-10">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black text-[#1A2547] tracking-tight">
                                Book Now
                            </h2>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-8 bg-[#37CBD1] rounded-full"></div>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
                                    Professional Care at Your Fingertips
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={closeAppointment}
                            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1A2547] hover:bg-[#37CBD1] hover:text-white transition-all transform hover:rotate-90 duration-500 shadow-sm"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="grow overflow-y-auto p-8 space-y-8 custom-scrollbar relative z-10">

                        {success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-[#37CBD1] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#37CBD1]/20">
                                    <ChevronRight size={48} className="translate-x-0.5" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A2547]">Request Sent!</h3>
                                <p className="text-gray-500 max-w-[250px]">We've received your appointment request and will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Section: Personal Info */}
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-[#37CBD1] uppercase tracking-[0.2em]">01. Personal Details</p>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                                <User size={18} />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Full Name"
                                                className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547]"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                                    <Mail size={18} />
                                                </div>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Email Address"
                                                    className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547]"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                                    <Phone size={18} />
                                                </div>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Phone Number"
                                                    className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Appointment Detail */}
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-[#37CBD1] uppercase tracking-[0.2em]">02. Schedule</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                                <Calendar size={18} />
                                            </div>
                                            <input
                                                required
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all font-bold text-[#1A2547] text-sm"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                                <Clock size={18} />
                                            </div>
                                            <input
                                                required
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all font-bold text-[#1A2547] text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors pointer-events-none">
                                            <Activity size={18} />
                                        </div>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleInputChange}
                                            className="w-full pl-14 pr-12 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all font-bold text-[#1A2547] appearance-none cursor-pointer text-sm"
                                        >
                                            <option>General Consultation</option>
                                            <option>Diagnostics</option>
                                            <option>Surgery Discussion</option>
                                            <option>Pediatrics</option>
                                            <option>Cardiology</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none group-focus-within:text-[#37CBD1] transition-colors">
                                            <ChevronDown size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Message */}
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-[#37CBD1] uppercase tracking-[0.2em]">03. Additional Info</p>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-6 text-gray-300 group-focus-within:text-[#37CBD1] transition-colors">
                                            <FileText size={18} />
                                        </div>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your symptoms..."
                                            rows="4"
                                            className="w-full pl-14 pr-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547] resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 bg-[#1A2547] text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#1A2547]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        'Confirm Appointment'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#37CBD1]">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Urgent Support?</p>
                            <p className="text-sm font-black text-[#1A2547]">+1 (555) 000-HEALTH</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentSidebar;
