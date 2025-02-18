import { useSelector } from "react-redux";
import React from "react";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Water Drop Animation */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-waterDrop">
        <div className="w-6 h-6 bg-blue-500 rounded-full shadow-2xl shadow-blue-400 opacity-80 animate-fadeInOut blur-sm"></div>
      </div>

      {/* Ripple Effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-waterRipple">
        <div className="w-40 h-40 border-4 border-blue-500 rounded-full opacity-10 blur-xl"></div>
      </div>

      {/* Neon Glowing Dashboard */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 animate-pulse">
          Welcome, {user?.email || "Guest"}!
        </h1>

        {/* Crazy Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
          {["🔥", "⚡", "💎", "🚀", "🎮", "🌌"].map((emoji, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg shadow-blue-500/50 hover:scale-105 transition-transform duration-300 hover:shadow-purple-500/50 border border-blue-500 border-opacity-30"
            >
              <span className="text-6xl animate-spin-slow">{emoji}</span>
              <h2 className="text-2xl font-semibold mt-4 text-blue-400">
                Feature {index + 1}
              </h2>
              <p className="text-gray-300 mt-2">
                This is an amazing feature with glowing effects and cool animations!
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Crazy Floating Lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`absolute w-10 h-10 bg-blue-400 rounded-full blur-2xl opacity-30 animate-float${i % 2 === 0 ? "1" : "2"}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}
