"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

import UserMenu from "./UserMenu";

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
    } else if (value.includes("lungis")) {
      router.push("/products/lungis");
    } else if (value.includes("tops")) {
      router.push("/products/tops");
    } else if (value.includes("materials")) {
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
      <div className="flex justify-between items-center px-15 py-1 bg-white ">
        <img src="/Sri_Hanloom.png" alt="Logo" className="w-40" />

        {/* Navbar section */}
        <nav className="w-full flex justify-between items-center px-5 font-semibold text-xl">
          <div className="space-x-7 ">
            {/* <Link
              href="/"
              onClick={() => router.push("/")}
              className="hover:text-orange-400"
            >
              Home
            </Link> */}

            <Link
              href="/products"
              onClick={() => router.push("/products")}
              className="hover:text-orange-400"
            >
              Products
            </Link>

            <Link
              href="/products/Sarees"
              onClick={() => router.push("/products/Sarees")}
              className="hover:text-orange-400"
            >
              Sarees
            </Link>

            <Link
              href="/products/Sarongs"
              onClick={() => router.push("/products/Sarongs")}
              className="hover:text-orange-400"
            >
              Sarongs
            </Link>

            <Link
              href="/products/Shirts"
              onClick={() => router.push("/products/Shirts")}
              className="hover:text-orange-400"
            >
              Shirts
            </Link>

            <Link
              href="/products/Tops"
              onClick={() => router.push("/products/Tops")}
              className="hover:text-orange-400"
            >
              Tops
            </Link>

            <Link
              href="/products/Materials"
              onClick={() => router.push("/products/Materials")}
              className="hover:text-orange-400"
            >
              Materials
            </Link>

            {/* <Link
              href="/products/handbags"
              onClick={() => router.push("/products/handbags")}
              className="hover:text-orange-400"
            >
              Handbags
            </Link> */}

            <Link
              href="/about"
              onClick={() => router.push("/about")}
              className="hover:text-orange-400"
            >
              About
            </Link>
          </div>

          {/* 🔍 Search Bar */}

          <div className="flex space-x-8">
            <div className="flex items-center border border-gray-200 rounded-md px-3 gap-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="outline-none w-64  "
              />
            </div>

            {/* user */}
            <UserMenu />

            <Link href="/cart">
              <button className=" text-black px-2 py-3 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
