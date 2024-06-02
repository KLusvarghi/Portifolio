// index.tsx
import React, { useRef, useState } from 'react';
import styles from './Projetos.module.scss';
import Image from 'next/image';
import api from '../../api/projetos.json';
import Button from '../Button';
// import { useProject } from '../../context/ProjectContext';
import UseWindowSize from '../../Helper/windowSize';

export default function Projetos() {
  const width = UseWindowSize();
  const [visibleItems, setVisibleItems] = useState(3);
  const increment = 3;

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + increment, api.length));
  };

  // const { setProject } = useProject();
  // useEffect(() => {
  //   setProject(api);
  // }, [setProject])

  return (
    <main id="projects" className={styles.projetosContainer}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Projetos</h1>
          <span className={styles.separetor}></span>
          <p className={styles.subtitle}>
            Aqui você encontrará alguns dos projetos pessoais e mais recentes
          </p>
        </div>

        <div className={styles.content}>
          {api.slice(0, visibleItems).map((projeto, index) => (
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
                <Button
                  newWindow={true}
                  link={projeto.linkTo}
                  projeto={projeto}
                  size={
                    width <= 570 ? 'small' : width <= 1200 ? 'medium' : 'normal'
                  }
                >
                  Mais sobre
                </Button>
              </div>
            </div>
          ))}
          {visibleItems < api.length && (
            <p className={styles.seeMore} onClick={showMoreItems}>
              Ver mais projetos 💻
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
