import React, { Component, Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import Content from '@pages/content';
import Home from '@pages/home';
import About from '@pages/about';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import UseDocumentTitle from '@components/UseDocumentTitle';
import 'semantic-ui-css/semantic.min.css';

import { Segment, Placeholder } from 'semantic-ui-react';

import TopMenu from '@components/TopMenu';
import PlaceHolderCard from '@components/PlaceHolder/Card';
function IndexFunc() {
  const [ activeItem, setActiveItem ] = useState('home');
  console.log('activeItem :', activeItem);

  return (
    <Router>
      <div>
        <TopMenu />
        <Route path="/home" component={Home} />
        <Route path="/content" component={Content} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

ReactDOM.render(<IndexFunc />, document.getElementById('root'));
