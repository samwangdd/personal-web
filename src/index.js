import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import Content from '@components/content';
import Test from '@components/test';
// import UseDocumentTitle from '@components/UseDocumentTitle';

function indexFunc() {
  return (
    <Test />
  );
}

ReactDOM.render(indexFunc(), document.getElementById('root'));
