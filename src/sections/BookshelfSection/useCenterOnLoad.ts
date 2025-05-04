import { useEffect } from 'react';

interface CenterOnLoadOptions {
  containerRef: React.RefObject<HTMLDivElement>;
  isMobile?: boolean;
  isTablet?: boolean;
  windowWidth?: number;
}

export const useCenterOnLoad = ({
  containerRef,
  isMobile = false,
  isTablet = false,
  windowWidth,
}: CenterOnLoadOptions): void => {
  // Center the scrollable container on initial load
  useEffect(() => {
    if (containerRef.current && !isMobile && !isTablet) {
      // Get the total scrollable width
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;

      // Calculate the center position
      const scrollPosition = (scrollWidth - clientWidth) / 2;

      // Set the scroll position to center
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [containerRef, isMobile, isTablet, windowWidth]);
};
