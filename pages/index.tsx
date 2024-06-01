import React from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './infra/components/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';

export default function Home() {
  return (
    // <div style={{background: 'black'} }>
    <main>
      <Head title="Home - Portifólio Kauã Ortolani Lusvarghi" />
      <Header />
      <Intro />
      <AboutMe />
      <Projetos />
      <Footer />
    </main>
  );
}
