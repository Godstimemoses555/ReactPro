import React from 'react'
import Sec1abu from '../Component/AboutUs/sec1abu'

const AboutUs = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Main Header / Hero could go here if needed, but sec1abu covers most of it */}
            <div className="pt-20 bg-gray-50 text-center pb-10">
                <h1 className="text-4xl font-black text-[#1A2547] tracking-tight uppercase">About Us</h1>
                <div className="w-20 h-1.5 bg-[#37CBD1] mx-auto mt-4 rounded-full shadow-lg shadow-[#37CBD1]/30 animate-pulse"></div>
            </div>
            
            <Sec1abu />
            
            {/* Additional sections like 'Our Team' or 'Our History' could be added here later */}
        </main>
    )
}

export default AboutUs
