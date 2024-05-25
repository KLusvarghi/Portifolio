import React, { useEffect, useRef } from 'react';
import styles from './AboutMe.module.scss';
import Button from '../Button';
import Link from 'next/link';

export default function AboutMe() {
  const technology = [
    'html',
    'css',
    'javascript',
    'github',
    'sass',
    'typescript',
    'react',
    'git',
    ' next.js',
    'terminal',
    'design responsivo',
    'ui',
  ];

  return (
    <main className={styles.aboutContainer}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Sobre mim</h1>
          <span className={styles.separetor}></span>
          <p className={styles.subtitle}>
            Aqui você encontrará mais informações sobre mim, o que faço e minhas
            habilidades atuais principalmente em termos de programação e
            tecnologia
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.about}>
            <h2>Um pouco sobre mim!</h2>
            <p>
              Como desenvolvedor Web Frontend, concentro meus esforços na
              construção e gerenciamento das interfaces de sites e aplicações
              Web, visando impulsionar o sucesso do produto como um todo. Estou
              atualmente no último semestre do curso de Análise e
              Desenvolvimento de Sistemas na Fatec Praia Grande. Além de minha
              paixão pela programação, também sou um atleta ativo, representando
              a cidade de Praia Grande e recentemente integrando o grupo da
              seleção brasileira de beach handball.
              <br /> Explore alguns dos projetos que realizei na seção
              correspondente. Convido você a se conectar ou me seguir no{' '}
              <Link
                className={styles.link}
                href="https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/"
                target="_blank"
                replace
              >
                Linkedin
              </Link>{' '}
              e{' '}
              <Link
                className={styles.link}
                href="https://www.instagram.com/lusvarghikaua/"
                target="_blank"
                replace
              >
                Instagram
              </Link>
              . Estou aberto a novas oportunidades profissionais onde possa
              contribuir, aprender e crescer. Caso tenha uma oportunidade que se
              alinhe às minhas habilidades e experiência, por favor, não hesite
              em entrar em contato.
            </p>
            <div className={styles.itens}>
              <div className={styles.experience}>
                <div className={styles.study}>
                  <p className={styles.number}>3+</p>
                  <div className={styles.text}>
                    <p>Anos</p>
                    <p>estudando</p>
                  </div>
                </div>
                <div className={styles.study}>
                  <p className={styles.number}>35+</p>
                  <div className={styles.text}>
                    <p>Projetos</p>
                    <p>no Github</p>
                  </div>
                </div>
              </div>
              <Button>Open Cv on drive</Button>
            </div>
          </div>
          <div className={styles.skills}>
            <h2>Minhas hards skills</h2>
            <div className={styles.hardSkills}>
              {technology.map((tec, index) => (
                <span key={index}>{tec}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
