import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Loginsec = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const handlemail = (e) => {
        setEmail(e.target.value)
    }

    const handlepassword = (e) => {
        setPassword(e.target.value)
    }

    const handlelogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log("User logged in successfully");
                // Persist userId for future use (like checkout)
                localStorage.setItem("healthcare_user_id", data.user_id);
                localStorage.setItem("healthcare_user_email", email);
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token)
                // Navigate to Otp page
                navigate("/Otp", { state: { userId: data.user_id } });
            } else {
                setError(data.message || "Invalid email or password");
            }
        } catch (err) {
            setError("Connection error. Please check your backend.");
            console.error(err);
        }
    }

    return (
        <div className='flex w-screen h-screen min-w-full min-h-full bg-[#37CBD1] items-center justify-center flex-col gap-3 px-4'>
            <h1 className='text-white text-3xl md:text-4xl font-bold text-center'>Input Your Data</h1>
            <div className='w-full sm:w-[80%] md:w-[50%] max-w-md h-auto min-h-[400px] bg-white rounded-xl shadow-lg p-6 md:p-8 items-center justify-center flex flex-col gap-3'>
                <div className='flex w-full items-center justify-center text-center'>
                    <h1 className='font-bold text-[#37CBD1] text-[18px]'>Login into Your Account</h1>
                </div>

                {error && <p className="text-red-500 text-sm font-semibold mb-2">{error}</p>}

                <form onSubmit={handlelogin} className="w-full max-w-sm">
                    <div className='space-y-4 mb-6'>
                        <div className='space-y-2'>
                            <label htmlFor="email" className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handlemail}
                                className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]'
                                required
                            />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={handlepassword}
                                    className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1] pr-10'
                                    required
                                />

                                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#37CBD1] flex items-center justify-center'>
                                    {
                                        showPassword ? (
                                            <Eye size={20} onClick={() => setShowPassword(false)} />
                                        ) : (
                                            <EyeOff size={20} onClick={() => setShowPassword(true)} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='w-full bg-[#37CBD1] text-white py-2 rounded-lg h-[40px] text-[18px] font-bold hover:bg-[#2fb7bd] transition-colors' type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Loginsec;