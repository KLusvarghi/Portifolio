import { useState, useEffect } from 'react';

interface Prop {
  container: string;
}

export default function useContainer({ container }: Prop = { container: "" }) {
  const [isContainer, setIsContainer] = useState(false);
  const [containerElement, setContainerElement] = useState<Element | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if(container){
        setContainerElement(document.querySelector(`#${container}`))
      }

      if (containerElement) {
        const rect = containerElement.getBoundingClientRect();
        const is = rect.top <= 0 && rect.top >= (-rect.height);
        setIsContainer(is);
        console.log(is)
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [container, containerElement]);

  return { isContainer };
}
