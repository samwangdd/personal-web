import React, { Component } from 'react';
import MyContainer from './HOC/MyContainer.jsx';

@MyContainer
class MyInput extends Component {
  render() {
    console.log('MyInput :', this.props);
    return <input type="text" name="name" {...this.props.name} />;
  }
}

export default MyInput;
