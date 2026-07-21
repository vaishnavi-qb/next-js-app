import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The product you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
