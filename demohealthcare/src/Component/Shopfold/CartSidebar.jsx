import React, { useState, useEffect } from 'react';
import useCartStore from '../../store/useCartStore';

const CartSidebar = () => {
    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const toggleCart = useCartStore((state) => state.toggleCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const addToCart = useCartStore((state) => state.addToCart);
    const deleteFromCart = useCartStore((state) => state.deleteFromCart);
    const totalPrice = useCartStore((state) => state.getTotalPrice());

    // 1. New Local states for Checkout
    const [checkoutStep, setCheckoutStep] = useState(0); // 0 = Cart, 1 = Checkout Details
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    // Form data states
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    // Load initial user data if available from localStorage
    useEffect(() => {
        const storedEmail = localStorage.getItem("healthcare_user_email") || "";
        setEmail(storedEmail);
        // address and fullname might be empty initially for the user to fill
    }, [isCartOpen]);

    const handleConfirmAndPay = async () => {
        setIsProcessing(true);
        setError(null);

        const userId = localStorage.getItem("healthcare_user_id");

        if (!fullName || !email || !address) {
            setError("All fields are required to proceed with payment.");
            setIsProcessing(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/Paymentgateway", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: userId || null,
                    amount: Math.round(totalPrice), // Assuming Backend expects int
                    full_name: fullName,
                    email: email,
                    address: address
                })
            });

            const data = await response.json();

            if (response.status === 200 && data.payment_url) {
                // Redirect to Flutterwave Hosted Page
                window.location.href = data.payment_url;
            } else {
                setError(data.message || "Failed to initialize payment gateway.");
            }
        } catch (err) {
            setError("Connection to payment server failed.");
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-99 transition-all duration-500 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={toggleCart}
            ></div>

            {/* Sidebar */}
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-100 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-700 ease-out transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full bg-[#f8fbff]">
                    
                    {/* Header */}
                    <div className="p-8 bg-white border-b border-gray-100 flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-black text-[#1A2547]">
                                {checkoutStep === 0 ? "My Cart" : "Checkout"}
                            </h2>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                                {checkoutStep === 0 ? `${cartItems.length} Items Selected` : "Confirm Your Details"}
                            </p>
                        </div>
                        <button 
                            onClick={toggleCart}
                            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#37CBD1] hover:text-white transition-all transform hover:rotate-90 duration-500"
                        >
                             ✕
                        </button>
                    </div>

                    {/* Step 0: Cart Items */}
                    {checkoutStep === 0 && (
                        <>
                            <div className="grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
                                {cartItems.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                        <span className="text-6xl mb-4">🛒</span>
                                        <h3 className="text-xl font-bold text-gray-400">Your cart is empty</h3>
                                        <p className="text-sm mt-2">Start adding medical essentials now!</p>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-5 p-4 bg-white rounded-3xl shadow-sm border border-transparent hover:border-cyan-100 transition-all group">
                                            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-50 shrink-0">
                                                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                            </div>
                                            <div className="flex flex-col justify-between grow">
                                                <div className="flex justify-between items-start">
                                                    <h4 className="font-bold text-[#1A2547] text-lg leading-tight w-[180px]">{item.name}</h4>
                                                    <button 
                                                        onClick={() => deleteFromCart(item.id)}
                                                        className="text-gray-300 hover:text-red-500 transition-colors"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center bg-gray-50 rounded-xl px-2 py-1 gap-4 border border-gray-100">
                                                        <button 
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white hover:shadow-sm text-gray-500 hover:text-[#37CBD1] transition-all font-bold"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="font-bold text-[#1A2547]">{item.quantity}</span>
                                                        <button 
                                                            onClick={() => addToCart(item)}
                                                            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white hover:shadow-sm text-gray-500 hover:text-[#37CBD1] transition-all font-bold"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <span className="font-black text-xl text-[#37CBD1]">${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {cartItems.length > 0 && (
                                <div className="p-8 bg-white rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                                            <span>Subtotal</span>
                                            <span>${totalPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                                            <span className="text-lg font-bold text-[#1A2547]">Total Amount</span>
                                            <span className="text-3xl font-black text-[#37CBD1]">${totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setCheckoutStep(1)}
                                        className="w-full py-5 bg-[#1A2547] text-white rounded-[24px] font-bold text-lg hover:bg-[#37CBD1] transition-all transform hover:-translate-y-1 shadow-xl"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {/* Step 1: Checkout Form */}
                    {checkoutStep === 1 && (
                        <div className="flex flex-col h-full overflow-y-auto p-8 space-y-8 animate-fadeIn">
                            {error && (
                                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium">
                                    ✕ {error}
                                </div>
                            )}

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-[#1A2547] uppercase tracking-widest opacity-40 ml-2">Shipment Details</label>
                                    <input 
                                        type="text" 
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full p-5 bg-white rounded-2xl border border-gray-100 shadow-sm focus:border-[#37CBD1] outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547]"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Email for Confirmation"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-5 bg-white rounded-2xl border border-gray-100 shadow-sm focus:border-[#37CBD1] outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547]"
                                    />
                                    <textarea 
                                        placeholder="Delivery Address"
                                        rows="3"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full p-5 bg-white rounded-2xl border border-gray-100 shadow-sm focus:border-[#37CBD1] outline-none transition-all placeholder:text-gray-300 font-bold text-[#1A2547] resize-none"
                                    ></textarea>
                                </div>

                                <div className="p-6 bg-[#37CBD1]/5 rounded-3xl space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order Total</span>
                                        <span className="text-xl font-black text-[#1A2547]">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-medium">By proceeding, you agree to our terms of service. You will be redirected to Flutterwave secure payment page.</p>
                                </div>
                            </div>

                            <div className="mt-auto space-y-4">
                                <button 
                                    onClick={handleConfirmAndPay}
                                    disabled={isProcessing}
                                    className={`w-full py-5 ${isProcessing ? 'bg-gray-400' : 'bg-[#37CBD1]'} text-white rounded-[24px] font-black text-lg active:scale-95 transition-all shadow-xl shadow-[#37CBD1]/20 flex items-center justify-center gap-3`}
                                >
                                    {isProcessing ? 'Initializing...' : 'Confirm & Pay Now'}
                                </button>
                                <button 
                                    onClick={() => setCheckoutStep(0)}
                                    className="w-full py-2 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#1A2547] transition-all"
                                >
                                    Return to Cart
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartSidebar;

