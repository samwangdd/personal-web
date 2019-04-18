import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Content from '@components/content';
// import Test from '@components/test';

function indexFunc() {
  return (
    <Content />
  );
}

ReactDOM.render(indexFunc(), document.getElementById('root'));
