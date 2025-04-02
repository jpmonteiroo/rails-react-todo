import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ENDPOINTS = {
  TODOS: "todos",
  TODO: (id) => `todos/${id}`,
  UPDATE_TODO: (id) => `todos/${id}/update_completed`,
};

const handleRequest = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export const get_todos = (page = 1) => 
  handleRequest(apiClient.get(`${ENDPOINTS.TODOS}?page=${page}`));

export const create_todo = (todo_name, description) =>
  handleRequest(
    apiClient.post(ENDPOINTS.TODOS, { todo_name, description, completed: false })
  );

export const delete_todo = (id) =>
  handleRequest(apiClient.delete(ENDPOINTS.TODO(id)));

export const update_todo = (id, completed) =>
  handleRequest(apiClient.patch(ENDPOINTS.UPDATE_TODO(id), { completed }));
