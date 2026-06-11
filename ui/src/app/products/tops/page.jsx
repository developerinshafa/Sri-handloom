"use client";

const products = [
  {
    id: 1,
    name: "Cotton Top",
    price: "LKR 2,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mKhgpttNl9RElHvlt732ePXYvbhCmdoGdw&s",
  },
  {
    id: 2,
    name: "Rayon Top",
    price: "LKR 2,800",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ3_1xWEZE488fCjS3Um1Esk25cvdBcO3vg&s",
  },
  {
    id: 3,
    name: "Silk Top",
    price: "LKR 3,200",
    image:
      "https://imagescdn.jaypore.com/img/app/product/3/39751036-15814587.jpg?w=500&auto=format",
  },
  {
    id: 4,
    name: "Linen Top",
    price: "LKR 2,900",
    image:
      "https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/original/lR4Pap_jKR-471043198002_AV.jpg",
  },
];

export default function TopsPage() {
  return (
    <div className="bg-gray-200 min-h-screen py-10 px-10">
      <h1 className="text-4xl font-bold mb-8">Tops Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-48 bg-gray-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
