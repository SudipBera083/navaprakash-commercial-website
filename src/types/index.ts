/**
 * Core domain types for Navaprakash Commercial Private Limited web platform.
 * Structured to map seamlessly to future Django REST Framework models & serializers.
 */

export interface CompanyInfo {
  legalName: string;
  shortName: string;
  location: string;
  state: string;
  country: string;
  tagline: string;
  registeredAddress: string | null;
  cin: string | null;
  phone: string | null;
  email: string | null;
  businessHours: string | null;
  whatsappPlaceholder: string | null;
  conceptNote: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  isDemo: boolean;
  
  // Optional future fields - deliberately kept optional so no fake specs are fabricated
  sku?: string;
  moq?: string;
  price?: string;
  specifications?: Record<string, string>;
  applications?: string[];
  packaging?: string;
  availability?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  isDemo: boolean;
}

export interface EnquirySubmission {
  // Required fields for high-conversion frictionless lead capture
  name: string;
  phone: string;
  requirement: string;

  // Optional fields
  company?: string;
  email?: string;
  product?: string;
  quantity?: string;

  // Metadata
  timestamp?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
}
