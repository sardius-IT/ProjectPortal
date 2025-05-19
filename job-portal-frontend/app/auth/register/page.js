




"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert("User Registered: " + data.email);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-100 p-5 rounded-3xl ">
      <div className="flex w-[90%] max-w-5xl shadow-lg rounded-3xl overflow-hidden bg-white">
        {/* Left Column - Registration Form */}
        <div className="w-full md:w-1/2 p-10">
          <h1 className="text-3xl font-bold mb-6">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="role"
              placeholder="Role"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition"
            >
              Register
            </button>
          </form>
        </div>

        {/* Right Column - Image with Overlay */}
        <div
          className="hidden md:flex relative w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: "url('/registion.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-opacity-10"></div>
          <div className="absolute bottom-16 left-28 bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-xl max-w-xs">
            <div className="w-6 h-6 border-2 border-gray-500 rounded-full animate-spin mb-2 text-white ">.</div>
            <h2 className="text-lg font-semibold text-gray-900">
              Join Thousands of Professionals Accelerating Their Careers
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Sign up today to access exclusive job opportunities, personalized
              job matches, and real-time application tracking. Your dream job is
              just a few clicks away.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

