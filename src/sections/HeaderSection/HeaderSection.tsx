import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import { useEffect } from 'react';

const HeaderSection: React.FC = () => {
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // TODO: set up time based background animation

    return () => {
      // TODO: clear the interval window for time of day animation
    };
  }, []);

  const sections = [
    { id: 'header', title: 'Header' },
    { id: 'aboutMe', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'bookshelf', title: 'Skills' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionLinks = () => {
    return sections.map((section) => (
      <div
        id={`link-to-${section.id}`}
        key={section.id}
        className={`${isMobile ? 'mt-4' : ''}relative group px-2`}
      >
        <h1
          className={`${isMobile ? 'text-lg' : 'text-2xl'} nav-link`}
          onClick={() => scrollToSection(section.id)}
        >
          {section.title}
        </h1>
        {/* Underline with center-out animation */}
        <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-accent-green group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center" />
      </div>
    ));
  };

  return (
    <SectionWrapper
      fullHeight={true}
      className="flex-center bg-paper-texture"
      style={{}}
      id="header"
    >
      <div className="relative z-1 flex-center-col h-full min-h-full px-4 text-center">
        <h1
          className={`font-bold text-accent-green transition-all duration-300 ${isMobile ? 'text-3xl' : 'text-5xl'}`}
        >
          Jung Hoan Kim
        </h1>
        <nav
          className={`mt-4 text-gray-600 flex ${isMobile ? 'flex-col text-base space-y-2' : 'flex-row text-xl space-x-4'} transition-all duration-300`}
        >
          {sectionLinks()}
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default HeaderSection;
