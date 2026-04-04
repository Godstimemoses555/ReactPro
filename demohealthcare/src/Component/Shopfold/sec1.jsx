import React from 'react'
import bgimg from "../../assets/bgimg.jpg"

const Sec1 = () => {
    return (
        <section className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1555633481-d33c1ee56c5b?auto=format&fit=crop&q=80&w=1600" 
                    alt="Pharmacy" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-8 text-left">
                <div className="space-y-6 animate-fadeIn">
                    <div className="inline-block px-4 py-1.5 bg-[#37CBD1]/20 backdrop-blur-md rounded-full border border-[#37CBD1]/30 text-[#37CBD1] text-sm font-bold tracking-widest uppercase mb-2 shadow-lg shadow-[#37CBD1]/20">
                        CiyaCare Pharmacy
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                        Medical <span className="text-[#37CBD1]">Store</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl font-light leading-relaxed">
                        Order your medications and health essentials from the comfort 
                        of your home. FAST delivery and FDA-approved products guaranteed.
                    </p>
                    
                    <div className="flex items-center gap-6 pt-4 text-white/70 text-sm font-semibold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#37CBD1] animate-pulse"></div>
                            <span>FDA Approved</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#37CBD1] animate-pulse"></div>
                            <span>Secure Payment</span>
                        </div>
                         <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#37CBD1] animate-pulse"></div>
                            <span>Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec1
