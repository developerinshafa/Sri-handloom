"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://rmkv.com/cdn/shop/articles/queen_of_sarees.jpg?v=1743501212",
    title: "Elegant Sarees",
    desc: "Discover timeless handloom sarees",
  },
  {
    image: "https://jimmyluxury.in/cdn/shop/articles/Banner_54.3.webp?v=1770984992&width=2840",
    title: "Stylish Shirts",
    desc: "Comfort meets tradition",
  },
  {
    image: "https://www.cbazaar.com/blog/wp-content/uploads/2026/01/2CB_Blog_Jan19.jpg",
    // title: "Modern Tops",
    // desc: "Trendy handloom fashion",
  },
];

export default function SecondSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[30vh] overflow-hidden">
      
      {/* Image */}
      <img
        src={slides[current].image}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-5">
        <h2 className="text-5xl font-bold">{slides[current].title}</h2>
        <p className="mt-3 text-xl">{slides[current].desc}</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-orange-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}