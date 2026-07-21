"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Add some products to get started!
        </p>
        <Link
          href="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="bg-white rounded-lg shadow-md p-4 flex gap-4 items-center"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{item.product.name}</h3>
              <p className="text-indigo-600 font-bold">
                ${item.product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity - 1)
                }
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
              >
                -
              </button>
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(item.product.id, item.quantity + 1)
                }
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
              >
                +
              </button>
            </div>

            <p className="font-bold w-20 text-right">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-400 hover:text-red-600 text-xl"
              title="Remove item"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total</span>
          <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Checkout (Demo)
        </button>
        <p className="text-center text-sm text-gray-500 mt-2">
          This is a learning project — checkout is not real.
        </p>
      </div>
    </div>
  );
}
