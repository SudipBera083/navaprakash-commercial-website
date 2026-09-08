import type { CompanyInfo } from '../types';

/**
 * Central company configuration.
 * Adheres strictly to the anti-hallucination protocol:
 * Only verified facts are included (Legal name & Kolkata, West Bengal, India).
 * Unverified operational details are set to null and rendered gracefully in the UI.
 */
export const company: CompanyInfo = {
  legalName: "NAVAPRAKASH COMMERCIAL PRIVATE LIMITED",
  shortName: "NAVAPRAKASH COMMERCIAL",
  location: "Kolkata, West Bengal",
  state: "West Bengal",
  country: "India",
  tagline: "Building Better Commercial Connections",
  
  // Explicitly null - will display "To be provided by the company" in the UI
  registeredAddress: null,
  cin: null,
  phone: null,
  email: null,
  businessHours: null,
  whatsappPlaceholder: null,

  conceptNote: "Website concept prepared for discussion.",
};

/**
 * Helper utility to safely format company fields that require official onboarding.
 */
export function getCompanyFieldOrPlaceholder(
  value: string | null | undefined,
  placeholder = "To be provided by the company"
): string {
  if (!value || value.trim() === "") {
    return placeholder;
  }
  return value;
}
