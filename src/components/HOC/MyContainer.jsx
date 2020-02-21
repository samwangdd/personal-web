import React, { Component } from 'react';

/**
 * 通过 props proxy 封装HOC
 * @param {ReactNode} WrappedComponent 被包裹的组件，目标组件
 */
// const MyContainer = WrappedComponent =>
//   class extends Component {
//     render() {
//       const newProps = {
//         text: 'newText',
//       };
//       return (
//         <Fragment>
//           <span>props proxy 封装HOC</span>
//           <WrappedComponent {...this.props} {...newProps} />
//         </Fragment>
//       );
//     }
//   };

/**
 * 抽象state
 * @param {ReactNode} WrappedComponent 被包裹组件
 */
const MyContainer = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
      };
    }

    onHandleChange = e => {
      const val = e.target.value;
      this.setState({
        name: val,
      });
    };

    render() {
      console.log('myC :', this.props);
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onHandleChange,
        },
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };

export default MyContainer;
