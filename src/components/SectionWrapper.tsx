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
  minHeight = '400px',
  id,
}) => {
  const { isMobile, windowHeight } = useResponsive();

  return (
    <section
      id={id}
      className={`relative w-full transition-all duration-300 ${className}`}
      style={{
        height: fullHeight ? `${windowHeight}px` : 'auto',
        minHeight: !fullHeight ? minHeight : undefined,
        ...style,
      }}
      data-is-mobile={isMobile}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
