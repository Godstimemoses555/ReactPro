import React from 'react'
import Sec1 from '../Component/Blog/Sec1'

const Blogs = () => {
    return (
        <div className="min-h-screen bg-[#F0F2F5] pt-10 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-black text-[#1A2547] tracking-tight mb-2">Community Blog</h1>
                    <p className="text-gray-500 font-medium tracking-wide border-l-4 border-[#37CBD1] pl-4 inline-block">Latest health news & institution updates</p>
                </div>
                
                {/* Main Blog Component (Feed & Form) */}
                <Sec1 />
            </div>
        </div>
    )
}

export default Blogs
