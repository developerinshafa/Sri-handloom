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
    <div className="bg-gray-200 py-10 px-80 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-semibold mb-4">Register Page</h1>

        <div className="space-y-4 text-left text-xl">
          <label>Full Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            placeholder="Your Full Name"
          />

          <label>Email</label>
          <input
            type="email"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            placeholder="Email address"
          />

          <label>Phone</label>
          <input
            type="number"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            placeholder="Phone No"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Minimum 5 Characters"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            minLength={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Password again"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="flex justify-between items-center gap-5">
            <button 
            type="button"className="border border-gray-300 p-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer" 
            >Cencel</button>
          <button
            type="submit"
            disabled={
              !password || !confirmPassword || password !== confirmPassword
            }
            className={`px-8 py-2 rounded-md text-white
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
        </div>
      </form>
    </div>
  );
}
