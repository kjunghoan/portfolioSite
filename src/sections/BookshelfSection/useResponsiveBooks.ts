import { bookPositions, bookDimensions } from './BookPositions';
import { SkillContent as Skill } from '@/types/dataTypes';

interface ResponsiveBookOptions {
  windowWidth: number;
  windowHeight: number;
  // Reference sizes for test devices
  referenceWidths: {
    mobile: number; // e.g., iPhone 14 Pro Max width
    tablet: number; // e.g., iPad Pro width
    desktop: number; // e.g., 4K desktop width with bookmarks
  };
  referenceHeights: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

// Helper to determine which layout to use based on width
export const getLayoutType = (
  windowWidth: number,
): 'mobile' | 'tablet' | 'desktop' => {
  // Exactly match the useResponsive hook breakpoints
  if (windowWidth < 768) {
    return 'mobile';
  } else if (windowWidth < 1200) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

/**
 * Gets interpolated book position and scales appropriately based on current device width
 * Returns null if the book is not defined in bookPositions to ensure only included books are displayed
 */
export const getResponsiveBookPosition = (
  bookKey: string,
  { windowWidth, referenceWidths }: ResponsiveBookOptions,
): [number, number, number] | null => {
  // Check if this book is explicitly included in bookPositions
  if (!bookPositions[bookKey]) {
    // Book is intentionally left out, should not be displayed
    return null;
  }

  const layoutType = getLayoutType(windowWidth);

  // Get the position from the appropriate layout
  // Fall back to desktop layout if the specific layout isn't defined
  const position =
    bookPositions[bookKey]?.[layoutType] || bookPositions[bookKey]?.desktop;

  if (!position) {
    console.warn(`No position found for book ${bookKey}`);
    return null;
  }

  // Calculate the appropriate scale factor
  const referenceWidth = referenceWidths[layoutType];

  // Apply a subtle scaling that doesn't distort the composition
  const widthRatio = windowWidth / referenceWidth;

  // Scale factor adjusts how much we want screen size to impact positioning
  const scaleFactor = 0.3;
  const adjustedScaleFactor = 1 + (widthRatio - 1) * scaleFactor;

  // Special handling for tablet view shelves
  if (layoutType === 'tablet') {
    // Detect if this is a book on the top shelf based on y-position
    // Top shelf books typically have y value > 0.9
    const isTopShelfBook = position.position[1] > 0.9;

    // Detect if this is a book on the middle shelf based on y-position (around -0.43)
    const isMiddleShelfBook =
      position.position[1] < 0 && position.position[1] > -0.6;

    // Detect if this is a book on the bottom shelf based on y-position (around -1.3)
    const isBottomShelfBook = position.position[1] < -1;

    if (isTopShelfBook) {
      // Adjust Y position for the top shelf in tablet mode
      // For smaller screens, reduce the Y value (move down slightly)
      // The minimum adjustment is 0.04 units even at full width
      // The adjustment increases as the width gets smaller
      const baseAdjustment = 0.01; // Base adjustment even at full reference width
      const additionalAdjustment = widthRatio < 1 ? (1 - widthRatio) * 0.2 : 0;
      const yAdjustment = baseAdjustment + additionalAdjustment;

      return [
        position.position[0] * adjustedScaleFactor,
        position.position[1] - yAdjustment, // Move down by calculated adjustment
        position.position[2],
      ];
    } else if (isMiddleShelfBook || isBottomShelfBook) {
      // For middle and bottom shelves, move books slightly up
      const baseAdjustment = 0.04; // Base adjustment even at full reference width
      const additionalAdjustment = widthRatio < 1 ? (1 - widthRatio) * 0.1 : 0;
      const yAdjustment = baseAdjustment + additionalAdjustment;

      return [
        position.position[0] * adjustedScaleFactor,
        position.position[1] + yAdjustment, // Move up by calculated adjustment
        position.position[2],
      ];
    }
  }

  // Default handling for other books
  return [
    position.position[0] * adjustedScaleFactor,
    position.position[1], // Keep Y more stable
    position.position[2], // Keep Z more stable
  ];
};

/**
 * Gets interpolated book rotation based on current device width
 * Returns null if the book is not defined in bookPositions
 */
export const getResponsiveBookRotation = (
  bookKey: string,
  { windowWidth }: ResponsiveBookOptions,
): [number, number, number] | null => {
  // Check if this book is explicitly included in bookPositions
  if (!bookPositions[bookKey]) {
    return [0, 0, 0];
  }

  const layoutType = getLayoutType(windowWidth);

  // Get the rotation from the appropriate layout
  const position =
    bookPositions[bookKey]?.[layoutType] || bookPositions[bookKey]?.desktop;

  if (!position) {
    return null;
  }

  return position.rotation as [number, number, number];
};

/**
 * Gets responsive book dimensions based on current device width
 */
export const getResponsiveBookDimensions = (
  skill: Skill,
  {
    windowWidth,
    windowHeight,
    referenceWidths,
    referenceHeights,
  }: ResponsiveBookOptions,
) => {
  const layoutType = getLayoutType(windowWidth);

  // Get the base dimensions for this skill type
  const dimensions =
    bookDimensions[layoutType]?.[skill.type] ||
    bookDimensions.desktop[skill.type];

  // Calculate reference aspect ratio and current aspect ratio
  const referenceAspect =
    referenceWidths[layoutType] / referenceHeights[layoutType];
  const currentAspect = windowWidth / windowHeight;

  // Adjust dimensions based on aspect ratio differences
  const aspectAdjustment = currentAspect / referenceAspect;
  const scaleFactor = 0.3; // How much we want aspect ratio to impact size

  return {
    width: dimensions.width * (1 + (aspectAdjustment - 1) * scaleFactor),
    height: dimensions.height,
    depth: dimensions.depth,
  };
};

/**
 * A hook that provides all book-related responsive calculations
 */
export const useResponsiveBooks = (options: ResponsiveBookOptions) => {
  return {
    getBookPosition: (bookKey: string) =>
      getResponsiveBookPosition(bookKey, options),
    getBookRotation: (bookKey: string) =>
      getResponsiveBookRotation(bookKey, options),
    getBookDimensions: (skill: Skill) =>
      getResponsiveBookDimensions(skill, options),
    getLayoutType: () => getLayoutType(options.windowWidth),
  };
};
