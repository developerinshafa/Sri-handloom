"use client";
import { useState } from "react";

export default function AddProductsPage() {

  const price = 9500; // single item price
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  //  total calculation
  const total = price * count;

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold p-4">Shopping Cart</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow ">
        <div className="flex gap-5 p-4 ">
          <img
            src="https://5.imimg.com/data5/FI/NF/MY-26748445/cotton-handloom-saree-500x500.jpg"
            alt="saree"
            className="w-70 bg-gray-100 p-2 object-cover"
          />

          <div className="space-y-2">
            <h1 className="p-3 text-xl font-semibold">
              Rayon handloom sarees are woven manually on traditional looms,
              giving each piece a unique handcrafted feel.
            </h1>

            <p className="px-3">length: 5.5 to 6.3 meters</p>
            <p className="px-3">Includes running blouse</p>
            <p className="px-3">Width: around 44–47 inches</p>

            <div className="p-3">
              <p className="font-semibold">LKR {price.toLocaleString()}</p>
            </div>

            {/* Quantity */}
            <div className="inline-flex items-center border-2 border-orange-400 rounded-lg px-3 py-1 gap-4">
              <button onClick={decrease} className="text-xl font-bold">−</button>
              <span className="text-lg font-medium">{count}</span>
              <button onClick={increase} className="text-xl font-bold">+</button>
            </div>

            {/*  Total updates */}
            <p className="p-3 font-semibold text-right text-xl">
              Total : LKR {total.toLocaleString()}
            </p>

            <button className="border px-2 rounded text-red-500 cursor-pointer">
              🗑 Delete
            </button>
          </div>
        </div>
      </div>
      <hr />

      {/*  Subtotal updates */}
      <p className="p-3 font-semibold text-right text-xl">
        Subtotal ({count} item): LKR {total.toLocaleString()}
      </p>
    </div>
  );
}