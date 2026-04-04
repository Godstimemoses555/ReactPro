import React, { useState, useEffect } from 'react'
import bgimg from "../../assets/bgimg.jpg"
import doctorvid from "../../assets/doctorvid.mp4"

const carouselImages = [
    bgimg,
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551076805-e18690c5e4fa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
];

const Sec1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            {/* Background Slider */}
            {carouselImages.map((imgUrl, index) => (
                <div
                    key={imgUrl}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                />
            ))}

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className='relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-10 min-h-screen'>

                {/* LEFT */}
                <div className='w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left items-center md:items-start'>

                    {/* Badge */}
                    <div className='flex items-center justify-center gap-2 px-4 py-1 ring-2 ring-[#37CBD1] rounded-full'>
                        <div className='w-2 h-2 bg-[#37CBD1] rounded-full'></div>
                        <h1 className='text-white text-sm md:text-base font-bold'>
                            Welcome to Demo ciyaCare!!!
                        </h1>
                    </div>

                    {/* Heading */}
                    <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                        Advanced health care made personal
                    </h1>

                    {/* Paragraph */}
                    <p className='text-white text-sm md:text-base max-w-md'>
                        Experience world-class medical treatment with our team of expert doctors and state-of-the-art facilities.
                    </p>

                    {/* Button */}
                    <button className='px-6 py-3 bg-white rounded-lg text-[#37CBD1] text-base font-semibold flex items-center gap-2 hover:bg-gray-100 transition shadow-lg'>
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                {/* RIGHT */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end relative'>

                    <div className='flex w-[260px] md:w-[320px] h-[140px] md:h-[160px] bg-white rounded-xl shadow-lg overflow-hidden'>

                        {/* Left Card */}
                        <div className='flex flex-col justify-end bg-[#37CBD1] p-3 w-1/2'>
                            <div className='flex -space-x-3'>
                                <img src={bgimg} className='w-8 h-8 rounded-full border-2 border-white' />
                                <img src={bgimg} className='w-8 h-8 rounded-full border-2 border-white' />
                                <img src={bgimg} className='w-8 h-8 rounded-full border-2 border-white' />
                            </div>

                            <h4 className='text-white font-bold text-lg'>20K+</h4>
                            <p className='text-xs text-gray-200'>Happy Patients</p>
                        </div>

                        {/* Video */}
                        <div className='w-1/2'>
                            <video className='w-full h-full object-cover' autoPlay loop muted playsInline src={doctorvid}></video>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sec1