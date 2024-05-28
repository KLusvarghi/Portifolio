import React from 'react';
import styles from './Projetos.module.scss';

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

        <div className={styles.content}></div>
      </div>
    </main>
  );
}
