import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { company } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-navy text-slate-300 border-t border-slate-800 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand & Corporate Presence (Col 1 - 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-corporate-navy-light flex items-center justify-center border border-corporate-gold/40">
                <span className="font-display font-bold text-base text-corporate-gold">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-widest text-white leading-none">
                  NAVAPRAKASH
                </span>
                <span className="font-display text-[10px] font-semibold tracking-wider text-slate-400 leading-tight mt-0.5">
                  COMMERCIAL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Navaprakash Commercial Private Limited is based in Kolkata, West Bengal, India. This website concept demonstrates a proposed digital architecture for product showcase and customer enquiry management.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-corporate-gold shrink-0" />
              <span>{company.location}, {company.country}</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6 - 8) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products & Catalogue
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-corporate-gold hover:text-corporate-gold-light transition-colors font-medium inline-flex items-center gap-1">
                  Request a Quote <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Demonstration Scope (Col 9 - 12) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Concept Architecture
            </h4>
            <div className="bg-corporate-navy-light/60 border border-slate-800 p-4 rounded-md space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-corporate-gold">
                <FileText className="w-3.5 h-3.5" />
                <span>Scalable Business Platform</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structured for smooth future migration into a dedicated backend with database-backed catalogue and customer enquiry administration.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest text-corporate-gold bg-slate-800/90 px-2.5 py-1 rounded border border-slate-700">
                  READY FOR FUTURE EXPANSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Concept Disclaimer Bar */}
      <div className="border-t border-slate-800/80 bg-corporate-navy-dark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {company.legalName}.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-corporate-gold" />
            <span>Concept website • Prepared for discussion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
