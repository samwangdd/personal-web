import React, { Component } from 'react';

export default class MouseTracker extends Component {
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 }
  }
  handleMouseMove = (event) => {
    console.log('this :', this);
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
