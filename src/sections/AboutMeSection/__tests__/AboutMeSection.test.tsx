import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AboutMeSection from '../AboutMeSection';
import { aboutMeContent, contactContent } from '@/assets/data.ts';

// Mock window.open
const mockOpen = vi.fn();
window.open = mockOpen;

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
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('AboutMeSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders heading content correctly', () => {
    render(<AboutMeSection />);

    // Check heading content
    expect(screen.getByText(aboutMeContent.heading)).toBeInTheDocument();
    expect(screen.getByText(aboutMeContent.subHeading)).toBeInTheDocument();
  });

  it('renders profile image correctly', () => {
    render(<AboutMeSection />);

    const image = screen.getByAltText('About Me');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', aboutMeContent.image);
  });

  it('renders about me paragraphs correctly', () => {
    render(<AboutMeSection />);

    aboutMeContent.content.forEach((paragraph, index) => {
      const paragraphElement = document.getElementById(`aboutMe-p-${index}`);
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement?.textContent).toBe(paragraph);
    });
  });

  it('renders social links correctly', () => {
    render(<AboutMeSection />);

    contactContent.forEach((social) => {
      const socialIcon = screen.getByAltText(social.pointOfContact);
      expect(socialIcon).toBeInTheDocument();
      expect(socialIcon).toHaveAttribute('src', social.logo);
    });
  });

  it('opens social links in new tab when clicked', () => {
    render(<AboutMeSection />);

    contactContent.forEach((social, index) => {
      const socialElement = document.getElementById(`social-${index}`);
      expect(socialElement).toBeInTheDocument();

      // Click on the social link and verify it opens in new tab
      fireEvent.click(socialElement!);
      expect(mockOpen).toHaveBeenCalledWith(social.link, '_blank');

      // Clear mock calls for next iteration
      mockOpen.mockClear();
    });
  });
});
