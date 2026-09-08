import React from 'react';

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'gold' | 'navy' | 'neutral' | 'demo' | 'future';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'navy',
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`mb-3 inline-block ${isCenter ? 'mx-auto' : ''}`}>
          <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${
            badgeVariant === 'gold' 
              ? 'bg-amber-100 text-corporate-gold-muted border border-amber-200' 
              : badgeVariant === 'future'
              ? 'bg-blue-50 text-blue-800 border border-blue-200'
              : 'bg-slate-100 text-corporate-navy border border-slate-200'
          }`}>
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-corporate-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-corporate-text-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-1.5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="w-10 h-0.5 bg-corporate-gold"></span>
        <span className="w-2 h-0.5 bg-corporate-navy"></span>
      </div>
    </div>
  );
};
