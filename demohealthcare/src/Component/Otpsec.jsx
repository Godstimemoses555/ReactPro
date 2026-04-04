import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Otpsec = ({ setIsAuthenticated }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [otp, setOtp] = useState("")
    const [error, setError] = useState("")
    const [isVerifying, setIsVerifying] = useState(false)

    const userId = location.state?.userId || localStorage.getItem("healthcare_user_id")

    const handleotp = async (e) => {
        e.preventDefault();
        setError("")
        setIsVerifying(true)

        if (!userId) {
            setError("Session expired. Please login again.")
            setIsVerifying(false)
            return
        }

        try {
            const response = await fetch("http://localhost:8000/verify_otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id: userId,
                    otp: otp
                })
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log("OTP verified successfully");
                setIsAuthenticated(true);
                navigate("/Shop");
            } else {
                setError(data.message || "Invalid OTP code");
            }
        } catch (err) {
            setError("Connection error. Please try again.");
            console.error(err);
        } finally {
            setIsVerifying(false)
        }
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-[#37CBD1] p-4'>
            <div className='flex flex-col items-center gap-4 w-full max-w-md'>
                <h1 className='text-[20px] font-bold text-white text-center'>
                    Enter The 6-Digit Code sent to Your Email
                </h1>

                <div className='w-full bg-white shadow-lg rounded-[10px] p-6 flex flex-col items-center'>
                    {error && <p className="text-red-500 text-sm font-semibold mb-4 text-center">{error}</p>}
                    <form onSubmit={handleotp} className='w-full flex flex-col items-center gap-4'>
                        <div className='w-full flex flex-col gap-2'>
                            <label className="text-gray-600 font-medium">OTP</label>
                            <input
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength="6"
                                type="text"
                                inputMode="numeric"
                                className='w-full px-4 py-3 border border-[#37CBD1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#37CBD1] text-center text-[24px] font-bold tracking-[0.5em] placeholder:tracking-normal'
                                placeholder="- - - -"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isVerifying}
                            className={`w-[80%] h-[40px] ${isVerifying ? 'bg-gray-400' : 'bg-[#37CBD1]'} shadow-lg rounded-[10px] text-white text-[20px] font-bold active:scale-95 transition-all`}
                        >
                            {isVerifying ? 'Verifying...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Otpsec