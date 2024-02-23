import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const profile = localStorage.getItem('profile');
  if (!profile) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
