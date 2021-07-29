import React, { useReducer, useState } from 'react';
import styles from '@styles/style.css';

/* ---- interface ---- */
interface IState {
  count: number;
}

interface IHome {}

const initialState: IState = { count: 0 };

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
const Home: React.FC<IHome> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [intialVal, setText] = useState('Click me balabala !');

  function handleClick() {
    setText('ok, you did!');
  }
  return (
    <div className={styles.hello}>
      <p>you clicked {state.count} times</p>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset </button>
      <button onClick={() => dispatch({ type: 'incremet' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => handleClick()}>{intialVal}</button>
    </div>
  );
};

export default Home;
