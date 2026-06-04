import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';

export default function TodoPage() {
  const {
    filtered,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    activeCount,
    completedCount,
    todos,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-widest text-indigo-600 uppercase drop-shadow-sm">
            Todos
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Input */}
          <TodoInput onAdd={addTodo} onToggleAll={toggleAll} hasItems={todos.length > 0} />

          {/* List */}
          {filtered.length > 0 ? (
            <TodoList
              todos={filtered}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ) : (
            <div className="py-12 text-center text-gray-400 text-sm">
              {filter === 'all' ? 'No tasks yet. Add one above!' :
               filter === 'active' ? 'No active tasks.' :
               'No completed tasks.'}
            </div>
          )}

          {/* Footer */}
          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Double-click a task to edit it
        </p>
      </div>
    </div>
  );
}
