import { useState } from 'react';
import ModuleCard from './ModuleCard';
import modulesData from './modules.json';

import contentMachineIcon from './assets/content-machine.svg';
import salesAutomatorIcon from './assets/sales-automator.svg';
import customerServiceIcon from './assets/customer-service.svg';
import marketingMultiplierIcon from './assets/marketing-multiplier.svg';
import dataDrivenIcon from './assets/Data-driven.svg';
import efficiencyExpertIcon from './assets/Efficiency-Expert.svg';
import toucanIcon from './assets/toucan-svgrepo-com.svg';

const ModuleDashboardSimple = ({ onModuleSelect, selectedPath, onBackToPaths }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className="min-h-screen bg-brand-offwhite p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-3 rounded-full border-2 border-brand-black bg-white focus:outline-none focus:shadow-neo transition-all"
            />
          </div>

          <button
            onClick={onBackToPaths}
            className="px-6 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow transition-colors"
          >
            ← Back to Paths
          </button>
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
