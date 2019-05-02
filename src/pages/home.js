import React, { useState, useEffect } from 'react';

function useDocumentTitle (title) {
  // 类似 componentDidMount 和 componentDidUpdate
  useEffect(
    () => {
      document.title = title
      return () => (document.title = '前端精读')
    },
    [title]
  );
}

// hooks写法
function Home () {
  const [count, setCount] = useState(0);
  useDocumentTitle(`you clicked ${count} times`);
  return (
    <div>
      <p>you clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}

export default Home;

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
} */
