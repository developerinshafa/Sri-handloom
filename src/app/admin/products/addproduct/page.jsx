"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = { name, price, image };

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
    });

    // after save → go back
    router.push("/admin/products");
  };

  return (
    <div className="max-w-full mx-auto bg-gray-100 p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4"> Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex gap-5">
          <input
          type="file"
          placeholder="Image/*"
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Details"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        <input
          type="text"
          placeholder="Categories"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="flex gap-5">
          <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
         <input
          type="number"
          placeholder="Stock"
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>
         <input
          type="text"
          placeholder="Status"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push("/admin/products")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button className="bg-black text-white px-4 py-2 rounded">
            Save 
          </button>
        </div>
      </form>
    </div>
  );
}