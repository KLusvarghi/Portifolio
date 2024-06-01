import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/link';

export default function Footer() {
  return (
    <main className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.me}>
          <Image
            className={styles.image}
            src="./eu.svg"
            alt={'icon ilustrativo meu'}
            width={60}
            height={60}
            loading="eager"
            onError={(e) => console.error('error: ', e.target)}
          />
          <div className={styles.text}>
            <h5>kauã ortolani lusvarghi</h5>
            <p>
              Um desenvolvedor Web focado em Frontend, construindo o Frontend de
              sites e aplicativos Web que leva ao sucesso do produto geral
            </p>
          </div>
        </div>
        <div className={styles.social}>
          <p>SOCIAL</p>
          <div className={styles.iconsSocial}>
            <Link href="https://github.com/KLusvarghi" target="_blank" replace>
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/" target="_blank" replace>
              <LinkedInIcon />
            </Link>
            <Link href="https://www.instagram.com/lusvarghikaua/" target="_blank" replace>
              <InstagramIcon />
            </Link>
            <Link href="https://www.facebook.com/ka.Lusvarghii/" target="_blank" replace>
              <FacebookIcon />
            </Link>
            <Link href="https://t.me/kaualusvarghi" target="_blank" replace>
              <TelegramIcon />
            </Link>
          </div>
        </div>
        <div className={styles.direitos}>
          <span className={styles.separetor}></span>
          <p>Made with Next.js and many hours of dedication.</p>
          <p>
            Direitos Autorais 2024 © Prototipado e desenvolvido por Kauã
            Lusvarghi
          </p>
        </div>
      </div>
    </main>
  );
}
