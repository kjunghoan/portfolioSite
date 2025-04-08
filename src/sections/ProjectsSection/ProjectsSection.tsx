import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';

const ProjectsSection: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <SectionWrapper
      fullHeight={true}
      className="overflow-hidden bg-cover bg-center"
      style={{}}
      id="projects"
    >
      <div className={isMobile ? 'text-sm' : 'text-base'}>ProjectsSection</div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
