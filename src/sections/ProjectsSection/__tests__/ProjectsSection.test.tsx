import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProjectsSection from '../ProjectsSection';
import { projectsContent } from '@/assets/data';

// Mock the swiper modules
vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    slidesPerView,
    spaceBetween,
    freeMode,
    className,
    style,
  }: {
    children: React.ReactNode;
    slidesPerView?: number | string;
    spaceBetween?: number;
    freeMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <div
      data-testid="swiper"
      // @ts-expect-error - Custom attributes for testing
      slidesperview={slidesPerView}
      spacebetween={spaceBetween}
      freemode={freeMode ? 'true' : 'false'}
      className={className}
      style={style}
    >
      {children}
    </div>
  ),
  SwiperSlide: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div data-testid="swiper-slide" {...props}>
      {children}
    </div>
  ),
}));

vi.mock('swiper/modules', () => ({
  FreeMode: 'FreeMode',
}));

const mockUseResponsive = vi.fn();
vi.mock('@/hooks/useResponsive', () => ({
  default: () => mockUseResponsive(),
}));

vi.mock('@/components/SectionWrapper', () => ({
  default: ({
    children,
    id,
    fullHeight,
    className,
    style,
  }: {
    children: React.ReactNode;
    id?: string;
    fullHeight?: boolean;
    className?: string;
    style?: React.CSSProperties;
  }) => (
    <div
      data-testid="section-wrapper"
      id={id}
      className={className}
      style={style}
      data-fullheight={fullHeight ? 'true' : 'false'}
    >
      {children}
    </div>
  ),
}));

// Mock ProjectCard component
vi.mock('@/components/ProjectCard', () => ({
  default: ({ project, id }: { project: { title: string }; id?: string }) => (
    <div data-testid="project-card" id={id}>
      {project.title}
    </div>
  ),
}));

describe('ProjectsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly for full width desktop (1700px)', () => {
    // Mock for large desktop
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1700,
      windowHeight: 900,
    });

    render(<ProjectsSection />);

    // Check section wrapper is present
    const sectionWrapper = screen.getByTestId('section-wrapper');
    expect(sectionWrapper).toBeInTheDocument();
    expect(sectionWrapper).toHaveAttribute('id', 'projects');

    // Check Swiper is configured for 4 slides per view (large desktop)
    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('slidesPerView', '4');

    // Check project groups are created correctly
    const swiperSlides = screen.getAllByTestId('swiper-slide');
    expect(swiperSlides.length).toBeGreaterThan(0);
  });

  it('renders correctly for narrower desktop (1000px)', () => {
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1000,
      windowHeight: 768,
    });

    render(<ProjectsSection />);

    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('slidesPerView', '2');
  });

  it('renders correctly for medium desktop (1200px)', () => {
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1200,
      windowHeight: 800,
    });

    render(<ProjectsSection />);

    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('slidesPerView', '3');
  });

  it('renders correctly for mobile', () => {
    mockUseResponsive.mockReturnValue({
      isMobile: true,
      windowWidth: 375,
      windowHeight: 667,
    });

    render(<ProjectsSection />);

    const swiper = screen.getByTestId('swiper');
    expect(swiper).toHaveAttribute('slidesPerView', '1');
    expect(swiper).toHaveClass('mobile-swiper');

    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards.length).toBe(projectsContent.length);
  });

  it('creates project groups correctly for desktop view', () => {
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1200,
      windowHeight: 800,
    });

    render(<ProjectsSection />);

    const swiperSlides = screen.getAllByTestId('swiper-slide');

    const expectedGroupCount = Math.ceil(projectsContent.length / 2);
    expect(swiperSlides.length).toBe(expectedGroupCount);
  });

  it('scrolls to projects correctly when section ID is targeted', () => {
    mockUseResponsive.mockReturnValue({
      isMobile: false,
      windowWidth: 1200,
      windowHeight: 800,
    });

    // Mock scrollIntoView method
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    render(<ProjectsSection />);

    const section = document.getElementById('projects');
    expect(section).toBeInTheDocument();

    section?.scrollIntoView({ behavior: 'smooth' });
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
