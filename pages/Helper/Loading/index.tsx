import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <main className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </main>
  );
};

export default Loading;
