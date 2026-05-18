"use client";

import { useState } from "react";

export default function CustomerReviewSection() {
  const [reviews] = useState([
    {
      name: "Fathima Inshafa",
      rating: 5,
      comment: "Very good product quality and fast delivery. Highly recommended!",
    },
    {
      name: "Nimal Fernando",
      rating: 4,
      comment: "Nice service and friendly support team.",
    },
    {
      name: "Ayesha Mohamed",
      rating: 5,
      comment: "Absolutely love it! Will buy again.",
    },
    {
      name: "Meena",
      rating: 4,
      comment: "Absolutely love it! Will buy again.",
    },
  ]);

  return (
    <div className="max-w-8xl mx-auto px-10 py-10 gap-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {r.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">{r.name}</h3>

                {/* Stars */}
                <div className="text-yellow-400 text-sm">
                  {"⭐".repeat(r.rating)}
                </div>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-600 italic">"{r.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}