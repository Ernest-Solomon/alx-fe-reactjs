import React, { useState } from 'react';
import { Trash2, Plus, Check, X } from 'lucide-react';

// AddTodoForm Component
const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          data-testid="todo-input"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          data-testid="add-todo-button"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// TodoItem Component
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-400'
        }`}
        data-testid={`toggle-todo-${todo.id}`}
      >
        {todo.completed && <Check className="w-4 h-4" />}
      </button>
      
      <span
        className={`flex-1 ${
          todo.completed
            ? 'line-through text-gray-500'
            : 'text-gray-800'
        } transition-colors cursor-pointer`}
        onClick={() => onToggle(todo.id)}
        data-testid={`todo-text-${todo.id}`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
        data-testid={`delete-todo-${todo.id}`}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

// Main TodoList Component
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Write tests', completed: true },
    { id: 3, text: 'Deploy app', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Todo List
        </h1>
        
        <div className="text-center mb-6 text-gray-600">
          {completedCount} of {totalCount} tasks completed
        </div>

        <AddTodoForm onAddTodo={addTodo} />

        <div className="space-y-3" data-testid="todo-list">
          {todos.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No todos yet. Add one above!
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Completed ({completedCount})
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                Pending ({totalCount - completedCount})
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
