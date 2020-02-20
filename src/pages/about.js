import React, { Component } from 'react';

// import Mouse from '@components/RenderProps/Mouse';
// import { Cat } from '@components/RenderProps/MouseWithCat';
// import MouseTraker from '@components/RenderProps/MouseTraker';
import RefsHOC from '@components/HOC/RefsHOC.jsx';
import List from '@components/List.jsx';
// import IIHOC from '@components/HOC/IIHOC.jsx';
// import MyInput from '@components/MyInput';
import styles from '@styles/style.css';

import Tabs from './tabs';
import RefsButton from './refsButton';

// function testable(target) {
//   target.isTestable = true;
// }

@RefsHOC
class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar', 'lakala', 'babala'],
    };
  }

  handleClick = () => {
    this.setState({
      words: null,
    });
  };

  render() {
    return (
      <div className={styles.wrapper} authId="111">
        <div className={styles.header}>Header</div>
        <div className={styles.footer}>Footer</div>
        <Tabs />
        <RefsButton />
        <button onClick={this.handleClick}>dada...</button>
        <List items={this.state.words || []}></List>
      </div>
    );
  }
}

export default about;
