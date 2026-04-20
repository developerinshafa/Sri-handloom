"use client";   // because we are using useState and useEffect in client component

import { useState, useEffect } from "react";
import CategoriesPage from "./categories/page";
import ReviewSection from "./review/page";

const images = [
  "https://img.freepik.com/premium-photo/national-handloom-day-copy-space_548646-44707.jpg?semt=ais_hybrid&w=740&q=80",
  "./satee galery.jpg",
  "https://t3.ftcdn.net/jpg/09/06/15/44/360_F_906154430_lL8mh7eayXqrrPuy2xHDUJDKRkpDE5IH.jpg"
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    // Check for user in localStorage (client-side only)
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* image slider */}
      <img
        src={images[current]}
        alt="slider"
        className="w-full h-[60vh] object-cover transition-all duration-1000"
      />

      {/* text area */}
      <div className="absolute top-0 left-0 w-full py-35 flex flex-col text-center justify-center text-white px-5">
        <h1 className="text-7xl md:text-8xl font-bold ">
          Handloom Collection
        </h1>

        <p className="text-3xl md:text-4xl font-semibold mt-8 ">
          Traditional Style with Modern Fashion.
        </p>
      </div>

      {/* Services details   */}
      <div className="py-5 ">
        <div className="flex gap-5 p-5">
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-check text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">✔ Quality Product</h3>
          </div>
          {/* <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-shipping-fast text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">🚛 Free Shipping</h3>
          </div> */}
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
       <CategoriesPage/>

       {/* All Products */}
       {/* <ProductsPage/> */}

    {/* just for you */}
    <div className="bg-gray-200 p-2 ">
      <div>
        <h1 className="text-4xl px-8 font-bold py-5">Just For You</h1>
      </div>
      <div className="grid grid-cols-5 w-full gap-4 px-10 py-6">
        {/* Blue Saree */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Blue Saree</h1>
            <p>LKR 9,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* red saree */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Blue Saree</h1>
            <p>LKR 9,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Shirts */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/1700775501001--2--1627449108.jpeg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Shirt</h1>
            <p>LKR 4,000.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tops */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://quaclo.com/cdn/shop/products/QUA-BROWN-HANDLOOM-SHORT-KURTI_1d5d806b-feff-4eb4-b013-7e053711d9a4.jpg?v=1701496545&width=1100"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Top</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Sarongs */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://www.ownacraft.com/wp-content/uploads/2024/05/Untitled-40.webp"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Sarongs</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://d29lkp7s2wd4pq.cloudfront.net/full/Light-Pink-Pink-Stripe-Handloom-Cotton-Fabric-40901.jpg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Pink Material</h1>
            <p>LKR 600.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bedsheets */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://static-01.daraz.lk/p/fd98d143aa41594a30d47eede92d8924.jpg"
            alt="Bedsheets"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Bedsheets</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* handbags */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://www.cord360.com/Data/Images/100/ProductImage/Handloom%20Bags.jpg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Handbags</h1>
            <p>LKR 1,200.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Shirts */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://rareweave.com/cdn/shop/files/Latte-_Handloom_Weaved_Shirt_for_Men_4.jpg?v=1716108549"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Shirt</h1>
            <p>LKR 4,200.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* top */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://cdn.shriyathecottonhouse.com/wp-content/uploads/2026/03/IMG_0190.webp"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom top</h1>
            <p>LKR 2,200.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>


      </div>
      </div>

      {/* <div className="bg-gray-200 p-2 ">
      <div>
        <h1 className="text-4xl px-5 font-bold py-5">Just For You</h1>
      </div>
      </div> */}
      

      <ReviewSection/>
    </div> 
  );
}