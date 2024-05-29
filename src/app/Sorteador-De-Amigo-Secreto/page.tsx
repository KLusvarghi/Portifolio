// // Sorteador/page.tsx
// import { useRouter } from 'next/router';
// import React from 'react';
// import styles from '../Projetos.module.scss';
// import Header from '../../../pages/components/Header';

// const Sorteador = () => {
//   const router = useRouter();
//   const { query } = router;

//   const projeto = {
//     nome: query.nome as string,
//     preDescricao: query.preDescricao as string,
//     descricao: query.descricao as string,
//     tecnologias: query.tecnologias ? (query.tecnologias as string).split(',') : [],
//     site: query.site as string,
//     linkRepositorio: query.linkRepositorio as string,
//     image: query.image as string,
//     linkTo: query.linkTo as string,
//   };

//   return (
//     <main>
//       {/* <Header /> */}
//       <div className={styles.projectDetail}>
//         <h1>{projeto.nome}</h1>
//         <p>{projeto.preDescricao}</p>
//         <p>{projeto.descricao}</p>
//         <ul>
//           {projeto.tecnologias.map((tec, index) => (
//             <li key={index}>{tec}</li>
//           ))}
//         </ul>
//         <a href={projeto.site} target="_blank" rel="noopener noreferrer">Site</a>
//         <a href={projeto.linkRepositorio} target="_blank" rel="noopener noreferrer">Repositório</a>
//       </div>
//     </main>
//   );
// };

// export default Sorteador;
