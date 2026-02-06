import { useState } from 'react';
import Sidebar from './Sidebar';
import { ArrowLeft, Play, CheckCircle, Clock, Target } from 'lucide-react';

const ModuleDetailView = ({ module, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');

  const lessons = [
    { id: 1, title: 'Introduction & Setup', duration: '15 min', completed: false },
    { id: 2, title: 'Core Concepts', duration: '25 min', completed: false },
    { id: 3, title: 'Hands-On Implementation', duration: '45 min', completed: false },
    { id: 4, title: 'Testing & Optimization', duration: '20 min', completed: false },
    { id: 5, title: 'Next Steps', duration: '10 min', completed: false },
  ];

  return (
    <div className="flex min-h-screen bg-brand-offwhite font-kodchassan">
      <Sidebar />

      <main className="flex-1 ml-20 p-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 mb-6 font-bold hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Modules
        </button>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white border-2 border-brand-black rounded-card overflow-hidden mb-6">
              <div className="aspect-video bg-gray-900 flex items-center justify-center border-b-2 border-brand-black">
                <Play className="w-20 h-20 text-white opacity-80" />
              </div>
            </div>

            <div className="bg-white border-2 border-brand-black rounded-card p-6">
              <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
                {['about', 'tools', 'resources'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-2 font-bold capitalize transition-colors ${
                      activeTab === tab 
                        ? 'border-b-2 border-brand-orange text-brand-orange -mb-0.5' 
                        : 'text-gray-500 hover:text-brand-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">{module.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{module.outcome}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                      <Clock className="w-5 h-5 mb-2 text-brand-orange" />
                      <p className="text-xs text-gray-500 font-medium">Duration</p>
                      <p className="font-bold">{module.time}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                      <Target className="w-5 h-5 mb-2 text-brand-purple" />
                      <p className="text-xs text-gray-500 font-medium">Difficulty</p>
                      <p className="font-bold">{module.difficulty}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                      <CheckCircle className="w-5 h-5 mb-2 text-brand-blue" />
                      <p className="text-xs text-gray-500 font-medium">Category</p>
                      <p className="font-bold">{module.category}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tools' && module.tools && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Tools You'll Use</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {module.tools.map((tool, idx) => (
                      <div key={idx} className="p-4 rounded-xl border-2 border-brand-black bg-gray-50 font-bold">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                  <p className="text-gray-500">Resources coming soon...</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white border-2 border-brand-black rounded-card p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Course Content</h3>
              <div className="space-y-2">
                {lessons.map((lesson, idx) => (
                  <div 
                    key={lesson.id}
                    className="flex items-center justify-between p-3 rounded-xl border-2 border-brand-black hover:bg-brand-yellow transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 border-brand-black flex items-center justify-center font-bold text-sm ${
                        lesson.completed ? 'bg-brand-orange text-white' : 'bg-white'
                      }`}>
                        {lesson.completed ? '✓' : idx + 1}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{lesson.title}</p>
                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-brand-orange text-white px-6 py-3 rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Start Module
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleDetailView;
