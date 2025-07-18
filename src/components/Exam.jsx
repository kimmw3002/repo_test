import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.value;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({ type: "INCREASE", value: 1 });
  };

  const onClickMinus = () => {
    dispatch({ type: "INCREASE", value: -1 });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
