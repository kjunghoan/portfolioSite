import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import SectionWrapper from '@/components/SectionWrapper';
import useResponsive from '@/hooks/useResponsive';
import Bookshelf from './Bookshelf';
import BookshelfContainer from './BookshelfContainer';

const BookshelfSection: React.FC = () => {
  const { isMobile, windowHeight, windowWidth } = useResponsive();

  console.log('Window Height:', windowHeight);
  // 1294 at 2560x1440
  // 915 at 412x915 (mobile)
  console.log('Window Width:', windowWidth);
  // 2560 at 2560x1440
  // 412 at 412x915 (mobile)

  return (
    <SectionWrapper
      fullHeight={!isMobile}
      className="flex-center bg-neutral-100 dark:bg-neutral-900"
      id="bookshelf"
    >
      <BookshelfContainer className="flex-center w-full h-full">
        <Canvas
          shadows
          style={{
            width: '100vw',
            height: isMobile ? '250vh' : '100vh',
          }}
        >
          {/* Adjusted camera position for mobile */}
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
            width={isMobile ? 0.63 : windowWidth * 0.00253}
            height={isMobile ? 3.46 : windowHeight * 0.00253}
            thickness={isMobile ? 0.05 : Math.max(windowWidth * 0.00005, 0.1)}
            depth={isMobile ? 0.4 : 1}
          />
        </Canvas>
      </BookshelfContainer>
    </SectionWrapper>
  );
};

export default BookshelfSection;
