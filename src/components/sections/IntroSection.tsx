import React from 'react';
import { ArrowRight, MapPin, Building, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { company } from '../../data/company';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Company Introduction"
          title="About Navaprakash Commercial"
          align="center"
        />

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs text-center space-y-6">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
            <strong className="text-corporate-navy font-semibold">{company.legalName}</strong> is based in{' '}
            <span className="text-corporate-navy font-medium">{company.location}, {company.country}</span>. 
            This website concept demonstrates how the company's digital presence could be structured to make business information, product discovery and customer enquiries easier to access.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-corporate-gold" />
              <span>Commercial Business</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-corporate-gold" />
              <span>Kolkata, West Bengal</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-corporate-gold" />
              <span>Digital Proposal Concept</span>
            </div>
          </div>

          <div className="pt-4">
            <Button
              to="/about"
              variant="outline"
              size="md"
              className="text-xs uppercase tracking-wider font-semibold"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
            >
              Explore the Concept
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
