"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // example token
        localStorage.setItem('role', role);

        setMessage(`Welcome, ${data.fullName}! Redirecting...`);

        switch (role) {
          case "admin":
            router.push("/admin/dashboard");
            break;
          case "employee":
            router.push("/employer/dashboard");
            break;
          case "seeker":
            router.push("/seeker/dashboard");
            break;
          default:
            setMessage("Unknown role. Cannot redirect.");
        }
      } else if (response.status === 401) {
        setMessage("Invalid credentials or role.");
      } else {
        setMessage("Unexpected error occurred.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-100 p-5">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="admin">Admin</option>
              <option value="employee">Employer</option>
              <option value="seeker">seeker</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-300 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-red-500">{message}</p>}

          <p className="mt-6 text-sm text-center text-gray-600">
            Forgot password?{" "}
            <a href="#" className="text-green-600 underline">
              Recover
            </a>
          </p>
        </div>

        <div
          className="hidden md:flex relative w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/registion.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-10">.</div>
          <div className="absolute bottom-20 left-28 bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-xl max-w-xs">
            <div className="w-6 h-6 border-2 border-gray-900 rounded-full animate-spin mb-2 text-white">
              .
            </div>
            <h2 className="text-sm font-semibold text-gray-800">
              Welcome Back! Let’s Get You Closer to Your Next Opportunity
            </h2>
            <p className="text-xs text-gray-700 mt-2">
              Log in to apply for jobs, manage your profile, and stay updated
              with the latest openings tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}