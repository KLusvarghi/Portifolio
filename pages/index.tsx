import React from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './Helper/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body::-webkit-scrollbar {
          width: 10px;
        }

        body::-webkit-scrollbar-track {
          background: #f1f7fb;
        }

        body::-webkit-scrollbar-thumb {
          background: #8aa9bd;
          border-radius: 4px;
        }

        body::-webkit-scrollbar-thumb:hover {
          background: #3e80aa;
        }
      `}</style>

      <main className={styles.homeContainer}>
        <Head title="Home - Portifólio Kauã Ortolani Lusvarghi" />
        <Header />
        <Intro />
        <AboutMe />
        <Projetos />
        <Contato />
        <Footer />
      </main>
    </>
  );
}
