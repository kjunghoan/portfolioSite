import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookshelfSection from '../BookshelfSection';

describe('BookshelfSection', () => {
  it('renders correctly', () => {
    render(<BookshelfSection />);
    expect(screen.getByText('BookshelfSection')).toBeInTheDocument();
  });
});