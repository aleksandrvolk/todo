import React, { useState } from 'react';
import Todo from './Todo';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false
        }
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#343a40',
        marginBottom: '20px'
      }}>
        Todo List
      </h1>
      
      <form onSubmit={addTodo} style={{
        display: 'flex',
        marginBottom: '20px',
        gap: '10px'
      }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ced4da',
            borderRadius: '4px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add
        </button>
      </form>

      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList; 