import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoutes';
export default function App() {
  return (
    
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        
      </Router>
   
  );
}