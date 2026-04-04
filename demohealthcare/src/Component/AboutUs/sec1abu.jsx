import React from 'react'
import { motion } from 'framer-motion'
import ceo from '../../assets/ceo.jpg'
import signature from '../../assets/signature.png'
import woman from '../../assets/woman.jpg'
import plusicon from '../../assets/plusicon.png'

const Sec1abu = () => {
    return (
        <section className="w-full min-h-screen bg-white py-20 px-6 lg:px-20 overflow-hidden relative">
            
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#37CBD1]/5 rounded-bl-[200px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#1A2547]/5 rounded-tr-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* LEFT SIDE: Professional Imagery */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white group">
                        <img 
                            src={woman} 
                            className="w-full h-full object-cover aspect-4/5 scale-105 group-hover:scale-100 transition-transform duration-1000" 
                            alt="Our Medical Director" 
                        />
                        {/* Overlay for Depth */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#1A2547]/30 to-transparent"></div>
                    </div>

                    {/* Floating Achievement Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-8 -right-8 w-64 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 z-20"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#37CBD1] flex items-center justify-center text-white shadow-lg shadow-[#37CBD1]/30">
                                <span className="text-2xl font-black">25</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Years of</span>
                                <span className="text-sm font-bold text-[#1A2547]">Clinical Excellence</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE: Narrative Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col gap-8"
                >
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1A2547]/5 border border-[#1A2547]/10">
                            <div className="w-2 h-2 rounded-full bg-[#37CBD1]"></div>
                            <span className="text-[10px] font-black text-[#1A2547] uppercase tracking-[0.2em] py-1">About Our Legacy</span>
                        </div>
                        <h1 className="text-5xl lg:text-3xl font-black text-[#1A2547] leading-[1.1] tracking-tight">
                            Pioneering Healthcare with <br />
                            <span className="text-[#37CBD1]">Compassion</span> & Professionalism
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed font-light mt-6 italic border-l-4 border-[#37CBD1]/20 pl-6">
                            "Since our inception, our mission has been simple: to provide world-class medical services while treating every patient as a member of our own family."
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-500 leading-relaxed font-medium opacity-80">
                            CiyaCare has grown from a local clinic into a leading regional healthcare provider. 
                            Our success stems from our unwavering commitment to using the latest technology, 
                            maintaining a team of elite medical experts, and never losing the human touch that defines real healing.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Expert Medical Consultants",
                                "State-of-the-Art Diagnostics",
                                "24/7 Emergency Support",
                                "Holistic Patient Wellness"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-lg bg-[#37CBD1]/10 flex items-center justify-center group-hover:bg-[#37CBD1] transition-colors duration-300">
                                        <img src={plusicon} className="w-3 h-3 invert group-hover:invert-0" alt="Icon" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1A2547] opacity-80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100 w-full" />

                    {/* CEO / Founder Message */}
                    <div className="flex items-center justify-between gap-8 flex-wrap">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="absolute -inset-1.5 bg-linear-to-r from-[#37CBD1] to-[#1A2547] rounded-full blur opacity-20"></div>
                                <img src={ceo} className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" alt="Founder" />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-2xl font-black text-[#1A2547] tracking-tighter">Dr. Clara Smith</h4>
                                <p className="text-[10px] font-black text-[#37CBD1] uppercase tracking-[0.2em]">Founder & Medical Director</p>
                            </div>
                        </div>
                        <div className="opacity-70 flex flex-col items-end">
                            <img src={signature} className="h-16 w-auto grayscale mb-2" alt="Signature" />
                            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-none">Official Endorsement</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Sec1abu