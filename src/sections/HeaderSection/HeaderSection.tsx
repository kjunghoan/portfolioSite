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
    { id: 'techStack', title: 'Tech Stack' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionLinks = () => {
    return sections.map((section) => (
      <div key={section.id} className="relative group px-2">
        <h1
          className="cursor-pointer hover:text-green-800 transition-colors"
          onClick={() => scrollToSection(section.id)}
        >
          {section.title}
        </h1>
        {/* Underline with center-out animation */}
        <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-800 group-hover:w-full group-hover:left-0 transition-all duration-300 origin-center"></div>
      </div>
    ));
  };

  return (
    <SectionWrapper
      fullHeight={true}
      className="overflow-hidden bg-cover bg-center"
      style={{}}
      id="header"
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1
          // for some reason text-green-950 isnt working but for now this works as a placeholder
          className={`font-bold text-green-800 transition-all duration-300 ${isMobile ? 'text-3xl' : 'text-5xl'}`}
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
