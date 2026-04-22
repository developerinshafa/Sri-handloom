"use client";

import Input from "@/components/ui/forms/Input";
import Label from "@/components/ui/forms/Label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        document.cookie = `token=${encodeURIComponent(data.token)}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`; // Store token in cookie
        // Store the token in localStorage
        // localStorage.setItem("token", data.token);

        window.location.href = "/dashboard"; // Force page reload to update auth state

        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to login user.");
    }
  };

  return (
    <form className="space-y-2 " onSubmit={handleSubmit}>
      <Label
        htmlFor="email"
        required
        className="text-left text-sm font-medium text-gray-700"
      >
        Email
      </Label>
      <Input
        id="email"
        type="email"
        className="w-full p-1 px-3 bg-gray-100 rounded-md"
        placeholder="Enter your Email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label htmlFor="password" required className="text-left text-sm font-medium">
        Password
      </Label>
      <Input
        id="password"
        type="password"
        placeholder="Password"
        required
        value={password}
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
        type="submit"
        disabled={!email || !password}
        className={`w-full py-3 rounded-md text-white font-semibold cursor-pointer
            ${
              !email || !password
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900"
            }
          `}
      >
        LOG IN
      </button>

      <div className="p-3 text-center text-sm">
        <a href="/register" className="text-indigo-500 hover:text-indigo-700 ">
          Don&apos;t have an account? Register here
        </a>
      </div>
    </form>
  );
}
