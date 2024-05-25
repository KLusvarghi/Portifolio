import React from 'react';
// import { useRef } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  children?: String;
  onClick?: () => void;
  link?: string;
  referencia?: string;
  size?: string;

}

const Button = ({ children, onClick, link, referencia, size }: Props) => {
  // const buttonRef = useRef();

  return (
    // <div ref={buttonRef}>{children}</div>
    <div
      // onClick={onclick}
      className={classNames({
        [styles.button]: true,
        [styles.medium]: size === 'medium' ? true : false,
      })}
    >
      <Link href={link ? link : ''} target="_blank" replace>
        {children ? children : ''}
      </Link>
    </div>
  );
};

export default Button;
