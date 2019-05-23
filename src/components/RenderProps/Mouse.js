import React, { PureComponent } from 'react';

class Mouse extends PureComponent {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    // console.log('this :', this);
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    console.log('Mouse :', 111);
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;
