import React, { Component } from 'react';
/**
 * 通过refs使用引用
 * @param {ReactNode} WrappedComponent 被包裹的组件
 */
const RefsHOC = (WrappedComponent) =>
  class extends Component {
    componentDidMount() {
      console.log('didMount : 1');
    }

    componentWillUnmount() {
      console.log('willUnmount : 4');
    }
    proc(wrappedComponentInstance) {
      console.log('wrappedComponentInstance :', wrappedComponentInstance);
      // wrappedComponentInstance.renderCat();
    }

    render() {
      const props = Object.assign({}, this.props, { ref: this.proc.bind(this) });
      return <WrappedComponent {...props} />;
    }
  };

export default RefsHOC;
