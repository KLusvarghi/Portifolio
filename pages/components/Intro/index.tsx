import React, { useEffect, useState } from 'react';
import styles from './Intro.module.scss';
import Button from '../Button';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TypeAnimation } from 'react-type-animation';
// import EjectIcon from '@mui/icons-material/Eject';
import classNames from 'classnames';
import UseWindowSize from '../../Helper/windowSize';
// import { whatsSize } from '../WindowSize';

export default function Intro() {
  const [active, setActive] = useState(false);
  const width = UseWindowSize();

  return (
    <main id="home" className={styles.introContainer}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperSocial}>
          {/* <EjectIcon className={styles.showSocial} /> */}
          {/* {width <= 380 ? <EjectIcon className={styles.showSocial}/> : ''} */}
          <div
            className={classNames({
              [styles.social]: true,
              [styles.hideSocial]: width <= 420 ? true : false,
            })}
          >
            <Link href="https://github.com/KLusvarghi" target="_blank" replace>
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/"
              target="_blank"
              replace
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.instagram.com/lusvarghikaua/"
              target="_blank"
              replace
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://drive.google.com/file/d/15YoWCl9BiAazKIh6NmqVAz5L0EMGUd0o/view?usp=sharing"
              target="_blank"
              replace
            >
              <DescriptionIcon />
            </Link>
          </div>
        </div>

        <div className={styles.intro}>
          <div className={styles.textMain}>
            <p>E ai, eu me chamo</p>
            <h1>Kauã Lusvarghi</h1>

            <TypeAnimation
              sequence={[
                'Um desenvolvedor web iniciante e focado em resultados, que constrói e gerencia sites e aplicativos web visando o resultado geral do produto.',
                450,
                () => setActive(true),
              ]}
              cursor={true}
              speed={10}
              className={styles.description}
            />
          </div>
          {active && (
            <div className={styles.btns}>
              <Button
                size={
                  width <= 570 ? 'small' : width <= 1200 ? 'medium' : 'normal'
                }
              >
                Contato
              </Button>
              <Button
                size={
                  width <= 570 ? 'small' : width <= 1200 ? 'medium' : 'normal'
                }
              >
                Projetos
              </Button>
            </div>
          )}
        </div>
        <div className={styles.scroll}>
          <ExpandMoreIcon className={styles.arrow} />
        </div>
      </div>
    </main>
  );
}
