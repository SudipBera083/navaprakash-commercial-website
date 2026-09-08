import type { Product, ProductCategory, EnquirySubmission, EnquiryResponse } from '../types';
import { demoProducts, demoCategories } from '../data/products';

/**
 * API Service Layer
 * 
 * Configured as an asynchronous abstraction layer designed to mirror
 * a future Django REST Framework backend:
 * 
 * - GET  /api/products/        -> getProducts()
 * - GET  /api/products/:slug/  -> getProductBySlug(slug)
 * - GET  /api/categories/     -> getCategories()
 * - POST /api/enquiries/      -> submitEnquiry(data)
 */

export const api = {
  /**
   * Fetch all products (future: GET /api/products/)
   */
  async getProducts(): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 80));
    return [...demoProducts];
  },

  /**
   * Fetch single product by slug (future: GET /api/products/:slug/)
   */
  async getProductBySlug(slug: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 60));
    const product = demoProducts.find((p) => p.slug === slug);
    return product || null;
  },

  /**
   * Fetch all categories (future: GET /api/categories/)
   */
  async getCategories(): Promise<ProductCategory[]> {
    await new Promise((resolve) => setTimeout(resolve, 60));
    return [...demoCategories];
  },

  /**
   * Submit enquiry (future: POST /api/enquiries/)
   * Simulates lead capture without storing or emailing data.
   */
  async submitEnquiry(enquiry: EnquirySubmission): Promise<EnquiryResponse> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.info('[Demo Enquiry Captured]', enquiry);

    return {
      success: true,
      message: "Thank you for sharing your requirement. This demo currently simulates the enquiry process."
    };
  }
};
