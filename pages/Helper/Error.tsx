import React, { useState, useEffect } from 'react'

const Error = ({error}: boolean | any) => { 

  const [color, setColor] = useState('blue');

  useEffect(() => {
    // Simula um cálculo ou obtenção de um valor dinâmico
    setColor('#f31');
  }, []);
  if (!error) return null;
  return <p>Preencha os dados corretament!</p>;
};

export default Error;
