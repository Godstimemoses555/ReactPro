import React from 'react'
import { useNavigate } from 'react-router-dom'
import Otpsec from '../Component/Otpsec'

const Otp = ({ setIsAuthenticated }) => {
    const navigate = useNavigate()

    const handleVerifyOtp = () => {
        // 1. Imagine you verified the OTP with your backend here!
        const isOtpCorrect = true

        if (isOtpCorrect) {
            // 2. Turn authentication ON! This tells ProtectedRoute to let them in.
            setIsAuthenticated(true)

            // 3. Redirect them to the dashboard!
            navigate('/')
        }
    }

    return (
        <div>
            <Otpsec setIsAuthenticated={setIsAuthenticated} />
        </div>
    )
}

export default Otp