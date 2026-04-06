"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify({ id: editId, name, email }),
      });
      setEditId(null);
    } else {
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email }),
      });
    }

    setName("");
    setEmail("");
    fetchUsers();
  };

  // Delete
  const handleDelete = async (id) => {
    await fetch("/api/users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  // Edit
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {/* Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Phone No</th>
            <th className="p-2 border">Location</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="p-1 border">John </td>
            <td className="p-1 border">123john@gmail.com </td>
            <td className="p-1 border">123/B Beach Road </td>
            <td className="p-1 border">1234567890 </td>
            <td className="p-1 border">Kalmunai </td>
          </tr>
          <tr>
            <td className="p-1 border">Sara </td>
            <td className="p-1 border">123sara@gmail.com </td>
            <td className="p-1 border">123/B Beach Road </td>
            <td className="p-1 border">1234567890 </td>
            <td className="p-1 border">Ampara</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
