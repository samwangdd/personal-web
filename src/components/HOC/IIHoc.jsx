// import React from 'react';

/**
 * 反向继承HOC
 */
const IIHOC = (WarppedComponent) =>
  class extends WarppedComponent {
    render() {
      console.log('this.props :', this.props);
      if (this.props.history) {
        return super.render();
      } else {
        return null;
      }
    }
  };

export default IIHOC;
