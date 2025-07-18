import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

// higher order component(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   return prevProps.isDone === nextProps.isDone;
// });

export default memo(TodoItem);
