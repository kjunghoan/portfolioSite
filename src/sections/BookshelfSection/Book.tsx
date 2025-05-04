import { Box, Text, Plane, useTexture } from '@react-three/drei';
import { Vector3Tuple } from 'three';
import { Book as BookType } from '@/types/threejsTypes';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

interface BookProps {
  book: BookType;
  position: Vector3Tuple;
  rotation?: Vector3Tuple;
  id: string;
  title: string;
  shelfIndex?: number;
  logo?: string;
}

const Book: React.FC<BookProps> = ({
  book,
  position,
  rotation = [0, 0, 0],
  id,
  title,
  logo = '/assets/skills/placeholder.svg',
}) => {
  const { width, height, depth, type } = book;
  const [logoLoaded, setLogoLoaded] = useState(false);

  // Preload texture to check if it exists
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.onerror = () => setLogoLoaded(false);
    img.src = logo;
  }, [logo]);

  // Load textures
  const logoTexture = useTexture(
    logoLoaded ? logo : '/assets/skills/placeholder.svg',
  );
  const leatherTexture = useTexture('/assets/textures/leatherTexture.svg');
  const clothTexture = useTexture('/assets/textures/clothTexture.svg');
  const paperTexture = useTexture('/assets/textures/paperTexture.png');

  // Make textures repeat for better detail
  leatherTexture.wrapS = leatherTexture.wrapT = THREE.RepeatWrapping;
  leatherTexture.repeat.set(2, 2);
  clothTexture.wrapS = clothTexture.wrapT = THREE.RepeatWrapping;
  clothTexture.repeat.set(1, 1);
  paperTexture.wrapS = paperTexture.wrapT = THREE.RepeatWrapping;
  paperTexture.repeat.set(4, 4);

  // Book material based on type
  const getBookMaterial = (type: string) => {
    // Base color for the book
    const color = bookColor(type);

    // Choose texture based on book type
    let texture;
    let roughness = 0.8;

    // Language and framework books have leather texture
    if (['language', 'framework', 'library'].includes(type)) {
      texture = leatherTexture;
      roughness = 0.9;
    }
    // Technical books have cloth texture
    else if (
      [
        'database',
        'cloud',
        'backend_service',
        'orm',
        'version_control',
      ].includes(type)
    ) {
      texture = clothTexture;
      roughness = 0.85;
    }
    // Other books have paper texture
    else {
      texture = paperTexture;
      roughness = 0.7;
    }

    return {
      map: texture,
      color: color,
      roughness: roughness,
      bumpMap: texture,
      emissive: 1,
      bumpScale: 0.01,
    };
  };

  // Book color based on type
  const bookColor = (type: string) => {
    switch (type) {
      case 'language':
        return '#E57373'; // Red
      case 'framework':
        return '#64B5F6'; // Blue
      case 'library':
        return '#90CAF9'; // Light Blue
      case 'database':
        return '#81C784'; // Green
      case 'cloud':
        return '#FFD54F'; // Yellow
      case 'backend_service':
        return '#FFCC80'; // Light Orange
      case 'orm':
        return '#A5D6A7'; // Light Green
      case 'version_control':
        return '#F48FB1'; // Light Pink
      case 'text_editor':
        return '#CE93D8'; // Light Purple
      case 'proxy':
        return '#80CBC4'; // Light Teal
      case 'tool':
        return '#BA68C8'; // Purple
      case 'misc':
        return '#4DB6AC'; // Teal
      case 'platform':
        return '#F06292'; // Pink
      case 'other':
        return '#9E9E9E'; // Grey
      default:
        return '#FF5252'; // Default to red if type not found
    }
  };

  // Calculate size and positions
  const logoSize = width * 0.65; // Make logo slightly smaller than book spine width
  const logoPosition = height * 0.35; // Position from bottom of book (35% up from bottom)

  return (
    <group name={id} position={position} rotation={rotation}>
      {/* Everything is positioned relative to the book's center point */}

      {/* Book covers and spine (colored) */}
      <group>
        {/* Front cover (largest x) */}
        <Box
          position={[width / 2 - 0.005, 0, 0]}
          args={[0.01, height, depth]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...getBookMaterial(type)} />
        </Box>

        {/* Back cover (smallest x) */}
        <Box
          position={[-width / 2 + 0.005, 0, 0]}
          args={[0.01, height, depth]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...getBookMaterial(type)} />
        </Box>

        {/* Spine (largest z) */}
        <Box
          position={[0, 0, depth / 2 - 0.005]}
          args={[width, height, 0.01]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial {...getBookMaterial(type)} />
        </Box>
      </group>

      {/* Book paper sides */}
      <group>
        {/* Top edge */}
        <Box
          position={[0, height / 2 - 0.005, 0]}
          args={[width - 0.02, 0.01, depth - 0.01]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.7}
            metalness={0}
            map={paperTexture}
          />
        </Box>

        {/* Bottom edge */}
        <Box
          position={[0, -height / 2 + 0.005, 0]}
          args={[width - 0.02, 0.01, depth - 0.01]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.7}
            metalness={0}
            map={paperTexture}
          />
        </Box>

        {/* Back side */}
        <Box
          position={[0, 0, -depth / 2 + 0.005]}
          args={[width - 0.02, height - 0.02, 0.01]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.7}
            metalness={0}
            map={paperTexture}
          />
        </Box>

        {/* Pages */}
        <Box
          position={[0, 0, 0]}
          args={[width - 0.02, height - 0.02, depth - 0.02]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color="#FFFFFF"
            roughness={0.7}
            metalness={0}
            map={paperTexture}
          />
        </Box>
      </group>

      {/* Group for spine content */}
      <group position={[0, 0, depth / 2 + 0.001]}>
        {/* Book title on spine */}
        <Text
          position={[0, 0, 0.002]} // Slightly in front of the spine
          rotation={[0, 0, Math.PI / 2 + Math.PI]} // Rotate text to be vertical on spine (180° rotated)
          fontSize={book.type === 'language' ? 0.08 : 0.07} // Larger font size for language books
          maxWidth={height * 0.9} // Increase max width to accommodate larger text
          color="#FFFFFF" // White text for better visibility
          anchorX="center"
          anchorY="middle"
          depthOffset={-1} // Ensure text renders above background
        >
          {title}
        </Text>

        {/* Logo at bottom of spine */}
        {logoLoaded && (
          <Plane
            position={[0, -logoPosition, 0.003]} // Position near bottom of spine
            rotation={[0, 0, 0]} // No rotation needed
            args={[logoSize, logoSize]} // Square proportions for logo
          >
            <meshBasicMaterial
              map={logoTexture}
              transparent={true}
              toneMapped={false}
              color="#FFFFFF" // White to preserve logo colors
            />
          </Plane>
        )}
      </group>
    </group>
  );
};

export default Book;
