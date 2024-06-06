import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './Helper/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import WhatsApp from './components/WhatsApp';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body::-webkit-scrollbar {
          width: 8px;
        }

        body::-webkit-scrollbar-track {
          background: #f1f7fb;
        }

        body::-webkit-scrollbar-thumb {
          background: #8aa9bd;
        }

        body::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
      <main>
        <Head title="Kauã Lusvarghi | Frontend Developer" />
        <Header />
        <Intro />
        <AboutMe />
        <Projetos />
        <Contato />
        <Footer />
        <WhatsApp />
      </main>
    </>
  );
}
