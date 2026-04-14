"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert("Login Successful");

  setTimeout(() => {
    router.push("/");
  }, 1000);
};

  return (
    <div className=" flex items-center justify-center bg-gray-200 p-5">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-md px-8 py-5 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center py-5">Login to Your Account</h1>

        {/* Form */}
        <div className="space-y-2 ">
          <label htmlFor="email" className="text-left text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email "
            // value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-100 outline-none"
          />

          <label htmlFor="password" className="text-left text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-100 outline-none"
          />

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-red-600 text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!email || !password}
            className={`w-full py-3 rounded-md text-white font-semibold cursor-pointer
            ${!email || !password 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-800 hover:bg-blue-900"}
          `}
          >
          LOG IN
        </button>
        </div>

        {/* Register */}
        <div className="p-3 text-center text-sm">
          <a href="/register" className="text-indigo-500 hover:text-indigo-700 ">
          Don&apos;t have an account? Register here
        </a>
        </div>
        
      </div>
    </div>
  );
}
