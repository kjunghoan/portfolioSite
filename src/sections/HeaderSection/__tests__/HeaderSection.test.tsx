import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HeaderSection from '../HeaderSection';

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

// Mock SectionWrapper component
vi.mock('@/components/SectionWrapper', () => ({
  default: ({
    children,
    fullHeight,
    className,
    style,
    id,
  }: {
    children: React.ReactNode;
    fullHeight?: boolean;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    minHeight?: string;
  }) => {
    return (
      <div
        data-testid="mock-section-wrapper"
        className={className}
        style={style}
        id={id}
        data-fullheight={fullHeight}
      >
        {children}
      </div>
    );
  },
}));

describe('HeaderSection', () => {
  it('renders correctly', () => {
    render(<HeaderSection />);
    expect(screen.getByText('Jung Hoan Kim')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });
});
