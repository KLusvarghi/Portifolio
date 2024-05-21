import React from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './infra/components/Head';
import styles from './Main.module.scss';
import Intro from './components/Intro';

export default function Home() {
  return (
    // <div style={{background: 'black'} }>
    <div>
      <Head title="Home - Portifólio Kauã Ortolani Lusvarghi" />
      {/* <Header /> */}
      <Intro/>
      <main>Hellow</main>
      <Footer />
    </div>
  );
}
