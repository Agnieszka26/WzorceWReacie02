import { useEffect, useState } from 'react';

function useMobile() {
  const [width, setWidth] = useState();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const handleResize = () =>
      setWidth({
        width: window.innerWidth,
      });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (width?.width < 1024) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);

  return isMobile;
}

export default useMobile;
