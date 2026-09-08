import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-white border-b border-slate-200/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Professional Wordmark */}
          <Link to="/" className="group flex items-center gap-3 focus-visible:outline-none" onClick={closeMenu}>
            <div className="w-10 h-10 rounded bg-corporate-navy flex items-center justify-center border border-corporate-gold/40 shadow-xs group-hover:border-corporate-gold transition-colors">
              <span className="font-display font-bold text-lg text-corporate-gold tracking-tight">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest text-corporate-navy leading-none">
                NAVAPRAKASH
              </span>
              <span className="font-display text-[11px] font-semibold tracking-wider text-corporate-text-muted leading-tight mt-0.5">
                COMMERCIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-150 py-1 relative ${
                    active
                      ? 'text-corporate-navy font-semibold'
                      : 'text-corporate-text-muted hover:text-corporate-navy'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-corporate-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              to="/quote"
              variant="primary"
              size="sm"
              className="bg-corporate-navy hover:bg-corporate-navy-light text-white font-semibold tracking-wider text-xs uppercase px-4 py-2.5"
              icon={<ArrowRight className="w-3.5 h-3.5 ml-0.5" />}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-md text-corporate-navy hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corporate-gold"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Improved Spacing */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-xl px-5 pt-4 pb-7 space-y-4">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded text-base font-medium transition-colors ${
                    active
                      ? 'bg-slate-100 text-corporate-navy font-semibold border-l-4 border-corporate-gold'
                      : 'text-corporate-text-muted hover:bg-slate-50 hover:text-corporate-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div onClick={closeMenu}>
              <Button
                to="/quote"
                variant="primary"
                size="md"
                fullWidth
                className="text-sm font-semibold uppercase tracking-wider justify-center py-3.5"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Request a Quote
              </Button>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 py-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-corporate-gold shrink-0" />
              <span>Commercial Concept • Prepared for Navaprakash Commercial</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
