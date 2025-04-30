import React from 'react';
import { Box } from '@react-three/drei';
import { Vector3Tuple } from 'three';

interface BookshelfProps {
  width: number;
  height: number;
  thickness: number;
  depth: number;
  numberOfShelves?: number;
}

const Bookshelf: React.FC<BookshelfProps> = ({
  width,
  height,
  thickness,
  depth,
  numberOfShelves = 1,
}) => {
  const position: Vector3Tuple = [0, 0, 0];

  // TODO: change debugging colors to woodtones
  const frameColor = '#32CD32'; // Green
  const backColor = '#1E90FF'; // Blue
  const shelfColor = '#FF4500'; // Orange-red

  const generateShelves = () => {
    if (numberOfShelves <= 0) return null;
    const shelves = [];
    const internalHeight = height - thickness * 2;
    const shelfDistance = internalHeight / (numberOfShelves + 1);

    // Create each shelf
    for (let i = 1; i <= numberOfShelves; i++) {
      // Calculate y position (starting from bottom)
      const yPos = -height / 2 + thickness + shelfDistance * i;

      shelves.push(
        <Box
          key={`shelf-${i}`}
          position={[0, yPos, 0]}
          args={[width - thickness * 2, thickness, depth - thickness]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color={shelfColor} />
        </Box>,
      );
    }

    return shelves;
  };

  return (
    <group position={position}>
      {/* Back panel */}
      <Box
        position={[0, 0, -depth / 2 + thickness / 2]}
        args={[width, height, thickness]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={backColor} />
      </Box>

      {/* Bottom frame */}
      <Box
        position={[0, -height / 2 + thickness / 2, 0]}
        args={[width, thickness, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>

      {/* Top frame */}
      <Box
        position={[0, height / 2 - thickness / 2, 0]}
        args={[width, thickness, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>

      {/* Left side */}
      <Box
        position={[-width / 2 + thickness / 2, 0, 0]}
        args={[thickness, height, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>

      {/* Right side */}
      <Box
        position={[width / 2 - thickness / 2, 0, 0]}
        args={[thickness, height, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>

      {/* Shelves */}
      {generateShelves()}
    </group>
  );
};

export default Bookshelf;
