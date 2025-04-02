import { RiDeleteBack2Line } from "react-icons/ri";
import { useState } from "react";
import { update_todo } from "../api/endpoints";

import "../styles/todo.css";

const Todo = ({ id, todo_name, description, completed, deleteTodo }) => {
  const [isChecked, setChecked] = useState(completed);

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Erro ao deletar todo:", error);
    }
  };

  const handleComplete = async () => {
    try {
      const newStatus = !isChecked;
      await update_todo(id, newStatus);
      setChecked(newStatus);
    } catch (error) {
      console.error("Erro ao atualizar status do todo:", error);
    }
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <input
          id={`todo-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleComplete}
        />
        <div className="todo-content">
          <h3>{todo_name}</h3>
          {description && <p className="todo-description">{description}</p>}
        </div>
        <RiDeleteBack2Line onClick={handleDelete} size="20px" className="delete-icon" />
      </div>
    </div>
  );
};

export default Todo;
