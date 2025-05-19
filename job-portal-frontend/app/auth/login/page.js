"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Login successful! Welcome, ${data.fullName}`);
      } else if (response.status === 401) {
        setMessage("Invalid email or password.");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-100 p-5 rounded-3xl">
      <div className="flex w-[90%] max-w-5xl shadow-lg rounded-3xl overflow-hidden bg-white">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6 text-gray-600">
            Log in to access your dashboard, manage your profile, and stay
            updated with the latest opportunities tailored just for you.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Identifiant e-mail"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Security Key"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <a href="#" className="text-sm text-green-600 hover:underline">
              Password Recovery
            </a>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition"
            >
             Authenticate
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}

          <p className="mt-8 text-sm text-center">
            Don’t hesitate to reach out to us <br />
            <a href="support@bonsante.com" className="text-green-600">
              job portal.com
            </a>
          </p>

          <p className="mt-4 text-xs text-center text-gray-400">
            All rights reserved Betterise Technologies 2020
          </p>
        </div>

        {/* Right: Image with overlay */}
        <div
          className="hidden md:flex relative w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/registion.jpg')" }}
        >
          <div className="absolute inset-0  bg-opacity-10">.</div>
          <div className="absolute bottom-20 left-28 bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-xl max-w-xs">
            <div className="w-6 h-6 border-2 border-gray-500 rounded-full animate-spin mb-2 text-white">.</div>
            <h2 className="text-lg font-semibold text-gray-800">
              Welcome Back! Let’s Get You Closer to Your Next Opportunity
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Log in to apply for jobs, manage your profile, and stay updated
              with the latest openings tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
