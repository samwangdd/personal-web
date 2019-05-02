import React from 'react';
import ReactDOM from 'react-dom';
import Home from '@pages/home';
import About from '@pages/about';
import Content from '@pages/content';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

function IndexFunc () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/content" component={Content} />
      </div>
    </Router>
  );
}

ReactDOM.render(<IndexFunc />, document.getElementById('root'));
