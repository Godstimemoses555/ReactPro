import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/Register" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
