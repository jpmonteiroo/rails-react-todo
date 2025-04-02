class Api::TodosController < ApplicationController
  before_action :set_todo, only: %i[show update_completed destroy]

  # GET /todos
  def index
    todos = Todo.order(created_at: :desc).page(current_page)

    render json: {
      todos: todos,
      pagination: pagination_data(todos)
    }
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    result = TodoService.create_todo(todo_params)

    if result[:success]
      render json: result[:todo], status: :created
    else
      render json: { errors: result[:errors] }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update_completed
    if @todo.update(completed: params[:completed])
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy!
    head :no_content
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:todo_name, :description, :completed)
  end

  def current_page
    params[:page].to_i.positive? ? params[:page].to_i : 1
  end

  def pagination_data(collection)
    {
      current_page: collection.current_page,
      total_pages: collection.total_pages,
      next_page: collection.next_page,
      prev_page: collection.prev_page
    }
  end
end
