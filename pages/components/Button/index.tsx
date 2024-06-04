'use client';
import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useProject } from '../../context/ProjectContext';

interface ProjetoInterface {
  id: number;
  nome: string;
  preDescricao: string;
  descricao: string;
  tecnologias: string[];
  site: string;
  linkRepositorio: string;
  image: string;
  linkTo: string;
}

interface ProjectButtonProps {
  children: string;
  link?: string;
  size?: string;
  newWindow?: boolean;
  projeto?: ProjetoInterface;
  type?: 'transparent' | 'outline' | '';
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  newWindow,
  link,
  projeto,
  type,
  onClick,
}: ProjectButtonProps) => {
  const { setProject } = useProject();
  const router = useRouter();
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (newWindow) {
      if (projeto) setProject(projeto);
      setTimeout(() => {
        router.push(`/${link}`);
      }, 1000);
    } else {
    }
  };

  return (
    <>
      {newWindow ? (
        <div
          className={classNames({
            [styles.button]: true,
            [styles.medium]: size === 'medium',
            [styles.small]: size === 'small',
          })}
        >
          <Link
            onClick={(e) => navigate(e)}
            className={styles.box}
            href={link ? link : '/'}
            target="_blank"
            replace
          >
            {children}
          </Link>
        </div>
      ) : (
        <div
          className={classNames({
            [styles.button]: true,
            [styles.medium]: size === 'medium',
            [styles.small]: size === 'small',
          })}
        >
          <Link
            onClick={onClick}
            className={
              type == 'transparent'
                ? styles.boxTransp
                : type == 'outline'
                ? styles.boxOutline
                : styles.box
            }
            href={link ? link : '/'}
            target={onClick ? '' : '_blank'}
            replace
          >
            {children ? children : 'Mais Sobre'}
          </Link>
        </div>
      )}
    </>
  );
};

export default Button;