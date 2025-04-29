import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../ProjectCard';
import { ProjectContent } from '@/types/dataTypes';

// Mock useResponsive hook
const mockUseResponsive = vi.fn(() => ({
  isMobile: false,
  windowWidth: 1200,
  windowHeight: 800,
}));

vi.mock('@/hooks/useResponsive', () => ({
  default: () => mockUseResponsive(),
}));

describe('ProjectCard', () => {
  // Test data
  const mockProject: ProjectContent = {
    title: 'Test Project',
    description: 'A test project description',
    image: '/test-image.png',
    link: 'https://example.com',
    type: 'full-stack',
    tags: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#007ACC' },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1200,
      windowHeight: 800,
    });
  });

  it('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Project')).toHaveAttribute(
      'src',
      '/test-image.png',
    );
  });

  it('renders technology tags correctly', () => {
    render(<ProjectCard project={mockProject} />);

    mockProject.tags.forEach((tag) => {
      const tagElement = screen.getByText(tag.name);
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveStyle(`background-color: ${tag.color}`);
    });
  });

  it('renders project links correctly', () => {
    render(<ProjectCard project={mockProject} />);

    const linkElement = screen.getByText('View Project');
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows the correct spine color based on project type', () => {
    // Test each project type separately
    const testType = (type: string, expectedColor: string) => {
      // Create a test project with the specified type
      const testProject = { ...mockProject, type };

      // Render with a unique ID to avoid conflicts
      const uniqueId = `test-${type}`;
      const { container } = render(
        <ProjectCard project={testProject} id={uniqueId} />,
      );

      // Find the book container element (the div with id project-card-Test Project)
      const bookContainer = container.querySelector(
        '#project-card-Test\\ Project',
      );

      // Check it exists and has the expected background color
      expect(bookContainer).not.toBeNull();
      if (bookContainer) {
        expect(bookContainer).toHaveStyle(`background-color: ${expectedColor}`);
      }
    };

    // Test each type individually
    testType('config', '#ff796C');
    testType('full-stack', '#546778');
    testType('front-end', '#bd6e0e');
    testType('back-end', '#87AA82');
    testType('unknown', '#9c27b0');
  });

  it('applies mobile styling when on mobile devices', () => {
    // Override the mock to simulate mobile
    mockUseResponsive.mockReturnValue({
      isMobile: true,
      windowWidth: 375,
      windowHeight: 667,
    });

    const { container } = render(<ProjectCard project={mockProject} />);

    // Check mobile-specific classes are applied
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass('w-[80vw]');
    expect(cardElement).toHaveClass('h-[120vw]');
  });
});
