import React, { useState, useEffect } from 'react';

export default function useWhatsIcon() {
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.querySelector('#home');
      const footerElement = document.querySelector('#footer');
      if (introElement) {
        const rect = introElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setShowWhatsAppIcon(!isVisible);
      }
      // if (footerElement) {
      //   const rect = footerElement.getBoundingClientRect();
      //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      //   setShowWhatsAppIcon(!isVisible);
      // }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call the function on mount to check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showWhatsAppIcon;
}
