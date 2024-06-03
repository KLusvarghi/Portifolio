import { useEffect, useState } from 'react';

const UseWindowSize = (): number => {
  const [width, setWidth] = useState<number>(0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
};

export default UseWindowSize;
