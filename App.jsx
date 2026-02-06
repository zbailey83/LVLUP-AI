import { useState } from 'react';
import LearningPathsSimple from './LearningPathsSimple';
import ModuleDashboardSimple from './ModuleDashboardSimple';
import './global.css';

function App() {
  const [view, setView] = useState('paths');
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedPath, setSelectedPath] = useState(null);

  const handlePathSelect = (path) => {
    setSelectedPath(path);
    setView('dashboard');
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    setView('detail');
  };

  const handleBackToPaths = () => {
    setView('paths');
  };

  return (
    <div className="App">
      {view === 'paths' && (
        <LearningPathsSimple onPathSelect={handlePathSelect} />
      )}
      
      {view === 'dashboard' && (
        <ModuleDashboardSimple 
          onModuleSelect={handleModuleSelect}
          selectedPath={selectedPath}
          onBackToPaths={handleBackToPaths}
        />
      )}
      
      {view === 'detail' && selectedModule && (
        <div className="min-h-screen bg-brand-offwhite p-8">
          <button 
            onClick={() => setView('dashboard')}
            className="mb-6 px-6 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow"
          >
            ← Back to Modules
          </button>
          
          <div className="max-w-4xl mx-auto bg-white border-2 border-brand-black rounded-card p-8">
            <h1 className="text-4xl font-bold mb-4">{selectedModule.title}</h1>
            <p className="text-xl text-gray-700 mb-6">{selectedModule.outcome}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                <p className="text-xs text-gray-500 font-medium">Duration</p>
                <p className="font-bold">{selectedModule.time}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                <p className="text-xs text-gray-500 font-medium">Difficulty</p>
                <p className="font-bold">{selectedModule.difficulty}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border-2 border-brand-black">
                <p className="text-xs text-gray-500 font-medium">Category</p>
                <p className="font-bold">{selectedModule.category}</p>
              </div>
            </div>
            
            {selectedModule.tools && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Tools You'll Use</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedModule.tools.map((tool, idx) => (
                    <span key={idx} className="px-4 py-2 bg-brand-yellow border-2 border-brand-black rounded-lg font-bold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button className="w-full bg-brand-orange text-white px-6 py-4 rounded-full font-bold text-lg border-2 border-brand-black hover:shadow-neo transition-all">
              Start Module
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
