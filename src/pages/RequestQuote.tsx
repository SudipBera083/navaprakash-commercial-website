import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FileCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { QuoteForm } from '../components/enquiry/QuoteForm';

export const RequestQuote: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 py-12 md:py-16 bg-corporate-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation back */}
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-xs font-semibold text-corporate-navy hover:text-corporate-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to catalogue
          </Link>
        </div>

        {/* Page Title & Subtitle */}
        <SectionHeader
          badge="Direct Enquiry"
          badgeVariant="gold"
          title="Request a Commercial Quote"
          subtitle="Submit your product requirement, volume estimation, or commercial specifications. Our team will review your requirement and assist you with product information."
          align="left"
        />

        {/* Informational Banner if a Product was pre-selected */}
        {preselectedProduct && (
          <div className="p-4 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs sm:text-sm text-amber-950">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-corporate-gold-muted shrink-0" />
              <span>
                Pre-selected Product: <strong>{preselectedProduct}</strong>
              </span>
            </div>
            <span className="text-[11px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
              Selected
            </span>
          </div>
        )}

        {/* Main Quotation Form */}
        <QuoteForm initialProduct={preselectedProduct} />

        {/* Commercial Assurance Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-slate-500">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
            <span>Structured requirement routing to business team</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
            <span>Accurate pricing & enquiry processing</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
            <span>Digital enquiry concept simulation</span>
          </div>
        </div>

      </div>
    </main>
  );
};
