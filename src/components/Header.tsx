import Link from "next/link";
import { CartBadge } from "./CartBadge";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          SimpleShop
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="text-gray-600 hover:text-indigo-600 transition flex items-center gap-2"
          >
            Cart
            <CartBadge />
          </Link>
        </nav>
      </div>
    </header>
  );
}
