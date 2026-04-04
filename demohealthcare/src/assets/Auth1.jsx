import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth1 = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div>
      {/* Auth layout context goes here, Outlet renders nested routes */}
      <Outlet />
    </div>
  )
}

export default Auth1