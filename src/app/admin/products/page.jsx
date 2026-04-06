"use client";
import { useRouter } from "next/navigation";

export default function AddProductsPage() {
    const router = useRouter();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Products Management</h1>
        <button
          onClick={() => router.push("/admin/products/addproduct")}
          className="bg-black text-white text-xl px-6 py-1 rounded cursor-pointer"
        >
          Add Products
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">All Products</h2>

        <table className="w-full ">
          <thead>
            <tr className="border-b border bg-gray-100">
              <th className="p-3 border">Product Details</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Stock</th>
              <th className="p-3 border">Management</th>
            </tr>
          </thead>
          <tbody className="border border-b text-center">
            <tr className="border ">
                <td className="p-1 flex gap-4">
                    <img
                    src="https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934"
                    alt="Sarees"
                    className="w-20 p-2 object-cover"
                    />
                    <div className="py-4">
                        <h1>Pink Silk Saree</h1>
                        <p>LKR 9,500.00</p>
                    </div>
                     
                </td>
                <td className="p-1 ">Silk</td>
                   
                <td className="p-1 ">LKR 12,500.00</td>
                <td className="p-1 ">20</td>
                <td className="p-1 ">
                    <div className="flex gap-3 items-center justify-center">
                        <button className="border px-2 rounded cursor-pointer">🖍 Edit</button>
                        <button className="border px-2 rounded text-red-500 cursor-pointer">🗑 Delete</button>
                    </div>
                </td>
            </tr>
            <tr className="border ">
                <td className="p-1 flex gap-4 ">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wrcFkNTeFafmf74Z5WM_4T77yrt377EJrg&s"
                    alt="Sarees"
                    className="w-20 object-cover p-2"
                    />
                <div className="py-4">
                        <h1>Pink Silk Saree</h1>
                        <p>LKR 5,500.00</p>
                    </div>
                </td>
                <td className="p-1 ">Rayon</td>
                <td className="p-1 ">LKR 5,500.00</td>
                <td className="p-1 ">15</td>
                <td className="p-1 "> 
                    <div className="flex gap-3 items-center justify-center">
                        <button className="border px-2 rounded cursor-pointer">🖍 Edit</button>
                        <button className="border px-2 rounded text-red-500 cursor-pointer">🗑 Delete</button>
                    </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
