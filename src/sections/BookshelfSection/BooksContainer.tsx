import { JSX } from 'react';
import createBook from './createBook';
import { CombinedSkill } from '@/types/dataTypes';
import useResponsive from '@/hooks/useResponsive';
import { useResponsiveBooks } from './useResponsiveBooks';

interface BooksContainerProps {
  bookshelfWidth: number;
  bookshelfHeight: number;
  bookshelfDepth: number;
  shelfThickness: number;
  numberOfShelves: number;
  skills: Record<string, CombinedSkill>;
}

const BooksContainer: React.FC<BooksContainerProps> = ({ skills }) => {
  const { windowWidth, windowHeight } = useResponsive();

  const referenceWidths = {
    mobile: 430, // iPhone 14 Pro Max
    tablet: 1024, // iPad Pro
    desktop: 2560, // 16:9 chrome browser with bookmarks
  };

  const referenceHeights = {
    mobile: 932, // iPhone 14 Pro Max
    tablet: 1366, // iPad Pro
    desktop: 1440, // 16:9 chrome browser height estimate
  };

  // Use our new responsive books system
  const { getBookPosition, getBookRotation, getBookDimensions } =
    useResponsiveBooks({
      windowWidth,
      windowHeight,
      referenceWidths,
      referenceHeights,
    });

  // Create a book from skill data
  const createBookFromSkill = (
    skillKey: string,
    skill: CombinedSkill,
  ): JSX.Element | null => {
    try {
      // Get position - will be null for books not in bookPositions
      const bookPosition = getBookPosition(skillKey);

      // If position is null, this book should be skipped
      if (!bookPosition) {
        return null;
      }

      // Get responsive rotation
      const bookRotation = getBookRotation(skillKey);
      // Get responsive dimensions
      const dimensions = getBookDimensions(skill);

      // Create book with skill data and responsive positioning
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
        rotation: bookRotation,
      });
    } catch (error) {
      console.warn(`Error creating book for skill: ${skillKey}`, error);
      return null;
    }
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
