import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilteredTodos = () => {
    if (!searchTerm) return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("Analyzing data...");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>총 할 일: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>미완료 할 일: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <div className="todo-items">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
