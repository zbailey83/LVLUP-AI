import { Target, Megaphone, Headset, TrendingUp, BarChart3, Zap } from 'lucide-react';

const LearningPaths = ({ onPathSelect }) => {
  const paths = [
    {
      id: 'content-machine',
      name: 'The Content Machine',
      description: 'Master content creation and repurposing at scale',
      icon: Megaphone,
      color: 'bg-brand-purple',
      textColor: 'text-brand-black',
      modules: [1, 2, 3, 6, 7, 9, 10],
      duration: '2-3 weeks',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: 'sales-automator',
      name: 'The Sales Automator',
      description: 'Automate your entire sales pipeline with AI',
      icon: Target,
      color: 'bg-brand-yellow',
      textColor: 'text-brand-black',
      modules: [1, 2, 4, 13, 14, 15, 16, 17, 18],
      duration: '3-4 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: 'customer-service',
      name: 'Customer Service Transformer',
      description: '24/7 AI-powered support that scales infinitely',
      icon: Headset,
      color: 'bg-brand-blue',
      textColor: 'text-brand-black',
      modules: [1, 2, 20, 21, 22, 23, 24, 25],
      duration: '3-4 weeks',
      difficulty: 'Intermediate to Advanced'
    },
    {
      id: 'marketing-multiplier',
      name: 'The Marketing Multiplier',
      description: 'End-to-end marketing automation framework',
      icon: TrendingUp,
      color: 'bg-brand-orange',
      textColor: 'text-white',
      modules: [1, 2, 3, 5, 6, 7, 8, 11, 12],
      duration: '4-5 weeks',
      difficulty: 'Intermediate'
    },
    {
      id: 'data-driven',
      name: 'The Data-Driven Leader',
      description: 'Make decisions backed by AI-powered insights',
      icon: BarChart3,
      color: 'bg-brand-black',
      textColor: 'text-white',
      modules: [1, 2, 26, 27, 28, 29, 30, 33],
      duration: '3-4 weeks',
      difficulty: 'Intermediate to Advanced'
    },
    {
      id: 'efficiency-expert',
      name: 'The Efficiency Expert',
      description: 'Optimize every process in your business',
      icon: Zap,
      color: 'bg-gray-200',
      textColor: 'text-brand-black',
      modules: [1, 2, 4, 6, 14, 15, 30, 31, 32, 33],
      duration: '3-4 weeks',
      difficulty: 'Beginner to Intermediate'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite font-kodchassan p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Choose Your Learning Path 🎯</h1>
          <p className="text-xl text-gray-600 font-medium">
            Not sure where to start? Pick a curated path based on your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map(path => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                onClick={() => onPathSelect(path)}
                className={`neo-brutal-card p-6 ${path.color} ${path.textColor} cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl border-2 border-brand-black ${
                    path.textColor === 'text-white' ? 'bg-white/20' : 'bg-brand-black/10'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-black text-white">
                    {path.modules.length} modules
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{path.name}</h3>
                <p className="text-sm font-medium mb-6 opacity-90">{path.description}</p>

                <div className="space-y-2 text-sm font-bold">
                  <div className="flex justify-between">
                    <span className="opacity-70">Duration:</span>
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Level:</span>
                    <span>{path.difficulty}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-brand-orange text-white px-6 py-3 rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all">
                  Start This Path
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => onPathSelect(null)}
            className="text-brand-black font-bold underline hover:no-underline"
          >
            Or browse all modules →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
