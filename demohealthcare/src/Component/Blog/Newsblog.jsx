import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bell, Info, CheckCircle2, AlertCircle, Newspaper, ArrowRight, Twitter, Facebook, Instagram, BadgeCheck, ExternalLink, Globe } from 'lucide-react'
import UseBlognews from '../../store/Blognews'

const Newsblog = () => {
    const isBlogtoggle = UseBlognews((state) => state.isBlogtoggle)
    const closeblog = UseBlognews((state) => state.closeblog)
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const notifications = [
        {
            id: 1,
            type: 'announcement',
            source: 'World Health Organization',
            title: 'Global Health Emergency Updates',
            description: 'The WHO remains vigilant in monitoring global health trends. Stay informed about the latest international health regulations and pandemic preparedness standards.',
            time: '2 hours ago',
            icon: <Info className="text-blue-500" />,
            isNew: true,
            verified: true,
             social: {
                twitter: 'https://twitter.com/WHO',
                facebook: 'https://facebook.com/WHO',
                instagram: 'https://instagram.com/who'
            },
            website: 'https://www.who.int'
        },
        {
            id: 2,
            type: 'health-tip',
            source: 'Mayo Clinic',
            title: 'Advanced Heart Health Guidelines',
            description: 'New research from Mayo Clinic emphasizes the importance of cardiovascular screenings and early detection in preventing long-term heart disease.',
            time: '5 hours ago',
            icon: <CheckCircle2 className="text-[#37CBD1]" />,
            isNew: true,
            verified: true,
            social: {
                twitter: 'https://twitter.com/MayoClinic',
                facebook: 'https://facebook.com/MayoClinic',
                instagram: 'https://instagram.com/mayoclinic'
            },
            website: 'https://www.mayoclinic.org'
        },
        {
            id: 3,
            type: 'alert',
            source: 'CDC',
            title: 'Seasonal flu Prevention Standards',
            description: 'The Centers for Disease Control and Prevention (CDC) has released updated vaccination schedules for the upcoming season. Protect yourself and your community.',
            time: '1 day ago',
            icon: <AlertCircle className="text-amber-500" />,
            isNew: false,
            verified: true,
            social: {
                twitter: 'https://twitter.com/CDCgov',
                facebook: 'https://facebook.com/CDC',
                instagram: 'https://instagram.com/cdcgov'
            },
            website: 'https://www.cdc.gov'
        },
        {
            id: 4,
            type: 'news',
            source: 'Harvard Health',
            title: 'Mind-Body Wellness Research',
            description: 'Harvard Health Publishing highlights the significant impact of mindfulness and stress management on overall biological health and longevity.',
            time: '2 days ago',
            icon: <Newspaper className="text-purple-500" />,
            isNew: false,
            verified: true,
            social: {
                twitter: 'https://twitter.com/HarvardHealth',
                facebook: 'https://facebook.com/harvardhealthpublishing',
                instagram: 'https://instagram.com/harvard_health'
            },
            website: 'https://www.health.harvard.edu'
        }
    ]

    return (
        <AnimatePresence>
            {isBlogtoggle && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeblog}
                        className="fixed inset-0 bg-[#1A2547]/40 backdrop-blur-sm z-80"
                    />

                    {/* Sidebar Container */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-[450px] bg-white z-90 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.15)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div>
                                <h2 className="text-3xl font-black text-[#1A2547] tracking-tight">Verified Updates</h2>
                                <p className="text-[10px] text-[#37CBD1] font-black uppercase tracking-[0.2em] mt-1">Global Health Authority Feed</p>
                            </div>
                            <button 
                                onClick={closeblog}
                                className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#37CBD1] hover:text-white transition-all transform hover:rotate-90 duration-500"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Feed */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                            {notifications.map((notification, index) => (
                                <motion.div
                                    key={notification.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => toggleExpand(notification.id)}
                                    className={`p-6 rounded-3xl border transition-all duration-500 group cursor-pointer hover:shadow-xl hover:shadow-[#1A2547]/5 overflow-hidden ${notification.isNew ? 'bg-[#37CBD1]/5 border-[#37CBD1]/10' : 'bg-white border-gray-100'} ${expandedId === notification.id ? 'ring-2 ring-[#37CBD1]/30 shadow-2xl' : ''}`}
                                >
                                    <div className="flex gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 ${expandedId === notification.id ? 'scale-110 bg-[#37CBD1] text-white' : (notification.isNew ? 'bg-white' : 'bg-gray-50')}`}>
                                            {notification.icon}
                                        </div>
                                        <div className="space-y-1 grow">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-1.5 overflow-hidden">
                                                    <h3 className="font-bold text-[#1A2547] leading-tight group-hover:text-[#37CBD1] transition-colors truncate">
                                                        {notification.title}
                                                    </h3>
                                                    {notification.verified && (
                                                        <BadgeCheck size={16} className="text-[#37CBD1] shrink-0" />
                                                    )}
                                                </div>
                                                {notification.isNew && expandedId !== notification.id && (
                                                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                                                )}
                                            </div>

                                            {/* Source Tag */}
                                            <div className="flex items-center gap-1 opacity-60">
                                                <span className="text-[9px] font-black text-[#1A2547] uppercase tracking-widest whitespace-nowrap">Source: {notification.source}</span>
                                            </div>
                                            
                                            <p className={`text-sm text-gray-500 leading-relaxed transition-all duration-500 mt-2 ${expandedId === notification.id ? 'line-clamp-none' : 'line-clamp-2'}`}>
                                                {notification.description}
                                            </p>

                                            {/* Details Section (Expanded) */}
                                            <AnimatePresence>
                                                {expandedId === notification.id && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="mt-6 pt-6 border-t border-gray-50 space-y-4"
                                                    >
                                                        <div className="flex flex-col gap-4">
                                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Official Social Handles</span>
                                                            <div className="flex items-center gap-3">
                                                                <a href={notification.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#1A2547] hover:bg-[#1A2547] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                                                                    <Twitter size={18} />
                                                                </a>
                                                                <a href={notification.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#1A2547] hover:bg-[#3b5998] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                                                                    <Facebook size={18} />
                                                                </a>
                                                                <a href={notification.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#1A2547] hover:bg-[#E1306C] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                                                                    <Instagram size={18} />
                                                                </a>
                                                                <div className="h-4 w-[1px] bg-gray-100 mx-1"></div>
                                                                <a href={notification.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link py-1 px-3 bg-gray-50 rounded-lg hover:bg-[#37CBD1]/10 transition-colors">
                                                                    <Globe size={12} className="text-[#37CBD1]" />
                                                                    <span className="text-[10px] font-bold text-[#1A2547] uppercase tracking-widest group-hover/link:underline">Official Portal</span>
                                                                    <ExternalLink size={10} className="text-[#37CBD1]" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            <div className="flex items-center justify-between pt-4">
                                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] font-black">
                                                    {notification.time}
                                                </span>
                                                <div className={`flex items-center gap-1 text-[#37CBD1] transition-all transform ${expandedId === notification.id ? 'opacity-0 translate-x-4' : 'opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0'}`}>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Verify Detail</span>
                                                    <ArrowRight size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-8 bg-gray-50/50 border-t border-gray-50">
                            <button className="w-full py-4 bg-white border-2 border-gray-100 text-[#1A2547] rounded-2xl font-bold text-sm hover:border-[#37CBD1] hover:text-[#37CBD1] transition-all active:scale-[0.98]">
                                Clear Notifications
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Newsblog