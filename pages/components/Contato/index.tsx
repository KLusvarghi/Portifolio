import React, { useState } from 'react';
import styles from './Contato.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Forms from './Form';
import AnimatedSection from '../../Helper/AnimatedSection';
import UseWindowSize from '../../Helper/windowSize';

export default function Contato() {
  const width = UseWindowSize();
  const [sucess, setSucces] = useState(false);

  return (
    <main id="contact" className={styles.contatoContainer}>
      {sucess && (
        <div className={styles.sucessMessage}>
          <p>Email enviado com sucesso!</p>
        </div>
      )}
      <div className={styles.wrapper}>
        <AnimatedSection>
          <div className={styles.title}>
            <h1>Contato</h1>
            <span className={styles.separetor}></span>
            <p className={styles.subtitle}>
              Sinta-se à vontade para entrar em contato comigo enviando o
              formulário abaixo e entrarei em contato com você o mais breve
              possível
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.about}>
                <LocationOnIcon className={styles.icon} />
                <div className={styles.text}>
                  <h4>Localização</h4>
                  <p>Praia Grande - Litoral Sul - SP</p>
                </div>
              </div>
              <div className={styles.about}>
                <EmailIcon className={styles.icon} />
                <div className={styles.text}>
                  <h4>Email</h4>
                  <p>kauaolusvarghi@gmail.com</p>
                </div>
              </div>
              <div className={styles.about}>
                <LocalPhoneIcon className={styles.icon} />
                <div className={styles.text}>
                  <h4>Telefone / whatsapp</h4>
                  <p>+55 (13)99606-8207</p>
                </div>
              </div>
            </div>
            <div className={styles.form}>
              <Forms setSuccess={setSucces} size={width} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
