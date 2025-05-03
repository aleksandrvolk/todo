import React from 'react';

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-item" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      margin: '5px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#6c757d' : '#212529',
        flex: 1
      }}>
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo; 