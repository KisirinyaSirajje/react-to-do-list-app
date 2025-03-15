function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
      <li className="py-3 flex items-center justify-between group animate-fadeIn">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
          />
          <span 
            className={`ml-2 text-gray-800 ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => removeTodo(todo.id)}
          className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  