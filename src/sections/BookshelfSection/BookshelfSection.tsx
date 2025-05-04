import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import { useDragToScroll } from './useDragToScroll';
import { useBookshelfDimensions } from './useBookshelfDimensions';
import { useCenterOnLoad } from './useCenterOnLoad';
import Bookshelf from './Bookshelf';
import BookshelfContainer from './BookshelfContainer';
import BooksContainer from './BooksContainer';
import { skills } from '@/assets/data';

const BookshelfSection: React.FC = () => {
  const { isMobile, isTablet, windowHeight, windowWidth } = useResponsive();
  const DESKTOP_FIXED_WIDTH = 2560; // px

  // Reference device sizes from commit message
  const referenceWidths = {
    mobile: 430, // iPhone 14 Pro Max
    tablet: 1024, // iPad Pro
    desktop: 2560, // 16:9 chrome browser @4k with bookmarks
  };

  const referenceHeights = {
    mobile: 932, // iPhone 14 Pro Max
    tablet: 1366, // iPad Pro
    desktop: 1440, // 16:9 chrome browser @4k height estimate
  };

  // Set up drag-to-scroll functionality
  const { containerRef, handlers } = useDragToScroll({
    isMobile,
    isTablet,
  });

  // Calculate bookshelf dimensions with reference sizes
  const dimensions = useBookshelfDimensions({
    isMobile,
    isTablet,
    windowWidth,
    windowHeight,
    desktopFixedWidth: DESKTOP_FIXED_WIDTH,
    referenceWidths,
    referenceHeights,
  });

  // Center the bookshelf on load
  useCenterOnLoad({
    containerRef,
    isMobile,
    isTablet,
    windowWidth,
  });

  return (
    <SectionWrapper
      fullHeight={!isMobile && !isTablet}
      className="flex-center bg-neutral-100 dark:bg-neutral-900 overflow-visible"
      id="bookshelf"
    >
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          touchAction: 'pan-x',
        }}
        {...handlers}
      >
        <BookshelfContainer
          className="flex-center h-full"
          style={{ width: dimensions.canvasWidth }}
        >
          <Canvas
            shadows
            style={{
              width: '100%',
              height: dimensions.canvasHeight,
            }}
          >
            {/* Adjusted camera position for different screen sizes */}
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 5]}
              fov={40}
              aspect={windowWidth / windowHeight}
              near={0.1}
              far={100}
            />

            {/* Simple lighting setup */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
            <directionalLight
              position={[-5, 3, -5]}
              intensity={0.3}
              color="#CFDEFF"
            />

            {/* Responsive bookshelf with dimensions based on viewport */}
            <Bookshelf
              width={dimensions.bookshelfWidth}
              height={dimensions.bookshelfHeight}
              thickness={dimensions.bookshelfThickness}
              depth={dimensions.bookshelfDepth}
              numberOfShelves={dimensions.numberOfShelves}
            />

            {/* Books on shelves */}
            <BooksContainer
              bookshelfWidth={dimensions.bookshelfWidth}
              bookshelfHeight={dimensions.bookshelfHeight}
              bookshelfDepth={dimensions.bookshelfDepth}
              shelfThickness={dimensions.bookshelfThickness}
              numberOfShelves={dimensions.numberOfShelves}
              skills={skills}
            />
          </Canvas>
        </BookshelfContainer>
      </div>
    </SectionWrapper>
  );
};

export default BookshelfSection;
