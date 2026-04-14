"use client";

import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function submitLogin(e) {
        e.preventDefault();

        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error registering user:", error);
        });
    }

    return (
        <div className="bg-gray-200 p-4  ">
      <div className="max-w-xl flex items-center justify-between mx-auto">
        <form
        onSubmit={submitLogin}
        className="bg-white p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-semibold mb-4">Register for an Account</h1>

        <div className="space-y-4 text-left text-lg">
          <label>Full Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            placeholder="Enter your Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Minimum 5 Characters"
            className="w-full p-2 bg-gray-100 rounded-md"
            required
            // minLength={5}
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
              type="submit"
              className="border border-gray-300 p-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer"
            >
              Cencel
            </button>
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
          {/* Register */}
        <div className="p-3 text-center text-sm">
          <a href="/register" className="text-indigo-500 hover:text-indigo-700 ">
          Don&apos;t have an account? Register here
        </a>
        </div>
        </div>
      </form>
      </div>
    </div>
    );
}

