import React from 'react'
// import { useRef } from 'react';
import styles from './Button.module.scss'

interface Props {
  children: String
}

const Button = ({children}: Props) => {
  // const buttonRef = useRef();

  return (
    // <div ref={buttonRef}>{children}</div>
    <div>
      <button className={styles.button}>{children}</button>
    </div>
  )
}

export default Button;