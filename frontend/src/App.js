import React, { useState, useEffect } from "react";
import "./styles/app.css";
import "./styles/pagination.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import { get_todos, create_todo, delete_todo } from "./api/endpoints";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    console.log("🟢 useEffect disparado. Página atual:", currentPage);
    fetchTodos(currentPage);
  }, [currentPage]);

  const fetchTodos = async (page) => {
    console.log("Enviando requisição para:", `/api/todos?page=${page}`); // Debug
    try {
      const response = await get_todos(page);
      setTodos(response.todos);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (todo_name, description) => {
    await create_todo(todo_name, description);
    setCurrentPage(1);  // Garante que a atualização volte para a página 1
    fetchTodos(1);
  };

  const deleteTodoHandler = async (id) => {
    try {
      await delete_todo(id);
      fetchTodos(currentPage); // Recarrega os dados corretamente
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="title">Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(pagination.prev_page)}
            disabled={!pagination.prev_page}
          >
            Previous
          </button>
          <span>Page {pagination.current_page} of {pagination.total_pages}</span>
          <button
            onClick={() => setCurrentPage(pagination.next_page)}
            disabled={!pagination.next_page}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
