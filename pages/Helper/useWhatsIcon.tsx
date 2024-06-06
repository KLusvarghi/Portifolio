import React, { useState, useEffect } from 'react';

export default function useWhatsIcon() {
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(true);
  const [showWhatsAppIcon2, setShowWhatsAppIcon2] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.querySelector('#home');
      const footerElement = document.querySelector('#footer');
      if (introElement) {
        // console.log(introElement.getBoundingClientRect())
        const rect = introElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setShowWhatsAppIcon(!isVisible);
      }
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight + 180;
        setShowWhatsAppIcon2(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { showWhatsAppIcon, showWhatsAppIcon2 };
}
