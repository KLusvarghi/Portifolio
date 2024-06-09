'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

interface ProjetoData {
  id: number;
  linkTo: string;
}

export default function Projeto() {
  const width: number = UseWindowSize();
  const router = useRouter();
  const params = useParams();
  const [projetosData, setProjetosData] = useState<ProjetoData[] | null>(null); //tera o linkTo e id de todos os projetos
  const [projectObject, setProjectObject] = useState<ProjetoInterface | null>(
    null,
  ); // terá os dados do projeto a ser exibido

  const navigationToBack = () => {
    localStorage.removeItem('project');
    router.push('/');
  };

  // irá pegar o valor de todos os "linkTo" de cada projeto e o "id"
  useEffect(() => {
    const nameProject = api.map((projeto) => ({
      id: projeto.id,
      linkTo: projeto.linkTo.replace('Projetos/', ''),
    }));
    // setando para projetosName o valor, retornando uma array de nomes
    setProjetosData(nameProject);
  }, [params?.id]);


  useEffect(() => {
    // caso tenha sido direconado com o click do "botao"
    const string = localStorage.getItem('project');
    if (typeof window !== 'undefined') {
      if (string) {
        setProjectObject(JSON.parse(string));
      } else {
        // verifica se o paramentro e a lista de projeto com id e linkTo existe
        const verifica = () => {
          let cont = 1;
          if (projetosData && params?.id) {
            for (let i = 0; i < projetosData.length; i++) {
              if (projetosData[i].linkTo === params.id) {
                //verifica se algum projeto bate com o nome do projeto que recebe de parametro
                cont++
                return true;
              } else if (projetosData.length - 1 === i && cont == 1) {
                //caso depois de percorrer todos os projetos e nenhum corremponder dele:
                console.log('Nomes não bateram')
                localStorage.removeItem('project');
                setProjectObject(null);
                setTimeout(() => {
                  router.push('/404');
                }, 1800);
              }
            }
          }
        };

        if (verifica() == true) {
          console.log('params igual a nome de projeto', params?.id)
          api.map((proj, index) => {
            if (projetosData) {
              if (projetosData[index + 1]?.id === proj.id) { //se a lista de id de cada projeto bater com algum id do porjeto que vem da api ele seta o valor de projectObject e transforma o obj em string e joga no localstorage
                setProjectObject(proj);
                return localStorage.setItem('project', JSON.stringify(proj));
              }
            }
          });
        }
      }
    }
  }, [params?.id, projetosData, router]);

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
