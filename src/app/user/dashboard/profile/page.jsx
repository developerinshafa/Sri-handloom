"use client";

import { useAuth } from "@/context/AuthContext";

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) return <p>Please login first</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        My Profile
      </h1>

      <div className="bg-white shadow p-4 rounded-lg">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>

        <img
          className="w-20 h-20 rounded-full mt-3"
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
          alt="avatar"
        />
      </div>
    </div>
  );
}