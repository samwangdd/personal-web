import React, { useReducer } from 'react';

/* ---- interface ---- */
interface IState {
  count: number;
}

interface IHome {

}

const initialState: IState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'incremet':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}
// hooks写法
const Home: React.FC<IHome> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>you clicked {state.count} time</p>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'incremet' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Home;
