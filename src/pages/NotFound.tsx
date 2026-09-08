import React from 'react';
import { FileQuestion, ArrowRight, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <main className="flex-1 py-20 bg-corporate-bg flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto border border-slate-200">
          <FileQuestion className="w-8 h-8 text-corporate-gold" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-corporate-gold block">
            404 Error
          </span>
          <h1 className="text-3xl font-bold text-corporate-navy">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4 ml-1" />}
          >
            Return to Home
          </Button>

          <Button
            to="/products"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            Explore Products
          </Button>
        </div>
      </div>
    </main>
  );
};
