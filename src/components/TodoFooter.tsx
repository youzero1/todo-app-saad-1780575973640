import clsx from 'clsx';
import { FilterType } from '@/types';

type TodoFooterProps = {
  activeCount: number;
  completedCount: number;
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
  onClearCompleted: () => void;
};

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function TodoFooter({
  activeCount,
  completedCount,
  filter,
  onFilterChange,
  onClearCompleted,
}: TodoFooterProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
      {/* Count */}
      <span>
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      {/* Filters */}
      <div className="flex gap-1">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={clsx(
              'px-2.5 py-1 rounded-md font-medium transition-colors',
              filter === f.value
                ? 'bg-indigo-500 text-white'
                : 'text-gray-500 hover:bg-gray-200'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Clear completed */}
      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="hover:text-red-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Clear completed
      </button>
    </div>
  );
}
