import React, { useEffect, useRef } from 'react';
import styles from './AboutMe.module.scss';
import Button from '../Button';

export default function AboutMe() {
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
              seleção brasileira de beach handball. Explore alguns dos projetos
              que realizei na seção correspondente. Convido você a se conectar
              ou me seguir no Linkedin e Instagram. Estou aberto a novas
              oportunidades profissionais onde possa contribuir, aprender e
              crescer. Caso tenha uma oportunidade que se alinhe às minhas
              habilidades e experiência, por favor, não hesite em entrar em
              contato.
            </p>
            <div className={styles.itens}>
              <div className={styles.experince}></div>
              <Button>Open Cv on drive</Button>
            </div>
          </div>
          <div className={styles.skills}></div>
        </div>
      </div>
    </main>
  );
}
