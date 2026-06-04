import { useState, useRef, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import clsx from 'clsx';
import { Todo } from '@/types';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  function handleDoubleClick() {
    setEditValue(todo.text);
    setEditing(true);
  }

  function handleEditSubmit() {
    if (editValue.trim()) {
      onEdit(todo.id, editValue);
    }
    setEditing(false);
  }

  function handleEditKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleEditSubmit();
    if (e.key === 'Escape') {
      setEditValue(todo.text);
      setEditing(false);
    }
  }

  return (
    <li className="group flex items-center px-4 py-3 hover:bg-gray-50 transition-colors">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={clsx(
          'flex-shrink-0 w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-indigo-500 border-indigo-500'
            : 'border-gray-300 hover:border-indigo-400'
        )}
        title={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="2,6 5,9 10,3" />
          </svg>
        )}
      </button>

      {/* Text / Edit input */}
      {editing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={handleEditKeyDown}
          className="flex-1 text-sm text-gray-700 bg-white border border-indigo-300 rounded px-2 py-0.5 outline-none focus:ring-2 focus:ring-indigo-300"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className={clsx(
            'flex-1 text-sm select-none cursor-default transition-colors',
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          )}
        >
          {todo.text}
        </span>
      )}

      {/* Delete */}
      {!editing && (
        <button
          onClick={() => onDelete(todo.id)}
          className="ml-3 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      )}
    </li>
  );
}
