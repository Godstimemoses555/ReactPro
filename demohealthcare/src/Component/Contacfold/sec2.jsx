import React, { useRef, useState } from 'react'

const Sec2 = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' or 'error'

    const handlesend = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        const formData = new FormData(form.current);
        const payload = {
            name: formData.get('from name'),
            email: formData.get('from email'),
            message: formData.get('message')
        };

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                console.log("Contact API Success");
                setStatus('success');
                form.current.reset(); // Clear the form
            } else {
                console.error("Contact API Error");
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Network Error:", error);
            setStatus("Network error. Please make sure the backend is running.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content */}
                    <div className="w-full lg:w-[60%] flex flex-col items-start gap-8 animate-fadeIn">
                        <button className="px-6 py-2 border-2 border-[#37CBD1] text-[#37CBD1] rounded-full text-sm font-bold uppercase tracking-wider bg-[#37CBD1]/5 hover:bg-[#37CBD1] hover:text-white transition-all duration-300">
                            Get In Touch
                        </button>

                        <div className="flex w-full flex-col gap-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                We're here to <br /> <span className="text-[#37CBD1]">Care for You</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                                Experience world-class medical treatment with our team of expert doctors
                                and state-of-the-art facilities. We prioritize your health above all else.
                            </p>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-4">
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                                <h3 className="font-bold text-gray-800 text-lg mb-2">Our Clinic</h3>
                                <p className="text-gray-500 text-sm">123 Health Ave, Medical District<br />New York, NY 10001</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                                <h3 className="font-bold text-gray-800 text-lg mb-2">Contact Us</h3>
                                <p className="text-gray-500 text-sm">inyanggodstime63@gmail<br />+234 7041126796</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    <div className="w-full lg:w-[40%] h-auto p-10 rounded-[40px] bg-white border border-gray-100 flex items-center justify-center relative group shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                        <div className="absolute inset-0 bg-[#37CBD1]/5 rounded-[40px] pointer-events-none"></div>
                        <form ref={form} onSubmit={handlesend} className='flex w-full gap-5 flex-col relative z-10'>
                            {/* Matching your template's "to name" (with space) */}
                            <input type="hidden" name="to name" value="HealthCare Admin" />
                            
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="from name"
                                    required
                                    placeholder='Full Name*'
                                    className='w-full px-5 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-[#37CBD1] focus:ring-4 focus:ring-[#37CBD1]/10 outline-none transition-all duration-300'
                                />
                                <input
                                    type="email"
                                    name="from email"
                                    required
                                    placeholder='Email Address*'
                                    className='w-full px-5 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-[#37CBD1] focus:ring-4 focus:ring-[#37CBD1]/10 outline-none transition-all duration-300'
                                />
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder='Your Message*'
                                    className='w-full px-5 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:bg-white focus:border-[#37CBD1] focus:ring-4 focus:ring-[#37CBD1]/10 outline-none transition-all duration-300 resize-none'
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <p className="text-green-600 text-center font-medium bg-green-50 py-2 rounded-lg border border-green-100 animate-pulse">
                                    ✓ Message sent successfully!
                                </p>
                            )}

                            {status && status !== 'success' && (
                                <p className="text-red-600 text-center font-medium bg-red-50 py-2 rounded-lg border border-red-100">
                                    ✕ {status}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full py-4 bg-[#37CBD1] text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#37CBD1]/30 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#2ca6ac] hover:scale-[1.02] active:scale-[0.98]'}`}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sec2