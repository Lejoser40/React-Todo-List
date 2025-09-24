import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className='max-w-2xl mx-auto px-4'>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Todo App
        </h1>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* <!-- Header --> */}
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg font-semibold text-gray-900">My Tasks</h2>
            {/* <span class="text-sm text-gray-500">0 of 0 completed</span> */}
          </div>

          {/* <!-- Add Task Input --> */}
          <div class="flex gap-2 mb-6">
            <input
              class="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
            />

            <button
              class="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              onClick={addTodo}>Add</button>
          </div>

          {/* <!-- Empty State --> */}
          {/* <div class="text-center py-12">
            <p class="text-gray-500">No tasks yet. Add one above to get started!</p>
          </div> */}

          {/* Task list */}
          <div class="space-y-2">
            {todos.map(todo => (
              <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span key={todo.id} className="flex-1 text-gray-900">
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
