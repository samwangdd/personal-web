import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import 'semantic-ui-css/semantic.min.css';

import Home from '@pages/home.tsx';
import About from '@pages/about';
import Content from '@pages/content.tsx';
import TopMenu from '@components/TopMenu';

Sentry.init({ dsn: 'https://d8e9028f568f4a499dff9c3475c6aa33@o377378.ingest.sentry.io/5199592' });

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
