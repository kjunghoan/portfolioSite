import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SectionWrapper from '../SectionWrapper';

// Mock the useResponsive hook
vi.mock('@/hooks/useResponsive', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      isMobile: false,
      windowHeight: 768,
      windowWidth: 1024,
    })),
  };
});

const mockWindowDimensions = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
  Object.defineProperty(window, 'innerHeight', {
    value: height,
    writable: true,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('SectionWrapper', () => {
  it('renders children correctly', () => {
    render(
      <SectionWrapper>
        <div data-testid="test-child">Test Content</div>
      </SectionWrapper>,
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies cutom className', () => {
    const { container } = render(
      <SectionWrapper className="test-class">
        <div>Content</div>
      </SectionWrapper>,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });
  it('uses full height when specified', () => {
    mockWindowDimensions(1024, 768);
    const { container } = render(
      <SectionWrapper fullHeight={true}>
        <div>Content</div>
      </SectionWrapper>,
    );
    expect(container.firstChild).toHaveStyle('height: 768px');
  });
  it('uses auto height when fullHeight is false', () => {
    const { container } = render(
      <SectionWrapper fullHeight={false} minHeight="300px">
        <div>Content</div>
      </SectionWrapper>,
    );
    expect(container.firstChild).toHaveStyle('height: auto');
    expect(container.firstChild).toHaveStyle('min-height: 300px');
  });
});
