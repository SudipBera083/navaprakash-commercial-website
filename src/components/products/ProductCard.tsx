import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck } from 'lucide-react';
import type { Product } from '../../types';
import { Badge } from '../common/Badge';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-xs hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="demo" size="sm">
            DEMO CONTENT
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-corporate-navy/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-corporate-navy group-hover:text-corporate-gold-muted transition-colors">
            <Link to={`/products/${product.slug}`} className="focus-visible:outline-none">
              {product.name}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-corporate-text-muted line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-semibold text-corporate-navy hover:text-corporate-gold transition-colors inline-flex items-center gap-1"
          >
            View Details
            <ArrowRight className="w-3 h-3" />
          </Link>

          <Link
            to={`/quote?product=${encodeURIComponent(product.name)}`}
            className="text-xs font-semibold px-3 py-1.5 rounded bg-corporate-navy text-white hover:bg-corporate-navy-light transition-colors inline-flex items-center gap-1"
          >
            <FileCheck className="w-3 h-3 text-corporate-gold" />
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
