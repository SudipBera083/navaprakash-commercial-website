import React, { useEffect } from 'react';
import { MapPin, Building, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, getCompanyFieldOrPlaceholder } from '../data/company';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { PlaceholderNotice } from '../components/common/PlaceholderNotice';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 py-12 md:py-16 bg-corporate-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Company Overview"
          title="About Navaprakash Commercial"
          subtitle="A structured overview of the company entity, registered location, and proposed digital infrastructure."
          align="left"
        />

        {/* Primary Corporate Card */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Identity Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-corporate-gold block mb-1">
                  Commercial Business
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-corporate-navy">
                  {company.legalName}
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-100 border border-slate-200 text-xs text-corporate-navy font-semibold self-start sm:self-auto">
                <MapPin className="w-4 h-4 text-corporate-gold shrink-0" />
                <span>{company.location}, {company.country}</span>
              </div>
            </div>

            <p className="mt-4 text-base text-slate-700 leading-relaxed font-normal">
              {company.legalName} is based in {company.location}, {company.country}. 
              This website concept demonstrates how the company's digital presence could be structured to present business information, 
              streamline catalogue discovery, and handle incoming customer enquiries with clarity.
            </p>
          </div>

          {/* Section: Company Information (Verified vs Editable Placeholders) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-corporate-navy flex items-center gap-2">
              <Building className="w-5 h-5 text-corporate-gold" />
              Company Information
            </h3>
            <p className="text-xs text-slate-500">
              Official corporate registry data to be populated directly from company records.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Legal Entity Name */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Legal Entity Name
                </span>
                <p className="text-sm font-semibold text-corporate-navy">
                  {company.legalName}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] text-emerald-700">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Legal Name</span>
                </div>
              </div>

              {/* Headquartered Location */}
              <div className="p-4 rounded bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Location
                </span>
                <p className="text-sm font-semibold text-corporate-navy">
                  {company.location}, {company.country}
                </p>
                <div className="pt-1 flex items-center gap-1 text-[11px] text-emerald-700">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Location</span>
                </div>
              </div>

              {/* Registered Address Placeholder */}
              <div className="p-4 rounded bg-slate-50 border border-dashed border-slate-300 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Registered Address
                </span>
                <p className="text-sm text-slate-600 italic">
                  {getCompanyFieldOrPlaceholder(company.registeredAddress)}
                </p>
                <PlaceholderNotice
                  inline
                  label="Official office address to be inserted"
                />
              </div>

              {/* CIN Placeholder */}
              <div className="p-4 rounded bg-slate-50 border border-dashed border-slate-300 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Corporate Identification Number (CIN)
                </span>
                <p className="text-sm text-slate-600 italic">
                  {getCompanyFieldOrPlaceholder(company.cin)}
                </p>
                <PlaceholderNotice
                  inline
                  label="MCA registration number to be inserted"
                />
              </div>

              {/* Contact Information Placeholder */}
              <div className="p-4 rounded bg-slate-50 border border-dashed border-slate-300 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Contact Information
                </span>
                <p className="text-sm text-slate-600 italic">
                  {getCompanyFieldOrPlaceholder(company.phone)}
                </p>
                <PlaceholderNotice
                  inline
                  label="Official phone & email to be inserted"
                />
              </div>

              {/* Business Description Placeholder */}
              <div className="p-4 rounded bg-slate-50 border border-dashed border-slate-300 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Business Description & Scope
                </span>
                <p className="text-sm text-slate-600 italic">
                  Information regarding specific commercial activities to be provided by the company.
                </p>
                <PlaceholderNotice
                  inline
                  label="Detailed business profile to be updated"
                />
              </div>

            </div>
          </div>

          {/* Section: Website Purpose & Commercial Role */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-corporate-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-corporate-gold" />
              Purpose of this Digital Platform
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-corporate-navy text-sm">Online Credibility</h4>
                <p className="leading-relaxed">
                  Provides a professional home where clients and suppliers can verify company details and business focus.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-corporate-navy text-sm">Product Accessibility</h4>
                <p className="leading-relaxed">
                  Allows prospective buyers to discover available product lines, read specifications, and submit requests.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-corporate-navy text-sm">Structured Lead Flow</h4>
                <p className="leading-relaxed">
                  Replaces unstructured informal inquiries with organized, actionable commercial quotes.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-corporate-navy rounded-md text-white">
            <div>
              <h4 className="font-bold text-sm">Ready to explore the catalogue?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                See how commercial products are structured in this concept.
              </p>
            </div>
            <Button
              to="/products"
              variant="gold"
              size="sm"
              className="text-xs uppercase tracking-wider font-semibold whitespace-nowrap text-white"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
            >
              View Catalogue Demo
            </Button>
          </div>

        </div>

      </div>
    </main>
  );
};
