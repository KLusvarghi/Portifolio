import React, { useEffect, useState } from 'react';
import styles from './AboutMe.module.scss';
import Button from '../Button';
import Link from 'next/link';
import UseWindowSize from '../../Helper/windowSize';
import AnimatedSection from '../../Helper/AnimatedSection';

export default function AboutMe() {
  const [repos, setRepos] = useState(0);
  const width = UseWindowSize();
  const technology = [
    'HTML',
    'CSS',
    'Javascript',
    'Github',
    'SASS',
    'Typescript',
    'UI',
    'React',
    'Design Responsivo',
    'Git',
    'Next.js',
    'Terminal',
  ];

  useEffect(() => {
    const fetchRespGit = async () => {
      try {
        const repos = await fetch(
          'https://api.github.com/users/KLusvarghi/repos',
        );
        const data = await repos.json();
        setRepos(data.length);
      } catch (err) {
        console.log('Erro ao carregar os repositórios do github.', err);
        setRepos(0);
      }
    };
    fetchRespGit();
  }, []);

  return (
    <main id="about" className={styles.aboutContainer}>
      <div className={styles.wrapper}>
        <AnimatedSection>
          <div className={styles.title}>
            <h1>Sobre mim</h1>
            <span className={styles.separetor}></span>
            <p className={styles.subtitle}>
              Aqui você encontrará mais informações sobre mim, o que faço e
              minhas habilidades atuais principalmente em termos de programação
              e tecnologia
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.content}>
            <div className={styles.about}>
              <h2>Um pouco sobre mim!</h2>
              <p>
                Como desenvolvedor{' '}
                <span className={styles.bold}>Web Frontend</span>, concentro
                meus esforços na construção e gerenciamento das interfaces de
                sites e aplicações Web, visando impulsionar o sucesso do produto
                como um todo. Estou atualmente no último semestre do curso de{' '}
                <span className={styles.bold}>
                  Análise e Desenvolvimento de Sistemas
                </span>{' '}
                na <span className={styles.bold}>Fatec Praia Grande</span>. Além
                de minha paixão pela programação, também sou um atleta ativo,
                representando a cidade de Praia Grande e recentemente integrando
                o grupo da seleção brasileira de beach handball.
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
                contribuir, aprender e crescer. Caso tenha uma oportunidade que
                se alinhe às minhas habilidades e experiência, por favor, não
                hesite em entrar em contato.
              </p>
              <div className={styles.itens}>
                <div className={styles.experience}>
                  <div className={styles.study}>
                    <p className={styles.number}>+3</p>
                    <div className={styles.text}>
                      <p>Anos</p>
                      <p>estudando</p>
                    </div>
                  </div>
                  <div className={styles.study}>
                    <p className={styles.number}>+{repos}</p>
                    <div className={styles.text}>
                      <p>Projetos</p>
                      <p>no Github</p>
                    </div>
                  </div>
                </div>
                <Button
                  size={
                    width <= 650 ? 'small' : width <= 1200 ? 'medium' : 'normal'
                  }
                  link="https://drive.google.com/file/d/15YoWCl9BiAazKIh6NmqVAz5L0EMGUd0o/view?usp=sharing"
                  type="padrao"
                >
                  Open Cv on drive
                </Button>
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
        </AnimatedSection>
      </div>
    </main>
  );
}
