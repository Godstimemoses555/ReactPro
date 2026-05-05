import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'

const Regisec1 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        password: '',
        confirmPassword: '',
        gender: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    phone_number: formData.phone_number,
                    gender: formData.gender,
                    date_of_birth: formData.date_of_birth,
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    zipcode: formData.zipcode,
                    country: formData.country,

                }),
            });

            if (response.status === 201) {
                const data = await response.json();
                console.log("Registered Successfully! User ID:", data.user_id);
                alert("Registration successful! Your Specific User ID is: " + data.user_id);
                // Navigate to Login page and pass user_id via state
                navigate('/Login', { state: { userId: data.user_id } });
            } else {
                const errorData = await response.json();
                alert("Registration failed: " + (errorData.detail || errorData.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please check if the backend is running.");
        }
    }

    return (

        <div>
            {/* Removed the lg: prefix so it takes full height on ALL screens */}
            <div className='w-full min-h-screen p-3.5 flex items-center justify-center bg-[#37CBD1] flex-col gap-3'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-white text-4xl font-bold'>Register Your Account Here</h1>

                </div>

                <div className='lg:w-[80%] lg:h-[80%] md:w-[80%] w-[95%] bg-white rounded-xl shadow-lg p-8'>
                    <h2 className='text-2xl font-bold text-[#1A2547] mb-6'>Create Your Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Full Name</label>
                                <input name="username" value={formData.username} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Email Address</label>
                                <input name="email" value={formData.email} onChange={handleChange} type="email" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Phone Number</label>
                                <input name="phone_number" value={formData.phone_number} onChange={handleChange} type="number" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Password</label>
                                <div className='relative'>
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]'
                                    />
                                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#37CBD1]' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]'>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>

                                </select>
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Confirm Password</label>
                                <div className='relative'>
                                    <input
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        type={showConfirmPassword ? "text" : "password"}
                                        className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]'
                                    />
                                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#37CBD1]' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Date of Birth</label>
                                <input name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} type="date" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Address</label>
                                <input name="address" value={formData.address} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>City</label>
                                <input name="city" value={formData.city} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>State</label>
                                <input name="state" value={formData.state} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Zip Code</label>
                                <input name="zipcode" value={formData.zipcode} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Country</label>
                                <input name="country" value={formData.country} onChange={handleChange} type="text" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-[#1A2547] font-medium'>Profile Picture</label>
                                <input type="file" className='w-full px-4 py-2 border border-[#37CBD1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37CBD1]' />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button type="submit" className='w-full bg-[#37CBD1] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2ca6ac] transition-colors shadow-sm'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Regisec1