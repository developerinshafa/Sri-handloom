"use client"; // because we are using useState and useEffect in client component

import { useState, useEffect } from "react";

const images = [
  "/img/handloom.jpg",
  "/img/bg saran.jpg",
  "/img/satee galery.jpg",
  "/img/the-transformation-of.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

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
        className="w-full h-[60vh] object-cover transition-all duration-1000"
      />

      {/* text area */}
      <div className="absolute top-0 left-0 w-full py-50 flex flex-col items-center justify-center text-white px-5">
        <h1 className="text-7xl md:text-8xl font-bold text-center">
          Handloom Collection
        </h1>

        <p className="text-3xl md:text-3xl font-semibold mt-8 text-center">
          Traditional Style with Modern Fashion.
        </p>
      </div>

      {/* Services details   */}
      <div className="py-5">
        <div className="flex gap-5 p-5">
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-check text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">Quality Product</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-shipping-fast text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">Free Shipping</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-exchange-alt text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">14-Days Return</h3>
          </div>
          <div className="flex items-center mb-4 w-full bg-gray-200 p-10 gap-5">
            <h1 className="fa fa-phone-volume text-5xl m-0 mr-3 text-orange-500"></h1>
            <h3 className="font-semibold text-3xl">24/7 Support</h3>
          </div>
        </div>
      </div>

       {/* Products section */}
      <div className="py-2 px-5">
        <h1 className="text-4xl px-5 font-bold">Featured Products</h1>
      </div>
      <div className="grid grid-cols-5 w-full gap-5 px-10 py-5">

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp3oC0hn-Ywl0ZQD618dOCTqtR1OqCoZhmQ&s"
            alt=""
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Sarees
            </h2>
            <button
              className="bg-orange-400 px-2 py-1 rounded-md"
            >
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRyjOV1F00sA-I2Zu6bJ-cNFBwlgsBCootw&s"
            alt=""
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Sarongs
            </h2>
            <button
              className="bg-orange-400 px-2 py-1 rounded-md"
            >
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wrcFkNTeFafmf74Z5WM_4T77yrt377EJrg&s"
            alt=""
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
              Shirts
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="/img/couple hanloom_n.jpg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
             Tops
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="/img/dark blue saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
             Badsheets
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="/img/dark blue saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
             Lungls
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="/img/dark blue saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
             Handbags
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View 
            </button>
          </div>
        </div>

        <div className="bg-gray-100 grid text-center w-60 hover:border-orange-500 hover:shadow-xl shadow-orange-500/50 ...">
          <img
            src="/img/dark blue saree.jpeg"
            alt="green sari"
            className="p-4 bject-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="space-y-2 p-4">
            <h2 className="hover:text-orange-500 text-xl font-semibold">
             Materials
            </h2>
            <button className="bg-orange-400 px-2 py-1 rounded-md">
              View 
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}