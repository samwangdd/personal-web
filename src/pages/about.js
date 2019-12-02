import React, { Component } from 'react';

// import Mouse from '@components/RenderProps/Mouse';
// import { Cat } from '@components/RenderProps/MouseWithCat';
import MouseTraker from '@components/RenderProps/MouseTraker';
import styles from '@styles/style.css';

class about extends Component {
  renderCat = mouse => {
    console.log('renderCat :');
    return <MouseTraker mouse={mouse} />;
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={`${styles.center} ${styles.col}`}>2</div>
        <div className={`${styles.left} ${styles.col}`}>1</div>
        <div className={`${styles.right} ${styles.col}`}>3</div>
      </div>
    );
  }
}

export default about;
