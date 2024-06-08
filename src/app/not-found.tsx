'use client';
import React, { useEffect } from 'react';
import styles from './NotFound.module.scss';
import Button from '../../pages/components/Button';
import Image from 'next/image';
import Head from '../../pages/Helper/Head';
import { useRouter } from 'next/navigation';
import UseWindowSize from '../../pages/Helper/windowSize'

export default function NotFound() {
  const router = useRouter();
  const width = UseWindowSize()
  const navigationToBack = () => {
    router.push('/');
  };

  return (
    <>
      <Head title="404 - Página não encontrada..." />
      <main className={styles.notFoundContainer}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/notFound.svg"
              alt="Logo do site"
              width={140}
              height={140}
              loading="eager"
              onError={(e) => console.error('error: ', e.target)}
              priority
            />
          </div>
          <div className={styles.text}>
            <h1>Ops! Não encontramos essa página</h1>
            <p>
              Acho que você escolheu a porta errada, porque eu não consegui dar
              uma olhada na que você está procurando.{' '}
            </p>
            <Button
              type="padrao"
              size={
                width <= 570 ? 'small' : width <= 1200 ? 'medium' : 'normal'
              }
              onClick={() => navigationToBack()}
            >
              Voltar ao inicio
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
