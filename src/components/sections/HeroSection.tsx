import React from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { company } from '../../data/company';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-corporate-navy text-white overflow-hidden border-b border-slate-800">
      {/* Subtle geometric background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Entity Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-corporate-gold" />
              <span className="font-medium tracking-wide">
                {company.legalName} • {company.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Building Better <br className="hidden sm:inline" />
              <span className="text-corporate-gold">Commercial Connections</span>
            </h1>

            {/* Supporting Pitch Text - Neutral, Concept-oriented */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              A modern digital concept demonstrating how Navaprakash Commercial can showcase products, receive customer enquiries, and build a credible online business presence.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                to="/quote"
                variant="gold"
                size="lg"
                className="font-semibold tracking-wider text-sm uppercase px-7 py-3.5 shadow-sm text-white"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Request a Quote
              </Button>

              {/* Fix for low-contrast button text: high-contrast text-white with distinct border & background */}
              <Button
                to="/products"
                variant="secondary"
                size="lg"
                className="bg-slate-800/90 text-white border border-slate-500 hover:border-white hover:bg-slate-700 font-semibold text-sm px-7 py-3.5 shadow-xs transition-colors"
              >
                Explore Products
              </Button>
            </div>

            {/* Credibility Footprint with Scalable Business Platform */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0" />
                <span>Structured Catalogue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0" />
                <span>Direct Lead Capture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-gold shrink-0" />
                <span>Scalable Business Platform</span>
              </div>
            </div>

          </div>

          {/* Right Column: Commercial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-lg overflow-hidden border border-slate-700/80 shadow-2xl bg-corporate-navy-light">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern commercial goods and product presentation concept"
                  className="w-full h-80 sm:h-96 object-cover object-center brightness-90"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-navy via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-corporate-navy/90 backdrop-blur-md p-4 rounded border border-slate-700/80 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white tracking-wide">
                        Digital Commercial Gateway
                      </p>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        Prepared for {company.shortName}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-corporate-gold bg-corporate-navy-dark px-2.5 py-1 rounded border border-slate-700">
                      Concept
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent element behind image */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-corporate-gold/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
