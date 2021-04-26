import React from "react";

import { Todo, deleteTodo } from "../store/todo";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const removeItem = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <input type="checkbox" />
      {/* <span>Todo 내용</span> */}
      <span>{todo.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  );
};

export default TodoItem;
