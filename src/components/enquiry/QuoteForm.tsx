import React, { useState } from 'react';
import { Button } from '../common/Button';
import type { EnquirySubmission } from '../../types';
import { api } from '../../services/api';
import { SuccessModal } from './SuccessModal';
import { Send, AlertCircle } from 'lucide-react';

export interface QuoteFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialProduct = '', onSuccess }) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    phone: '',
    requirement: '',
    company: '',
    email: '',
    product: initialProduct,
    quantity: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquirySubmission | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Contact Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your requirement';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload: EnquirySubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      await api.submitEnquiry(payload);
      setSubmittedData(payload);
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        requirement: '',
        company: '',
        email: '',
        product: '',
        quantity: '',
      });
      setErrors({});

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {errors.form && (
          <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errors.form}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Contact Name (Required) */}
          <div>
            <label htmlFor="quote-name" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors ${
                errors.name ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone / WhatsApp (Required) */}
          <div>
            <label htmlFor="quote-phone" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors ${
                errors.phone ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Company Name (Optional) */}
          <div>
            <label htmlFor="quote-company" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Company / Business Name <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="quote-company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Company or business name"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors"
            />
          </div>

          {/* Email Address (Optional) */}
          <div>
            <label htmlFor="quote-email" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="quote-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors ${
                errors.email ? 'border-red-400' : 'border-slate-300'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Product of Interest (Optional) */}
          <div>
            <label htmlFor="quote-product" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Product / Category <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="quote-product"
              type="text"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder="e.g. Sample Category or specific item"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors"
            />
          </div>

          {/* Quantity / Volume (Optional) */}
          <div>
            <label htmlFor="quote-quantity" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
              Estimated Volume / Quantity <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="quote-quantity"
              type="text"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              placeholder="e.g. Commercial volume or quantity"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors"
            />
          </div>
        </div>

        {/* Requirement Details (Required) */}
        <div>
          <label htmlFor="quote-requirement" className="block text-xs font-semibold uppercase tracking-wider text-corporate-navy mb-1.5">
            Requirement Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="quote-requirement"
            rows={4}
            value={formData.requirement}
            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            placeholder="Please share your item specifications or product enquiry..."
            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-md text-sm text-corporate-text placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-colors ${
              errors.requirement ? 'border-red-400' : 'border-slate-300'
            }`}
          />
          {errors.requirement && (
            <p className="text-xs text-red-600 mt-1">{errors.requirement}</p>
          )}
        </div>

        {/* Note on data privacy and concept flow */}
        <p className="text-xs text-slate-400">
          This enquiry form illustrates lead capture for the proposed website concept. When connected to the business backend, enquiries will be routed directly to your team.
        </p>

        {/* Submit CTA */}
        <div>
          <Button
            type="submit"
            variant="gold"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            className="font-bold uppercase tracking-wider text-sm py-3.5 shadow-sm text-white"
            icon={isSubmitting ? undefined : <Send className="w-4 h-4 ml-1" />}
          >
            {isSubmitting ? 'Processing Simulation...' : 'Submit Enquiry'}
          </Button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        submission={submittedData}
      />
    </div>
  );
};
