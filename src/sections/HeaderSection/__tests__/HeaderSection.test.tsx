import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeaderSection from '../HeaderSection';

describe('HeaderSection', () => {
  it('renders correctly', () => {
    render(<HeaderSection />);
    expect(screen.getByText('HeaderSection')).toBeInTheDocument();
  });
});