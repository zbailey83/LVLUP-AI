import { useState } from 'react';

import { ArrowLeft, Play, CheckCircle, Clock, Target } from 'lucide-react';

import { useAuth } from './context/AuthContext';

const ModuleDetailView = ({ module, onBack }) => {
  const { user, updateProgress } = useAuth();
  const [activeTab, setActiveTab] = useState('about');

  // Hardcoded lessons for now, mapped to IDs we'll use in DB
  // In a real app, these would probably come from the module object or a lessons table
  const defaultLessons = [
    { id: 1, title: 'Introduction & Setup', duration: '15 min' },
    { id: 2, title: 'Core Concepts', duration: '25 min' },
    { id: 3, title: 'Hands-On Implementation', duration: '45 min' },
    { id: 4, title: 'Testing & Optimization', duration: '20 min' },
    { id: 5, title: 'Next Steps', duration: '10 min' },
  ];

  // Merge completion status
  const lessons = defaultLessons.map(lesson => ({
    ...lesson,
    completed: !!user?.profile?.progress?.[module.id]?.[`lesson_${lesson.id}`]?.completed
  }));

  const completedCount = lessons.filter(l => l.completed).length;
  const isModuleComplete = completedCount === lessons.length;

  // Also check if module is explicitly marked as complete in 'main'
  const isModuleOfficiallyComplete = !!user?.profile?.progress?.[module.id]?.main?.completed;

  const handleToggleLesson = async (lessonId, currentStatus) => {
    // 1. Update lesson status
    await updateProgress({
      moduleId: module.id,
      lessonId: `lesson_${lessonId}`,
      completed: !currentStatus,
      score: !currentStatus ? 100 : 0
    });

    // 2. Check if we should auto-complete the module
    // We need to check based on the NEW status + other lessons
    const otherLessonsComplete = lessons.filter(l => l.id !== lessonId && l.completed).length;
    const allCompleteNow = !currentStatus && (otherLessonsComplete === lessons.length - 1);

    if (allCompleteNow) {
      await updateProgress({
        moduleId: module.id,
        lessonId: 'main',
        completed: true,
        score: 100
      });
    } else if (currentStatus && isModuleOfficiallyComplete) {
      // If unchecking a lesson, maybe uncomplete the module? 
      // For now, let's leave 'main' completion as a sticky badge unless explicitly unchecked, 
      // but typically if a lesson is undone, the module isn't "done".
      // Let's safe-guard:
      await updateProgress({
        moduleId: module.id,
        lessonId: 'main',
        completed: false,
        score: 0 // or keep simple
      });
    }
  };

  const handleStartModule = () => {
    // Just mark first lesson as complete or just scroll to it?
    // For now, let's just make it "Join/Start"
    if (completedCount === 0) {
      handleToggleLesson(1, false);
    }
    setActiveTab('about'); // or switch to content?
  };

  return (
    <div className="p-4 md:p-8 font-kodchassan animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 font-bold hover:underline"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Modules
      </button>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white border-2 border-brand-black rounded-card overflow-hidden mb-6 shadow-neo">
            <div className="aspect-video bg-gray-900 flex items-center justify-center border-b-2 border-brand-black relative group cursor-pointer">
              <Play className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-orange transition-all duration-500"
                  style={{ width: `${(completedCount / lessons.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-brand-black rounded-card p-6 shadow-neo">
            <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
              {['about', 'tools', 'resources'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-2 font-bold capitalize transition-colors ${activeTab === tab
                    ? 'border-b-4 border-brand-orange text-brand-orange -mb-0.5'
                    : 'text-gray-500 hover:text-brand-black'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'about' && (
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-4">{module.title}</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">{module.outcome}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                    <Clock className="w-6 h-6 mb-2 text-brand-orange" />
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Duration</p>
                    <p className="font-bold text-lg">{module.time}</p>
                  </div>
                  <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                    <Target className="w-6 h-6 mb-2 text-brand-purple" />
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Difficulty</p>
                    <p className="font-bold text-lg">{module.difficulty}</p>
                  </div>
                  <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                    <CheckCircle className="w-6 h-6 mb-2 text-brand-blue" />
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Category</p>
                    <p className="font-bold text-lg">{module.category}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tools' && module.tools && (
              <div className="animate-slide-up">
                <h3 className="text-xl font-bold mb-4">Tools You'll Use</h3>
                <div className="grid grid-cols-2 gap-3">
                  {module.tools.map((tool, idx) => (
                    <div key={idx} className="p-4 rounded-xl border-2 border-brand-black bg-brand-offwhite font-bold flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-black"></div>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="animate-slide-up">
                <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                <div className="p-6 bg-brand-yellow/10 border-2 border-brand-black border-dashed rounded-xl text-center">
                  <p className="text-gray-500 font-medium">Resources and template files will appear here.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white border-2 border-brand-black rounded-card p-6 sticky top-8 shadow-neo">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Course Content</h3>
              <span className="text-xs font-bold bg-brand-black text-white px-2 py-1 rounded">
                {completedCount}/{lessons.length} Done
              </span>
            </div>

            <div className="space-y-3">
              {lessons.map((lesson, idx) => (
                <div
                  key={lesson.id}
                  onClick={() => handleToggleLesson(lesson.id, lesson.completed)}
                  className={`group flex items-center justify-between p-3 rounded-xl border-2 transition-all cursor-pointer ${lesson.completed
                      ? 'border-brand-black bg-brand-yellow/10'
                      : 'border-gray-100 hover:border-brand-black hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full border-2 border-brand-black flex items-center justify-center font-bold text-sm transition-colors ${lesson.completed ? 'bg-brand-orange text-white' : 'bg-white group-hover:bg-brand-yellow'
                      }`}>
                      {lesson.completed ? '✓' : idx + 1}
                    </div>
                    <div>
                      <p className={`font-bold text-sm group-hover:underline ${lesson.completed ? 'text-gray-800' : ''}`}>{lesson.title}</p>
                      <p className="text-xs text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                  {lesson.completed ? (
                    <CheckCircle className="w-5 h-5 text-brand-orange fill-current" />
                  ) : (
                    <Play className="w-4 h-4 text-brand-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={isModuleComplete ? onBack : handleStartModule}
              className={`w-full mt-8 px-6 py-4 rounded-full font-bold border-2 border-brand-black hover:shadow-neo hover:-translate-y-1 transition-all flex items-center justify-center gap-2 ${isModuleComplete
                  ? 'bg-brand-green text-white bg-green-500' // Assuming brand-green or green-500 
                  : 'bg-brand-orange text-white'
                }`}
            >
              {isModuleComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Module Completed
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  {completedCount > 0 ? 'Continue Module' : 'Start Module'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailView;
