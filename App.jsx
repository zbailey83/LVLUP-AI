import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import LearningPathsSimple from './LearningPathsSimple';
import ModuleDashboardSimple from './ModuleDashboardSimple';
import ModuleDetailView from './ModuleDetailView';
import Module1Content from './Module1Content';
import Module4Content from './Module4Content';
import Module2Content from './Module2Content';
import Module3Content from './Module3Content';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import UserProfile from './components/profile/UserProfile';
import SplashPage from './components/splash/SplashPage';
import Sidebar from './Sidebar';
import './global.css';

// Platform Layout Component
const PlatformLayout = ({ children, padding = true, activeView, onNavigate, onLogout }) => (
  <div className="flex min-h-screen bg-brand-offwhite font-kodchassan">
    <Sidebar activeView={activeView} onNavigate={onNavigate} onLogout={onLogout} />
    <main className={`flex-1 ml-0 md:ml-20 pt-16 md:pt-0 ${padding ? '' : ''} animate-fade-in transition-all duration-300`}>
      {children}
    </main>
  </div>
);

// Placeholder Component for Coming Soon Pages
const ComingSoonPage = ({ title }) => (
  <div className="p-12 flex flex-col items-center justify-center h-[80vh] text-center">
    <div className="text-6xl mb-6">🚧</div>
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-xl text-gray-500 max-w-lg">
      This feature is currently under construction. Check back soon for updates!
    </p>
  </div>
);

function App() {
  const { user, signOut } = useAuth();
  const [view, setView] = useState('splash');
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
    } else if (module.id === 4) {
      setView('module4');
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
      {/* Auth Navigation (Floating) - Only shown on auth pages or if not in Platform Layout */}
      {(view === 'splash' || view === 'login' || view === 'signup') && (
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
            <button
              onClick={() => setView('login')}
              className="px-6 py-2 bg-brand-yellow border-2 border-brand-black rounded-full font-bold hover:shadow-neo transition-all"
            >
              Sign In
            </button>
          )}
        </div>
      )}

      {/* Views */}

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

      {view === 'splash' && (
        <SplashPage
          onGetStarted={() => setView('signup')}
          onLogin={() => setView('login')}
        />
      )}

      {/* Authenticated Routes with Platform Layout */}

      {view === 'paths' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <LearningPathsSimple
            onPathSelect={handlePathSelect}
            user={user}
            onProfileClick={() => setView('profile')}
          />
        </PlatformLayout>
      )}

      {view === 'dashboard' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <ModuleDashboardSimple
            onModuleSelect={handleModuleSelect}
            selectedPath={selectedPath}
            onBackToPaths={handleBackToPaths}
            user={user}
            onProfileClick={() => setView('profile')}
          />
        </PlatformLayout>
      )}

      {/* Feature Placeholders */}
      {view === 'messages' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <ComingSoonPage title="Messages Center" />
        </PlatformLayout>
      )}

      {view === 'community' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <ComingSoonPage title="Community Hub" />
        </PlatformLayout>
      )}

      {/* Module Content Views */}

      {view === 'module1' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <Module1Content onBack={() => setView('dashboard')} />
        </PlatformLayout>
      )}

      {view === 'module4' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <Module4Content onBack={() => setView('dashboard')} />
        </PlatformLayout>
      )}

      {view === 'module2' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <Module2Content onBack={handleBackToDashboard} />
        </PlatformLayout>
      )}

      {view === 'module3' && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <Module3Content onBack={handleBackToDashboard} />
        </PlatformLayout>
      )}

      {view === 'detail' && selectedModule && (
        <PlatformLayout activeView={view} onNavigate={setView} onLogout={handleLogout}>
          <ModuleDetailView module={selectedModule} onBack={handleBackToDashboard} />
        </PlatformLayout>
      )}
    </div>
  );
}

export default App;
