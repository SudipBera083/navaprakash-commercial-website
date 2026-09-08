import React, { useState, useEffect, useMemo } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { CategoryFilter } from '../components/products/CategoryFilter';
import { ProductGrid } from '../components/products/ProductGrid';
import { api } from '../services/api';
import type { Product, ProductCategory } from '../types';
import { Info } from 'lucide-react';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadData = async () => {
      setIsLoading(true);
      try {
        const [loadedProducts, loadedCategories] = await Promise.all([
          api.getProducts(),
          api.getCategories(),
        ]);
        setProducts(loadedProducts);
        setCategories(loadedCategories);
      } catch (err) {
        console.error('Failed to load products', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <main className="flex-1 py-12 md:py-16 bg-corporate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <SectionHeader
          badge="Commercial Catalogue"
          badgeVariant="gold"
          title="Product Catalogue"
          subtitle="Explore the structured catalogue demonstration. Prospective clients can search products, review details, and submit direct product enquiries."
          align="left"
        />

        {/* Concept Framework Notice Box */}
        <div className="bg-amber-50/70 border border-amber-200/90 rounded-md p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-corporate-gold-muted shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <span className="font-semibold block sm:inline mr-1">
              Customizable Framework:
            </span>
            The items below are sample demo cards illustrating product discovery, imagery, and enquiry capture. Your company's actual catalogue, product hierarchy, and technical specifications will be uploaded here.
          </div>
        </div>

        {/* Search & Category Tabs */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} isLoading={isLoading} />

        {/* Bottom Lead Prompt */}
        <div className="mt-16 text-center pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Showing {filteredProducts.length} sample demo {filteredProducts.length === 1 ? 'item' : 'items'} • Prepared for discussion.
          </p>
        </div>

      </div>
    </main>
  );
};
