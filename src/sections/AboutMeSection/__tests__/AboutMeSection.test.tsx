import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutMeSection from '../AboutMeSection';

describe('AboutMeSection', () => {
  it('renders correctly', () => {
    render(<AboutMeSection />);
    expect(screen.getByText('AboutMeSection')).toBeInTheDocument();
  });
});
