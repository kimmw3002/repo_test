import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef, useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.data];
    }
    case "UPDATE_TODO": {
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const [Todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "ADD_TODO",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE_TODO",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE_TODO",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={Todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
