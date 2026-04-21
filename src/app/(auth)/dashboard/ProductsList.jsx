"use client";

import { useEffect, useState } from "react";

export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const response = await fetch("/api/ProductsList", {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          setProductsList(data.ProductsList || []);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsList();
  }, []);

  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold mb-6">Products List</h1>
      <ul className="list-disc list-inside">
        {productsList.map((productsList, index) => (
          <li key={index} className="text-lg mb-2">
            {productsList}
          </li>
        ))}
      </ul>
    </div>
  );
}
