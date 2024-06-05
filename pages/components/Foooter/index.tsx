import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter()
  const profileImageUrl = 'https://media.licdn.com/dms/image/C4D03AQGgcU2hxMQ7rw/profile-displayphoto-shrink_800_800/0/1664198488709?e=1723075200&v=beta&t=RxBIXF-5RCu9U4KEp5zZfXGWHTPeGfUX1Z3OQtnc3ZE';

  return (
    <main id="footer" className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.me}>
          <Image
            className={styles.image}
            src={profileImageUrl}
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
          <p>Feito com <span>Next.js</span> e algumas horas de dedicação.</p>
          <p>
            Direitos Autorais 2024 © Prototipado e desenvolvido por <span onClick={() => router.push('/')} className={styles.link}>Kauã
            Lusvarghi</span>
          </p>
        </div>
      </div>
    </main>
  );
}
