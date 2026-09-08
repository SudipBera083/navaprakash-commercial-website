import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileCheck, Info, PackageOpen } from 'lucide-react';
import { api } from '../services/api';
import type { Product } from '../types';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { PlaceholderNotice } from '../components/common/PlaceholderNotice';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadProduct = async () => {
      setIsLoading(true);
      if (slug) {
        const item = await api.getProductBySlug(slug);
        setProduct(item);
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <main className="flex-1 py-16 bg-corporate-bg flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-corporate-navy border-t-corporate-gold rounded-full animate-spin mx-auto"></div>
          <p className="text-xs text-slate-500 font-medium">Loading product detail...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex-1 py-20 bg-corporate-bg">
        <div className="max-w-md mx-auto px-4 text-center space-y-4 bg-white p-8 rounded-lg border border-slate-200">
          <PackageOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h2 className="text-xl font-bold text-corporate-navy">Product Not Found</h2>
          <p className="text-sm text-slate-600">
            The requested demo product could not be located in the current catalogue.
          </p>
          <Button to="/products" variant="primary" size="sm">
            Back to Catalogue
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10 md:py-14 bg-corporate-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-corporate-navy transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-corporate-navy transition-colors">Products</Link>
          <span>/</span>
          <span className="text-corporate-navy font-semibold">{product.name}</span>
        </nav>

        {/* Back Button */}
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-xs font-semibold text-corporate-navy hover:text-corporate-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to all products
          </Link>
        </div>

        {/* Main Product Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Product Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="demo" size="md">
                  DEMO CONTENT
                </Badge>
              </div>
            </div>

            <div className="p-3 bg-slate-100 rounded text-xs text-slate-500 flex items-center gap-2">
              <Info className="w-4 h-4 text-corporate-gold shrink-0" />
              <span>Multi-angle image gallery and technical drawings supported in final deployment.</span>
            </div>
          </div>

          {/* Right Column: Key Commercial Info & Direct Quote Trigger */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category Pill */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-corporate-navy border border-slate-200">
                  {product.category}
                </span>
                <span className="text-xs text-slate-400">Sample Item</span>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-corporate-navy tracking-tight">
                {product.name}
              </h1>

              {/* Product Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {product.description}
              </p>

              {/* Product Enquiry Box */}
              <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-sm font-bold text-corporate-navy">
                  Product Enquiry
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Interested in product details or have questions about this item? Submit an enquiry to connect with our team.
                </p>
                <Button
                  to={`/quote?product=${encodeURIComponent(product.name)}`}
                  variant="gold"
                  size="md"
                  fullWidth
                  className="font-bold uppercase tracking-wider text-xs py-3 text-white"
                  icon={<FileCheck className="w-4 h-4 ml-1" />}
                >
                  Request a Quote for this Product
                </Button>
              </div>

            </div>

            {/* Implementation note */}
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-200">
              * Selecting "Request a Quote" will automatically pre-select this item on the enquiry form.
            </div>
          </div>

        </div>

        {/* Bottom Section: Demonstration of Future Technical Fields */}
        <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-corporate-navy">
              Technical & Product Framework
            </h2>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded">
              READY FOR OFFICIAL DATA
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            The sections below illustrate where your real-world specifications, packaging details, and application sectors will be presented to buyers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Specifications Placeholder */}
            <div className="bg-white p-5 rounded-md border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-corporate-navy">
                Specifications
              </h3>
              <p className="text-xs text-slate-500 italic">
                To be provided by the company.
              </p>
              <PlaceholderNotice
                inline
                label="Technical parameters to be specified"
              />
            </div>

            {/* Applications Placeholder */}
            <div className="bg-white p-5 rounded-md border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-corporate-navy">
                Applications
              </h3>
              <p className="text-xs text-slate-500 italic">
                To be provided by the company.
              </p>
              <PlaceholderNotice
                inline
                label="Commercial use cases to be specified"
              />
            </div>

            {/* Packaging Placeholder */}
            <div className="bg-white p-5 rounded-md border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-corporate-navy">
                Packaging
              </h3>
              <p className="text-xs text-slate-500 italic">
                To be provided by the company.
              </p>
              <PlaceholderNotice
                inline
                label="Packaging details to be specified"
              />
            </div>

            {/* Availability Placeholder */}
            <div className="bg-white p-5 rounded-md border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-corporate-navy">
                Availability
              </h3>
              <p className="text-xs text-slate-500 italic">
                To be provided by the company.
              </p>
              <PlaceholderNotice
                inline
                label="Supply availability to be specified"
              />
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};
