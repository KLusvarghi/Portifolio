// index.tsx
import React from 'react';
import styles from './Projetos.module.scss';
import Image from 'next/image';
import api from '../../apiProjetos/projetos.json';
import Button from '../Button';

export default function Projetos() {
  return (
    <main className={styles.projetosContainer}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Projetos</h1>
          <span className={styles.separetor}></span>
          <p className={styles.subtitle}>
            Aqui você encontrará alguns dos projetos pessoais e mais recentes
          </p>
        </div>

        <div className={styles.content}>
          {api.map((projeto, index) => (
            <div key={index} className={styles.projetoContainer}>
              <Image
                className={styles.image}
                src={projeto.image}
                alt={`imagem ilustrativa do projeto ${projeto.nome}`}
                width={400}
                height={400}
                loading="eager"
                onError={(e) => console.error('error: ', e.target)}
              />
              <div className={styles.description}>
                <h2>{projeto.nome}</h2>
                <p>{projeto.preDescricao}</p>
                {/* <Link href={projeto.linkTo}>Mais sobre</Link> */}
                <Button
                  windows={true}
                  link={projeto.linkTo}
                  data='conteudo sendo passado'
                  // propsProjeto={projeto}
                >
                  Mais sobre
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
