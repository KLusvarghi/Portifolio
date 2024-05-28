import React from 'react';
// import { useRef } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface Props {
  children?: String;
  // onClick?: () => void;
  link?: string;
  referencia?: string;
  size?: string;
  windows?: Boolean | undefined;
}

const Button = ({ children, link, referencia, size, windows }: Props) => {
  // const buttonRef = useRef();
  const router = useRouter();

  //   if (typeof window !== 'undefined') {
  //     handleWind()
  // }

  // const handleWind = () => {
  // }

  const goToPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log('entrou');
    if (windows === true && link && router) {
      router.push(link);
    }
  };

  return (
    // <div ref={buttonRef}>{children}</div>
    <div
      onClick={(e) => goToPage(e)}
      className={classNames({
        [styles.button]: true,
        [styles.medium]: size === 'medium' ? true : false,
        [styles.small]: size === 'small' ? true : false,
      })}
    >
      <p className={styles.box}>{children}</p>
      {/* <Link className={styles.box} href={link ? link : ''} target="_blank" replace>
        {children ? children : ''}
      </Link> */}
    </div>
  );
};

export default Button;
