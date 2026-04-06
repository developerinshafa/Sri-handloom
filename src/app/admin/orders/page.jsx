"use client";
import { useRouter } from "next/navigation";

export default function AddProductsPage() {
    const router = useRouter();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Purchased Items</h2>

        <table className="w-full text-left ">
          <thead>
            <tr className="border-b border bg-gray-100 text-center">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3 ">QTY</th>
              <th className="p-3">Total</th>
              <th className="p-3">Management</th>
            </tr>
          </thead>
          <tbody className="border border-b text-center">
            <tr className="border">
                <td className="p-1">
                    <img
                    src="https://adiakshoy.com/cdn/shop/files/Model_4_1copy_1024x1024.webp?v=1751950934"
                    alt="Sarees"
                    className="w-20 object-cover p-2"
                    />
                </td>
                <td className="p-1 ">
                    <h1>Pink Silk Saree</h1>
                    <p>LKR 9,500.00</p></td>
                <td className="p-1 ">1</td>
                <td className="p-1 ">9,500.00</td>
                <td className="p-1 ">
                  <div className="flex gap-3 items-center justify-center">
                        <button className="border px-2 rounded cursor-pointer">Add</button>
                        <button className="border px-2 rounded text-red-500 cursor-pointer">Cancel</button>
                    </div>
                </td>
            </tr>
            <tr className="border ">
                <td className="p-1 ">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wrcFkNTeFafmf74Z5WM_4T77yrt377EJrg&s"
                    alt="Sarees"
                    className="w-20 object-cover p-2"
                    />
                </td>
                <td className="p-1 ">
                    <h1>Pink Silk Shirt</h1>
                    <p>LKR 5,500.00</p></td>
                <td className="p-1 ">2</td>
                <td className="p-1 ">11,000.00</td>
                <td className="p-1 ">
                  <div className="flex gap-3 items-center justify-center">
                        <button className="border px-2 rounded cursor-pointer">Add</button>
                        <button className="border px-2 rounded text-red-500 cursor-pointer">Cancel</button>
                    </div>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
