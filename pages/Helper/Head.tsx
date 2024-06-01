import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

interface HeadProps  {
  title: String;
}

function Head({title}: HeadProps) { //esse component recebe uma prop chamada "title"
  return (
    // chamamos o component do next "NextHead" que serve justamente para dar nome a aba de navegação
    <NextHead>
        {/* dentro de "title" que é um outro componenete dentro de "NextHead" nós colocamos a prop "title" */}
      <title>{title}</title> 
    </NextHead>
  );
}

// Aqui dizemos que o componente Head.prototype, que seria o tipo da propriedade, que são passadas para os componentes 
Head.PropTypes = {
  // recebe um title: que a propriedade é string e requirida
  // então sempre que chamar esse componente "Head" é necessário passar o atributo "title" e que tem que ser string e existente
  title: PropTypes.string.isRequired,
}

export default Head;
