"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailsPage() {
  const params = useParams();

  const products = [
    {
      id: 1,
      name: "Handloom Blue Saree",
      price: 9500,
      image:
        "https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934",
      description:
        "Handcrafted premium handloom saree with a timeless traditional design. It reflects true cultural heritage. Made with soft, breathable fabric featuring elegant patterns and fine detailing, making it perfect for festive and special occasions.",
    },
    {
      id: 2,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
     {
      id: 3,
      name: "Rayon Blue Shirt",
      price: 4500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ3_1xWEZE488fCjS3Um1Esk25cvdBcO3vg&s",
      description: "Elegant Rayon Blue Shirt",
    },
     {
      id: 4,
      name: "Rayon Sarongs",
      price: 4500,
      image:
        "https://www.kandygshandlooms.com/cdn/shop/files/8_11.png?v=1717430182&width=1445",
      description: "Handcrafted premium handloom Rayon Sarongs",
    },
     {
      id: 5,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
     {
      id: 2,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
     {
      id: 2,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
     {
      id: 2,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
     {
      id: 2,
      name: "Handloom Red Saree",
      price: 9500,
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
      description: "Elegant red saree crafted by artisans",
    },
  ];

  const product = products.find(
    (p) => p.id == params.id
  );

  const [qty, setQty] = useState(1);

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  const totalPrice = product.price * qty;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10 px-25">

      {/* Image */}
      <img
        src={product.image}
        className="w-60 h-80 rounded-lg object-cover"
        alt={product.name}
      />

      {/* Details */}
      <div>

        <h1 className="text-3xl font-bold ">
          {product.name}
        </h1>

        <p className="text-orange-500 text-xl mt-2">
          Price: LKR {product.price}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-4 ">

          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            -
          </button>

          <span className="text-lg font-semibold">
            {qty}
          </span>

          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            +
          </button>

        </div>

        {/* Total Price */}
        <p className="text-green-600 text-lg font-semibold mt-4">
          Total Price: LKR {totalPrice}
        </p>

        <p className="mt-4 text-gray-600 ">
          {product.description}
        </p>

        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded cursor-pointer">
          Add to Cart
        </button>

      </div>

    </div>
  );
}