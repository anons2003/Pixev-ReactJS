import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { user } = useUser();
  const location = useLocation();

  // If route requires authentication but user is not logged in
  if (requireAuth && !user) {
    // Save the attempted location for redirecting after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If route is for non-authenticated users only but user is logged in
  if (!requireAuth && user) {
    // Redirect to home page if user is already logged in
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
