import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import Bookshelf from './Bookshelf';
import BookshelfContainer from './BookshelfContainer';
import BooksContainer from './BooksContainer';

const BookshelfSection: React.FC = () => {
  const { isMobile, isTablet, windowHeight, windowWidth } = useResponsive();

  // Yes I know I can just do all of this inline
  const canvasHeight = () => {
    if (isMobile) {
      return '250vh';
    } else if (isTablet) {
      return '150vh';
    } else {
      return '100vh';
    }
  };

  const bookshelfWidth = () => {
    if (isMobile) {
      return windowWidth * 0.00156;
    } else if (isTablet) {
      return windowWidth * 0.0017;
    } else {
      return windowWidth * 0.00253;
    }
  };

  const bookshelfHeight = () => {
    if (isMobile) {
      return windowHeight * 0.00391;
    } else if (isTablet) {
      return windowHeight * 0.00254;
    } else {
      return windowHeight * 0.00253;
    }
  };
  const bookshelfThickness = () => {
    if (isMobile) {
      return windowWidth * 0.00007;
    } else if (isTablet) {
      return Math.max(windowWidth * 0.00005, 0.1);
    } else {
      return Math.max(windowWidth * 0.00005, 0.1);
    }
  };

  const bookshelfDepth = () => {
    if (isMobile) {
      return 0.4;
    } else if (isTablet) {
      return 0.75;
    } else {
      return 1;
    }
  };

  const bookshelfNumberOfShelves = () => {
    if (isMobile) {
      return 4;
    } else if (isTablet) {
      return 3;
    } else {
      return 1;
    }
  };

  return (
    <SectionWrapper
      fullHeight={!isMobile && !isTablet}
      className="flex-center bg-neutral-100 dark:bg-neutral-900"
      id="bookshelf"
    >
      <BookshelfContainer className="flex-center w-full h-full">
        <Canvas
          shadows
          style={{
            width: '100vw',
            height: canvasHeight(),
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
            width={bookshelfWidth()}
            height={bookshelfHeight()}
            thickness={bookshelfThickness()}
            depth={bookshelfDepth()}
            numberOfShelves={bookshelfNumberOfShelves()}
          />

          {/* Books on shelves */}
          <BooksContainer
            width={bookshelfWidth()}
            height={bookshelfHeight()}
            depth={bookshelfDepth()}
            thickness={bookshelfThickness()}
            numberOfShelves={bookshelfNumberOfShelves()}
          />
        </Canvas>
      </BookshelfContainer>
    </SectionWrapper>
  );
};

export default BookshelfSection;
