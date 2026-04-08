"use client";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white p-6 rounded-lg w-80 relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Login
        </button>

      </div>
    </div>
  );
}