import React from 'react';
import { Box, useTexture } from '@react-three/drei';
import { Vector3Tuple } from 'three';
import * as THREE from 'three';

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

  // Load wood texture
  const woodTexture = useTexture('/assets/textures/wood_texture.png');

  // Configure texture to use full image size
  woodTexture.wrapS = woodTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Material settings
  const frameColor = '#c7a883';
  const shelfColor = '#D4B692';
  const frameMaterialProps = {
    map: woodTexture,
    color: frameColor,
    roughness: 0.7,
    metalness: 0.05,
    bumpMap: woodTexture,
    bumpScale: 0.006,
    emissiveIntensity: 0.05,
    emissive: frameColor,
  };

  const shelfMaterialProps = {
    map: woodTexture,
    color: shelfColor,
    roughness: 0.65,
    metalness: 0.03,
    bumpMap: woodTexture,
    bumpScale: 0.006,
    emissiveIntensity: 0.05,
    emissive: shelfColor,
  };

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
          <meshStandardMaterial {...shelfMaterialProps} />
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
        <meshStandardMaterial {...frameMaterialProps} />
      </Box>

      {/* Bottom frame */}
      <Box
        position={[0, -height / 2 + thickness / 2, 0]}
        args={[width, thickness, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial {...frameMaterialProps} />
      </Box>

      {/* Top frame */}
      <Box
        position={[0, height / 2 - thickness / 2, 0]}
        args={[width, thickness, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial {...frameMaterialProps} />
      </Box>

      {/* Left side */}
      <Box
        position={[-width / 2 + thickness / 2, 0, 0]}
        args={[thickness, height, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial {...frameMaterialProps} />
      </Box>

      {/* Right side */}
      <Box
        position={[width / 2 - thickness / 2, 0, 0]}
        args={[thickness, height, depth]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial {...frameMaterialProps} />
      </Box>

      {/* Shelves */}
      {generateShelves()}
    </group>
  );
};

export default Bookshelf;
