"use client"; // because we are using useState and useEffect in client component

import { useState, useEffect } from "react";
import CategoriesPage from "./categories/page";
import ReviewSection from "./review/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductsPage from "./products/page";

const images = [
  "https://img.freepik.com/premium-photo/national-handloom-day-copy-space_548646-44707.jpg?semt=ais_hybrid&w=740&q=80",
  "/saree-gallery.jpg",
  "https://t3.ftcdn.net/jpg/09/06/15/44/360_F_906154430_lL8mh7eayXqrrPuy2xHDUJDKRkpDE5IH.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* image slider */}
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-[65vh] object-cover transition-all duration-1000"
      />

      {/* text area */}
      <div className="absolute top-0 left-0 w-full pt-30 flex flex-col text-center justify-between text-white ">
        <h1 className="text-7xl md:text-8xl font-bold ">Handloom Collection</h1>

        <p className="text-3xl md:text-4xl font-semibold mt-8 ">
          Traditional Style with Modern Fashion.
        </p>

        <div className="py-20 flex items-center justify-center gap-15 text-black">
          <Link href="/products">
            <button className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-400 cursor-pointer flex items-center gap-5">
              Shop Now{" "}
              <FontAwesomeIcon icon={faLongArrowAltRight} className="text-xl" />
            </button>
          </Link>

          <Link
            href="/categories"
            className="bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-400 cursor-pointer flex items-center gap-5"
          >
            Categories
            <FontAwesomeIcon icon={faLongArrowAltRight} className="text-xl" />
          </Link>
        </div>
      </div>

      {/* Services details   */}
      <div className="py-5  px-6">
        <div className="flex gap-10 p-5">
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-check text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">✔ Quality Product</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-exchange-alt text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">🔃14-Days Return</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-phone-volume text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">📞 24/7 Support</h3>
          </div>
        </div>
      </div>

      {/* All Categories */}
      <CategoriesPage />

      {/* just for you */}
      <ProductsPage />

      
      <ReviewSection />
    </div>
  );
}
