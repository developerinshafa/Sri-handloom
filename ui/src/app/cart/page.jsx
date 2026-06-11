"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus, faArrowRight, faShoppingBag, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState("");
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "cod"
  });

  const router = useRouter();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // Sync cart to localStorage whenever it changes
  const saveCartState = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update item quantity
  const updateQuantity = (id, change) => {
    const updated = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    saveCartState(updated);
  };

  // Remove item from cart
  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    saveCartState(updated);
  };

  // Apply promo code logic
  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === "WELCOME10") {
      setDiscountPercent(10);
      setAppliedPromo("WELCOME10 (10% OFF)");
      setPromoCode("");
    } else if (code === "HERITAGE20") {
      setDiscountPercent(20);
      setAppliedPromo("HERITAGE20 (20% OFF)");
      setPromoCode("");
    } else {
      alert("Invalid Promo Code! Try WELCOME10 or HERITAGE20.");
    }
  };

  // Calculate prices
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 350;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + shipping + tax;

  // Handle Checkout submission
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!shippingDetails.fullName || !shippingDetails.address || !shippingDetails.city || !shippingDetails.phone) {
      alert("Please fill in all shipping details.");
      return;
    }

    // Generate random order ID
    const randomId = "SLH-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setCheckoutSuccess(true);
    setCheckoutModalOpen(false);

    // Clear cart
    saveCartState([]);
  };

  if (checkoutSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-100">
          <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-6xl mb-6" />
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for supporting handloom artisans. Your order has been placed successfully.
          </p>
          <div className="bg-emerald-50 text-emerald-800 font-bold p-4 rounded-xl mb-8 border border-emerald-100">
            Order ID: {orderId}
          </div>
          <button
            onClick={() => router.push("/products")}
            className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faShoppingBag} className="text-orange-500 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Looks like you haven't added anything to your cart yet. Explore our high-end traditional handloom catalog to get started.
            </p>
            <Link
              href="/products"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-colors shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl bg-gray-50 border border-gray-100"
                      />

                      {/* Name & Category */}
                      <div className="flex-1 text-center sm:text-left">
                        <span className="text-xs font-bold uppercase text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2">{item.name}</h3>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-600 hover:text-orange-500 transition-colors w-6 h-6 flex items-center justify-center"
                        >
                          <FontAwesomeIcon icon={faMinus} size="sm" />
                        </button>
                        <span className="font-semibold text-gray-900 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-600 hover:text-orange-500 transition-colors w-6 h-6 flex items-center justify-center"
                        >
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </button>
                      </div>

                      {/* Price Calculation */}
                      <div className="text-right flex flex-col sm:items-end">
                        <span className="font-bold text-gray-900">
                          LKR {(item.price * item.quantity).toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          LKR {item.price.toLocaleString()} each
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary Panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4 text-sm text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">LKR {subtotal.toLocaleString()}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount ({appliedPromo})</span>
                      <span>- LKR {discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated VAT (8%)</span>
                    <span className="font-semibold text-gray-900">LKR {tax.toLocaleString()}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-orange-500">LKR {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {/* Shipping Offer Message */}
                {subtotal < 5000 && (
                  <p className="text-xs text-orange-600 bg-orange-50 rounded-lg p-3 text-center mb-6">
                    Add <b>LKR {(5000 - subtotal).toLocaleString()}</b> more to get <b>FREE SHIPPING!</b>
                  </p>
                )}

                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Proceed to Checkout
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="bg-gray-900 text-white p-6">
              <h2 className="text-2xl font-bold">Shipping & Checkout</h2>
              <p className="text-gray-400 text-sm mt-1">Provide your delivery and payment specifications below.</p>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingDetails.fullName}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
                  placeholder="Artisan Customer"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Delivery Address</label>
                <input
                  type="text"
                  required
                  value={shippingDetails.address}
                  onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                  placeholder="123 Galle Road, Colombo"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={shippingDetails.city}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                    placeholder="Colombo"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={shippingDetails.phone}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, phone: e.target.value })}
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`border-2 rounded-xl p-3 flex flex-col items-center gap-1 cursor-pointer transition-all ${shippingDetails.paymentMethod === "cod" ? "border-orange-500 bg-orange-50/50" : "border-gray-200 hover:border-gray-300"}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={shippingDetails.paymentMethod === "cod"}
                      onChange={() => setShippingDetails({ ...shippingDetails, paymentMethod: "cod" })}
                      className="sr-only"
                    />
                    <span className="font-bold text-gray-900 text-sm">Cash on Delivery</span>
                    <span className="text-xxs text-gray-400">Pay at your doorstep</span>
                  </label>

                  <label className={`border-2 rounded-xl p-3 flex flex-col items-center gap-1 cursor-pointer transition-all ${shippingDetails.paymentMethod === "card" ? "border-orange-500 bg-orange-50/50" : "border-gray-200 hover:border-gray-300"}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={shippingDetails.paymentMethod === "card"}
                      onChange={() => setShippingDetails({ ...shippingDetails, paymentMethod: "card" })}
                      className="sr-only"
                    />
                    <span className="font-bold text-gray-900 text-sm">Mock Card Payment</span>
                    <span className="text-xxs text-gray-400">Instant validation</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setCheckoutModalOpen(false)}
                  className="flex-1 py-3 border border-gray-300 hover:bg-gray-50 rounded-xl font-bold transition-all text-center cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all text-center shadow-lg hover:shadow-orange-500/10 cursor-pointer"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
