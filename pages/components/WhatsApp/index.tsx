import React, { useState } from 'react';
import styles from './Whatsapp.module.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

export default function WhatsApp() {
  const [toggle, setToggle] = useState(false);
  const [seeToggle, setSeeToggle] = useState(false);

  const openAndCloseContainer = () => {
    if (toggle === true) {
      setSeeToggle(false);
      setTimeout(() => {
        setToggle(false);
      }, 300);
    } else {
      setSeeToggle(true);
      setToggle(true);
    }
  };

  return (
    <main className={styles.homeContainer}>
      {toggle && (
        <div
          className={classNames({
            [styles.messageContainer]: true,
            [styles.active]: toggle ? true : false,
            [styles.inactive]: seeToggle ? false : true,
          })}
        >
          <CloseIcon
            className={styles.close}
            onClick={() => openAndCloseContainer()}
          />
          <div className={styles.descripton}>
            <p>Olá, tudo bem?</p>
            <p>Como posso te ajudar?</p>
          </div>
          <Link
            className={styles.link}
            href="http://web.whatsapp.com/send?phone=5513996068207&text="
            target="_blank"
            replace
          >
            <div className={styles.redirect}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={'/whatsapp.svg'}
                  alt={`imagem ilustrativa do whatsapp`}
                  width={50}
                  height={50}
                  loading="eager"
                  onError={(e) => console.error('error: ', e.target)}
                />
              </div>
              <div className={styles.contact}>
                <p>Atendimento</p>
                <p>Kauã Ortolani Lusvarghi</p>
              </div>
            </div>
          </Link>
        </div>
      )}
      <div className={styles.container} onClick={() => openAndCloseContainer()}>
        <WhatsAppIcon className={styles.whatsIcon} />
      </div>
    </main>
  );
}
