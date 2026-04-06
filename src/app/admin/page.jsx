"use client";

export default function AdminDashboard() {
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Users */}
        <div className="bg-blue-200 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-3xl font-bold mt-2">20</p>
        </div>

        {/* Products */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="text-3xl font-bold mt-2">50</p>
        </div>

        {/* Orders */}
        <div className="bg-green-200 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-3xl font-bold mt-2">25</p>
        </div>

      </div>

      {/* Recent Orders Table */}
      <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-2">#001</td>
              <td className="p-2">John</td>
              <td className="p-2">$120</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>

            <tr className="border-t">
              <td className="p-2">#002</td>
              <td className="p-2">Sara</td>
              <td className="p-2">$90</td>
              <td className="p-2 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}