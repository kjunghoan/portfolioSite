import { JSX } from 'react';
import Book from './Book';
import { Book as BookType } from '@/types/threejsTypes';

// Helper function to create a book (factory function)
const createBook = (config: Partial<BookType>): JSX.Element => {
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
      book={bookConfig}
      position={bookConfig.position}
      rotation={bookConfig.rotation}
    />
  );
};

export default createBook;
