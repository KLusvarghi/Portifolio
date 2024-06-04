import React, { useEffect, useState } from 'react';
import styles from './Forms.module.scss';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import Error from '../../../Helper/Error';

interface Prop {
  size: number;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Forms = ({ size, setSuccess }: Prop) => {
  const [name, setName] = useState('kaua');
  const [email, setEmail] = useState('kaua@lusvarghi');
  const [subject, setSubject] = useState('dwada');
  const [message, setMessage] = useState('dawdwads');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sedEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (name === '' || email === '' || subject === '' || message === '') {
        setError(true);
        return;
      } else {
        setLoading(true);
        const templateParams = {
          name: name,
          subject: subject,
          message: message,
          email: email,
        };
        setError(false);
        emailjs
          .send(
            'service_9yq346d',
            'template_fze75s6',
            templateParams,
            'RogZHWFmgc7vGw9e2',
          )
          .then(
            (response) => {
              console.log(response.text);
              console.log(response.status);
            },
            (error) => {
              console.log(error.text);
            },
          );
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        return;
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(false);
    }
  };

  return (
    <main className={styles.formContainer}>
      <form onSubmit={(e) => sedEmail(e)} className={styles.container}>
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
        {error && <Error error={error} />}
        {loading ? (
          <button
            className={classNames({
              [styles.loading]: true,
              [styles.btn]: true,
              [styles.expand]: size <= 524 ? true : false,
            })}
            disabled
          >
            Enviando mensagem...
          </button>
        ) : (
          <button
            className={classNames({
              [styles.btn]: true,
              [styles.expand]: size <= 524 ? true : false,
            })}
          >
            Enviar mensagem
          </button>
        )}
      </form>
    </main>
  );
};

export default Forms;
