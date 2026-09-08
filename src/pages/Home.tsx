import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { IntroSection } from '../components/sections/IntroSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { ProductPreview } from '../components/sections/ProductPreview';
import { WorkflowSection } from '../components/sections/WorkflowSection';
import { FutureDashboardSection } from '../components/sections/FutureDashboardSection';
import { EnquiryCTA } from '../components/sections/EnquiryCTA';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <IntroSection />

      {/* 3. Digital Capabilities */}
      <CapabilitiesSection />

      {/* 4. Product Catalogue Framework */}
      <ProductPreview />

      {/* 5. Enquiry Workflow Pipeline */}
      <WorkflowSection />

      {/* 6. Scalability & Future Admin System */}
      <FutureDashboardSection />

      {/* 7. Request a Quote Call-to-Action */}
      <EnquiryCTA />
    </main>
  );
};
