import React from "react";
// import { useReactiveVar, useQuery } from "@apollo/client";
import { useReactiveVar } from "@apollo/client";

import TodoItem from "./TodoItem";
import todoVar from "../store/todo";
// import { GET_TODOS } from "../queries.todo";

const TodoList: React.FC = () => {
  // const {data} = useQuery(GET_TODOS)
  const todos = useReactiveVar(todoVar);

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todo_${todo.id}`} />
      ))}
      {/* {data &&
        data.getTodos.length &&
        data.getTodos.map((todo: Todo) => (
          <TodoItem todo={todo} key={`todo_${todo.id}`} />
        ))} */}
    </section>
  );
};

export default TodoList;
