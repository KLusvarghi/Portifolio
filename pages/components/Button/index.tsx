'use client';
import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

import { useRouter } from 'next/navigation';
import { useProject } from '../../../context/ProjectContext';

// interface Projeto {
//   nome: string;
//   preDescricao: string;
//   descricao: string;
//   tecnologias: string[];
//   site: string;
//   linkRepositorio: string;
//   image: string;
//   linkTo: string;
// }

interface Props {
  children: string;
  link: string;
  ref?: string;
  size?: string;
  windows?: boolean;
  data?: string;
  // propsProjeto: { propsProjeto: Projeto };
}

// const Button: React.FC<Props> = ({ children, link, ref, size, windows, propsProjeto }) => {
const Button: React.FC<Props> = ({
  children,
  link,
  ref,
  size,
  windows,
  data,
}) => {
  
  const router = useRouter();
  const { setProject } = useProject();
  const goToPage = () => {
    // e.preventDefault();
    setProject(data);
    router.push(link);

    // if (windows === true && link) {
    //   // navigate({
    //   //   pathname: link,
    //   //   query: { ...propsProje.projeto },
    //   // });
    // }
  };

  return <button className={styles.button} onClick={goToPage}>{children}</button>;
};

export default Button;

// <div
//   onClick={goToPage}
//   className={classNames({
//     [styles.button]: true,
//     [styles.medium]: size === 'medium',
//     [styles.small]: size === 'small',
//   })}
// >
//   mais sobre
// </div>

// <Link className={styles.box} href={link ? link : ''} target="_blank" replace>
//   {children ? children : 'teste'}
// </Link>
