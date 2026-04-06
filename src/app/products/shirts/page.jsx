"use client";

const products = [
  {
    id: 1,
    name: "Rayon Blue Shirt",
    price: "LKR 4,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mKhgpttNl9RElHvlt732ePXYvbhCmdoGdw&s",
  },
  {
    id: 2,
    name: "Rayon Shirt",
    price: "LKR 4,200",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ3_1xWEZE488fCjS3Um1Esk25cvdBcO3vg&s",
  },
  {
    id: 3,
    name: "Green Shirt",
    price: "LKR 4,300",
    image: "https://imagescdn.jaypore.com/img/app/product/3/39751036-15814587.jpg?w=500&auto=format",
  },
  {
    id: 4,
    name: "Linen Shirt",
    price: "LKR 4,800",
    image: "https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/original/lR4Pap_jKR-471043198002_AV.jpg",
  },
  {
    id: 5,
    name: "Cotton Shirt",
    price: "LKR 3,200",
    image: "https://theindiqlo.com/cdn/shop/files/Artboard_11_5ec42785-824c-40f0-bfb3-61bceae44c05.png?v=1758815424&width=1445",
  },
  {
    id: 6,
    name: "Wedding Shirt",
    price: "LKR 12,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjx2ufzK-72bv_Y7XmehWgqQuDavWlQiZbA&s",
  },
  {
    id: 7,
    name: "Cotton Black Shirt",
    price: "LKR 4,200",
    image: "https://shop.gaatha.com/image/catalog/Charkhatales/20_11_2023/2251-(1).jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-blue-950 min-h-screen py-10 px-10">
      
      {/* Title */}
      <h1 className="text-5xl text-white font-bold text-center mb-10">
        Shirts Collections
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
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
              <button className="bg-black text-white font-semibold px-2 py-2 rounded-md hover:bg-orange-400">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}