const ModuleCard = ({ module, onClick }) => {
  const { title, category, outcome, difficulty, time, color, textColor, tags, tools } = module;

  return (
    <div 
      onClick={onClick}
      className={`neo-brutal-card p-6 flex flex-col justify-between h-full ${color} ${textColor} cursor-pointer`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="bg-brand-black text-white text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wide">
          {category}
        </span>
        <span className={`text-xs font-bold px-2 py-1 rounded ${
          difficulty === 'Beginner' ? 'bg-green-200 text-green-800' :
          difficulty === 'Intermediate' ? 'bg-yellow-200 text-yellow-800' :
          'bg-red-200 text-red-800'
        }`}>
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold leading-tight mb-3">
        {title}
      </h3>

      <p className="text-sm font-medium mb-4 flex-grow opacity-90">
        {outcome}
      </p>

      <div className="space-y-3">
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <span 
                key={idx}
                className="text-[10px] px-2 py-1 rounded border border-current font-bold uppercase tracking-wide"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-current/20">
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <span>⏱️</span>
            <span>{time}</span>
          </div>
          
          <button className="bg-brand-orange text-white px-5 py-2 rounded-full font-bold text-sm border-2 border-brand-black hover:shadow-neo transition-all flex items-center gap-1.5">
            ⚡ Start
          </button>
        </div>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-current/20">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-medium opacity-70">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
