"use client";

// import { useAuth } from "@/context/AuthContext";
import { useAuth } from "../../../context/AuthContext";

export default function UserDashboard() {
  const { user } = useAuth();

  if (!user) return <p>Please login first</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome {user.name}
      </h1>

      <p className="mt-2 text-gray-600">
        This is your dashboard
      </p>
      
    </div>
  );
}