import React from "react";
import Todo from "./Todo";

import "../styles/todo.css";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo_name={todo.todo_name}
            description={todo.description}
            completed={todo.completed}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  );
};

export default React.memo(TodoList);
