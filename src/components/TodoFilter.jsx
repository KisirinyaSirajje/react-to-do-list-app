function TodoFilter({ filter, setFilter }) {
    return (
      <div className="flex justify-center space-x-4 mb-6">
        <FilterButton 
          current={filter} 
          value="all" 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          current={filter} 
          value="active" 
          onClick={() => setFilter('active')}
        >
          Active
        </FilterButton>
        <FilterButton 
          current={filter} 
          value="completed" 
          onClick={() => setFilter('completed')}
        >
          Completed
        </FilterButton>
      </div>
    );
  }
  
  function FilterButton({ current, value, onClick, children }) {
    return (
      <button
        onClick={onClick}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          current === value
            ? 'bg-purple-600 text-white'
            : 'text-gray-600 hover:bg-purple-100'
        }`}
      >
        {children}
      </button>
    );
  }
  
  export default TodoFilter;
  