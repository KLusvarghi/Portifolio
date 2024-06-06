import { useState, useEffect } from 'react';

export default function useWhatsIcon() {
  const [hiddenInIntro, setHiddenInIntro] = useState(true);
  const [hiddenInFooter, setHiddenInFooter] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.querySelector('#intro');
      const footerElement = document.querySelector('#footer');
      if (introElement) {
        const rect = introElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom < window.innerHeight;
        setHiddenInIntro(!isVisible);
      }
      if (footerElement) {
          const rect = footerElement.getBoundingClientRect();
          const isVisible =
            rect.top >= 0 && rect.bottom <= window.innerHeight + 260;
        setHiddenInFooter(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { hiddenInIntro, hiddenInFooter };
}
