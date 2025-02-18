import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React from 'react'
export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return user ? children : <Navigate to="/login" />;
}
