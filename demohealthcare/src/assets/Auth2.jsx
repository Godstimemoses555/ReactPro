import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth2 = () => {
  return (
    <div>
      {/* Protected Layout Context (e.g. Nav / Sidebar) goes here */}
      <Outlet />
    </div>
  )
}

export default Auth2