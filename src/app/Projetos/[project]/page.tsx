'use client';
import { useEffect } from 'react';
import { useProject } from '../../../../context/ProjectContext';
import { useRouter } from 'next/router';

export default function Projetos() {
  const router = useRouter();
  const { data } = useProject();

  useEffect(() => {
    if (!data) {
      // Redirecionar ou fazer algo se id não estiver disponível
      router.push('/');
    }
  }, [data]);

  if (!data) {
    return <div>Carregando...</div>; // Mostra um estado de carregamento enquanto redireciona
  }

  return (
    <>
      <h2>Projeto</h2>
      <p>Conteudo: {data}</p>
      {/* <p>porject: {project}</p> */}
    </>
  );
}
