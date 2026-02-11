import UserBadge from './components/ui/UserBadge';
import contentMachineIcon from './assets/content-machine.svg';
import salesAutomatorIcon from './assets/sales-automator.svg';
import customerServiceIcon from './assets/customer-service.svg';
import marketingMultiplierIcon from './assets/marketing-multiplier.svg';
import dataDrivenIcon from './assets/Data-driven.svg';
import efficiencyExpertIcon from './assets/Efficiency-Expert.svg';

const LearningPathsSimple = ({ onPathSelect, user, onProfileClick }) => {
  const paths = [
    {
      id: 'content-machine',
      name: 'The Content Machine',
      description: 'Master content creation and repurposing at scale',
      icon: contentMachineIcon,
      color: 'bg-brand-purple',
      modules: 7,
      duration: '2-3 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: 'sales-automator',
      name: 'The Sales Automator',
      description: 'Automate your entire sales pipeline with AI',
      icon: salesAutomatorIcon,
      color: 'bg-brand-yellow',
      modules: 9,
      duration: '3-4 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: 'customer-service',
      name: 'Customer Service Transformer',
      description: '24/7 AI-powered support that scales infinitely',
      icon: customerServiceIcon,
      color: 'bg-brand-blue',
      modules: 8,
      duration: '3-4 weeks',
      difficulty: 'Intermediate to Advanced'
    },
    {
      id: 'marketing-multiplier',
      name: 'The Marketing Multiplier',
      description: 'End-to-end marketing automation framework',
      icon: marketingMultiplierIcon,
      color: 'bg-brand-orange',
      modules: 9,
      duration: '4-5 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: 'data-driven',
      name: 'The Data-Driven Leader',
      description: 'Make decisions backed by AI-powered insights',
      icon: dataDrivenIcon,
      color: 'bg-brand-black text-white',
      modules: 8,
      duration: '3-4 weeks',
      difficulty: 'Intermediate to Advanced'
    },
    {
      id: 'efficiency-expert',
      name: 'The Efficiency Expert',
      description: 'Optimize every process in your business',
      icon: efficiencyExpertIcon,
      color: 'bg-gray-200',
      modules: 10,
      duration: '3-4 weeks',
      difficulty: 'Beginner to Intermediate'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with User Badge */}
        <header className="flex justify-end mb-8">
          <UserBadge user={user} onClick={onProfileClick} />
        </header>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Choose Your Learning Path 🎯</h1>
          <p className="text-xl text-gray-600 font-medium">
            Not sure where to start? Pick a curated path based on your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map(path => (
            <div
              key={path.id}
              className={`neo-brutal-card p-6 ${path.color} cursor-pointer hover:translate-x-1 hover:translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl border-2 border-brand-black bg-white/20">
                  <img src={path.icon} alt={`${path.name} icon`} className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-black text-white">
                  {path.modules} modules
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">{path.name}</h3>
              <p className="text-sm font-medium mb-6 opacity-90">{path.description}</p>

              <div className="space-y-2 text-sm font-bold mb-6">
                <div className="flex justify-between">
                  <span className="opacity-70">Duration:</span>
                  <span>{path.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Level:</span>
                  <span>{path.difficulty}</span>
                </div>
              </div>

              <button
                onClick={() => onPathSelect(path)}
                className="w-full bg-brand-orange text-white px-6 py-3 rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all"
              >
                Start This Path
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onPathSelect(null)}
            className="text-brand-black font-bold underline hover:no-underline text-lg"
          >
            Or browse all modules →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPathsSimple;
