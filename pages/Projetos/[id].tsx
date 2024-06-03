'use client';
import Header from '../components/Header';
import Footer from '../components/Foooter';
import { useEffect, useState } from 'react';
import { useProject } from '../context/ProjectContext';
import { useRouter } from 'next/navigation';
import styles from './Projeto.module.scss';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '../components/Button';
import Head from '../Helper/Head';
import AnimatedSection from '../Helper/AnimatedSection';
import Loading from '../Helper/Loading';

// export default function Projetos({ params }: { params: { id: string } }) {
export default function Projetos() {
  const router = useRouter();
  const { project } = useProject();
  const [projectLocal, setProjectLocal] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);

  const navigationToBack = () => {
    router.back();
  };

  useEffect(() => {
    setLoading(localStorage.getItem('project'));
  }, []);

  useEffect(() => {
    setProjectLocal(localStorage.getItem('project'));
    if (!localStorage.getItem('project')) {
      setTimeout(() => {
        router.push('/');
      }, 1400);
    }
  }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProjectLocal(localStorage.getItem('project'));
    }
  }, [router, projectLocal]);

  return (
    <>
      <Head title={`Projeto - ${project?.nome}`} />
      <Header otherPage={true} />
      {!loading && (
        <>
          <Head title={`Projeto não encontrado - Redirecionando...`} />
          <Loading />
        </>
      )}
      <main className={styles.projectContainer}>
        <AnimatedSection>
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
                  <Button link={project?.site}>VER PROJETO</Button>
                  <Button link={project?.linkRepositorio} type="transparent">
                    REPOSITÓRIO
                  </Button>
                  <Button onClick={() => navigationToBack()}>VOLTAR</Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
