import { CSSProperties, ReactNode } from 'react';
import useResponsive from '@/hooks/useResponsive';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  fullHeight?: boolean;
  minHeight?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  style = {},
  fullHeight = true,
  minHeight = '100vh',
  id,
}) => {
  const { isMobile, windowHeight } = useResponsive();

  return (
    <section
      id={id}
      className={`relative w-full transition-all duration-300 ${isMobile ? '' : 'overflow-hidden'} bg-center ${className}`}
      style={{
        height: isMobile ? 'auto' : fullHeight ? `${windowHeight}px` : 'auto',
        minHeight: isMobile
          ? `${windowHeight}px`
          : !fullHeight
            ? minHeight
            : `${windowHeight}px`,
        ...style,
      }}
      data-is-mobile={isMobile}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
