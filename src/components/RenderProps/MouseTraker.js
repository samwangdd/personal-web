import React, { Component } from 'react';

class MouseTraker extends Component {
  render() {
    const po = this.props.mouse;
    return (
      <div>
        <p>
          当前鼠标位置为：（{po.x}，{po.y}）
        </p>
      </div>
    );
  }
}

export default MouseTraker;
