import React from 'react';
import styles from './Contato.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Forms from './Form';
import AnimatedSection from '../../Helper/AnimatedSection';

export default function Contato() {
  return (
    <main id="contact" className={styles.contatoContainer}>
      <AnimatedSection>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Contato</h1>
            <span className={styles.separetor}></span>
            <p className={styles.subtitle}>
              Sinta-se à vontade para entrar em contato comigo enviando o
              formulário abaixo e entrarei em contato com você o mais breve
              possível
            </p>
          </div>
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
              <Forms />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
