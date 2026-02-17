import { useState, useEffect } from 'react';
import ModuleCard from './ModuleCard';
import modulesData from './modules.json';

import contentMachineIcon from './assets/content-machine.svg';
import salesAutomatorIcon from './assets/sales-automator.svg';
import customerServiceIcon from './assets/customer-service.svg';
import marketingMultiplierIcon from './assets/marketing-multiplier.svg';
import dataDrivenIcon from './assets/Data-driven.svg';
import efficiencyExpertIcon from './assets/Efficiency-Expert.svg';
import toucanIcon from './assets/toucan-svgrepo-com.svg';

import UserBadge from './components/ui/UserBadge';

const ModuleDashboardSimple = ({ onModuleSelect, selectedPath, onBackToPaths, user, onProfileClick }) => {
  // Map selectedPath ID to Category Name if applicable
  const getInitialFilter = () => {
    if (!selectedPath) return 'All';
    // Mapping path IDs to categories
    const pathMap = {
      'content-machine': 'Core Track',
      'sales-automator': 'Sales',
      'customer-service': 'Support',
      'marketing-multiplier': 'Marketing',
      'data-driven': 'Data',
      'efficiency-expert': 'Strategy'
    };
    return pathMap[selectedPath.id] || 'All';
  };

  const [activeFilter, setActiveFilter] = useState(getInitialFilter());
  const [searchQuery, setSearchQuery] = useState('');

  // Update filter when selectedPath changes
  useEffect(() => {
    setActiveFilter(getInitialFilter());
  }, [selectedPath]);

  const categories = ['All', 'Core Track', 'Sales', 'Support', 'Marketing', 'Data', 'Strategy'];

  const categoryConfig = {
    'All': { icon: toucanIcon, color: 'bg-white', textColor: 'text-brand-black' },
    'Core Track': { icon: contentMachineIcon, color: 'bg-brand-orange', textColor: 'text-white' },
    'Sales': { icon: salesAutomatorIcon, color: 'bg-brand-yellow', textColor: 'text-brand-black' },
    'Support': { icon: customerServiceIcon, color: 'bg-brand-blue', textColor: 'text-white' },
    'Marketing': { icon: marketingMultiplierIcon, color: 'bg-brand-purple', textColor: 'text-white' },
    'Data': { icon: dataDrivenIcon, color: 'bg-brand-black', textColor: 'text-white' },
    'Strategy': { icon: efficiencyExpertIcon, color: 'bg-gray-200', textColor: 'text-brand-black' },
  };

  const filteredModules = modulesData.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === 'All' || m.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-offwhite p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col-reverse md:flex-row justify-between items-center mb-6 md:mb-10 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-full border-2 border-brand-black bg-white focus:outline-none focus:shadow-neo transition-all"
            />
          </div>

          <div className="flex justify-between w-full md:w-auto gap-4">
            <button
              onClick={onBackToPaths}
              className="px-6 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow transition-colors whitespace-nowrap text-sm md:text-base"
            >
              ← <span className="hidden md:inline">Back to Paths</span><span className="md:hidden">Back</span>
            </button>
            <UserBadge user={user} onClick={onProfileClick} />
          </div>
        </header>

        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-2">LVL UP AI ACADEMY 🚀</h1>
          <p className="text-gray-500 font-medium text-lg">Master AI automation for your business</p>
        </section>

        <section className="mb-6">
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-black font-bold transition-all ${categoryConfig[cat]?.color || 'bg-white'
                  } ${categoryConfig[cat]?.textColor || 'text-brand-black'} ${activeFilter === cat ? 'shadow-none translate-y-1' : 'shadow-neo hover:opacity-80'
                  }`}
              >
                <img src={categoryConfig[cat]?.icon} alt={cat} className="w-5 h-5" />
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
      </div >
    </div >
  );
};

export default ModuleDashboardSimple;
