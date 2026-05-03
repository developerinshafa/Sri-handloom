"use client";

import { useEffect, useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/products", {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="px-4 py-6 md:px-6 lg:px-8 ">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="mt-1 text-2xl font-extrabold text-slate-900 md:text-3xl">
            Trending Products
          </h3>
        </div>
        <button
          type="button"
          className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 md:block"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((products, index) => {
          const price = Number(products.price || 0);

          return (
            <article
              key={products._id || index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-orange-500"
            >
              {/* Hot badge */}
              {/* <div className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur">
            Hot
          </div> */}

              {/* Image section */}
              <div className="relative h-45 overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50">
                <div className="absolute -right-10 -top-8 h-28 w-28 rounded-full bg-cyan-200/40 blur-2xl transition group-hover:scale-110" />
                <div className="absolute -left-10 -bottom-8 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl transition group-hover:scale-110" />

                <img
                  src={products.productImage}
                  alt={products.productName}
                  className="relative z-10 h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 px-5 pb-5 pt-4">
                <div>
                  <h4 className="line-clamp-1 text-lg font-bold tracking-tight text-slate-900">
                    {products.productName}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    {products.category}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <p className="text-xl font-extrabold text-slate-900">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "LKR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(price)}
                  </p>
                  <p className="text-xs font-medium text-emerald-600">
                    In stock
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
                >
                  Buy Now
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
