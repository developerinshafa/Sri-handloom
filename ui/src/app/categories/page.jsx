import Link from "next/link";

export default function CategoriesPage() {
  return (
    <>
      {/* All Categories */}
      <div className=" p-2 pb-10 ">
        <div className="py-8 px-5 ">
          <h1 className="text-4xl px-5 font-bold">Categories</h1>
        </div>
        <div className="grid grid-cols-4 w-full gap-3 px-10 py-5">
          {/* sarees */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQ3K2LfB2K-6TMJ8Yn__qs5cnTn8Xls_SgQ&s"
              alt="Sarees"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
             <Link href="/products/sarees">
                <h2 className="text-2xl font-bold mb-2 cursor-pointer">
                  Sarees
                </h2>
              </Link>
            </div>
          </div>

          {/* shirts */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wrcFkNTeFafmf74Z5WM_4T77yrt377EJrg&s"
              alt="Shirt"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
              <Link href="/products/shirts">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                  Shirts
                </h2>
              </Link>
            </div>
          </div>

          {/* Sarongs */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://signature.lk/wp-content/uploads/2026/03/07-680x920.jpg"
              alt="Sarongs"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
              <Link href="/products/sarongs">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                  Sarongs
                </h2>
              </Link>
            </div>
          </div>

          {/* Tops */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/8/539890533/RT/RA/QT/134057599/image-500x500.jpeg"
              alt="tops"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
              <Link href="/products?category=Top">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                  Tops
                </h2>
              </Link>
            </div>
          </div>

          {/* Materials */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://www.cord360.com/Data/Images/42/ProductImage/cushion-covers.jpg"
              alt="Materials"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
              <Link href="/products?category=Material">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                 Materials
                </h2>
              </Link>
            </div>
          </div>

          {/* Lungis */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://lakproducts.com.au/wp-content/uploads/2024/03/handloom-lungi1.png"
              alt="Lungis"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
              <Link href="/products?category=Lungis">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                 Lungis
                </h2>
              </Link>
            </div>
          </div>

          {/* Bedsheets */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyITDxkmFlytXqXYzvNWsKxiVbxOc4XDNwg&s"
              alt="Bedsheets"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
            <Link href="/products?category=Bedsheet">
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                 Bedsheets
                </h2>
              </Link>
            </div>
          </div>

          {/* Handbags */}
          <div className="relative w-70 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            {/* Image */}
            <img
              src="https://static-01.daraz.lk/p/6f0fc3c056b5cb9da15558b7b3464010.jpg"
              alt="Handbags"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-120"
            />
            {/* Overlay */}
            <div className="absolute top-15 left-0 w-full p-5 flex flex-col items-center justify-center text-white ">
             <Link href="/products?category=Bag"> 
                <h2 className="text-2xl font-semibold mb-2 cursor-pointer">
                 Handbags
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
