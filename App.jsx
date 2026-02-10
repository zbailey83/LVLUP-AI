import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import LearningPathsSimple from './LearningPathsSimple';
import ModuleDashboardSimple from './ModuleDashboardSimple';
import Module1Content from './Module1Content';
import Module2Content from './Module2Content';
import Module3Content from './Module3Content';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import UserProfile from './components/profile/UserProfile';
import './global.css';

function App() {
  const { user, signOut } = useAuth();
  const [view, setView] = useState('paths');
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedPath, setSelectedPath] = useState(null);

  const handlePathSelect = (path) => {
    setSelectedPath(path);
    setView('dashboard');
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
    // Check module ID for custom content
    if (module.id === 1) {
      setView('module1');
    } else if (module.id === 2) {
      setView('module2');
    } else if (module.id === 3) {
      setView('module3');
    } else {
      setView('detail');
    }
  };

  const handleBackToPaths = () => {
    setView('paths');
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
  };

  const handleLoginSuccess = () => {
    setView('paths');
  };

  const handleSignupSuccess = () => {
    // Optionally redirect to onboarding or dashboard
    setView('paths');
  };

  const handleLogout = async () => {
    await signOut();
    setView('login');
  };

  return (
    <div className="App relative">
      {/* Auth Navigation */}
      <div className="absolute top-4 right-4 z-50 flex gap-4">
        {user ? (
          <div className="flex gap-2">
            <button
              onClick={() => setView('profile')}
              className="px-4 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow shadow-neo-sm transition-all"
            >
              {user.profile?.avatar_url ? (
                <img src={user.profile.avatar_url} alt="Avatar" className="w-6 h-6 rounded-full inline-block mr-2" />
              ) : null}
              {user.profile?.name || 'Profile'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-brand-black text-white border-2 border-brand-black rounded-full font-bold hover:bg-gray-800 shadow-neo-sm transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          view !== 'login' && view !== 'signup' && (
            <button
              onClick={() => setView('login')}
              className="px-6 py-2 bg-brand-yellow border-2 border-brand-black rounded-full font-bold hover:shadow-neo transition-all"
            >
              Sign In
            </button>
          )
        )}
      </div>

      {view === 'login' && (
        <LoginForm
          onLoginSuccess={handleLoginSuccess}
          onSwitchToSignup={() => setView('signup')}
        />
      )}

      {view === 'signup' && (
        <SignupForm
          onSignupSuccess={handleSignupSuccess}
          onSwitchToLogin={() => setView('login')}
        />
      )}

      {view === 'profile' && (
        <UserProfile onBack={() => setView('paths')} />
      )}

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

      {view === 'module1' && (
        <Module1Content onBack={handleBackToDashboard} />
      )}

      {view === 'module2' && (
        <Module2Content onBack={handleBackToDashboard} />
      )}

      {view === 'module3' && (
        <Module3Content onBack={handleBackToDashboard} />
      )}

      {view === 'detail' && selectedModule && (
        <div className="min-h-screen bg-brand-offwhite p-8">
          <button
            onClick={handleBackToDashboard}
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

            <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">📚 Full module content coming soon!</p>
              <p className="font-medium">This module will include step-by-step guides, video tutorials, and interactive exercises.</p>
            </div>

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
