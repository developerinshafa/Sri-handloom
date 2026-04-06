"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match ");
      return;
    }

    alert("Registered Successfully ");

    router.push("/");
  };

  return (
    <div className="bg-blue-950 py-10 px-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-semibold mb-4">Register Page</h1>

        <div className="space-y-4 text-left text-xl">
          <label>Full Name</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
          />

          <label>Email</label>
          <input
            type="email"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
          />

          <label>Phone</label>
          <input
            type="number"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
          />

          <label>Address</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
          />

          <label>Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
            minLength={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-300 rounded-md"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={
              !password || !confirmPassword || password !== confirmPassword
            }
            className={`w-full py-3 rounded-md text-white
    ${
      password !== confirmPassword
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-700 cursor-pointer hover:bg-green-800"
    }
  `}
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
}
