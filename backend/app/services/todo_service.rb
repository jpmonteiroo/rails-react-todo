class TodoService
  def self.create_todo(params)
    todo = Todo.new(params)
    if todo.save
      { success: true, todo: todo }
    else
      { success: false, errors: todo.errors.full_messages }
    end
  end
end
