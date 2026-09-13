import TechCard from './TechCard';

const TechGrid = ({ technologies, onAddToStack, selectedStack }) => {
  return (
    <section id="tech" className="pt-2">
      <div className="mb-6 full-screen flex items-center justify-between gap-3">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-slate-600">Explore the <span className="text-gradient-brand">Technologies</span></h2>
          <p className="mt-2 text-sm text-slate-300">Pick one technology per category to build your ideal stack.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologies.map((tech) => {
          const isAdded = selectedStack.some((item) => item.id === tech.id);

          return (
            <TechCard key={tech.id} tech={tech} onAddToStack={onAddToStack} isAdded={isAdded} />
          );
        })}
      </div>
    </section>
  );
};
export default TechGrid;