'use client';
import { useEffect, useState } from 'react';
import { useProject } from '../context/ProjectContext';
// import api from '../../../../pages/apiProjetos/projetos.json';
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
  // linkTo: string;
}

export default function Projetos({ params }: { params: { id: string } }) {
  const { project, setProject } = useProject();
  // const router = useRouter();
  // const { id } = router.query;

  // const data = api;
  useEffect(() => {
    async function fetchProject() {
      try {
        project;
      } catch (error) {
        console.error('Failed to fetch project:', error);
      }
    }
    fetchProject();
  }, [project]);

  return (
    <div>
      <h1>{project?.nome}</h1>
      <p>{project?.descricao}</p>
    </div>
  );
}

// src/app/Projetos/[id]/page.tsx
// import { GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
// import fs from 'fs';
// import path from 'path';

// interface Project {
//   id: number;
//   nome: string;
//   preDescricao: string;
//   descricao: string;
//   tecnologias: string[];
//   site: string;
//   linkRepositorio: string;
//   image: string;
// }

// interface ProjectPageProps {
//   project: Project;
// }

// const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div>
//       <h1>Project ID: {id}</h1>
//       <p>Name: {project.nome}</p>
//       <p>pré description: {project.preDescricao}</p>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const filePath = path.join(process.cwd(), 'pages', 'api', 'projetos.json');
//   const jsonData = fs.readFileSync(filePath, 'utf8');
//   const projects: Project[] = JSON.parse(jsonData);

//   const paths = projects.map(project => ({
//     params: { id: project.id },
//   }));

//   return { paths, fallback: false };
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const filePath = path.join(process.cwd(), 'pages', 'api', 'projetos.json');
//   const jsonData = fs.readFileSync(filePath, 'utf8');
//   const projects: Project[] = JSON.parse(jsonData);

//   const project = projects.find(proj => String(proj.id) === params?.id);

//   return {
//     props: { project },
//   };
// };

// export default ProjectPage;
