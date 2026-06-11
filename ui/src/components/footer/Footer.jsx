"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Top Footer */}
      <div className="bg-gray-100 text-black py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-25 px-6 text-center md:text-center">

          {/* Column 1 */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-orange-600">
              GET IN TOUCH
            </h1>
            <p className="text-gray-700">
              Contact us for all your handloom product needs. Reach out today
              for personalized assistance and inquiries.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h1 className="text-3xl v text-orange-600">
              Pages
            </h1>

            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>

              <Link href="/about" className="hover:text-orange-600">
                About
              </Link>

              <Link href="/products" className="hover:text-orange-600">
                Products
              </Link>

              <Link href="/review" className="hover:text-orange-600">
                Review
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src="/Sri_Hanloom.png"
              alt="logo"
              className="w-80 object-contain"
            />
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white text-center py-5">
        <h2 className="text-lg">
          &copy; {new Date().getFullYear()},
          <span className="text-orange-600"> Sri Handloom</span>. All Rights
          Reserved. Designed by
          <span className="text-orange-600"> Fathima Inshafa.</span>
        </h2>
      </div>
    </>
  );
}