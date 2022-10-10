import { useState, useEffect } from 'react';
import { BreakPoints } from '../Shared';

const useWatchWindowWidth = (breakpoint: BreakPoints): boolean => {
  const [currentWidth, setCurrentWidth] = useState(window.screen.width);
  const updateWindowWidth = (): void => {
    setCurrentWidth(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  switch (breakpoint) {
    case (BreakPoints.mobile):
      return currentWidth >= BreakPoints.mobile && currentWidth < BreakPoints.tablet;
    case (BreakPoints.tablet):
      return currentWidth >= BreakPoints.tablet && currentWidth < BreakPoints.desktop;
    case (BreakPoints.desktop):
      return currentWidth >= BreakPoints.desktop && currentWidth < BreakPoints.maximum;
    case (BreakPoints.maximum):
      return currentWidth >= BreakPoints.maximum;
    default:
      return false;
  }
};

export default useWatchWindowWidth;
