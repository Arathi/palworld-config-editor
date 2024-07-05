import { useLayoutEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
  scale: number;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    scale: window.devicePixelRatio,
  });

  function resizeHandler() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      scale: window.devicePixelRatio,
    });
  }

  useLayoutEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
}
