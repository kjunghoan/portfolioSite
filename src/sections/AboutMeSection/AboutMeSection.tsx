import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';

const AboutMeSection: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <SectionWrapper
      fullHeight={true}
      className="overflow-hidden bg-cover bg-center"
      style={{}}
      id="aboutMe"
    >
      <div className={isMobile ? 'text-sm' : 'text-base'}>AboutMeSection</div>
    </SectionWrapper>
  );
};

export default AboutMeSection;
