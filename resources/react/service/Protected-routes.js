import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {

  const user = true


  return (
    user ? <Outlet/> : <Navigate to="/not-found" />
  )
  
}

export default ProtectedRoutes;
