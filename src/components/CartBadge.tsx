"use client";

import { useCart } from "@/context/CartContext";

export function CartBadge() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <span className="bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {totalItems}
    </span>
  );
}
