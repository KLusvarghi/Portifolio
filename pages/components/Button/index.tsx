import React from 'react';
// import { useRef } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface Props {
  children?: String;
  onClick?: () => void;
  link?: string;
  referencia?: string;
}

const Button = ({ children, onClick, link, referencia }: Props) => {
  // const buttonRef = useRef();

  return (
    // <div ref={buttonRef}>{children}</div>
    <div
      className={styles.button}
      // onClick={onclick}
    >
      <Link href={link ? link : ''} target="_blank" replace>
        {children ? children : ''}
      </Link>
    </div>
  );
};

export default Button;
