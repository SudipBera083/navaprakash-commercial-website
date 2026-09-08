import React from 'react';
import { Search, X } from 'lucide-react';
import type { ProductCategory } from '../../types';

export interface CategoryFilterProps {
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Search Input Bar */}
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search demo products or categories..."
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-corporate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1" role="tablist" aria-label="Product categories">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
            selectedCategory === 'all'
              ? 'bg-corporate-navy text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-corporate-navy'
          }`}
          role="tab"
          aria-selected={selectedCategory === 'all'}
        >
          All Items
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isSelected
                  ? 'bg-corporate-navy text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-corporate-navy'
              }`}
              role="tab"
              aria-selected={isSelected}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
