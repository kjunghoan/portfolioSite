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
    const { isMobile } = useResponsive();

    return (
      <div
        id={id}
        ref={ref}
        className={`relative w-full ${className}`}
        style={{
          minHeight: isMobile ? '250vh' : '100vh',
          overflowY: isMobile ? 'auto' : 'hidden',
          ...style,
        }}
        data-is-mobile={isMobile}
      >
        {children}
      </div>
    );
  },
);

BookshelfContainer.displayName = 'BookshelfContainer';

export default BookshelfContainer;
