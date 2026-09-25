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
import ExecutivePdfDossier from './components/ExecutivePdfDossier';

export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(
    window.location.pathname === '/admin' || window.location.hash === '#admin'
  );
  const [isDossierRoute, setIsDossierRoute] = useState(
    window.location.pathname === '/dossier' || 
    window.location.pathname === '/pdf' || 
    window.location.pathname === '/brochure' ||
    window.location.hash === '#pdf' ||
    window.location.hash === '#brochure' ||
    window.location.hash === '#dossier'
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
      setIsDossierRoute(
        window.location.pathname === '/dossier' || 
        window.location.pathname === '/pdf' || 
        window.location.pathname === '/brochure' ||
        window.location.hash === '#pdf' ||
        window.location.hash === '#brochure' ||
        window.location.hash === '#dossier'
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
    setIsDossierRoute(false);
    window.scrollTo(0, 0);
  };

  const navigateToDossier = () => {
    window.history.pushState({}, '', '/dossier');
    setIsDossierRoute(true);
    setIsAdminRoute(false);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    if (window.location.hash) {
      window.location.hash = '';
    }
    setIsAdminRoute(false);
    setIsDossierRoute(false);
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
    navigateToDossier();
  };

  // If in /admin route, display Admin Portal
  if (isAdminRoute) {
    return <AdminPortal onExit={navigateToHome} />;
  }

  // If in /dossier or /pdf route, display Figma-Style PDF Dossier
  if (isDossierRoute) {
    return (
      <ExecutivePdfDossier 
        onExit={navigateToHome} 
        onOpenRegister={handleOpenRegister}
        onOpenCorporate={handleOpenCorporate}
      />
    );
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
