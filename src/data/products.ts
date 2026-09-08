import type { Product, ProductCategory } from '../types';

/**
 * Demo Product Categories
 * Clean, neutral commercial categories clearly labeled as DEMO CONTENT.
 * Demonstrates the catalogue framework without inventing client-specific inventory.
 */
export const demoCategories: ProductCategory[] = [
  {
    id: "cat-1",
    name: "Sample Category A",
    slug: "sample-category-a",
    description: "Configurable commercial product category showcasing structured presentation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    isDemo: true,
  },
  {
    id: "cat-2",
    name: "Sample Category B",
    slug: "sample-category-b",
    description: "Demonstration of commercial supplies and material classification.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    isDemo: true,
  },
  {
    id: "cat-3",
    name: "Sample Category C",
    slug: "sample-category-c",
    description: "Sample display of equipment and commercial grade items.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    isDemo: true,
  },
  {
    id: "cat-4",
    name: "Sample Category D",
    slug: "sample-category-d",
    description: "Customizable product vertical adaptable to your company's core inventory.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    isDemo: true,
  },
];

/**
 * Demo Products
 * Clean demonstration items clearly designated as DEMO CONTENT.
 * Shows how commercial items can be searched, filtered, and enquired on.
 */
export const demoProducts: Product[] = [
  {
    id: "prod-1",
    slug: "sample-product-01",
    name: "Sample Product 01",
    category: "Sample Category A",
    description: "Demonstration product card illustrating description, image presentation, and instant enquiry capture.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    isDemo: true,
  },
  {
    id: "prod-2",
    slug: "sample-product-02",
    name: "Sample Product 02",
    category: "Sample Category B",
    description: "Sample commercial item showcasing how high-resolution imagery and enquiry flows integrate seamlessly.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    isDemo: true,
  },
  {
    id: "prod-3",
    slug: "sample-product-03",
    name: "Sample Product 03",
    category: "Sample Category C",
    description: "Illustrative product listing highlighting responsive layout and direct quote pre-selection.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    isDemo: true,
  },
  {
    id: "prod-4",
    slug: "sample-product-04",
    name: "Sample Product 04",
    category: "Sample Category D",
    description: "Sample catalogue entry demonstrating category filtering, search discoverability, and clean mobile UX.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80",
    isDemo: true,
  },
];
