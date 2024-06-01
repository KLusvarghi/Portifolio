import React from 'react';

// sendo um component para exibir os errors em geral
const Error = ({error}: boolean | any) => { // desestruturando as 'props'
  if (!error) return null;
  return <p style={{ color: '#f31', margin: '1rem 0' }}>Preencha os dados corretament!</p>;
};

export default Error;
