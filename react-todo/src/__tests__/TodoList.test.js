// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  // Test 1: Initial Render Test
  test('renders TodoList component correctly with initial todos', () => {
    // Check if the main heading is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Deploy app')).toBeInTheDocument();
    
    // Check if the add todo input is rendered
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
    
    // Check if the completion counter is rendered
    expect(screen.getByText('1 of 3 tasks completed')).toBeInTheDocument();
  });

  test('displays correct initial state', () => {
    // Check that "Write tests" is marked as completed (has line-through)
    const writeTestsTodo = screen.getByTestId('todo-text-2');
    expect(writeTestsTodo).toHaveClass('line-through');
    
    // Check that other todos are not completed
    const learnReactTodo = screen.getByTestId('todo-text-1');
    const deployAppTodo = screen.getByTestId('todo-text-3');
    expect(learnReactTodo).not.toHaveClass('line-through');
    expect(deployAppTodo).not.toHaveClass('line-through');
  });
});

describe('Adding Todos', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  // Test 2: Test Adding Todos
  test('allows user to add a new todo', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Type new todo text
    fireEvent.change(input, { target: { value: 'New todo item' } });
    expect(input.value).toBe('New todo item');
    
    // Click add button
    fireEvent.click(addButton);
    
    // Check if new todo appears in the list
    expect(screen.getByText('New todo item')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
    
    // Check if counter is updated
    expect(screen.getByText('1 of 4 tasks completed')).toBeInTheDocument();
  });

  test('allows user to add todo by pressing Enter key', () => {
    const input = screen.getByTestId('todo-input');
    
    // Type new todo text
    fireEvent.change(input, { target: { value: 'Todo via Enter key' } });
    
    // Press Enter key
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
    
    // Check if new todo appears in the list
    expect(screen.getByText('Todo via Enter key')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  test('does not add empty todos', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Should still have only 3 initial todos
    expect(screen.getByText('1 of 3 tasks completed')).toBeInTheDocument();
  });

  test('trims whitespace from new todos', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Add todo with extra whitespace
    fireEvent.change(input, { target: { value: '  Trimmed todo  ' } });
    fireEvent.click(addButton);
    
    // Check if todo appears trimmed
    expect(screen.getByText('Trimmed todo')).toBeInTheDocument();
  });
});

describe('Toggling Todos', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  // Test 3: Test Toggling Todos
  test('allows user to toggle todo completion status by clicking checkbox', () => {
    // Initially "Learn React" is not completed
    const learnReactText = screen.getByTestId('todo-text-1');
    expect(learnReactText).not.toHaveClass('line-through');
    
    // Click the toggle button for "Learn React"
    const toggleButton = screen.getByTestId('toggle-todo-1');
    fireEvent.click(toggleButton);
    
    // Check if it becomes completed
    expect(learnReactText).toHaveClass('line-through');
    
    // Check if counter is updated
    expect(screen.getByText('2 of 3 tasks completed')).toBeInTheDocument();
  });

  test('allows user to toggle todo completion status by clicking text', () => {
    // Click on the todo text itself
    const learnReactText = screen.getByTestId('todo-text-1');
    fireEvent.click(learnReactText);
    
    // Check if it becomes completed
    expect(learnReactText).toHaveClass('line-through');
    
    // Check if counter is updated
    expect(screen.getByText('2 of 3 tasks completed')).toBeInTheDocument();
  });

  test('allows user to untoggle completed todo', () => {
    // "Write tests" is initially completed
    const writeTestsText = screen.getByTestId('todo-text-2');
    expect(writeTestsText).toHaveClass('line-through');
    
    // Click to untoggle
    const toggleButton = screen.getByTestId('toggle-todo-2');
    fireEvent.click(toggleButton);
    
    // Check if it becomes uncompleted
    expect(writeTestsText).not.toHaveClass('line-through');
    
    // Check if counter is updated
    expect(screen.getByText('0 of 3 tasks completed')).toBeInTheDocument();
  });
});

describe('Deleting Todos', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  // Test 4: Test Deleting Todos
  test('allows user to delete a todo', () => {
    // Initially should have "Learn React" todo
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Click delete button for "Learn React" (id: 1)
    const deleteButton = screen.getByTestId('delete-todo-1');
    fireEvent.click(deleteButton);
    
    // Check if todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check if counter is updated (now 1 of 2 completed since "Write tests" was completed)
    expect(screen.getByText('1 of 2 tasks completed')).toBeInTheDocument();
  });

  test('deleting completed todo updates counter correctly', () => {
    // Delete the completed todo "Write tests" (id: 2)
    const deleteButton = screen.getByTestId('delete-todo-2');
    fireEvent.click(deleteButton);
    
    // Check if todo is removed
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
    
    // Check if counter is updated (now 0 of 2 completed)
    expect(screen.getByText('0 of 2 tasks completed')).toBeInTheDocument();
  });

  test('can delete all todos', () => {
    // Delete all three todos
    fireEvent.click(screen.getByTestId('delete-todo-1'));
    fireEvent.click(screen.getByTestId('delete-todo-2'));
    fireEvent.click(screen.getByTestId('delete-todo-3'));
    
    // Check if empty message is shown
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    
    // Check if counter shows 0 of 0
    expect(screen.getByText('0 of 0 tasks completed')).toBeInTheDocument();
  });
});

describe('Integration Tests', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('complete workflow: add, toggle, and delete todo', () => {
    // Add a new todo
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: 'Integration test todo' } });
    fireEvent.click(addButton);
    
    // Verify todo was added
    expect(screen.getByText('Integration test todo')).toBeInTheDocument();
    expect(screen.getByText('1 of 4 tasks completed')).toBeInTheDocument();
    
    // Find the new todo's ID by looking for its toggle button
    const newTodoText = screen.getByText('Integration test todo');
    const newTodoToggle = newTodoText.parentElement.querySelector('[data-testid^="toggle-todo-"]');
    
    // Toggle the new todo to completed
    fireEvent.click(newTodoToggle);
    
    // Verify it's completed
    expect(newTodoText).toHaveClass('line-through');
    expect(screen.getByText('2 of 4 tasks completed')).toBeInTheDocument();
    
    // Delete the new todo
    const newTodoDelete = newTodoText.parentElement.querySelector('[data-testid^="delete-todo-"]');
    fireEvent.click(newTodoDelete);
    
    // Verify it's deleted
    expect(screen.queryByText('Integration test todo')).not.toBeInTheDocument();
    expect(screen.getByText('1 of 3 tasks completed')).toBeInTheDocument();
  });

  test('status indicators update correctly', () => {
    // Check initial status indicators
    expect(screen.getByText('Completed (1)')).toBeInTheDocument();
    expect(screen.getByText('Pending (2)')).toBeInTheDocument();
    
    // Toggle a pending todo to completed
    fireEvent.click(screen.getByTestId('toggle-todo-1'));
    
    // Check updated indicators
    expect(screen.getByText('Completed (2)')).toBeInTheDocument();
    expect(screen.getByText('Pending (1)')).toBeInTheDocument();
  });
});

describe('Edge Cases', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('handles rapid consecutive additions', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Add multiple todos rapidly
    for (let i = 1; i <= 5; i++) {
      fireEvent.change(input, { target: { value: `Todo ${i}` } });
      fireEvent.click(addButton);
    }
    
    // Check all todos were added
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(`Todo ${i}`)).toBeInTheDocument();
    }
    
    // Check counter
    expect(screen.getByText('1 of 8 tasks completed')).toBeInTheDocument();
  });

  test('handles special characters in todo text', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    const specialTodo = 'Todo with special chars: @#$%^&*()_+-=[]{}|;:,.<>?';
    fireEvent.change(input, { target: { value: specialTodo } });
    fireEvent.click(addButton);
    
    expect(screen.getByText(specialTodo)).toBeInTheDocument();
  });

  test('handles very long todo text', () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    const longTodo = 'A'.repeat(200);
    fireEvent.change(input, { target: { value: longTodo } });
    fireEvent.click(addButton);
    
    expect(screen.getByText(longTodo)).toBeInTheDocument();
  });
});
