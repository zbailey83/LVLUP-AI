import React from 'react';

const CourseCard = ({ title, category, progress, totalLessons, currentLessons, colorClass, participants }) => {
  return (
    <div className={`neo-brutal-card p-6 flex flex-col justify-between h-full ${colorClass}`}>
      <div className="flex justify-between items-start">
        <span className="bg-brand-black text-white text-xs px-3 py-1 rounded-lg font-medium">
          {category}
        </span>
        <button className="text-brand-black">
          <BookmarkIcon /> 
        </button>
      </div>

      <h3 className="text-xl font-bold mt-4 leading-tight">
        {title}
      </h3>

      <div className="mt-8">
        <div className="flex justify-between text-xs font-semibold mb-2">
          <span>Progress</span>
          <span>{currentLessons}/{totalLessons} lessons</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-brand-black/10 h-2 rounded-full overflow-hidden border border-brand-black">
          <div 
            className="bg-brand-black h-full" 
            style={{ width: `${(currentLessons / totalLessons) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        {/* Avatar Stack */}
        <div className="flex -space-x-2">
          {participants.map((src, i) => (
            <img 
              key={i}
              className="w-8 h-8 rounded-full border-2 border-brand-black" 
              src={src} 
              alt="student" 
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-brand-black bg-brand-black text-[10px] text-white flex items-center justify-center">
            +120
          </div>
        </div>

        <button className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm border-2 border-brand-black hover:shadow-neo transition-all">
          Continue
        </button>
      </div>
    </div>
  );
};

const BookmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default CourseCard;