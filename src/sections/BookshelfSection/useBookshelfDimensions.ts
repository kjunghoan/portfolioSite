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
}

export const useBookshelfDimensions = ({
  isMobile,
  isTablet,
  windowWidth,
  windowHeight,
  desktopFixedWidth = 2560, // Default width
}: BookshelfDimensionsOptions): BookshelfDimensions => {
  const canvasHeight = (): string => {
    if (isMobile) {
      return '250vh';
    } else if (isTablet) {
      return '150vh';
    } else {
      return '100vh';
    }
  };

  const bookshelfWidth = (): number => {
    if (isMobile) {
      return windowWidth * 0.00156;
    } else if (isTablet) {
      return windowWidth * 0.0017;
    } else {
      // For desktop, use the fixed width instead of actual window width
      return desktopFixedWidth * 0.00253;
    }
  };

  const bookshelfHeight = (): number => {
    if (isMobile) {
      return windowHeight * 0.00391;
    } else if (isTablet) {
      return windowHeight * 0.00254;
    } else {
      return windowHeight * 0.00253;
    }
  };

  const bookshelfThickness = (): number => {
    if (isMobile) {
      return windowWidth * 0.00007;
    } else if (isTablet) {
      return Math.max(windowWidth * 0.00005, 0.1);
    } else {
      return Math.max(windowWidth * 0.00005, 0.1);
    }
  };

  const bookshelfDepth = (): number => {
    if (isMobile) {
      return 0.4;
    } else if (isTablet) {
      return 0.75;
    } else {
      return 1;
    }
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
      // For mobile and tablet, use 100% of viewport width
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
