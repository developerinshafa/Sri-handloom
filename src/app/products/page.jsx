export default function ProductsPage() {
  return (
    <div className=" bg-gray-300">
      <h1 className="text-4xl font-bold text-center py-10">All Products</h1>

      <div className="grid grid-cols-5 w-full gap-5 px-10 py-6">
        {/* Blue Saree */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Blue Saree</h1>
            <p>LKR 9,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* red saree */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://i.pinimg.com/736x/b1/25/1d/b1251d7c5f5d23a5b322873d0ab02f8a.jpg"
            alt="Red Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Red Saree</h1>
            <p>LKR 9,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://d29lkp7s2wd4pq.cloudfront.net/full/Navy-Blue-White-Stripe-Handloom-Cotton-Fabric-42717.jpg"
            alt="Blue Materials"
            className="w-70 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Blue Material</h1>
            <p>LKR 600.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Shirts */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/1700775501001--2--1627449108.jpeg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Shirt</h1>
            <p>LKR 4,000.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tops */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://quaclo.com/cdn/shop/products/QUA-BROWN-HANDLOOM-SHORT-KURTI_1d5d806b-feff-4eb4-b013-7e053711d9a4.jpg?v=1701496545&width=1100"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Top</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Sarongs */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://www.ownacraft.com/wp-content/uploads/2024/05/Untitled-40.webp"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Sarongs</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://d29lkp7s2wd4pq.cloudfront.net/full/Light-Pink-Pink-Stripe-Handloom-Cotton-Fabric-40901.jpg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Pink Material</h1>
            <p>LKR 600.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* handbags */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://www.cord360.com/Data/Images/100/ProductImage/Handloom%20Bags.jpg"
            alt="Blue Saree"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Handbags</h1>
            <p>LKR 1,200.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bedsheets */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/lk/p/d9673db2f40dea54f345617f2faacc8b.jpg_720x720q80.jpg"
            alt="Bedsheets"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Bedsheets</h1>
            <p>LKR 1,300.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Bedsheets */}
        <div className="bg-white grid text-center justify-center rounded-lg">
          <img
            src="https://static-01.daraz.lk/p/fd98d143aa41594a30d47eede92d8924.jpg"
            alt="Bedsheets"
            className="w-50 p-2 object-cover hover:shadow-lg rounded-2xl transition-transform duration-300 hover:scale-90"
          />
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-lg">Handloom Bedsheets</h1>
            <p>LKR 2,500.00</p>
          </div>
          <div className="py-2 ">
            <button className="bg-black hover:bg-orange-400 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
