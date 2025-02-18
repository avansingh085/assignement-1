import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth.jsx";
import { validateEmail, validatePassword } from "../utils/formValidation";
import { errorToast, warningToast, successToast } from "../components/Toast";
import { postData, getData, setAuthToken } from "../utils/apiClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      warningToast("Invalid email or password");
      return;
    }
    try {
      let data = { token: "1223" };
      setAuthToken(data.token);
      dispatch(loginSuccess({ email }));
      localStorage.setItem("user", JSON.stringify({ email }));
      successToast("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      errorToast("Error during signup");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
     
      <div className="absolute inset-0 bg-[conic-gradient(at_top,_#1e1e2e,_#111,#1e1e2e)] animate-lightFocus"></div>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-50 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}

      <div className="relative z-10 bg-gray-900 text-white p-8 rounded-2xl shadow-2xl shadow-blue-500/40 w-96 animate-fadeIn">
        <h2 className="text-center text-3xl font-bold text-blue-400">
          Sign in to your account
        </h2>

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 w-full px-3 py-2 bg-gray-800 border border-blue-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full px-3 py-2 bg-gray-800 border border-blue-500 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes lightFocus {
            0% {
              opacity: 0;
              background: conic-gradient(at top, #000, #111, #000);
            }
            100% {
              opacity: 1;
              background: conic-gradient(at top, #1e1e2e, #111, #1e1e2e);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(-10px); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
