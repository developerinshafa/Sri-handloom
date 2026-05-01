"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const handleSearch = () => {
    const value = search.trim().toLowerCase();
    if (!value) return;

    if (value.includes("saree")) router.push("/products?category=Saree");
    else if (value.includes("sarong")) router.push("/products?category=Sarong");
    else if (value.includes("lungi")) router.push("/products?category=Lungis");
    else if (value.includes("top")) router.push("/products?category=Top");
    else if (value.includes("material"))
      router.push("/products?category=Material");
    else if (value.includes("shirt")) router.push("/products?category=Shirt");
    else router.push(`/products?search=${value}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow ">
      <div className="flex items-center justify-between px-20 py-1">
        {/* Logo */}
        <img src="/Sri_Hanloom.png" alt="Logo" className="w-40" />

        {/* Navigation */}
        <nav className="flex justify-center gap-10 py-3 text-black text-xl font-bold">
          {!isAuthenticated ? (
            <>
              <Link
                href="/"
                className={`pt-3 cursor-pointer transition ${
                  isActive("/")
                    ? "text-orange-500 font-bold border-b-2 border-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`pt-3 cursor-pointer transition ${
                  isActive("/products")
                    ? "text-orange-500 font-bold border-b-2 border-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                Shop
              </Link>

              {/* 🔍 Search */}
              <div className="flex items-center border border-gray-200 bg-white rounded-md px-3 gap-2">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none px-4 py-2 w-60"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="hover:text-orange-500 cursor-pointer"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/products"
                className="hover:text-orange-500 cursor-pointer"
              >
                All Products
              </Link>
            </>
          )}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-10">
          {/* Auth Section */}
          {!isAuthenticated ? (
            <Link href="/login">
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl cursor-pointer"
              />
            </Link>
          ) : (
            <div className="flex items-center gap-3 text-orange-500 font-semibold">
              <span>Hi, {user?.name}</span>

              <img
                className="w-9 h-9 rounded-full"
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.name || "User",
                )}`}
                alt="avatar"
              />

              <button
                onClick={logout}
                title="Logout"
                className="px-2 py-1 rounded"
              >
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

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary cursor-pointer"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          {/* Cart */}
          <Link href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
