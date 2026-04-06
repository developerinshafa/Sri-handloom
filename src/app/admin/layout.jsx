"use client";

import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-white p-4">
      
      {/* Sidebar */}
      <aside className="w-65 bg-black text-white p-8 space-y-6 rounded-xl">
        <h1 className="text-3xl font-bold">Admin</h1>

        <nav className="flex flex-col space-y-5 text-2xl">
          <Link href="/admin" className="hover:text-yellow-400">Dashboard</Link>
          <Link href="/admin/users" className="hover:text-yellow-400">Users</Link>
          <Link href="/admin/products" className="hover:text-yellow-400">Products</Link>
          <Link href="/admin/orders" className="hover:text-yellow-400">Orders</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}