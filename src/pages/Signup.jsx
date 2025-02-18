import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupSuccess } from "../features/auth";
import { validateSignupForm } from "../utils/formValidation";
import { errorToast, warningToast, successToast } from "../components/Toast";
import { postData, setAuthToken } from "../utils/apiClient";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateSignupForm(formData).isValid) {
      warningToast("Invalid email or password");
      return;
    }
    try {
      let data = { token: "1223" };
      setAuthToken(data.token);
      await dispatch(signupSuccess(formData));
      successToast("Successfully signed up!");
      navigate("/dashboard");
    } catch (err) {
      errorToast("Error occurred during signup");
      setError(err.message || "Signup failed");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
    
      <div className="absolute inset-0 bg-[conic-gradient(at_50%_20%,#1a1a1a,#111,#1a1a1a)] animate-gradientSpin"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white opacity-10 rounded-full blur-3xl animate-moveLight"></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-90 p-8 rounded-2xl shadow-xl border border-blue-500 border-opacity-30 w-full max-w-md backdrop-blur-lg">
        <h2 className="text-center text-3xl font-extrabold text-white mb-6">
          Create an Account
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:text-blue-400 font-medium">
            Log in here
          </a>
        </p>
      </div>

      <div className="absolute top-10 left-1/4 w-10 h-10 bg-blue-500 rounded-full blur-2xl opacity-30 animate-float1"></div>
      <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-purple-500 rounded-full blur-2xl opacity-30 animate-float2"></div>
    </div>
  );
}
