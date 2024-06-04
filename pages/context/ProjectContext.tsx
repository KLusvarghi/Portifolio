"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

interface ProjectContextInterface {
  project: ProjetoInterface | null;
  setProject: (project: ProjetoInterface) => void;
}

const ProjectContext = createContext<ProjectContextInterface | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProjectState] = useState<ProjetoInterface | null>(null);

  useEffect(() => {
    const savedProject = localStorage.getItem('project');
    if (savedProject) {
      setProjectState(JSON.parse(savedProject));
    }
  }, []);

  const setProject = (project: ProjetoInterface) => {
    setProjectState(project);
    localStorage.setItem('project', JSON.stringify(project));
  };

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
