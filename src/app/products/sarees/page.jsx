"use client";

const products = [
  {
    id: 1,
    name: "Rayon Blue Saree",
    price: "LKR 4,500",
    image: "https://laveena.lk/wp-content/uploads/2026/03/ChatGPT-Image-Mar-23-2026-02_31_25-PM.png",
  },
  {
    id: 2,
    name: "Rayon Pink Saree",
    price: "LKR 4,200",
    image: "https://dailybuyys.com/cdn/shop/products/TSI_7191.jpg",
  },
  {
    id: 3,
    name: "Cotton Green Saree",
    price: "LKR 4,300",
    image: "https://thenmozhidesigns.com/cdn/shop/files/NIJU6442_copy_2.jpg?v=1731732116&width=3411",
  },
  {
    id: 4,
    name: "Silk Saree",
    price: "LKR 4,800",
    image: "https://cdn.sareeka.com/image/cache/data2024/grey-handloom-silk-floral-patch-work-trendy-saree-282846-1000x1375.jpg",
  },
  {
    id: 5,
    name: "Handloom Wedding Saree",
    price: "LKR 8,500",
    image: "https://www.chinayabanaras.com/cdn/shop/files/CPS-017_2_-LOW-RES-LOW-Chinayabanaras.jpg?v=1772272389",
  },
  {
    id: 6,
    name: "Cotton Saree",
    price: "LKR 3,200",
    image: "https://isadoralife.com/cdn/shop/files/WhatsApp_Image_2025-01-29_at_12.09.46_AM_1_bcfc3c82-e07a-4652-980f-f3c09e650090.jpg?v=1740310419&width=2048",
  },
  {
    id: 7,
    name: "Silk Wedding Sarees",
    price: "LKR 12,000",
    image: "https://cdn.sareeka.com/image/cache/data2023/beige-handloom-silk-festival-saree-246272-1000x1375.jpg",
  },
  {
    id: 8,
    name: "Cotton Red Saree",
    price: "LKR 4,200",
    image: "https://suta.in/cdn/shop/files/behekta-dil-839968.jpg?v=1718343741&width=900",
  },
  {
    id: 9,
    name: "Rayon Maroon Saree",
    price: "LKR 6,000",
    image: "https://5.imimg.com/data5/ECOM/Default/2024/4/414789329/EV/JT/AH/110401532/as-237ct1966m-1-696d5f5e-ac0e-4855-b0d8-24bbc68acb94-500x500.jpg",
  },
  {
    id: 10,
    name: "Rayon Yellow Saree",
    price: "LKR 5,500",
    image: "https://isadoralife.com/cdn/shop/files/DSC03853_8d130dd2-c952-4fa7-aa4a-a131bd0a15a8.jpg?v=1755339219&width=1333",
  },
  {
    id: 11,
    name: "Cotton black",
    price: "LKR 4,200",
    image: "https://laveena.lk/wp-content/uploads/2026/03/ChatGPT-Image-Mar-23-2026-02_21_15-PM.png",
  },
  {
    id: 12,
    name: "Silk Maroon Saree",
    price: "LKR 6,000",
    image: "https://rasmbymuskaan.com/cdn/shop/files/AKU_0222.jpg?v=1724314960",
  },
  {
    id: 13,
    name: "Red Saree",
    price: "LKR 5,000",
    image: "https://www.sutisaree.com/wp-content/uploads/2021/06/5881660.webp",
  },
  
];

export default function ProductsPage() {
  return (
    <div className="bg-blue-950 min-h-screen py-10 px-10">
      
      {/* Title */}
      <h1 className="text-5xl text-white font-bold text-center mb-10">
        Sarees Collections
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