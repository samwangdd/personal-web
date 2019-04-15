// import React, { Component } from 'react';
import React, { useState } from 'react';

// 类组件写法
/* class test extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
    }
  }
  render() {
    return (
      <div>
        <p>you clicked {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click me!</button>
      </div>
    );
  }
}*/

// hooks写法
function test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>you clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default test;