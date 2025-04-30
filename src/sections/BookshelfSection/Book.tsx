import React, { JSX } from 'react';
import { Box, Text } from '@react-three/drei';
import { Vector3Tuple } from 'three';
import { Book as BookType } from '@/types/threejsTypes';

interface BookProps {
  width: number;
  height: number;
  depth: number;
  position: Vector3Tuple;
  rotation?: Vector3Tuple;
  id: string;
  title: string;
  shelfIndex?: number;
}

const Book: React.FC<BookProps> = ({
  width,
  height,
  depth,
  position,
  rotation = [0, 0, 0],
  id,
  title,
}) => {
  return (
    <group name={id}>
      {/* Book body */}
      <Box
        position={position}
        rotation={rotation}
        args={[width, height, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={'red'} />
      </Box>

      {/* Book spine text */}
      <group
        position={[position[0], position[1], position[2] + depth / 2 - 0.001]}
        rotation={rotation}
      >
        {/* Spine background */}
        <Box args={[width * 0.95, height * 0.95, 0.001]} position={[0, 0, 0]}>
          <meshStandardMaterial color={'red'} />
        </Box>

        {/* Book title on spine */}
        <Text
          position={[0, 0, 0.002]} // Slightly in front of the spine
          rotation={[0, 0, Math.PI / 2 + Math.PI]} // Rotate text to be vertical on spine (180° rotated)
          fontSize={0.05}
          maxWidth={height * 0.8}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          depthOffset={-1} // Ensure text renders above background
        >
          {title.length > 10 ? title.substring(0, 10) + '...' : title}
        </Text>
      </group>
    </group>
  );
};

// Helper function to create a book (factory function)
export const createBook = (config: Partial<BookType>): JSX.Element => {
  const defaultConfig: BookType = {
    id: `book-${Math.random().toString(36).slice(2, 9)}`,
    title: 'Untitled Book',
    logo: '/assets/skills/placeholder.svg',
    link: '#',
    type: 'misc',
    width: 0.15,
    height: 0.25,
    depth: 0.05,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  };

  const bookConfig = { ...defaultConfig, ...config };

  return (
    <Book
      key={bookConfig.id}
      id={bookConfig.id}
      title={bookConfig.title}
      width={bookConfig.width}
      height={bookConfig.height}
      depth={bookConfig.depth}
      position={bookConfig.position}
      rotation={bookConfig.rotation}
    />
  );
};

export default Book;
