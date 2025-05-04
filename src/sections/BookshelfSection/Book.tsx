import { Box, Text } from '@react-three/drei';
import { Vector3Tuple } from 'three';
import { Book as BookType } from '@/types/threejsTypes';

interface BookProps {
  book: BookType;
  position: Vector3Tuple;
  rotation?: Vector3Tuple;
  id: string;
  title: string;
  shelfIndex?: number;
}

const Book: React.FC<BookProps> = ({
  book,
  position,
  rotation = [0, 0, 0],
  id,
  title,
}) => {
  const { width, height, depth, type } = book;
  // TODO: change debugging colors
  // TODO: add logo to book spines
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
      case 'backend-service':
        return '#FFCC80'; // Light Orange
      case 'orm':
        return '#A5D6A7'; // Light Green
      case 'version-control':
        return '#F48FB1'; // Light Pink
      case 'text-editor':
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
  return (
    <group name={id}>
      {/* Book body */}
      <Box
        position={position}
        rotation={rotation}
        args={[width, height, depth]} // Width is the spine thickness
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={bookColor(type)} />
      </Box>

      {/* Book wireframe - front face */}
      <Box
        position={[position[0], position[1], position[2] + depth / 2 + 0.001]}
        rotation={rotation}
        args={[width + 0.01, height + 0.01, 0.0001]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book wireframe - back face */}
      <Box
        position={[position[0], position[1], position[2] - depth / 2 - 0.001]}
        rotation={rotation}
        args={[width + 0.01, height + 0.01, 0.0001]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book wireframe - left face */}
      <Box
        position={[position[0] - width / 2 - 0.001, position[1], position[2]]}
        rotation={rotation}
        args={[0.0001, height + 0.01, depth + 0.01]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book wireframe - right face */}
      <Box
        position={[position[0] + width / 2 + 0.001, position[1], position[2]]}
        rotation={rotation}
        args={[0.0001, height + 0.01, depth + 0.01]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book wireframe - top face */}
      <Box
        position={[position[0], position[1] + height / 2 + 0.001, position[2]]}
        rotation={rotation}
        args={[width + 0.01, 0.0001, depth + 0.01]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book wireframe - bottom face */}
      <Box
        position={[position[0], position[1] - height / 2 - 0.001, position[2]]}
        rotation={rotation}
        args={[width + 0.01, 0.0001, depth + 0.01]}
      >
        <meshBasicMaterial color="black" wireframe={true} />
      </Box>

      {/* Book spine text */}
      <group
        position={[position[0], position[1], position[2] + depth / 2 + 0.001]}
        rotation={rotation}
      >
        {/* Book title on spine */}
        <Text
          position={[0, 0, 0.002]} // Slightly in front of the spine
          rotation={[0, 0, Math.PI / 2 + Math.PI]} // Rotate text to be vertical on spine (180° rotated)
          fontSize={0.05}
          maxWidth={height * 0.8}
          color="#FFFFFF" // White text for better visibility
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

export default Book;
