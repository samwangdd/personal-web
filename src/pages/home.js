import React, { useReducer } from 'react';
import styles from '@styles/style.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incremet':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

// hooks写法
function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.hello}>
      <p>you clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'incremet' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Home;
