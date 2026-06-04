import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type TodoInputProps = {
  onAdd: (text: string) => void;
  onToggleAll: () => void;
  hasItems: boolean;
};

export default function TodoInput({ onAdd, onToggleAll, hasItems }: TodoInputProps) {
  const [value, setValue] = useState('');

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onAdd(value);
      setValue('');
    }
  }

  return (
    <div className="flex items-center px-4 py-3 border-b border-gray-100">
      {hasItems && (
        <button
          onClick={onToggleAll}
          className="mr-3 text-gray-400 hover:text-indigo-500 transition-colors"
          title="Toggle all"
        >
          <ChevronDown size={22} />
        </button>
      )}
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className={clsx(
          'flex-1 text-base outline-none placeholder-gray-300 text-gray-700 bg-transparent py-2',
          !hasItems && 'pl-2'
        )}
      />
      <button
        onClick={() => { onAdd(value); setValue(''); }}
        disabled={!value.trim()}
        className="ml-3 px-4 py-1.5 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Add
      </button>
    </div>
  );
}
