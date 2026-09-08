import React from 'react';
import { Info } from 'lucide-react';

export interface PlaceholderNoticeProps {
  label?: string;
  message?: string;
  className?: string;
  inline?: boolean;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label = "To be provided by the company",
  message,
  className = '',
  inline = false,
}) => {
  if (inline) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-slate-500 italic bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60 ${className}`}>
        <Info className="w-3 h-3 text-slate-400 shrink-0" />
        {label}
      </span>
    );
  }

  return (
    <div className={`p-4 rounded-md bg-slate-50 border border-dashed border-slate-300 text-slate-600 flex items-start gap-3 ${className}`}>
      <Info className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-semibold text-corporate-navy tracking-wide uppercase">
          {label}
        </p>
        {message && (
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
