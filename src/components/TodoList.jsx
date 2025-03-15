import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No tasks to display
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
