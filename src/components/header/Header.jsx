"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const value = search.trim().toLowerCase();
    if (!value) return;

    if (value.includes("saree")) router.push("/products/sarees");
    else if (value.includes("sarongs")) router.push("/products/sarongs");
    else if (value.includes("lungis")) router.push("/products/lungis");
    else if (value.includes("tops")) router.push("/products/tops");
    else if (value.includes("materials")) router.push("/products/materials");
    else if (value.includes("shirts")) router.push("/products/shirts");
    else router.push(`/products?search=${value}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-20 py-1">

        {/* Logo */}
        <img src="/Sri_Hanloom.png" alt="Logo" className="w-40" />

        {/* 🔍 Search */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 gap-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="outline-none w-full px-4 py-2"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Auth Section */}
          {!isAuthenticated ? (
            <Link href="/login">
              <FontAwesomeIcon icon={faUser} className="text-2xl cursor-pointer" />
            </Link>
          ) : (
            <div className="flex items-center gap-3 text-black">
              <span>Hi, {user?.name}</span>

              <img
                className="w-9 h-9 rounded-full"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "User"
                )}`}
                alt="avatar"
              />

              <button onClick={logout} title="Logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-2xl"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h8v-2H4z" />
                </svg>
              </button>
            </div>
          )}

          {/* Cart */}
          <Link href="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-10 py-2 border-t bg-black text-white text-xl font-bold">
        {!isAuthenticated ? (
          <>
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <Link href="/products" className="hover:text-orange-500">Products</Link>
            <Link href="/products/sarees" className="hover:text-orange-500">Sarees</Link>
            <Link href="/products/sarongs" className="hover:text-orange-500">Sarongs</Link>
            <Link href="/products/shirts" className="hover:text-orange-500">Shirts</Link>
            <Link href="/products/materials" className="hover:text-orange-500">Materials</Link>
            <Link href="/products/lungis" className="hover:text-orange-500">Lungis</Link>
            <Link href="/products/tops" className="hover:text-orange-500">Tops</Link>
            <Link href="/about" className="hover:text-orange-500">About</Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="hover:text-orange-500">Dashboard</Link>
            <Link href="/dashboard/products" className="hover:text-orange-500">Products</Link>
          </>
        )}
      </nav>
    </header>
  );
}