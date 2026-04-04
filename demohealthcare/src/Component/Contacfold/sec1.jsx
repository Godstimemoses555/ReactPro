import React, { useState, useEffect } from 'react'

const Sec1 = () => {
    const caruselimgae = [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1551076805-e18690c5e4fa?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {   
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % caruselimgae.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [caruselimgae.length]);

    return (
        <section className="relative w-full h-[550px] overflow-hidden flex items-center justify-center">
            {/* Background Carousel */}
            <div className="absolute inset-0">
                {caruselimgae.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                            backgroundImage: `url(${img})`, 
                            backgroundPosition: "center", 
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat" 
                        }}
                    >
                    </div>
                ))}
                {/* Fallback/Layered Background Mask */}
                <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/40 to-blue-950/80"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl px-6 text-center">
                <div className="space-y-6 animate-fadeIn">
                    <div className="inline-block px-4 py-1.5 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-semibold tracking-wider uppercase mb-2">
                        Get In Touch
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
                        Contact <span className="text-cyan-400">Us</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Have questions about our medical services? Our dedicated team is here 24/7 
                         to provide the support and answers you need.
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 pt-4">
                        <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-white font-medium">Contact Us</span>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {caruselimgae.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sec1