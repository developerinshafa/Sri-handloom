"use client";

const products = [
  {
    id: 1,
    name: "Rayon Sarongs",
    price: "LKR 4,500",
    image: "https://www.kandygshandlooms.com/cdn/shop/files/8_11.png?v=1717430182&width=1445",
  },
  {
    id: 2,
    name: "Cotton Sarongs",
    price: "LKR 2,500",
    image: "https://www.kandygshandlooms.com/cdn/shop/files/6_12.png?v=1717430246&width=1445",
  },
  {
    id: 3,
    name: "Cotton & Rayon Sarongs",
    price: "LKR 7,500",
    image: "https://selyn.lk/cdn/shop/files/47_b88dcaf3-7406-4312-ac6b-ea847dd58dd2.png?v=1756118003&width=1445",
  },
  {
    id: 4,
    name: "Cotton Red Sarongs",
    price: "LKR 3,200",
    image: "https://www.ownacraft.com/wp-content/uploads/2024/05/Untitled-33.webp",
  },
  {
    id: 5,
    name: "Rayon Blue Sarongs",
    price: "LKR 7,000",
    image: "https://partnercentral.kapruka.com/kapruka-pc/assets/images/product/pc00483/clot0v1216p00059/clot0v1216p00059_1.jpg",
  },
  {
    id: 6,
    name: "Cotton Green Sarongs",
    price: "LKR 4,200",
    image: "https://media.wishque.com/data/images/products/10052/92051455_668856704814_0.50138700-1774508676.jpg",
  },
  {
    id: 7,
    name: "Maroon Sarongs",
    price: "LKR 6,000",
    image: "https://signature.lk/wp-content/uploads/2026/03/11-1-680x920.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-200 min-h-screen py-10 px-10">
      
      {/* Title */}
      <h1 className="text-5xl text-black font-bold text-center mb-10">
        Sarongs Collections
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-70 object-cover"
            />

            {/* Details */}
            <div className="p-2 text-center h-30">
              <h2 className="text-lg font-semibold mb-1">
                {product.name}
              </h2>

              <p className="text-gray-600 mb-1">
                {product.price}
              </p>

              {/* Button */}
              <button
               onClick={() => addToCart(item)}
               className="bg-black text-white font-semibold px-2 py-2 rounded-md hover:bg-orange-400">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}