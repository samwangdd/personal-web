import React, { Component, Fragment } from 'react';

/**
 * 通过 props proxy 封装HOC
 * @param {ReactNode} WrappedComponent 被包裹的组件，目标组件
 */
const MyContainer = WrappedComponent =>
  class extends Component {
    render() {
      const newProps = {
        text: 'newText',
      };
      console.log('this.props :', this.props);
      return (
        <Fragment>
          <span>封装HOC</span>
          <WrappedComponent {...this.props} {...newProps} />
        </Fragment>
      );
    }
  };

export default MyContainer;
