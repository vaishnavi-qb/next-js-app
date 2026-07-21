// A simple product type - each product has these fields
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

// Sample products for learning (no real database needed)
export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    description:
      "Comfortable over-ear headphones with noise cancellation. Great for music and online classes.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 59.99,
    description:
      "Lightweight running shoes with cushioned soles. Perfect for daily walks and workouts.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Fashion",
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 12.99,
    description:
      "Ceramic mug that holds 12oz. Keeps your coffee warm while you study.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Home",
  },
  {
    id: 4,
    name: "Notebook Set",
    price: 8.99,
    description:
      "Pack of 3 ruled notebooks. Ideal for taking notes during lectures.",
    image:
      "https://images.unsplash.com/photo-1531346680769-efd5d6bfe3d0?w=400&h=400&fit=crop",
    category: "Stationery",
  },
  {
    id: 5,
    name: "Backpack",
    price: 45.99,
    description:
      "Durable backpack with laptop compartment. Fits books, laptop, and water bottle.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Fashion",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 24.99,
    description:
      "LED desk lamp with adjustable brightness. Easy on the eyes for late-night study sessions.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    category: "Home",
  },
];

// Helper: find one product by id
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
