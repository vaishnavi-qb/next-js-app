"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    // Reset "Added!" message after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
        added
          ? "bg-green-500 text-white"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}
    >
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}
