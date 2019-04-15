import React, { Component, Fragment } from 'react';
import style from './style.css';

class content extends Component {
  render() {
    return (
      <Fragment>
        <header>This is the header</header>
        <div className={style.hello}>
          <main>
            <h1>This is the main content.</h1>
            <p>Someday, sam and his families go to the park, Someday, sam and his families go to the parkSomeday, sam and his families go to the parkSomeday, sam and his families go to the park...</p>
          </main>
          <nav>
            <h4>This is the navigation section.</h4>
            <p>Someday, sam and his families go to the park, Someday, sam and his families go to the parkSomeday, sam and his families go to the park...</p>
          </nav>
          <aside>
            <h4>This is an aside section.</h4>
            <p>Someday, sam and his families go to the park, Someday, sam and his families go to the parkSomeday, sam and his families go to the park...</p>
          </aside>
        </div>
        <footer>This is the footer.</footer>
      </Fragment>
    );
  }
}

export default content;