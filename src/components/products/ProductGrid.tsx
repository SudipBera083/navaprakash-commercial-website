import React from 'react';
import type { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { PackageOpen } from 'lucide-react';

export interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-md border border-slate-200 p-4 space-y-4 animate-pulse">
            <div className="aspect-4/3 bg-slate-200 rounded"></div>
            <div className="h-5 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-2/3"></div>
            <div className="pt-4 border-t border-slate-100 flex justify-between">
              <div className="h-6 bg-slate-200 rounded w-20"></div>
              <div className="h-6 bg-slate-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-md border border-slate-200">
        <PackageOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-corporate-navy">No products match your criteria</h3>
        <p className="text-sm text-corporate-text-muted mt-1 max-w-md mx-auto">
          Try adjusting your search query or selecting a different demo category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
