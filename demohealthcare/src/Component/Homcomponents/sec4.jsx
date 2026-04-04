import React, { useState } from 'react'

const Sec4 = () => {
    const [open, setOpen] = useState(false);
    const [dam, setDam] = useState(false);
    const [hap, setHap] = useState(false);

    return (
        <div className="medical-bg w-full min-h-screen flex items-center justify-center px-6 py-20 bg-sky-50">
            <div className="w-full max-w-6xl text-center">

                {/* Header section */}
                <div className="flex flex-col items-center gap-4 mb-24 relative">
                    {/* State-triggered Blue Banner */}
                    <div className={`absolute -top-16 transition-all duration-500 transform ${open || dam || hap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                        <div className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                            Specialized care available for you!
                        </div>
                    </div>

                    <button className="px-5 py-2 border-2 border-[#37CBD1] rounded-full text-sm text-[#37CBD1] bg-white/50 backdrop-blur-sm font-medium hover:bg-[#37CBD1] hover:text-white transition-all duration-300">
                        Our Features
                    </button>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Excellence in every <br className="hidden md:block" /> medical service
                    </h2>
                    <p className="max-w-2xl text-gray-500 mt-4 text-lg">
                        We provide broad medical services and are always ready
                        to assist you with any health-related concerns.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Card Container 1 */}
                    <div className="flex flex-col items-center gap-6">
                        <div
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            className={`group p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 hover:translate-y-[-12px] transition-all duration-500 cursor-pointer w-full ${open ? 'bg-blue-600 text-white' : 'bg-white/60 backdrop-blur-md'}`}
                        >
                            <div className={`w-16 h-16 shadow-inner rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 ${open ? 'bg-white text-blue-600' : 'bg-white text-[#37CBD1]'}`}>
                                <span className="text-3xl font-light">✚</span>
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${open ? 'text-white' : 'text-gray-800'}`}>Medical Checkup</h3>
                            <p className={`leading-relaxed text-sm ${open ? 'text-blue-100' : 'text-gray-500'}`}>
                                Comprehensive diagnostic services and full-body checkups
                                to keep you ahead of potential health issues.
                            </p>
                        </div>
                        {/* Cyan Div below Card 1 */}
                        <div className={`w-20 h-2 bg-cyan-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                    </div>

                    {/* Card Container 2 */}
                    <div className="flex flex-col items-center gap-6">
                        <div
                            onMouseEnter={() => setDam(true)}
                            onMouseLeave={() => setDam(false)}
                            className={`group p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 hover:translate-y-[-12px] transition-all duration-500 cursor-pointer w-full ${dam ? 'bg-blue-600 text-white' : 'bg-white/60 backdrop-blur-md'}`}
                        >
                            <div className={`w-16 h-16 shadow-inner rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 ${dam ? 'bg-white text-blue-600' : 'bg-white text-[#37CBD1]'}`}>
                                <span className="text-3xl font-light">♥</span>
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${dam ? 'text-white' : 'text-gray-800'}`}>Heart Surgery</h3>
                            <p className={`leading-relaxed text-sm ${dam ? 'text-blue-100' : 'text-gray-500'}`}>
                                World-class cardiac unit specialized in complex heart
                                surgeries and life-saving treatments.
                            </p>
                        </div>
                        {/* Cyan Div below Card 2 */}
                        <div className={`w-20 h-2 bg-cyan-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] ${dam ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                    </div>

                    {/* Card Container 3 */}
                    <div className="flex flex-col items-center gap-6">
                        <div
                            onMouseEnter={() => setHap(true)}
                            onMouseLeave={() => setHap(false)}
                            className={`group p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/80 hover:translate-y-[-12px] transition-all duration-500 cursor-pointer w-full ${hap ? 'bg-blue-600 text-white' : 'bg-white/60 backdrop-blur-md'}`}
                        >
                            <div className={`w-16 h-16 shadow-inner rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 ${hap ? 'bg-white text-blue-600' : 'bg-white text-[#37CBD1]'}`}>
                                <span className="text-3xl font-light">⚕</span>
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${hap ? 'text-white' : 'text-gray-800'}`}>Child Specialist</h3>
                            <p className={`leading-relaxed text-sm ${hap ? 'text-blue-100' : 'text-gray-500'}`}>
                                Expert pediatric care in a friendly environment
                                designed to make your children feel safe and cared for.
                            </p>
                        </div>
                        {/* Cyan Div below Card 3 */}
                        <div className={`w-20 h-2 bg-cyan-500 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] ${hap ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} `}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sec4