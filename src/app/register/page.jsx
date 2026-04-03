"use client";

import { useRouter } from "next/navigation"; // ✅ import

export default function RegisterPage() {
  const router = useRouter(); // ✅ define router

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registered Successfully ✅");

    router.push("/"); // ✅ now works
  };

  return (
    <div className="bg-blue-950 py-10 px-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-xl shadow-xl text-center">
        
        <h1 className="text-3xl font-semibold mb-4">Register Page</h1>

        <div className="space-y-4 text-left text-xl">
          <label>Full Name</label>
          <input type="text" className="w-full p-3 bg-gray-300 rounded-md" required />

          <label>Email</label>
          <input type="email" className="w-full p-3 bg-gray-300 rounded-md" required />

          <label>Phone</label>
          <input type="number" className="w-full p-3 bg-gray-300 rounded-md" required />

          <label>Address</label>
          <input type="text" className="w-full p-3 bg-gray-300 rounded-md" required />

          <label>Password</label>
          <input type="password" className="w-full p-3 bg-gray-300 rounded-md" required minLength={5} />

          <label>Confirm Password</label>
          <input type="password" className="w-full p-3 bg-gray-300 rounded-md" required />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md cursor-pointer">
            REGISTER
          </button>
        </div>

      </form>
    </div>
  );
}