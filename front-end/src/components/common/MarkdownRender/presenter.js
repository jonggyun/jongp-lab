import React from 'react';

const MarkdownRender = ({ markup }) => {
  console.log('presenter!!!!!!', markup);
  return <div dangerouslySetInnerHTML={markup} />;
};

export default MarkdownRender;
