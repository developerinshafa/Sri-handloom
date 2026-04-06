"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const value = search.trim().toLowerCase();

    if (!value) return;

    // Category routing
    if (value.includes("saree")) {
      router.push("/products/sarees");
    } else if (value.includes("sarongs")) {
      router.push("/products/sarongs");
    }else if (value.includes("lungis")) {
      router.push("/products/lungis");
    } else if (value.includes("tops")) {
      router.push("/products/tops");
    }else if (value.includes("materials")) {
      router.push("/products/materials");
    } else if (value.includes("shirts")) {
      router.push("/products/shirts");
    } else {
      // fallback (normal search page)
      router.push(`/products?search=${value}`);
    }
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
        <div className="flex gap-10">
          <div>
            <Link href="/register">
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer">
                Register
              </button>
            </Link>

            <Link href="/user">
              <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar section */}
      <div className="flex items-center justify-between bg-black text-white px-5 py-2">
        <nav className="w-full flex justify-between items-center px-10  pb-2 font-semibold text-2xl">
          {/* <div>
            <Link href="/all-categories" className="hover:text-orange-600">
              All Categories
            </Link>
          </div> */}
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
          </div>
          <div className="flex space-x-4">
            <Link href="/cart">
              <button className="bg-orange-400 text-white px-4 py-1 rounded-md cursor-pointer">
                Cart
              </button>
            </Link>
            {/* <div>
            <Link href="/dashboard">
              <button className="bg-gray-400 text-white px-4 py-1 rounded-md cursor-pointer">
                Admin
              </button>
            </Link>
          </div> */}
          </div>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
