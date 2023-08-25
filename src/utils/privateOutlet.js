import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateOutlet =()=> {
  const auth = useAuth()
  const location = useLocation()

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace={true} />
  )
}


export default PrivateOutlet