import React from 'react';
import { LayoutDashboard, Layers, MessageSquare, Users2, ShieldCheck, Check } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

export const FutureDashboardSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-corporate-bg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Scalability Roadmap"
          badgeVariant="future"
          title="Ready to Grow Beyond a Website"
          subtitle="The platform can later be extended with a secure business dashboard for managing products, categories and customer enquiries."
          align="center"
        />

        {/* Dashboard Concept Card Preview */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-card p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-900 text-corporate-gold flex items-center justify-center font-bold">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-corporate-navy flex items-center gap-2">
                  Navaprakash Commercial Operations Portal
                </h3>
                <p className="text-xs text-slate-500">
                  Centralized Administration & Lead Management Concept
                </p>
              </div>
            </div>

            <div>
              <Badge variant="future" size="md">
                Future Feature
              </Badge>
            </div>
          </div>

          {/* 4 Feature Module Preview Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            {/* Products Module */}
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <Layers className="w-4 h-4 text-corporate-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                    Phase 2
                  </span>
                </div>
                <h4 className="text-sm font-bold text-corporate-navy">Products</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Add, update, or archive commercial products and technical specifications.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Full Catalogue Control</span>
              </div>
            </div>

            {/* Categories Module */}
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <LayoutDashboard className="w-4 h-4 text-corporate-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                    Phase 2
                  </span>
                </div>
                <h4 className="text-sm font-bold text-corporate-navy">Categories</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Organize inventory by business vertical, product group, or sector.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vertical Grouping</span>
              </div>
            </div>

            {/* Enquiries Module */}
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <MessageSquare className="w-4 h-4 text-corporate-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                    Phase 3
                  </span>
                </div>
                <h4 className="text-sm font-bold text-corporate-navy">Enquiries</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Review captured customer requirements, contact info, and quotation status.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Lead Inbox</span>
              </div>
            </div>

            {/* Customers Module */}
            <div className="p-4 rounded-md bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <Users2 className="w-4 h-4 text-corporate-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                    Phase 3
                  </span>
                </div>
                <h4 className="text-sm font-bold text-corporate-navy">Customers</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Maintain a directory of business contacts and inquiry history.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Commercial CRM</span>
              </div>
            </div>

          </div>

          {/* Strategic Expansion Explanation */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-corporate-gold shrink-0" />
              <span>
                Engineered with modular architecture so back-office lead management integrates smoothly in the future.
              </span>
            </div>
            <div className="font-semibold text-corporate-navy shrink-0">
              Future Expansion Ready
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
