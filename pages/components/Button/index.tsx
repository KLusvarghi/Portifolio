'use client';
import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

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
  internalNavigation?: boolean;
  expand?: boolean;
  projeto?: ProjetoInterface;
  type?: 'transparent' | 'outline' | 'padrao' | string;
  onClick?: () => void;
}

const Button = ({
  children,
  size,
  internalNavigation,
  link,
  projeto,
  expand,
  type,
  onClick,
}: ProjectButtonProps) => {
  const router = useRouter();
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (internalNavigation) {
      if (projeto) {
        setTimeout(() => {
          localStorage.setItem('project', JSON.stringify(projeto));
          router.push(`/${link}`);
        }, 1000);
      }
    } else {
    }
  };

  const getButtonClass = () =>
    classNames({
      [styles.expand]: expand,
      [styles.standard]: true,
      [styles.boxTransp]: type == 'transparent' ? true : false,
      [styles.boxOutline]: type == 'outline' ? true : false,
      [styles.box]: type == 'padrao' ? true : false,
    });

  return (
    <div
      className={classNames({
        [styles.button]: true,
        [styles.standard]: true,
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
      })}
    >
      <Link
        onClick={!internalNavigation ? onClick : (e) => navigate(e)}
        className={getButtonClass()}
        href={link ? link : '/'}
        target={onClick ? '' : '_blank'}
        replace
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
