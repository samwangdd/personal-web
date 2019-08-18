import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from '@pages/home.tsx';
import About from '@pages/about';
import Content from '@pages/content.tsx';
import TopMenu from '@components/TopMenu';

const MenuList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Content',
    path: '/content',
  },
  {
    name: 'About',
    path: '/about',
  },
];

function IndexFunc() {
  return (
    <Router>
      <div>
        <TopMenu list={MenuList} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/content" component={Content} />
      </div>
    </Router>
  );
}

ReactDOM.render(<IndexFunc />, document.getElementById('root'));
