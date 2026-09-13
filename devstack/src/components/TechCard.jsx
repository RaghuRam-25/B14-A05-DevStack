const TechCard = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="card flex h-full flex-col border border-slate-100 bg-[white] p-5">
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
            <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
          </div>
          <span className="rounded-full border border-orange-200 bg-orange-100 px-2 py-1 text-[10px] font-bold text-orange-600">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900">{tech.name}</h3>
        <p className="mb-4 line-clamp-3 text-sm leading-6 text-slate-600">{tech.description}</p>
      </div>

      <div>
        <div className="mb-4 flex items-center border-t border-slate-100 pt-3 text-xs text-slate-500">
          <span className="text-slate-500 bg-slate-200 rounded-xl px-3 py-1">{tech.category}</span>
          <span>
             <strong className="font-bold text-slate-700">{tech.difficulty}</strong>
          </span>
          <span className="flex items-center gap-1 font-bold text-amber-500">★ {tech.rating}</span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full rounded-xl px-4 py-3 text-sm font-bold transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-300 text-slate-500'
              : 'bg-[#111827] text-white hover:opacity-90'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};
export default TechCard;