import React from 'react'
import woman from '../../assets/woman.jpg'
import plusicon from "../../assets/plusicon.png"
import calendar from "../../assets/calendar.png"
import ceo from "../../assets/ceo.jpg"
import signature from "../../assets/signature.png"
import send from "../../assets/send.png"

const Sec3 = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-[#f8fbff] px-6 py-20 medical-bg">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">

                {/* LEFT SIDE - Hero Image with Floating Elements */}
                <div className="w-full lg:w-1/2 relative group animate-fadeIn">
                    <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl skew-y-1 transition-transform duration-500 group-hover:skew-y-0">
                        <img
                            src={woman}
                            alt="Professional Healthcare"
                            className="w-full h-full object-cover aspect-4/5 scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent"></div>
                    </div>

                    {/* Decorative Background Element */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

                    {/* Floating Info Card */}
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden md:flex items-center gap-4 w-[240px] p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 z-20 hover:-translate-x-2 transition-transform duration-300">
                        <div className="p-3 bg-cyan-500/10 rounded-xl">
                            <img src={calendar} className="w-8 h-8 object-contain" alt="Booking" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-800">24/7</span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Medical Support</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - Content & Features */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-bold uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                            About Our Mission
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.2] tracking-tight">
                            Healthcare for Every <span className="text-cyan-500">Patient</span> We Serve
                        </h2>
                        <p className="text-lg text-gray-500 max-w-xl leading-relaxed font-light">
                            We bridge the gap between world-class technology and compassionate care,
                            ensuring every individual receives the personalized attention they deserve.
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Personalized Compassionate Care",
                            "World-Class Medical Experts",
                            "State-of-the-art Facilities",
                            "24/7 Advanced Surveillance"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-cyan-100 group">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-cyan-500 transition-colors">
                                    <img src={plusicon} className="w-5 h-5 object-contain group-hover:invert" alt="Check" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    <hr className="border-gray-200 w-full" />

                    {/* CEO / Founder Block */}
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-20"></div>
                                <img src={ceo} className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" alt="CEO" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-xl font-bold text-gray-900">Dr. Smith</h4>
                                <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Founder & CEO</p>
                            </div>
                        </div>

                        <div className="hidden sm:block opacity-60 hover:opacity-100 transition-opacity">
                            <img src={signature} className="h-12 w-auto grayscale" alt="Signature" />
                        </div>

                        <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#37CBD1] hover:scale-105 transition-all duration-300 shadow-xl group">
                            <span>Learn More</span>
                            <img src={send} className="w-4 h-4 invert group-hover:translate-x-1 transition-transform" alt="Arrow" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sec3