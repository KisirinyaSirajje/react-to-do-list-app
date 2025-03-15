import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center border-b border-purple-500 py-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded transition duration-200 ease-in-out transform hover:scale-105"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
