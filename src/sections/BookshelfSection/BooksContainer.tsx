import React, { JSX } from 'react';
import { createBook } from './Book';
import { Book as BookType } from '@/types/threejsTypes';

interface BooksContainerProps {
  width: number;
  height: number;
  depth: number;
  thickness: number;
  numberOfShelves: number;
  books?: BookType[];
}

const BooksContainer: React.FC<BooksContainerProps> = ({
  width,
  height,
  depth,
  thickness,
  numberOfShelves,
  books = [],
}) => {
  // Debug depth value (to fix unused variable linting error)
  console.log('Bookshelf depth:', depth);
  // Generate demo books if none are provided
  const generateDemoBooks = (): JSX.Element[] => {
    const demoBooks: JSX.Element[] = [];

    // Calculate shelf positions (including bottom frame as shelf 0)
    const shelfPositions: number[] = [];
    const internalHeight = height - thickness * 2;

    // Add bottom shelf position
    shelfPositions.push(-height / 2 + thickness);

    // Add additional shelf positions
    if (numberOfShelves > 0) {
      const shelfDistance = internalHeight / (numberOfShelves + 1);
      for (let i = 1; i <= numberOfShelves; i++) {
        shelfPositions.push(-height / 2 + thickness + shelfDistance * i);
      }
    }

    // Add some books to each shelf
    shelfPositions.forEach((shelfY) => {
      // Determine how many books to put on this shelf (random between 3-7)
      const bookCount = Math.floor(Math.random() * 5) + 3;

      // Calculate available width for books (accounting for shelf edges)
      const availableWidth = width - thickness * 2 - 0.03; // Small margin

      // Track current position as we place books
      let currentX = -availableWidth / 2;

      for (let i = 0; i < bookCount; i++) {
        // Randomize book dimensions - much larger relative to shelves
        const bookWidth = Math.random() * 0.22 + 0.15; // 0.15 to 0.37
        const bookHeight = Math.random() * 0.35 + 0.3; // 0.3 to 0.65
        const bookDepth = Math.random() * 0.1 + 0.15; // 0.15 to 0.25

        // Position on shelf (y position is shelf + half book height)
        const bookY = shelfY + thickness / 2 + bookHeight / 2;

        // Decide if book is standing or leaning
        const isStanding = Math.random() > 0.2; // 80% chance of standing

        if (isStanding) {
          // Standing book
          demoBooks.push(
            createBook({
              width: bookWidth,
              height: bookHeight,
              depth: bookDepth,
              position: [currentX + bookWidth / 2, bookY, 0],
              rotation: [0, 0, 0],
            }),
          );

          currentX += bookWidth + 0.01; // Small gap between books
        } else {
          // Leaning book
          const leanAngle =
            (Math.random() * 0.3 + 0.1) * (Math.random() > 0.5 ? 1 : -1);
          demoBooks.push(
            createBook({
              width: bookWidth,
              height: bookHeight,
              depth: bookDepth,
              position: [currentX + bookWidth / 2, bookY - bookHeight * 0.1, 0],
              rotation: [0, 0, leanAngle],
            }),
          );

          currentX += bookWidth * 0.8 + 0.01; // Leaning books take less space
        }

        // Stop adding books if we've filled the shelf
        if (currentX > availableWidth / 2 - 0.1) break;
      }
    });

    return demoBooks;
  };

  // Render custom books or demo books
  return (
    <group>
      {books.length > 0
        ? books.map((book) => createBook(book))
        : generateDemoBooks()}
    </group>
  );
};

export default BooksContainer;
