import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Map, Building2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { company, getCompanyFieldOrPlaceholder } from '../data/company';
import { PlaceholderNotice } from '../components/common/PlaceholderNotice';
import { QuoteForm } from '../components/enquiry/QuoteForm';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 py-12 md:py-16 bg-corporate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Commercial Inquiries"
          title="Contact Navaprakash Commercial"
          subtitle="Connect regarding business requirements or submit your commercial enquiry directly."
          align="left"
        />

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Requirement Submission Form */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-corporate-navy">
                Send a Message or Requirement
              </h2>
              <p className="text-xs sm:text-sm text-corporate-text-muted mt-1">
                Please provide your contact information and requirement.
              </p>
            </div>

            <QuoteForm />
          </div>

          {/* Right Column: Verified Corporate Location & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Office Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-corporate-navy flex items-center gap-2 pb-3 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-corporate-gold" />
                Office & Contact Details
              </h3>

              {/* Verified Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-corporate-gold" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    City & Region
                  </span>
                  <p className="text-sm font-semibold text-corporate-navy">
                    {company.location}, {company.country}
                  </p>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">
                    Verified Corporate Base
                  </p>
                </div>
              </div>

              {/* Registered Address Placeholder */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Registered Address
                  </span>
                  <p className="text-sm text-slate-600 italic">
                    {getCompanyFieldOrPlaceholder(company.registeredAddress)}
                  </p>
                  <PlaceholderNotice inline label="Official street address to be inserted" />
                </div>
              </div>

              {/* Phone Placeholder */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Telephone
                  </span>
                  <p className="text-sm text-slate-600 italic">
                    {getCompanyFieldOrPlaceholder(company.phone)}
                  </p>
                  <PlaceholderNotice inline label="Office phone number to be inserted" />
                </div>
              </div>

              {/* Email Placeholder */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <p className="text-sm text-slate-600 italic">
                    {getCompanyFieldOrPlaceholder(company.email)}
                  </p>
                  <PlaceholderNotice inline label="Commercial email to be inserted" />
                </div>
              </div>

              {/* Business Hours Placeholder */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Business Hours
                  </span>
                  <p className="text-sm text-slate-600 italic">
                    {getCompanyFieldOrPlaceholder(company.businessHours)}
                  </p>
                  <PlaceholderNotice inline label="Working days & hours to be specified" />
                </div>
              </div>

            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-corporate-navy flex items-center gap-1.5">
                <Map className="w-4 h-4 text-corporate-gold" />
                Geographic Location
              </h4>
              
              <div className="aspect-16/9 bg-slate-100 rounded-md border border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-corporate-gold mb-2" />
                <p className="text-sm font-semibold text-corporate-navy">
                  Kolkata, West Bengal
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Map integration can be added with the confirmed business address.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
};
