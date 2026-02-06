import { useState } from 'react';

const Module4Content = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [completedSteps, setCompletedSteps] = useState([]);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const copyToClipboard = (text, promptId) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const toggleStep = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'anatomy', label: 'Automation Anatomy', icon: '🧬' },
    { id: 'setup', label: 'Step-by-Step Setup', icon: '⚙️' },
    { id: 'testing', label: 'Testing & Optimization', icon: '🧪' },
    { id: 'prompts', label: 'Automation Prompts', icon: '💬' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  const steps = [
    { id: 'step1', title: 'Create Google Sheet database' },
    { id: 'step2', title: 'Set up Zapier account' },
    { id: 'step3', title: 'Get OpenAI API key' },
    { id: 'step4', title: 'Connect Google Sheets trigger' },
    { id: 'step5', title: 'Add ChatGPT intelligence layer' },
    { id: 'step6', title: 'Connect Gmail draft action' },
    { id: 'step7', title: 'Test with sample data' },
    { id: 'step8', title: 'Optimize and deploy' }
  ];

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Header */}
      <div className="bg-brand-orange border-b-2 border-brand-black">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button 
            onClick={onBack}
            className="mb-4 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow transition-colors"
          >
            ← Back to Dashboard
          </button>
          
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-black text-white text-xs font-bold rounded-lg mb-2">
                CORE TRACK • MODULE 4 • FINAL
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">Your First Automation Blueprint</h1>
              <p className="text-white/90 text-lg font-medium">"The Invisible Employee"</p>
            </div>
            
            <div className="bg-white border-2 border-brand-black rounded-xl p-4 min-w-[200px]">
              <div className="text-xs font-bold text-gray-500 mb-1">YOUR PROGRESS</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 h-3 rounded-full border border-brand-black">
                  <div 
                    className="bg-brand-orange h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-2xl font-bold">{progress}%</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{completedSteps.length}/{steps.length} steps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b-2 border-brand-black bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-brand-yellow border-2 border-brand-black'
                    : 'bg-gray-100 border-2 border-transparent hover:border-brand-black'
                }`}
              >
                {section.icon} {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {activeSection === 'overview' && (
              <OverviewSection />
            )}
            
            {activeSection === 'anatomy' && (
              <AnatomySection />
            )}
            
            {activeSection === 'setup' && (
              <SetupSection steps={steps} completedSteps={completedSteps} toggleStep={toggleStep} />
            )}
            
            {activeSection === 'testing' && (
              <TestingSection />
            )}
            
            {activeSection === 'prompts' && (
              <PromptsSection copyToClipboard={copyToClipboard} copiedPrompt={copiedPrompt} />
            )}
            
            {activeSection === 'resources' && (
              <ResourcesSection />
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <QuickInfoCard />
            <ChecklistCard steps={steps} completedSteps={completedSteps} toggleStep={toggleStep} />
            <CongratulationsCard completedSteps={completedSteps} totalSteps={steps.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Section
const OverviewSection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">From "Co-Pilot" to "Autopilot"</h2>
    
    <div className="prose max-w-none">
      <p className="text-lg mb-4">
        In Modules 1-3, you used AI as a <strong>Co-Pilot</strong>. You sat in the chair, you typed the prompt, 
        and you reviewed the output. This is great, but it still requires <em>you</em>.
      </p>
      
      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 my-6">
        <p className="font-bold text-lg mb-2">🚀 In Module 4, we switch to Autopilot</p>
        <p>We're going to build a system where the AI works while you're sleeping.</p>
      </div>
      
      <p className="text-lg mb-4">
        We will introduce the concept of <strong>"The Stack"</strong>: connecting a <strong>Trigger</strong> (something happens), 
        an <strong>Intelligence Layer</strong> (AI thinks about it), and an <strong>Action</strong> (something gets done).
      </p>
      
      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold mb-3">🎯 The Project: "Smart Lead Processor"</h3>
        <p className="mb-3">Instead of manually reading every contact form submission and writing a reply, your system will:</p>
        <ol className="space-y-2 list-decimal list-inside">
          <li className="font-medium">Detect a new lead</li>
          <li className="font-medium">Read their message</li>
          <li className="font-medium">Decide if they are "High Priority" or "Low Priority"</li>
          <li className="font-medium">Draft a personalized email response for you to review</li>
        </ol>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-red-500 bg-red-50 rounded-xl p-4">
          <div className="text-2xl mb-2">❌</div>
          <h4 className="font-bold mb-2 text-red-700">The Manual Way</h4>
          <ul className="text-sm space-y-1">
            <li>• Check email constantly</li>
            <li>• Read each message</li>
            <li>• Think of response</li>
            <li>• Type everything manually</li>
            <li>• 10 minutes per lead</li>
          </ul>
        </div>
        <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4">
          <div className="text-2xl mb-2">✅</div>
          <h4 className="font-bold mb-2 text-green-700">The Automated Way</h4>
          <ul className="text-sm space-y-1">
            <li>• AI detects new leads</li>
            <li>• AI analyzes priority</li>
            <li>• AI drafts response</li>
            <li>• You review & send</li>
            <li>• 1 minute per lead</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Prerequisites</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">⚡</div>
          <h4 className="font-bold mb-1">Zapier Account</h4>
          <p className="text-sm text-gray-600">Free tier OK for basics (Starter plan recommended)</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">🔑</div>
          <h4 className="font-bold mb-1">OpenAI API Key</h4>
          <p className="text-sm text-gray-600">From platform.openai.com (pay-as-you-go, pennies per use)</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">📊</div>
          <h4 className="font-bold mb-1">Google Sheet</h4>
          <p className="text-sm text-gray-600">Simple database with headers</p>
        </div>
      </div>
    </div>
  </div>
);

// Anatomy Section
const AnatomySection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">The Automation Anatomy</h2>
    <p className="text-lg text-gray-700 mb-6">
      Every automation consists of three parts:
    </p>
    
    <div className="space-y-6">
      <div className="border-2 border-brand-black rounded-xl p-6 bg-blue-50">
        <div className="flex items-start gap-4">
          <div className="bg-brand-blue text-brand-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            1
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">The Trigger</h3>
            <p className="mb-3">The starting gun. This is what kicks off the automation.</p>
            <div className="bg-white border border-gray-300 rounded p-3">
              <p className="font-bold mb-2">Examples:</p>
              <ul className="text-sm space-y-1">
                <li>• "A new row in Google Sheets"</li>
                <li>• "A new Typeform entry"</li>
                <li>• "A new email in Gmail"</li>
                <li>• "A webhook is received"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-2 border-brand-black rounded-xl p-6 bg-purple-50">
        <div className="flex items-start gap-4">
          <div className="bg-brand-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            2
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">The Brain (The AI Step)</h3>
            <p className="mb-3">This is where magic happens. We don't just move data; we <strong>transform</strong> it.</p>
            <div className="bg-white border border-gray-300 rounded p-3">
              <p className="font-bold mb-2">What AI Does:</p>
              <ul className="text-sm space-y-1">
                <li>• Analyzes sentiment</li>
                <li>• Categorizes priority</li>
                <li>• Writes personalized responses</li>
                <li>• Extracts key information</li>
                <li>• Makes decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-2 border-brand-black rounded-xl p-6 bg-green-50">
        <div className="flex items-start gap-4">
          <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            3
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">The Action</h3>
            <p className="mb-3">The result. What actually gets done.</p>
            <div className="bg-white border border-gray-300 rounded p-3">
              <p className="font-bold mb-2">Examples:</p>
              <ul className="text-sm space-y-1">
                <li>• "Create a Draft in Gmail"</li>
                <li>• "Add row to Airtable"</li>
                <li>• "Send Slack notification"</li>
                <li>• "Update CRM record"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mt-6">
      <p className="font-bold mb-2">💡 The Key Insight:</p>
      <p>The AI step (#2) is what transforms this from a simple "if this, then that" automation into an <strong>intelligent system</strong> that can handle nuance and variation.</p>
    </div>
  </div>
);

export default Module4Content;
