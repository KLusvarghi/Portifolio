import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Head from './Helper/Head';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import styles from './Home.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useWhatsIcon from './Helper/useWhatsIcon';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function Home() {
  const showWhatsAppIcon = useWhatsIcon();
  const [active, setActive] = useState(false);

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

      <main className={styles.homeContainer}>
        <Head title="Kauã Lusvarghi | Frontend Developer" />
        <Header />
        <Intro />
        <AboutMe />
        <Projetos />
        <Contato />
        <Footer />

        {showWhatsAppIcon && (
          <>
            {active && (
              <div className={styles.messageContainer}>
                <CloseIcon
                  className={styles.close}
                  onClick={() => setActive(false)}
                />
                <div className={styles.descripton}>
                  <p>Olá, tudo bem?</p>
                  <p>Como posso te ajudar?</p>
                </div>
                <div className={styles.redirect}>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={'/whatsapp.svg'}
                      alt={`imagem ilustrativa do whatsapp`}
                      width={60}
                      height={60}
                      loading="eager"
                      onError={(e) => console.error('error: ', e.target)}
                    />
                    <div className={styles.contact}>
                      <p>Atendimento</p>
                      <p>Kauã Ortolani Lusvarghi</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className={styles.container}
              onClick={() => setActive(!active)}
            >
              <WhatsAppIcon className={styles.whatsIcon} />
            </div>
          </>
        )}
      </main>
    </>
  );
}
