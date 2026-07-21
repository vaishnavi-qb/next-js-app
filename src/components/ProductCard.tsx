import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
    >
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-indigo-600 font-medium uppercase">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-900 mt-1">{product.name}</h3>
        <p className="text-lg font-bold text-indigo-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
