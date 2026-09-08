import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const EnquiryCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-corporate-navy text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-corporate-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded bg-slate-800 text-corporate-gold border border-slate-700">
          Direct Commercial Engagement
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
          Looking for the right product or commercial solution?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us what you need and our team can review your requirements and provide relevant commercial details.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/quote"
            variant="gold"
            size="lg"
            className="font-bold tracking-wider text-sm uppercase px-8 py-3.5 shadow-sm text-white"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Request a Quote
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="lg"
            className="bg-slate-800/90 text-white border border-slate-500 hover:border-white hover:bg-slate-700 font-medium text-sm px-7 py-3.5 shadow-xs transition-colors"
          >
            Contact Information
          </Button>
        </div>

        <p className="text-xs text-slate-400 pt-3">
          Commercial requirements, product enquiries, and catalogue questions handled directly.
        </p>

      </div>
    </section>
  );
};
