import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

interface HeadProps  {
  title: String;
}

function Head({title}: HeadProps) { 
  return (
    <NextHead>
      <title>{title}</title> 
    </NextHead>
  );
}

Head.PropTypes = {
  title: PropTypes.string.isRequired,
}

export default Head;
