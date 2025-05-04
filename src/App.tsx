import React from 'react';
import HeaderSection from '@/sections/HeaderSection/HeaderSection.tsx';
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection.tsx';
import BookshelfSection from '@/sections/BookshelfSection/BookshelfSection.tsx';
import ProjectsSection from '@/sections/ProjectsSection/ProjectsSection.tsx';
import Footer from '@/sections/Footer/Footer.tsx';
import OrientationMessage from '@/components/OrientationMessage';

const App: React.FC = () => {
  // Force portrait orientation on mobile devices

  return (
    <div className="App">
      {/* Overlay that appears when device is in landscape */}
      <OrientationMessage />
      <HeaderSection />
      <AboutMeSection />
      <ProjectsSection />
      <BookshelfSection />
      <Footer />
    </div>
  );
};

export default App;
