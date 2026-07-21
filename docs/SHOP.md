# SimpleShop — App Guide

A simple shopping website built with **Next.js**, **TypeScript**, and **Tailwind CSS** for learning.

## Run the shop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/                    # Pages (routes)
│   ├── page.tsx            # Home (/)
│   ├── cart/page.tsx       # Cart (/cart)
│   ├── products/[id]/      # Product detail
│   └── layout.tsx          # Header + CartProvider
├── components/             # UI pieces
├── context/                # Cart state
└── data/                   # Sample products
```

## Pages

| Route | What it does |
|-------|--------------|
| `/` | Product grid |
| `/products/1` | Product detail |
| `/cart` | Shopping cart |

## Key files to study

1. `src/data/products.ts`
2. `src/app/page.tsx`
3. `src/context/CartContext.tsx`
4. `src/components/AddToCartButton.tsx`
5. `src/app/products/[id]/page.tsx`

## Practice ideas

1. Add a new product in `src/data/products.ts`
2. Change the color theme (search for `indigo`)
3. Add a category filter on the home page
4. Show a discount price
