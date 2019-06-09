import React, { Component } from 'react';

import Mouse from '@components/RenderProps/Mouse';
// import { Cat } from '@components/RenderProps/MouseWithCat';
import MouseTraker from '@components/RenderProps/MouseTraker';

class about extends Component {
  renderCat = mouse => {
    console.log('renderCat :');
    return <MouseTraker mouse={mouse} />;
  };
  render() {
    console.log('about :');
    return (
      <div style={{ height: '1000px' }}>
        about me
        <h1>移动鼠标！</h1>
        <Mouse
          render={mouse => {
            console.log('linerender :');
            return <MouseTraker mouse={mouse} />;
          }}
        />
      </div>
    );
  }
}

export default about;
