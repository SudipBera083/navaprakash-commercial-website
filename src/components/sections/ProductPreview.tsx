import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { demoCategories } from '../../data/products';

export const ProductPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Commercial Framework"
          title="Product Catalogue"
          subtitle="A structured catalogue can make it easier for customers to discover products, specifications and commercial information."
          align="center"
        />

        {/* 4 Demo Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-md border border-slate-200 overflow-hidden shadow-xs hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Image */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="demo" size="sm">
                      DEMO CONTENT
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-corporate-gold-muted uppercase tracking-wider block mb-1">
                    Customizable Vertical
                  </span>
                  <h3 className="text-lg font-bold text-corporate-navy group-hover:text-corporate-gold-muted transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-corporate-text-muted line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* View Action */}
              <div className="p-5 pt-0">
                <Link
                  to="/products"
                  className="w-full py-2.5 px-3 rounded text-xs font-semibold uppercase tracking-wider bg-slate-100 text-corporate-navy hover:bg-corporate-navy hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  View Catalogue
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Framing callout for the business owner */}
        <div className="mt-12 p-5 bg-amber-50/60 border border-amber-200/80 rounded-lg max-w-2xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong>Customizable Architecture:</strong> This catalogue structure will be populated with your company's actual product lines, high-resolution imagery, and exact technical specifications.
          </p>
          <div className="mt-3">
            <Button
              to="/products"
              variant="outline"
              size="sm"
              className="border-amber-400 text-amber-950 hover:bg-amber-100/50 text-xs font-semibold"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
            >
              Explore Full Catalogue Experience
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
