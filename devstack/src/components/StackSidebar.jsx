const StackSidebar = ({ selectedStack, onRemove, onRemoveAll }) => {
  const selectedLabel =
    selectedStack.length === 1
      ? '1 Technology Selected'
      : `${selectedStack.length} Technology Selected`;

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-100 bg-[white] p-4 text-slate-900 shadow-sm">
      <div className="mb-4 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">
          Your Stack
        </h2>
        <p className="text-slate-400">
          {selectedLabel}
        </p>
      </div>
      {selectedStack.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white/30 px-6 py-12 text-center text-slate-500">
          <p className="text-lg font-medium text-slate-600">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {selectedStack.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-300 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
                  <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
                </div>
                <div>
                  <h4 className="text-base font-bold leading-tight text-slate-900">{item.name}</h4>
                  <span className="text-[10px] font-medium text-slate-500">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="px-2 py-1 text-xl text-slate-500 transition hover:text-red-500"
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-base font-bold text-red-500 transition hover:bg-red-100"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};
export default StackSidebar;