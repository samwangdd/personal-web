import React, { Component } from 'react';

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="../../images/cat.png" alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export { Cat };
