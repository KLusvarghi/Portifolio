import React, { useEffect, useState } from 'react';
import styles from './Forms.module.scss';

const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const sedEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className={styles.formContainer}>
      <form onSubmit={(e) => sedEmail(e)} className={styles.contact}>
        <div className={styles.name}>
          <p>Nome</p>
          <input
            required
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.email}>
          <p>Email</p>
          <input
            required
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.assunto}>
          <p>Assunto</p>
          <input
            required
            type="text"
            placeholder="Digite o assunto da mensagem"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={styles.mensagem}>
          <p>Mensagem</p>
          <textarea
            required
            name="mensagem"
            cols={30}
            rows={10}
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button>Enviar mensagem</button>
      </form>
    </main>
  );
};

export default Forms;
