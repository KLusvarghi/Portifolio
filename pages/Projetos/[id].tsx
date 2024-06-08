'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './Projeto.module.scss';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '../components/Button';
import Head from '../Helper/Head';
import AnimatedSection from '../Helper/AnimatedSection';
import Loading from '../Helper/Loading';
import UseWindowSize from '../Helper/windowSize';
import api from '../../pages/api/projetos.json';

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

export default function Projeto() {
  const router = useRouter();
  const params = useParams();
  const [projetosName, setProjetosName] = useState<string[] | null>(null);

  const [projectObject, setProjectObject] = useState<ProjetoInterface | null>(
    null,
  );
  const width: number = UseWindowSize();
  const navigationToBack = () => {
    router.back();
  };

  useEffect(() => {
    const nameProject = api.map((projeto) =>
      projeto.linkTo.replace('Projetos/', ''),
    );
    setProjetosName(nameProject);

    const string = localStorage.getItem('project');
    if (typeof window !== 'undefined') {
      if (string) setProjectObject(JSON.parse(string));
    }
    if (!string) {
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }
  }, [router]);

  useEffect(() => {
    console.log(projectObject)
    let cont = 1;
    if (projetosName && params?.id) {
      for (let i = 0; i < projetosName.length; i++) {
        if (projetosName[i] === params.id) {
          cont++;
        } else if (projetosName.length - 1 && cont <= 1) {
          localStorage.removeItem('project');
          setProjectObject(null);
          setTimeout(() => {
            // router.push('/404');
          }, 3000);
        }
      }
    }
  }, [params?.id, projetosName, router]);

  return (
    <>
      <Head title={`Projeto - ${projectObject?.nome}`} />
      <Header otherPage={true} />
      {!projectObject && (
        <>
          <Head title={`Projeto não encontrado - Redirecionando...`} />
          <Loading />
        </>
      )}
      {projectObject && (
        <main className={styles.projectContainer}>
          <div className={styles.wrapperContainer}>
            <AnimatedSection>
              <div className={styles.wrapper}>
                <div>
                  <ArrowBackIcon
                    className={styles.ArrowBack}
                    onClick={() => navigationToBack()}
                  />
                  <div className={styles.title}>
                    <h1>{projectObject?.nome}</h1>
                    {projectObject ? (
                      <div className={styles.imageContainer}>
                        <Image
                          className={styles.image}
                          src={projectObject.image}
                          alt={`imagem ilustrativa do projeto ${projectObject?.nome}`}
                          width={600}
                          height={500}
                          loading="eager"
                          onError={(e) => console.error('error: ', e.target)}
                          priority={true}
                        />
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.description}>
                    <h2>visão geral do projeto</h2>
                    <p>{projectObject?.descricao}</p>
                  </div>
                  <div className={styles.tecnologias}>
                    <h2>tecnologias utilizada</h2>
                    <div className={styles.containerTec}>
                      {projectObject?.tecnologias.map((tec, index) => (
                        <span className={styles.tec} key={index}>
                          {tec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.btns}>
                    <h2>Projeto</h2>
                    <div className={styles.containerBtns}>
                      <div className={styles.btn1}>
                        <Button
                          expand={width <= 510 ? true : false}
                          size={
                            width <= 840
                              ? 'small'
                              : width <= 1200
                              ? 'medium'
                              : 'padrao'
                          }
                          link={projectObject?.site}
                          type="padrao"
                        >
                          ver projeto
                        </Button>
                      </div>
                      <div className={styles.btn2}>
                        <Button
                          expand={width <= 510 ? true : false}
                          size={
                            width <= 840
                              ? 'small'
                              : width <= 1200
                              ? 'medium'
                              : 'padrao'
                          }
                          link={projectObject?.linkRepositorio}
                          type={width <= 510 ? 'outline' : 'transparent'}
                        >
                          repositório
                        </Button>
                      </div>
                      <div className={styles.btn3}>
                        <Button
                          expand={width <= 510 ? true : false}
                          size={
                            width <= 840
                              ? 'small'
                              : width <= 1200
                              ? 'medium'
                              : 'padrao'
                          }
                          onClick={() => navigationToBack()}
                          type="outline"
                        >
                          voltar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
