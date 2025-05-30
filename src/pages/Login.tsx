// Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-[#0f0e0d] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center text-white mb-4">Welcome</h1>
        <p className="text-center text-gray-400 mb-6">Log in to continue</p>
        <form onSubmit={handleLogin} className="bg-transparent space-y-4 flex flex-col items-center">
          <input
            type="email"
            required
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            required
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-medium rounded-md hover:opacity-90 transition"
          >
            Continue
          </button>
          <Link className="text-gray-600 hover:text-gray-500" to={'/signup'}>Don't have an account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
