import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import PillarsHIPS from './components/PillarsHIPS';
import GrowthTreeBranchFlow from './components/GrowthTreeBranchFlow';
import DualDestinationFlow from './components/DualDestinationFlow';
import ExperienceArchitecture from './components/ExperienceArchitecture';
import EventGallery from './components/EventGallery';
import TargetAudience from './components/TargetAudience';
import InvestmentPricing from './components/InvestmentPricing';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import CorporateNominationModal from './components/CorporateNominationModal';
import BrochureModal from './components/BrochureModal';
import AdminPortal from './components/AdminPortal';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(
    window.location.pathname === '/admin' || window.location.hash === '#admin'
  );

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState({});

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAdminRoute(
        window.location.pathname === '/admin' || window.location.hash === '#admin'
      );
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToAdmin = () => {
    window.history.pushState({}, '', '/admin');
    setIsAdminRoute(true);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    if (window.location.hash === '#admin') {
      window.location.hash = '';
    }
    setIsAdminRoute(false);
    window.scrollTo(0, 0);
  };

  const handleOpenRegister = (data = {}) => {
    setModalInitialData(data);
    setIsRegisterOpen(true);
  };

  const handleOpenCorporate = () => {
    setIsCorporateOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  // If in /admin route, display Admin Portal
  if (isAdminRoute) {
    return <AdminPortal onExit={navigateToHome} />;
  }

  return (
    <div className="app-wrapper">
      {/* Top Navbar */}
      <Navbar 
        onOpenRegister={() => handleOpenRegister()} 
        onOpenCorporate={handleOpenCorporate} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenRegister={() => handleOpenRegister()} 
          onOpenBrochure={handleOpenBrochure} 
        />
        
        <ExecutiveSummary />
        
        <PillarsHIPS />

        {/* Interactive Growth Tree Branching Experience */}
        <GrowthTreeBranchFlow 
          onOpenRegister={() => handleOpenRegister()} 
          onOpenBrochure={handleOpenBrochure} 
        />
        
        <DualDestinationFlow />
        
        <ExperienceArchitecture />
        
        <EventGallery />
        
        <TargetAudience 
          onOpenCorporate={handleOpenCorporate} 
        />
        
        <InvestmentPricing 
          onOpenRegister={handleOpenRegister} 
        />
        
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenRegister={() => handleOpenRegister()} 
        onOpenCorporate={handleOpenCorporate} 
        onOpenAdmin={navigateToAdmin}
      />

      {/* Modals */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        initialData={modalInitialData}
      />

      <CorporateNominationModal 
        isOpen={isCorporateOpen} 
        onClose={() => setIsCorporateOpen(false)}
      />

      <BrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)}
        onOpenRegister={() => handleOpenRegister()}
      />
    </div>
  );
}
