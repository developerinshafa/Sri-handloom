"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    // 👉 go to products page with query
    router.push(`/products?search=${search}`);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="flex justify-between items-center px-10 py-1 bg-white text-black font-semibold text-2xl">
        
        <img src="./Sri_Hanloom.png" alt="Logo" className="w-40" />

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="border border-gray-500 p-2 px-4"
        />

        {/* Buttons */}
        <div>
          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Navbar section */}
        <div className="flex items-center justify-between bg-black text-white px-5 py-2">
          <nav className="w-full flex justify-between items-center px-10  pb-2 font-semibold text-2xl">
            <div>
              <Link href="/all-categories" className="hover:text-orange-600">
                All Categories
              </Link>
            </div>
            <div className="space-x-10 ">
              <Link
                href="/"
                onClick={() => router.push("/about")}
                className="hover:text-orange-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => router.push("/about")}
                className="hover:text-orange-400"
              >
                About
              </Link>

              <Link
                href="/products"
                onClick={() => router.push("/products")}
                className="hover:text-orange-400"
              >
                Products
              </Link>

              <Link
                href="/review"
                onClick={() => router.push("/review")}
                className="hover:text-orange-400"
              >
                Review
              </Link>

              <Link
                href="/contact"
                onClick={() => router.push("/contact")}
                className="hover:text-orange-400"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
    </header>
  );
};

export default Header;