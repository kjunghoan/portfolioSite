import { JSX } from 'react';
import createBook from './createBook';
import { CombinedSkill } from '@/types/dataTypes';
import useResponsive from '@/hooks/useResponsive';
import { bookDimensions, bookPositions } from './BookPositions';

interface BooksContainerProps {
  bookshelfWidth: number;
  bookshelfHeight: number;
  bookshelfDepth: number;
  shelfThickness: number;
  numberOfShelves: number;
  skills: Record<string, CombinedSkill>;
}

const BooksContainer: React.FC<BooksContainerProps> = ({ skills }) => {
  const { isMobile, isTablet } = useResponsive();
  const positions = bookPositions;

  // Get book dimensions based on type and screen size
  const getBookDimensions = (type: string) => {
    const dimensions = bookDimensions;
    // Use the appropriate dimensions based on device type
    if (isMobile) {
      return dimensions.mobile[type] || dimensions.mobile.other;
    } else if (isTablet) {
      return dimensions.tablet[type] || dimensions.tablet.other;
    }
    return dimensions.desktop[type] || dimensions.desktop.other;
  };

  // For mobile and tablet, we'll implement scaling later
  // For desktop, we use the original positions without scaling
  const getPosition = (
    position: [number, number, number],
  ): [number, number, number] => {
    // For desktop view, return the original position
    if (!isMobile && !isTablet) {
      return position;
    }

    // For mobile and tablet, we'll implement device-specific positioning later
    // For now, just return the original position
    return position;
  };

  // Create a book from skill data using predefined positions
  const createBookFromSkill = (
    skillKey: string,
    skill: CombinedSkill,
  ): JSX.Element | null => {
    // Check if we have predefined position for this skill
    if (!positions[skillKey]) {
      // If no position is defined, do not create a book
      return null;
    }

    // Get position data based on device type
    const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
    const positionData =
      positions[skillKey][deviceType] || positions[skillKey].desktop;

    if (!positionData) {
      console.log(`No ${deviceType} position defined for skill: ${skillKey}`);
      return null;
    }

    // Get dimensions based on skill type
    const dimensions = getBookDimensions(skill.type);

    // Get the appropriate position based on device type
    const bookPosition = getPosition(positionData.position);

    // Create book with skill data and position
    return createBook({
      id: `${skill.type}-book-${skill.title}`,
      title: skill.title,
      logo: skill.logo,
      link: skill.link,
      type: skill.type,
      width: dimensions.width,
      height: dimensions.height,
      depth: dimensions.depth,
      position: bookPosition,
      rotation: positionData.rotation,
    });
  };

  // Create books from all skills with defined positions
  const createBooksFromSkills = (): JSX.Element[] => {
    const books: JSX.Element[] = [];

    // Process each skill
    Object.entries(skills).forEach(([key, skill]) => {
      const book = createBookFromSkill(key, skill);
      if (book) {
        books.push(book);
      }
    });

    return books;
  };

  // Render the books
  return <group>{createBooksFromSkills()}</group>;
};

export default BooksContainer;
