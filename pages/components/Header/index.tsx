import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import {useRouter} from 'next/router';

interface Prop {
  otherPage?: boolean
}

export default function Header({otherPage}: Prop) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter()
  return (
    <header className={styles.headerContainer}>
      <Image
        // o "src" se deve passar a partir da página public, não precisando voltar página por página
        className={styles.log}
        src="/logo.svg"
        alt="Logo do site"
        width={140}
        height={20}
        loading="eager"
        onError={(e) => console.error('error: ', e.target)} //caso de erro ele exibe no console
        onClick={() => router.push('/')}
      />
      <nav className={classNames({
        [styles.nav]: true,
        [styles.active]: toggle == true,
        [styles.activeNone]: toggle == false,
        [styles.otherPage]: otherPage
      })}>
        <div className={styles.mobileContainer}>
          <button
            onClick={() => setToggle(!toggle)}
            className={styles.btnMobile}
          >
            <span
              className={styles.hamburger}
              style={{ borderTopColor: toggle ? 'transparent' : '' }}
            ></span>
          </button>
        </div>
        <div className={styles.menu}>
          <ul id="menu">
            <li>
              <span className={styles.underline}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  className={styles.link}
                  duration={500}
                >
                  Home
                </Link>
              </span>
            </li>

            <li>
              <span className={styles.underline}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  className={styles.link}
                  duration={500}
                >
                  Sobre mim
                </Link>
              </span>
            </li>

            <li>
              <span className={styles.underline}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  className={styles.link}
                  duration={500}
                >
                  Projetos
                </Link>
              </span>
            </li>

            <li>
              <span className={styles.underline}>
                <Link
                  onClick={() => setToggle(!toggle)}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  className={styles.link}
                  duration={500}
                >
                  Contato
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
