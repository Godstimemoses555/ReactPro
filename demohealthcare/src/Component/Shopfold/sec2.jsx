import React, { useState } from 'react';
import useCartStore from '../../store/useCartStore';

const products = [
    { id: 1, name: "Digital Thermometer", price: 15.99, category: "Diagnostics", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Blood Pressure Monitor", price: 45.00, category: "Diagnostics", image: "https://images.unsplash.com/photo-1628595304192-3652de49d21c?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Pulse Oximeter", price: 29.99, category: "Diagnostics", image: "https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Vitamin C (1000mg)", price: 12.50, category: "Wellness", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "First Aid Kit", price: 35.00, category: "Essentials", image: "https://images.unsplash.com/photo-1603398938378-e54eab446f08?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Organic Sanitizer", price: 9.99, category: "Essentials", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Surgical Masks (50)", price: 14.99, category: "Essentials", image: "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Knee Support Brace", price: 22.00, category: "Wellness", image: "https://images.unsplash.com/photo-1594411135405-7f938b8206f4?auto=format&fit=crop&q=80&w=400" },
];

const Sec2 = () => {
    const [filter, setFilter] = useState("All");
    const addToCart = useCartStore((state) => state.addToCart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const itemCount = useCartStore((state) => state.getItemCount());

    const filteredProducts = filter === "All" 
        ? products 
        : products.filter(p => p.category === filter);

    return (
        <section className="py-20 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header & Cart Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Health Collections</h2>
                        <p className="text-gray-500 mt-2">Quality diagnostic tools and wellness essentials.</p>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-4 w-full md:w-auto">
                        {/* Category Filter */}
                        <div className="flex flex-col md:flex-row w-full md:w-auto bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                            {["All", "Diagnostics", "Wellness", "Essentials"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-lg text-sm w-full font-bold transition-all ${filter === cat ? 'bg-[#37CBD1] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Floating Cart Button */}
                        <button 
                            onClick={toggleCart}
                            className="relative px-6 py-3 md:w-auto bg-white border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-[#1A2547] group self-start sm:self-auto"
                        >
                            <span className="font-bold text-sm">My Cart</span>
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#37CBD1] text-white text-[10px] flex items-center justify-center rounded-full font-bold animate-bounce shadow-lg">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-[32px] p-5 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 border border-transparent hover:border-cyan-100 group flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-square rounded-[24px] overflow-hidden bg-gray-50 mb-4">
                                <img 
                                    src={product.image} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={product.name}
                                />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#37CBD1] shadow-sm uppercase tracking-widest">
                                    {product.category}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col grow">
                                <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#37CBD1] transition-colors">{product.name}</h3>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-orange-400' : 'bg-gray-200'}`}></div>
                                    ))}
                                    <span className="text-[10px] font-bold text-gray-400 ml-2">(128 Reviews)</span>
                                </div>
                                
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                    <span className="text-2xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="h-12 w-12 bg-gray-100 text-[#1A2547] rounded-2xl flex items-center justify-center hover:bg-[#37CBD1] hover:text-white hover:scale-110 transition-all font-bold text-xl"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Sec2
