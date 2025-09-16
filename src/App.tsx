import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollUtils } from './hooks/useScrollUtils';

const App: React.FC = () => {
  const { smoothScrollTo } = useScrollUtils();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero
        onLearnMoreClick={() => smoothScrollTo('about')}
        onViewProjectsClick={() => smoothScrollTo('projects')}
      />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
