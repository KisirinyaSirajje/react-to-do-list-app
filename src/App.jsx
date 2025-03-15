import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [filter, setFilter] = useState('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-purple-600">
          <h1 className="text-2xl font-bold text-white text-center">React Todo List App</h1>
        </div>
        
        <div className="p-6">
          <TodoForm addTodo={addTodo} />
          
          <TodoFilter filter={filter} setFilter={setFilter} />
          
          <TodoList 
            todos={filteredTodos} 
            toggleTodo={toggleTodo} 
            removeTodo={removeTodo} 
          />
          
          <div className="mt-4 text-sm text-gray-500">
            <p>{todos.length} total items, {todos.filter(todo => todo.completed).length} completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
