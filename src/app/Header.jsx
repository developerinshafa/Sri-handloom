"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    
  return (
    <>
      <header className="sticky top-0 z-50 ">
        <div className="flex justify-between items-center px-10 py-1 bg-white text-black font-semibold text-2xl">
            <img src="./Sri_Hanloom.png" alt="Logo" className="w-50" />
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-500 p-2 px-4"
            />
          {/* register & Login page */}
          <div className="px-6">
            <button className="bg-gray-500 p-2 cursor-pointer">Register</button>
            <button className="bg-gray-900 text-white p-2 cursor-pointer">Login</button>
          </div>

          {/* <div className="flex text-3xl text-orange-400 pt-12 space-x-10"> */}
          {/* heart Icon */}
          {/* <i className="fa fa-heart"></i> */}
          {/* shopping cart icon */}
          {/* <i className="fa fa-shopping-cart text-3xl"></i>
          </div> */}
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
              <Link href="/"
              
               className="hover:text-orange-600">
                Home
              </Link>

              <Link href="/about"
              onClick={() => router.push("/about")}
               className="hover:text-orange-600">
                About
              </Link>

              <Link href="/products"
              onClick={() => router.push("/products")}
               className="hover:text-orange-600">
                Products
              </Link>

              <Link href="/review" className="hover:text-orange-600">
                Review
              </Link>

              <Link href="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
