import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';

const BookshelfSection: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <SectionWrapper
      fullHeight={true}
      className="overflow-hidden bg-cover bg-center"
      style={{}}
      id="techStack"
    >
      <div className={isMobile ? 'text-sm' : 'text-base'}>BookshelfSection</div>
    </SectionWrapper>
  );
};

export default BookshelfSection;
