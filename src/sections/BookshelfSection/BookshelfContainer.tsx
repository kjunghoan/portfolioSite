import { CSSProperties, ReactNode, forwardRef } from 'react';
import useResponsive from '@/hooks/useResponsive';

interface BookshelfContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const BookshelfContainer = forwardRef<HTMLDivElement, BookshelfContainerProps>(
  ({ children, className = '', style = {}, id }, ref) => {
    const { isMobile, isTablet } = useResponsive();

    return (
      <div
        id={id}
        ref={ref}
        className={`relative w-full ${className}`}
        style={{
          minHeight: isMobile ? '250vh' : isTablet ? '150vh' : '100vh',
          overflowY: isMobile || isTablet ? 'auto' : 'hidden',
          ...style,
        }}
        data-is-mobile={isMobile}
        data-is-tablet={isTablet}
      >
        {children}
      </div>
    );
  },
);

BookshelfContainer.displayName = 'BookshelfContainer';

export default BookshelfContainer;
