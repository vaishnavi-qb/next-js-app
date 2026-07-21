import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

// This page is dynamic: /products/1, /products/2, etc.
type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
        <div className="relative h-72 md:h-auto md:w-1/2 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <span className="text-sm text-indigo-600 font-medium uppercase">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
          <p className="text-3xl font-bold text-indigo-600 mt-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
