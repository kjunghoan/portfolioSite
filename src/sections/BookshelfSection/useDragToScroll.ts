import { useState, useEffect, useRef, RefObject } from 'react';

interface DragToScrollOptions {
  isMobile?: boolean;
  isTablet?: boolean;
}

interface DragToScrollResult {
  containerRef: RefObject<HTMLDivElement>;
  handlers: {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  };
}

export const useDragToScroll = (
  options?: DragToScrollOptions,
): DragToScrollResult => {
  const { isMobile = false, isTablet = false } = options || {};
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Mouse event handlers for drag scrolling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isTablet) return; // Only apply on desktop

    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setDragDistance(0);

    // Change cursor to indicate grabbing
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isTablet) return;

    // If we've dragged a significant distance, prevent click events
    if (isDragging && dragDistance > 5) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsDragging(false);

    // Reset cursor
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || isMobile || isTablet) return;

    // Prevent default to avoid text selection during drag
    e.preventDefault();

    // Calculate the new scroll position
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling

    // Update drag distance
    setDragDistance((prev) => prev + Math.abs(x - startX));

    // Apply the scroll
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Set initial cursor style and clean up event listeners
  useEffect(() => {
    if (containerRef.current && !isMobile && !isTablet) {
      containerRef.current.style.cursor = 'grab';
    }

    // Add global mouseup event to handle case when mouse is released outside the container
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        if (containerRef.current) {
          containerRef.current.style.cursor = 'grab';
        }
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);

    // Clean up
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, isMobile, isTablet]);

  return {
    containerRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseUp,
    },
  };
};
