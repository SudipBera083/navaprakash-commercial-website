import React from 'react';
import { Globe, Layers, MessageSquareText, Database } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Globe className="w-6 h-6 text-corporate-gold" />,
      title: "Professional Company Presence",
      description: "A clear and credible digital identity for customers and business partners.",
      number: "01",
    },
    {
      icon: <Layers className="w-6 h-6 text-corporate-gold" />,
      title: "Product Discovery",
      description: "A structured catalogue that makes products and offerings easier to explore.",
      number: "02",
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-corporate-gold" />,
      title: "Direct Enquiries",
      description: "Simple enquiry forms that allow potential customers to submit requirements.",
      number: "03",
    },
    {
      icon: <Database className="w-6 h-6 text-corporate-gold" />,
      title: "Lead Management Ready",
      description: "The foundation can later connect to a centralized enquiry management system.",
      number: "04",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-corporate-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Digital Value"
          badgeVariant="gold"
          title="Built Around the Way Customers Discover Businesses"
          subtitle="How a dedicated online system strengthens customer trust, simplifies product discovery, and captures high-intent commercial leads."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-md border border-slate-200 p-6 shadow-xs hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-display font-bold text-sm text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-corporate-navy mb-2 break-words leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-corporate-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-semibold text-corporate-gold-muted uppercase tracking-wider">
                System Feature
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 italic">
            * These points outline the functional features of the proposed website architecture.
          </p>
        </div>

      </div>
    </section>
  );
};
