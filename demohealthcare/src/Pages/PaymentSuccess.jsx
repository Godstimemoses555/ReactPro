import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Home, LayoutDashboard, ShieldCheck } from 'lucide-react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('verifying'); // verifying, success, error
    
    const transaction_id = searchParams.get('transaction_id');
    const user_id = searchParams.get('user_id');
    const email = searchParams.get('email');

    useEffect(() => {
        const verifyPayment = async () => {
            console.log("Verifying payment with params:", { transaction_id, user_id });
            
            try {
                // Flutterwave can return 'transaction_id' or 'tx_ref'
                const tid = transaction_id || searchParams.get('tx_ref');
                
                if (!tid || !user_id) {
                    console.error("Missing verification parameters", { tid, user_id });
                    setStatus('error');
                    return;
                }

                console.log("Fetching verification for TID:", tid);
                const response = await fetch(`http://localhost:8000/verify-payment?transaction_id=${tid}&user_id=${user_id}`);
                
                const data = await response.json();
                console.log("Verification response:", data);

                if (response.ok) {
                    setStatus('success');
                } else {
                    console.error("Verification failed on server:", data);
                    setStatus('error');
                }
            } catch (err) {
                console.error("Verification connection error:", err);
                setStatus('error');
            }
        };

        if (status === 'verifying') {
            verifyPayment();
        }
    }, [transaction_id, user_id, searchParams, status]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#f8fbff] p-6">
            <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-[#1A2547]/5 p-10 text-center relative overflow-hidden">
                
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#37CBD1]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                
                {status === 'verifying' && (
                    <div className="space-y-6 animate-pulse">
                        <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                            <div className="w-10 h-10 border-4 border-[#37CBD1] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-[#1A2547]">Verifying Payment</h2>
                            <p className="text-gray-400 font-medium">Please wait while we confirm your transaction...</p>
                        </div>
                    </div>
                )}

                {status === 'success' && (
                    <div className="space-y-8 animate-in fade-in zoom-in duration-700">
                        <div className="w-24 h-24 bg-[#37CBD1] rounded-full mx-auto flex items-center justify-center text-white shadow-xl shadow-[#37CBD1]/30">
                            <CheckCircle2 size={48} />
                        </div>
                        
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-[#1A2547]">Success!</h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-1 w-8 bg-[#37CBD1] rounded-full"></div>
                                <p className="text-[10px] text-[#37CBD1] font-black uppercase tracking-[0.2em]">Transaction Verified</p>
                            </div>
                            <p className="text-gray-500 font-medium pt-4">
                                Thank you for your purchase. Your account <span className="text-[#1A2547] font-bold">({email})</span> has been updated.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-3xl p-6 flex items-center gap-4 border border-gray-100">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A2547] shadow-sm">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Receipt Hash</p>
                                <p className="text-xs font-bold text-[#1A2547] truncate w-40">{transaction_id}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={() => navigate('/dashboard')}
                                className="w-full py-4 bg-[#1A2547] text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#1A2547]/20 transition-all active:scale-[0.98]"
                            >
                                <LayoutDashboard size={20} />
                                Go to Dashboard
                            </button>
                            <button 
                                onClick={() => navigate('/')}
                                className="w-full py-4 text-gray-400 font-bold hover:text-[#1A2547] transition-colors flex items-center justify-center gap-2"
                            >
                                <Home size={18} />
                                Back to Home
                            </button>
                        </div>
                    </div>
                )}

                {status === 'error' && (
                    <div className="space-y-8">
                        <div className="w-24 h-24 bg-red-500 rounded-full mx-auto flex items-center justify-center text-white shadow-xl shadow-red-500/30">
                            <X size={48} />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-[#1A2547]">Oops! Something went wrong</h2>
                            <p className="text-gray-500 font-medium">We couldn't verify your payment. If you've been charged, please contact support.</p>
                        </div>
                        <button 
                             onClick={() => navigate('/contact')}
                            className="w-full py-4 bg-red-500 text-white rounded-2xl font-black shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all"
                        >
                            Contact Support
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentSuccess;
