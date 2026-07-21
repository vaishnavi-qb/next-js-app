import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Welcome to SimpleShop
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A beginner-friendly shopping website built with Next.js. Browse
          products, view details, and add items to your cart!
        </p>
      </section>

      <h2 className="text-2xl font-semibold mb-6">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
