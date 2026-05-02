"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  // Products with category added
  const products = [
    {
      name: "Handloom Blue Saree",
      price: 9500,
      category: "Saree",
      image:
        "https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934",
    },
    {
      name: "Handloom Red Saree",
      price: 9500,
      category: "Saree",
      image:
        "https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg",
    },
    {
      name: "Handloom Shirt",
      price: 4000,
      category: "Shirt",
      image:
        "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/1700775501001--2--1627449108.jpeg",
    },
    {
      name: "Handloom Top",
      price: 2500,
      category: "Top",
      image:
        "https://quaclo.com/cdn/shop/products/QUA-BROWN-HANDLOOM-SHORT-KURTI_1d5d806b-feff-4eb4-b013-7e053711d9a4.jpg?v=1701496545&width=1100",
    },
    {
      name: "Handloom Sarongs",
      price: 2500,
      category: "Sarong",
      image:
        "https://barefootceylon.com/cdn/shop/files/Barefoot_Designer_sarong_Diya_Nilla-D_43_1.jpg?v=1776678228&width=533",
    },
    {
      name: "Handloom Pink Material",
      price: 600,
      category: "Material",
      image:
        "https://d29lkp7s2wd4pq.cloudfront.net/full/Light-Pink-Pink-Stripe-Handloom-Cotton-Fabric-40901.jpg",
    },
    {
      name: "Handloom Handbags",
      price: 1200,
      category: "Bag",
      image:
        "https://www.cord360.com/Data/Images/100/ProductImage/Handloom%20Bags.jpg",
    },
    {
      name: "Handloom Bedsheets",
      price: 2000,
      category: "Bedsheet",
      image:
        "https://img.drz.lazcdn.com/static/lk/p/d9673db2f40dea54f345617f2faacc8b.jpg_720x720q80.jpg",
    },
  ];

  // Combined filter (search + category)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center pt-15 pb-5">
        Our Products
      </h1>

      <p className="text-lg  text-center mb-6">
        Handloom Products crafted with elegance, preserving the beauty of our
        rich heritage.
      </p>

      {/* 🔍 Search + Category */}
      <div className="flex justify-center mb-10 gap-5 flex-wrap">
        {/* Search */}
        <div className="flex items-center border border-gray-300 bg-white rounded-md px-3 gap-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none px-4 py-2 w-70"
          />
        </div>

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 bg-white rounded-md px-4 py-2 w-40"
        >
          <option value="All">All Categories</option>
          <option value="Saree">Saree</option>
          <option value="Shirt">Shirt</option>
          <option value="Top">Top</option>
          <option value="Sarong">Sarong</option>
          <option value="Material">Material</option>
          <option value="Bag">Bag</option>
          <option value="Bedsheet">Bedsheet</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 px-15 pb-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay buttons */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    onClick={() => router.push(`/products/${product.id}`)}
                    className="bg-white text-black px-3 py-1 rounded-md text-sm hover:bg-orange-400 hover:text-white cursor-pointer"
                  >
                    View
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 cursor-pointer"
                  >
                    Add Cart
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 text-center">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-orange-500 font-bold mt-1">
                  LKR {product.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
