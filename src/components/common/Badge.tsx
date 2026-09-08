import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'demo' | 'gold' | 'navy' | 'neutral' | 'future';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  size = 'sm',
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-semibold",
    md: "text-xs px-3 py-1 font-medium",
  };

  const variantStyles = {
    demo: "bg-amber-50 text-amber-900 border border-amber-300/80 tracking-widest",
    gold: "bg-amber-50 text-amber-800 border border-amber-200",
    navy: "bg-slate-100 text-corporate-navy border border-slate-200",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    future: "bg-indigo-50 text-indigo-700 border border-indigo-200 tracking-wider uppercase",
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
