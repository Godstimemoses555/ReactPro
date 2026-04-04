import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Heart, MessageSquare, Share2, MoreHorizontal, User, Image as ImageIcon, Link as LinkIcon, Smile } from 'lucide-react'
import UseBlognews from '../../store/Blognews'

const Sec1 = () => {
    const [inputValue, setInputValue] = useState('')
    const posts = UseBlognews((state) => state.posts)
    const addPost = UseBlognews((state) => state.addPost)

    const handlePost = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            addPost(inputValue)
            setInputValue('')
        }
    }

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            
            {/* Create Post Form */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[32px] p-8 shadow-xl shadow-[#1A2547]/5 border border-white"
            >
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#37CBD1]/10 flex items-center justify-center text-[#37CBD1] shrink-0 border border-[#37CBD1]/10 shadow-inner">
                        <User size={24} />
                    </div>
                    <form onSubmit={handlePost} className="grow space-y-4">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Share a health update or tip..."
                            className="w-full min-h-[120px] p-5 bg-gray-50/50 rounded-2xl border-2 border-transparent focus:border-[#37CBD1] focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium text-[#1A2547] resize-none text-lg"
                        />
                        
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <button type="button" className="p-2.5 rounded-xl hover:bg-[#37CBD1]/5 text-gray-400 hover:text-[#37CBD1] transition-all transform hover:scale-110">
                                    <ImageIcon size={20} />
                                </button>
                                <button type="button" className="p-2.5 rounded-xl hover:bg-[#37CBD1]/5 text-gray-400 hover:text-[#37CBD1] transition-all transform hover:scale-110">
                                    <LinkIcon size={20} />
                                </button>
                                <button type="button" className="p-2.5 rounded-xl hover:bg-[#37CBD1]/5 text-gray-400 hover:text-[#37CBD1] transition-all transform hover:scale-110">
                                    <Smile size={20} />
                                </button>
                            </div>
                            <button 
                                type="submit"
                                disabled={!inputValue.trim()}
                                className={`px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-3 transition-all transform active:scale-95 shadow-xl ${inputValue.trim() ? 'bg-[#1A2547] text-white hover:bg-[#37CBD1] shadow-[#37CBD1]/20' : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none'}`}
                            >
                                <span>Post Update</span>
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>

            {/* Post Feed */}
            <div className="space-y-6">
                <AnimatePresence mode='popLayout'>
                    {posts.map((post, index) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ 
                                type: "spring", 
                                damping: 25, 
                                stiffness: 200, 
                                delay: index * 0.05 
                            }}
                            className="bg-white rounded-[32px] p-8 shadow-lg shadow-[#1A2547]/3 border border-gray-50 group hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Author Info */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-lg font-black shadow-lg ${post.id % 2 === 0 ? 'bg-linear-to-tr from-[#1A2547] to-blue-400' : 'bg-linear-to-tr from-[#37CBD1] to-cyan-400'}`}>
                                        {post.author[0]}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#1A2547] group-hover:text-[#37CBD1] transition-colors">{post.author}</span>
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{post.timestamp}</span>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-300 hover:text-[#1A2547] transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            {/* Post Content */}
                            <div className="mb-8">
                                <p className="text-[#1A2547] text-lg leading-[1.6] font-medium opacity-90">
                                    {post.content}
                                </p>
                            </div>

                            <hr className="border-gray-50 mb-6" />

                            {/* Interaction Bar */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all group/btn">
                                        <Heart size={20} className="group-hover/btn:fill-red-500" />
                                        <span className="text-sm font-bold">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-blue-50 text-gray-400 hover:text-blue-500 transition-all group/btn">
                                        <MessageSquare size={20} className="group-hover/btn:fill-blue-500" />
                                        <span className="text-sm font-bold">Comments</span>
                                    </button>
                                </div>
                                <button className="p-2.5 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-[#1A2547] transition-all">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Sec1