import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assume Sidebar handles its own mobile visibility
import CourseCard from './CourseCard';
import { Search, Bell, Menu, X } from 'lucide-react';

const ResponsiveDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-brand-offwhite font-kodchassan overflow-x-hidden">
      
      {/* 1. RESPONSIVE SIDEBAR */}
      {/* Hidden on mobile, visible on LG. Overlay menu for mobile. */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar />
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 w-full lg:ml-20 p-4 md:p-8">
        
        {/* MOBILE HEADER */}
        <header className="flex justify-between items-center mb-6 lg:mb-10">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 bg-white border-2 border-brand-black rounded-xl"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:relative md:block w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search anything" 
              className="w-full pl-12 pr-4 py-2.5 rounded-full border-2 border-brand-black bg-white"
            />
          </div>
          
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex flex-col items-end mr-2">
                <span className="text-sm font-bold">Alexander P.</span>
                <span className="text-[10px] text-gray-500">Premium Member</span>
             </div>
             <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-black shadow-neo"
              alt="User"
            />
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hello, Alexander! 👋</h1>
          <p className="text-gray-500 font-medium text-base md:text-lg">Your progress is very good, keep it up!</p>
        </section>

        {/* FEATURED GRID: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          <CourseCard title="Digital Marketing" category="Marketing" colorClass="bg-brand-yellow" currentLessons={16} totalLessons={20} participants={["#","#"]} />
          <CourseCard title="Computer Science" category="CS" colorClass="bg-brand-purple" currentLessons={4} totalLessons={10} participants={["#","#"]} />
          <CourseCard title="Psychology" category="Psychology" colorClass="bg-brand-blue" currentLessons={1} totalLessons={10} participants={["#","#"]} />
        </section>

        {/* SECONDARY GRID: Stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Lessons: Full width on mobile/tablet, 8/12 on desktop */}
          <div className="col-span-1 lg:col-span-8 bg-white border-2 border-brand-black rounded-card p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Lessons for you</h2>
            <div className="space-y-4">
               {/* Lesson items go here (see previous snippet) */}
               <LessonRow title="UX Design Process" time="1h 20m" color="bg-brand-orange" />
               <LessonRow title="Facebook Ads" time="45m" color="bg-brand-yellow" />
            </div>
          </div>

          {/* Activity: Full width on mobile, 4/12 on desktop */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            <div className="bg-brand-black text-white border-2 border-brand-black rounded-card p-6 h-full min-h-[250px] flex flex-col justify-between">
              <h2 className="text-xl font-bold">Activity</h2>
              <div className="flex-1 flex items-end gap-2 mt-4 pb-2">
                {/* Visual Bar Chart Mockup */}
                {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/20 rounded-t-sm border-x border-t border-white/10 hover:bg-brand-yellow transition-all" style={{height: `${h}%`}} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/* Background Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

const LessonRow = ({ title, time, color }) => (
  <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl border-2 border-brand-black hover:bg-gray-50 transition-all cursor-pointer">
    <div className="flex items-center gap-3 md:gap-4">
      <div className={`${color} w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-brand-black flex items-center justify-center`}>
        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
      </div>
      <div>
        <h4 className="font-bold text-sm md:text-base">{title}</h4>
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">{time}</p>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </div>
);

export default ResponsiveDashboard;