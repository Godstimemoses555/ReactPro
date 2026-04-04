import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Auth1 from './assets/Auth1'
import Auth2 from './assets/Auth2'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Otp from './Pages/Otp'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import ProtectedRoute from './ProtectedRoute'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'
import CartSidebar from './Component/Shopfold/CartSidebar'
import AppointmentSidebar from './Component/Homcomponents/AppointmentSidebar'
import Footer from './Component/Footer'
import PaymentSuccess from './Pages/PaymentSuccess'
import Newsblog from './Component/Blog/Newsblog'
import "./App.css"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already logged in from a previous session
    return !!localStorage.getItem("healthcare_user_id");
  })

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <CartSidebar />
      <AppointmentSidebar />
      <Newsblog />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about-us' element={<AboutUs />} />


        {/* PUBLIC ROUTES */}
        <Route element={<Auth1 isAuthenticated={isAuthenticated} />}>
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Otp' element={<Otp setIsAuthenticated={setIsAuthenticated} />} />
        </Route>

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/shop' element={<Shop />} />
          <Route element={<Auth2 />}>
            <Route path='/dashboard' element={<Dashboard setIsAuthenticated={setIsAuthenticated} />} />
          </Route>
        </Route>
        <Route path='/payment-success' element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
