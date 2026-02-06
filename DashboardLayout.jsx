import React from 'react';
import Sidebar from './Sidebar';
import CourseCard from './CourseCard';
import { Search, Bell, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-brand-offwhite font-kodchassan">
      {/* 1. Fixed Sidebar */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="flex-1 ml-20 p-8">
        
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10">
          <div className="relative w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search anything" 
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-brand-black bg-white focus:outline-none focus:shadow-neo transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white border-2 border-brand-black rounded-full cursor-pointer hover:bg-brand-yellow transition-colors">
              <Bell className="w-5 h-5" />
            </div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Profile" 
              className="w-12 h-12 rounded-full border-2 border-brand-black shadow-neo"
            />
          </div>
        </header>

        {/* Greeting Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Hello, Alexander! 👋</h1>
          <p className="text-gray-500 font-medium text-lg">Your progress is very good, keep it up!</p>
        </section>

        {/* Course Grid (Top 3) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <CourseCard 
            title="Digital Marketing for Beginners" 
            category="Marketing" 
            progress={80} 
            totalLessons={20} 
            currentLessons={16}
            colorClass="bg-brand-yellow"
            participants={["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2"]}
          />
          <CourseCard 
            title="Computer Science Level 1" 
            category="CS" 
            progress={40} 
            totalLessons={10} 
            currentLessons={4}
            colorClass="bg-brand-purple"
            participants={["https://i.pravatar.cc/150?u=3", "https://i.pravatar.cc/150?u=4"]}
          />
          <CourseCard 
            title="Fundamentals of Psychology" 
            category="Psychology" 
            progress={10} 
            totalLessons={10} 
            currentLessons={1}
            colorClass="bg-brand-blue"
            participants={["https://i.pravatar.cc/150?u=5", "https://i.pravatar.cc/150?u=6"]}
          />
        </section>

        {/* Bottom Section: Lessons & Statistics */}
        <div className="grid grid-cols-12 gap-8">
          {/* Lessons List (Col 8) */}
          <div className="col-span-12 lg:col-span-8 bg-white border-2 border-brand-black rounded-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Lessons for you</h2>
              <button className="text-sm font-bold flex items-center gap-1 hover:underline">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'UX Design Process', time: '1h 20m', tag: 'UI/UX', iconColor: 'bg-brand-orange' },
                { title: 'Facebook Ads Expert', time: '45m', tag: 'Ads', iconColor: 'bg-brand-yellow' },
                { title: 'Intro to Python', time: '2h 10m', tag: 'Dev', iconColor: 'bg-brand-purple' }
              ].map((lesson, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border-2 border-brand-black hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`${lesson.iconColor} w-12 h-12 rounded-xl border-2 border-brand-black flex items-center justify-center`}>
                      <PlayCircleIcon />
                    </div>
                    <div>
                      <h4 className="font-bold">{lesson.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{lesson.time} • {lesson.tag}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Activity/Stats (Col 4) */}
          <div className="col-span-12 lg:col-span-4 bg-brand-black text-white border-2 border-brand-black rounded-card p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Activity</h2>
              {/* This is where a Chart.js or Recharts bar would go */}
              <div className="h-40 bg-white/10 rounded-xl border-dashed border border-white/20 flex items-center justify-center italic text-white/40">
                [Weekly Activity Chart]
              </div>
            </div>
            <div className="mt-6 p-4 bg-brand-yellow rounded-2xl border-2 border-white text-brand-black">
              <p className="font-bold">Next Lesson:</p>
              <p className="text-sm">Advanced Wireframing</p>
              <p className="text-xs mt-1 font-medium">Starts in 2 hours</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

const PlayCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
    <path d="M10 8l6 4-6 4V8z" />
  </svg>
);

export default Dashboard;