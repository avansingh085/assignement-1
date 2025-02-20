import { Link } from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../features/auth';
import {successToast} from '../components/Toast'
export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
   dispatch(logoutSuccess());
      successToast("logout successfully!");
    localStorage.removeItem('user');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          {user && (
            <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          )}
        </div>
        
        <div className="flex space-x-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Login
              </Link>
              <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}