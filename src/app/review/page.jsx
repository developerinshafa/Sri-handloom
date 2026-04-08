"use client";

const reviews = [
  {
    name: "Fathima",
    rating: 5,
    comment: "Beautiful saree! The quality is amazing and looks premium.",
  },
  {
    name: "Meena",
    rating: 4,
    comment: "Very comfortable fabric. Delivery was quick.",
  },
  {
    name: "Ravi",
    rating: 4,
    comment: "Loved the design! Will definitely buy again.",
  },
];

export default function ReviewSection() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Customer Reviews
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>

                {/* Stars */}
                <div className="text-yellow-400 text-sm">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>
            </div>

            {/* Comment */}
            <p className="text-gray-600">"{item.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}