import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../ProjectsSection';

describe('ProjectsSection', () => {
  it('renders correctly', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('ProjectsSection')).toBeInTheDocument();
  });
});