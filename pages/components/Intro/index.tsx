import React from 'react';
import styles from './Intro.module.scss';
import Button from '../Button';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Intro() {
  return (
    <main className={styles.introContainer}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <Link href="https://github.com/KLusvarghi" target="_blank" replace><GitHubIcon/></Link>
          <Link href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/" target="_blank" replace><LinkedInIcon/></Link>
          <Link href="https://www.instagram.com/lusvarghikaua/" target="_blank" replace><InstagramIcon/></Link>
        </div>
        <div className={styles.intro}>
          <div className={styles.textMain}>
            <p>E ai, eu me chamo</p>
            <h1>Kauã Lusvarghi</h1>
            <p>
              Um desenvolvedor web iniciante e focado em resultados, que
              constrói e gerencia sites e aplicativos web visando o sucesso
              geral do produto.
            </p>
          </div>
          <div className={styles.btns}>
            <Button>Contato</Button>
            <Button>Projetos</Button>
          </div>
        </div>
        <div className={styles.scroll}></div>
      </div>
    </main>
  );
}
