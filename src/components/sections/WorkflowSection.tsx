import React from 'react';
import { UserCheck, Search, FileText, Database, Users, LayoutDashboard, ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      icon: <UserCheck className="w-5 h-5 text-corporate-gold" />,
      title: "1. Customer Visit",
      desc: "Prospective buyer or commercial client arrives on the website via search, referral, or direct link.",
    },
    {
      icon: <Search className="w-5 h-5 text-corporate-gold" />,
      title: "2. Product Discovery",
      desc: "Customer browses structured categories, reviews specifications, and identifies needed items.",
    },
    {
      icon: <FileText className="w-5 h-5 text-corporate-gold" />,
      title: "3. Request a Quote",
      desc: "Buyer submits a direct enquiry with contact details, volume, and commercial requirements.",
    },
    {
      icon: <Database className="w-5 h-5 text-corporate-gold" />,
      title: "4. Enquiry Captured",
      desc: "The enquiry is instantly validated and formatted as a qualified business lead.",
    },
    {
      icon: <Users className="w-5 h-5 text-corporate-gold" />,
      title: "5. Business Team",
      desc: "Your team receives notification to review details, connect with the buyer, or prepare terms.",
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-corporate-gold" />,
      title: "6. Future Admin System",
      desc: "Enquiries, products, and customer interactions managed inside a dedicated business portal.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-corporate-navy text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-slate-800 text-corporate-gold border border-slate-700 mb-3">
            Lead Generation Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            From Website Visit to Business Enquiry
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
            How an organized commercial website turns visitor interest into qualified sales opportunities for your business.
          </p>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            <span className="w-10 h-0.5 bg-corporate-gold"></span>
            <span className="w-2 h-0.5 bg-slate-600"></span>
          </div>
        </div>

        {/* 6-Step Visual Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-corporate-navy-light/70 border border-slate-700/80 rounded-lg p-6 flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400 font-semibold tracking-wider uppercase mt-4 pt-3 border-t border-slate-800">
                  <span>Next Step</span>
                  <ArrowRight className="w-3 h-3 text-corporate-gold" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Commercial impact note with zero SLA claims */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            A clear digital workflow ensures enquiries are organized and easily accessible for your business team.
          </p>
        </div>

      </div>
    </section>
  );
};
