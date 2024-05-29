// context/ProjectContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectContextType {
  project: Project | null;
  setProject: (project: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
