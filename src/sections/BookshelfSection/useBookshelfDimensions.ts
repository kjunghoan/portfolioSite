interface BookshelfDimensions {
  bookshelfWidth: number;
  bookshelfHeight: number;
  bookshelfThickness: number;
  bookshelfDepth: number;
  numberOfShelves: number;
  canvasWidth: string;
  canvasHeight: string;
}

interface BookshelfDimensionsOptions {
  isMobile: boolean;
  isTablet: boolean;
  windowWidth: number;
  windowHeight: number;
  desktopFixedWidth?: number;
  // Reference dimensions for tested devices
  referenceWidths?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  referenceHeights?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export const useBookshelfDimensions = ({
  isMobile,
  isTablet,
  windowWidth,
  windowHeight,
  desktopFixedWidth = 2560, // Default width
  // Reference device dimensions from commit message
  referenceWidths = {
    mobile: 430, // iPhone 14 Pro Max width
    tablet: 1024, // iPad Pro width
    desktop: 2560, // 16:9 chrome browser @4k with bookmarks
  },
  referenceHeights = {
    mobile: 932, // iPhone 14 Pro Max height
    tablet: 1366, // iPad Pro height
    desktop: 1440, // 16:9 chrome browser @4k height estimate
  },
}: BookshelfDimensionsOptions): BookshelfDimensions => {
  // Helper to get layout type
  const getLayoutType = (): 'mobile' | 'tablet' | 'desktop' => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  };

  // Get base dimensions for the current layout type
  const layoutType = getLayoutType();

  // Calculate aspect ratio adjustment
  const referenceAspect =
    referenceWidths[layoutType] / referenceHeights[layoutType];
  const currentAspect = windowWidth / windowHeight;
  const aspectAdjustment = currentAspect / referenceAspect;

  // Calculate size adjustment factors
  const getWidthAdjustmentFactor = () => {
    const referenceWidth = referenceWidths[layoutType];
    const widthRatio = windowWidth / referenceWidth;

    // Apply more subtle scaling for width variations within a layout type
    // A factor of 0.3 means the adjustment is 30% of the full ratio difference
    return 1 + (widthRatio - 1) * 0.3;
  };

  const getHeightAdjustmentFactor = () => {
    const referenceHeight = referenceHeights[layoutType];
    const heightRatio = windowHeight / referenceHeight;

    // Apply more subtle scaling for height variations
    return 1 + (heightRatio - 1) * 0.3;
  };

  const widthAdjustment = getWidthAdjustmentFactor();
  const heightAdjustment = getHeightAdjustmentFactor();

  const canvasHeight = (): string => {
    if (isMobile) {
      // Adjust based on device aspect ratio
      const adjustmentFactor = 1 + (aspectAdjustment - 1) * 0.5;
      const adjustedValue = 250 * adjustmentFactor;
      return `${adjustedValue}vh`;
    } else if (isTablet) {
      const adjustmentFactor = 1 + (aspectAdjustment - 1) * 0.5;
      const adjustedValue = 150 * adjustmentFactor;
      return `${adjustedValue}vh`;
    } else {
      return '100vh';
    }
  };

  const bookshelfWidth = (): number => {
    let baseWidth;

    if (isMobile) {
      baseWidth = referenceWidths.mobile * 0.00156;
    } else if (isTablet) {
      baseWidth = referenceWidths.tablet * 0.0017;
    } else {
      // For desktop, use the fixed width
      baseWidth = desktopFixedWidth * 0.00253;
    }

    // Apply adjustment factor
    return baseWidth * widthAdjustment;
  };

  const bookshelfHeight = (): number => {
    let baseHeight;

    if (isMobile) {
      baseHeight = referenceHeights.mobile * 0.00391;
    } else if (isTablet) {
      baseHeight = referenceHeights.tablet * 0.00254;
    } else {
      baseHeight = referenceHeights.desktop * 0.00253;
    }

    // Apply adjustment factor
    return baseHeight * heightAdjustment;
  };

  const bookshelfThickness = (): number => {
    let baseThickness;

    if (isMobile) {
      baseThickness = referenceWidths.mobile * 0.00007;
    } else if (isTablet) {
      baseThickness = Math.max(referenceWidths.tablet * 0.00005, 0.1);
    } else {
      baseThickness = Math.max(referenceWidths.desktop * 0.00005, 0.1);
    }

    // Apply an adjustment based on width
    return baseThickness * Math.pow(widthAdjustment, 0.5);
  };

  const bookshelfDepth = (): number => {
    const baseDepth = isMobile ? 0.4 : isTablet ? 0.75 : 1;

    // Apply a very slight adjustment only for extreme aspect ratios
    const extremeAdjustment = aspectAdjustment > 1.3 || aspectAdjustment < 0.7;
    return extremeAdjustment
      ? baseDepth * (1 + (aspectAdjustment - 1) * 0.1)
      : baseDepth;
  };

  const numberOfShelves = (): number => {
    if (isMobile) {
      return 4;
    } else if (isTablet) {
      return 3;
    } else {
      return 1;
    }
  };

  // Calculate the appropriate canvas width for horizontal overflow
  const getCanvasWidth = (): string => {
    if (isMobile || isTablet) {
      return '100vw';
    } else {
      // For desktop, always use fixed width
      return `${desktopFixedWidth}px`;
    }
  };

  return {
    bookshelfWidth: bookshelfWidth(),
    bookshelfHeight: bookshelfHeight(),
    bookshelfThickness: bookshelfThickness(),
    bookshelfDepth: bookshelfDepth(),
    numberOfShelves: numberOfShelves(),
    canvasWidth: getCanvasWidth(),
    canvasHeight: canvasHeight(),
  };
};
