import React from 'react';

const Error = ({error}: boolean | any) => { 
  if (!error) return null;
  return <p style={{ color: '#f31', margin: '1rem 0' }}>Preencha os dados corretament!</p>;
};

export default Error;
