import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

const Sec3 = () => {
    // URL for Google Maps Embed (Encoded address: 123 Health Ave, New York)
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821867!2d-74.11976373974458!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1711993456789!5m2!1sen!2sus";

    return (
        <section className="w-full h-[600px] relative mt-10 mb-20 px-6 max-w-7xl mx-auto">
            <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 relative group">
                
                {/* Live Interactive Map */}
                <iframe
                    title="Clinic Location"
                    src={mapUrl}
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Info Overlay Card - Glassmorphism style */}
                <div className="absolute top-10 left-10 hidden lg:block w-80 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50">
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">Visit Our Clinic</h3>
                            <p className="text-sm text-[#37CBD1] font-bold uppercase tracking-widest">Main Medical Center</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#37CBD1]/10 rounded-xl">
                                    <MapPin className="w-5 h-5 text-[#37CBD1]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Address</h4>
                                    <p className="text-gray-500 text-xs text-wrap">123 Health Ave, Medical District<br />New York, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#37CBD1]/10 rounded-xl">
                                    <Phone className="w-5 h-5 text-[#37CBD1]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Emergency Call</h4>
                                    <p className="text-gray-500 text-xs">+234 7041126796</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#37CBD1]/10 rounded-xl">
                                    <Clock className="w-5 h-5 text-[#37CBD1]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Opening Hours</h4>
                                    <p className="text-gray-500 text-xs">Mon - Sat: 08:00 - 20:00</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("123 Health Ave, Medical District, New York, NY 10001")}`, '_blank')}
                            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#37CBD1] hover:scale-[1.02] transition-all duration-300 shadow-xl"
                        >
                            Get Directions
                        </button>
                    </div>
                </div>

                {/* Mobile Floating Marker */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:hidden px-6 py-3 bg-white rounded-full shadow-xl border border-gray-100 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#37CBD1] animate-ping"></div>
                    <span className="text-xs font-bold text-gray-700">Health District, NY</span>
                </div>
            </div>
        </section>
    )
}

export default Sec3