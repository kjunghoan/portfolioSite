import React from 'react';
import HeaderSection from '@/sections/HeaderSection/HeaderSection.tsx';
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection.tsx';
import BookshelfSection from '@/sections/BookshelfSection/BookshelfSection.tsx';
import ProjectsSection from '@/sections/ProjectsSection/ProjectsSection.tsx';
import Footer from '@/sections/Footer/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderSection />
      <AboutMeSection />
      <ProjectsSection />
      <BookshelfSection />
      <Footer />
    </div>
  );
};

export default App;
