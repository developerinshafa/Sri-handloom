"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 text-2xl text-black text-center space-y-5 p-5">
        <div className=" grid grid-cols-3 gap-5 px-10">
          <div className="space-y-4 pt-8 ">
            <h1 className="text-4xl text-orange-600">GET IN TOUCH</h1>
            <p>
              Contact us for all your handloom product needs. Reach out today
              for personalized assistance and inquiries.
            </p>
          </div>
          <div className="space-y-4 items-center justify-center">
            <h1 className="text-4xl text-orange-600 ">Pages</h1>
            <div className="space-x-10 grid">
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => router.push("/about")}
                className="hover:text-orange-600"
              >
                About
              </Link>

              <Link
                href="/products"
                onClick={() => router.push("/products")}
                className="hover:text-orange-600"
              >
                Products
              </Link>

              <Link href="/review" className="hover:text-orange-600">
                Review
              </Link>

              <Link href="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-4 ">
                <img src="./Sri_Hanloom.png" alt="logo" />
            </div>
        </div>
        </div>
        <hr />
        <div className="bg-black text-2xl text-white text-center space-y-5 p-5">
          <h2>
          &copy;{new Date().getFullYear()},<span className="text-orange-600"> Sri Handloom</span>. All
          Rights Reserved. Designed by
          <span className="text-orange-600"> Fathima Inshafa</span>
        </h2>
        </div>
    </>
  );
}
