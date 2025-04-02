require 'rails_helper'

RSpec.describe "Api::TodosController", type: :request do
  let!(:todos) { create_list(:todo, 10) }

  describe "GET /api/todos" do
    it "returns paginated todos" do
      get "/api/todos", params: { page: 1 }

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)
      
      expect(json_response["todos"].size).to be <= Kaminari.config.default_per_page
      expect(json_response["pagination"]["current_page"]).to eq(1)
    end
  end

  describe "GET /api/todos/:id" do
    it "returns a specific todo" do
      todo = todos.first
      get "/api/todos/#{todo.id}"

      expect(response).to have_http_status(:ok)
      json_response = JSON.parse(response.body)

      expect(json_response["todo_name"]).to eq(todo.todo_name)
    end
  end

  describe "POST /api/todos" do
    let(:valid_params) { { todo: { todo_name: "New Task", description: "Test Description", completed: false } } }

    it "creates a new todo" do
      expect {
        post "/api/todos", params: valid_params
      }.to change(Todo, :count).by(1)

      expect(response).to have_http_status(:created)
    end
  end

  describe "PATCH /api/todos/:id/update_completed" do
    it "updates the completed status of a todo" do
      todo = todos.first
      patch "/api/todos/#{todo.id}/update_completed", params: { completed: true }

      expect(response).to have_http_status(:ok)
      expect(todo.reload.completed).to be true
    end
  end

  describe "DELETE /api/todos/:id" do
    it "deletes a todo" do
      todo = todos.first
      expect {
        delete "/api/todos/#{todo.id}"
      }.to change(Todo, :count).by(-1)

      expect(response).to have_http_status(:no_content)
    end
  end
end
