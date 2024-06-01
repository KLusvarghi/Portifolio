'use client';
import Header from '../components/Header';
import Footer from '../components/Foooter';
import { useEffect, useState } from 'react';
import { useProject } from '../context/ProjectContext';
// import api from '../../../../pages/apiProjetos/projetos.json';
import { useRouter } from 'next/navigation';
import styles from './Projeto.module.scss';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '../components/Button';
import Head from '../Helper/Head';

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

export default function Projetos({ params }: { params: { id: string } }) {
  const { project, setProject } = useProject();
  const router = useRouter();

  useEffect(() => {
    console.log(project?.tecnologias);

    async function fetchProject() {
      try {
        // setProject(apiPro)
      } catch (error) {
        console.error('Failed to fetch project:', error);
      }
    }
    fetchProject();
  }, [project, setProject]);

  const navigationToBack = () => {
    router.back();
  };

  return (
    <>
      <Head title={`Projeto - ${project?.nome}`} />
      <Header />
      <main className={styles.projectContainer}>
        <div className={styles.wrapper}>
          <div>
            <ArrowBackIcon
              className={styles.ArrowBack}
              onClick={() => navigationToBack()}
            />
            <div className={styles.title}>
              <h1>{project?.nome}</h1>
              {project ? (
                <Image
                  className={styles.image}
                  src={project.image}
                  alt={`imagem ilustrativa do projeto ${project?.nome}`}
                  width={600}
                  height={500}
                  loading="eager"
                  onError={(e) => console.error('error: ', e.target)}
                />
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <h2>visão geral do projeto</h2>
              <p>{project?.descricao}</p>
            </div>
            <div className={styles.tecnologias}>
              <h2>tecnologias utilizada</h2>
              <div className={styles.containerTec}>
                {project?.tecnologias.map((tec, index) => (
                  <span className={styles.tec} key={index}>
                    {tec}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.btns}>
              <h2>Projeto</h2>
              <div className={styles.containerBtns}>
                <Button link={project?.site} upperCase={true}>
                  VER PROJETO
                </Button>
                <Button
                  link={project?.linkRepositorio}
                  upperCase={true}
                  type="transparent"
                >
                  REPOSITÓRIO
                </Button>
                <Button upperCase={true} onClick={() => navigationToBack()}>
                  VOLTAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
