import { useState } from 'react';
import Sidebar from './Sidebar';
import ModuleCard from './ModuleCard';
import { Search, Bell, Menu, X, Filter } from 'lucide-react';
import modulesData from './modules.json';

import contentMachineIcon from './assets/content-machine.svg';
import salesAutomatorIcon from './assets/sales-automator.svg';
import customerServiceIcon from './assets/customer-service.svg';
import marketingMultiplierIcon from './assets/marketing-multiplier.svg';
import dataDrivenIcon from './assets/Data-driven.svg';
import efficiencyExpertIcon from './assets/Efficiency-Expert.svg';
import toucanIcon from './assets/toucan-svgrepo-com.svg';

const ResponsiveModuleDashboard = ({ onModuleSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Core Track', 'Marketing', 'Sales', 'Support', 'Data', 'Strategy'];

  const categoryConfig = {
    'All': { icon: toucanIcon, color: 'bg-white', textColor: 'text-brand-black' },
    'Core Track': { icon: contentMachineIcon, color: 'bg-brand-orange', textColor: 'text-white' },
    'Marketing': { icon: marketingMultiplierIcon, color: 'bg-brand-purple', textColor: 'text-brand-black' },
    'Sales': { icon: salesAutomatorIcon, color: 'bg-brand-yellow', textColor: 'text-brand-black' },
    'Support': { icon: customerServiceIcon, color: 'bg-brand-blue', textColor: 'text-brand-black' },
    'Data': { icon: dataDrivenIcon, color: 'bg-brand-black', textColor: 'text-white' },
    'Strategy': { icon: efficiencyExpertIcon, color: 'bg-gray-200', textColor: 'text-brand-black' }
  };

  const filteredModules = modulesData.filter(module => {
    const matchesCategory = activeFilter === 'All' || module.category === activeFilter;
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.outcome.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-brand-offwhite font-kodchassan overflow-x-hidden">
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}>
        <Sidebar />
      </div>

      <main className="flex-1 w-full lg:ml-20 p-4 md:p-8">
        <header className="flex justify-between items-center mb-6 lg:mb-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 bg-white border-2 border-brand-black rounded-xl"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:block relative w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full border-2 border-brand-black bg-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block p-2 bg-white border-2 border-brand-black rounded-full cursor-pointer hover:bg-brand-yellow transition-colors">
              <Bell className="w-5 h-5" />
            </div>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-black shadow-neo"
            />
          </div>
        </header>

        <div className="md:hidden mb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-full border-2 border-brand-black bg-white"
            />
          </div>
        </div>

        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">LVL UP AI ACADEMY 🚀</h1>
          <p className="text-gray-500 font-medium text-base md:text-lg">Master AI automation for your business</p>
        </section>

        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">All Modules</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-bold"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} md:flex gap-3 overflow-x-auto pb-4 no-scrollbar`}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowFilters(false);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-black font-bold transition-all w-full md:w-auto mb-2 md:mb-0 ${categoryConfig[cat]?.color || 'bg-white'
                  } ${categoryConfig[cat]?.textColor || 'text-brand-black'} ${activeFilter === cat ? 'shadow-none translate-y-1' : 'shadow-neo hover:opacity-80'
                  }`}
              >
                <img src={categoryConfig[cat]?.icon} alt={cat} className="w-5 h-5" />
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {filteredModules.length > 0 ? (
            filteredModules.map(module => (
              <ModuleCard key={module.id} module={module} onClick={() => onModuleSelect(module)} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 font-medium">No modules found matching your search.</p>
            </div>
          )}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-1 lg:col-span-8 bg-white border-2 border-brand-black rounded-card p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Quick Wins (Under 2 Hours)</h2>
            <div className="space-y-3 md:space-y-4">
              {modulesData.filter(m => m.time.includes('1-2h') || m.time.includes('2-3h')).slice(0, 5).map((module) => (
                <QuickWinRow key={module.id} module={module} onClick={() => onModuleSelect(module)} />
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 bg-brand-black text-white border-2 border-brand-black rounded-card p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Your Progress</h2>
            <div className="space-y-4">
              <ProgressStat category="Core Track" completed={0} total={4} color="bg-brand-orange" />
              <ProgressStat category="Marketing" completed={0} total={8} color="bg-brand-purple" />
              <ProgressStat category="Sales" completed={0} total={7} color="bg-brand-yellow" />
              <ProgressStat category="Support" completed={0} total={6} color="bg-brand-blue" />
              <ProgressStat category="Data" completed={0} total={4} color="bg-white" />
              <ProgressStat category="Strategy" completed={0} total={5} color="bg-gray-400" />
            </div>
          </div>
        </div>
      </main>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

const QuickWinRow = ({ module, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between p-3 md:p-4 rounded-2xl border-2 border-brand-black hover:bg-gray-50 transition-colors cursor-pointer"
  >
    <div className="flex items-center gap-3 md:gap-4">
      <div className={`${module.color} w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-brand-black flex items-center justify-center ${module.textColor}`}>
        <Zap className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div>
        <h4 className="font-bold text-sm md:text-base">{module.title}</h4>
        <p className="text-[10px] md:text-xs text-gray-500 font-medium">{module.time} • {module.category}</p>
      </div>
    </div>
  </div>
);

const ProgressStat = ({ category, completed, total, color }) => (
  <div>
    <div className="flex justify-between text-sm font-bold mb-2">
      <span>{category}</span>
      <span>{completed}/{total}</span>
    </div>
    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/20">
      <div
        className={`${color} h-full transition-all duration-500`}
        style={{ width: `${(completed / total) * 100}%` }}
      />
    </div>
  </div>
);

const Zap = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export default ResponsiveModuleDashboard;
