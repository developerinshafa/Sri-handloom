"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  alert("Login Successful ✅");

  setTimeout(() => {
    router.push("/");
  }, 1000);
};

  return (
    <div className="py-30 flex items-center justify-center bg-blue-950">
      {/* Card */}
      <div className="bg-gray-200 rounded-xl shadow-xl p-8 text-center">
        {/* Title */}
        <h1 className="text-3xl font-semibold mb-4 ">Login Page</h1>

        {/* Logo */}
        <img
          src="/Sri_Hanloom.png"
          alt="Sri Handloom"
          className="mx-auto w-60 mb-6"
        />

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-300 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-300 outline-none"
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
            className="w-full bg-blue-800 text-white py-3 rounded-md cursor-pointer"
          >
            LOG IN
          </button>
        </div>

        {/* Signup */}
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/user?mode=register" className="font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
