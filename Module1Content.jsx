import { useState } from 'react';

const Module1Content = ({ onBack }) => {
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
    { id: 'phase1', label: 'Phase 1: Tool Stack', icon: '🛠️' },
    { id: 'phase2', label: 'Phase 2: Calibration', icon: '⚙️' },
    { id: 'phase3', label: 'Phase 3: First Win', icon: '🎯' },
    { id: 'prompts', label: 'Key Prompts', icon: '💬' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  const steps = [
    { id: 'step1', phase: 'phase1', title: 'Choose your AI tool (ChatGPT or Claude)' },
    { id: 'step2', phase: 'phase1', title: 'Set up account security & MFA' },
    { id: 'step3', phase: 'phase1', title: 'Disable data training for privacy' },
    { id: 'step4', phase: 'phase2', title: 'Write your Context Injection (Custom Instructions)' },
    { id: 'step5', phase: 'phase2', title: 'Configure response preferences' },
    { id: 'step6', phase: 'phase3', title: 'Download mobile app' },
    { id: 'step7', phase: 'phase3', title: 'Complete your first Voice Mode brain dump' },
    { id: 'step8', phase: 'phase3', title: 'Generate your project outline' }
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
                CORE TRACK • MODULE 1
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">AI Quick Start for Business</h1>
              <p className="text-white/90 text-lg font-medium">"From Paralysis to Power User in 24 Hours"</p>
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
            
            {activeSection === 'phase1' && (
              <Phase1Section steps={steps.filter(s => s.phase === 'phase1')} completedSteps={completedSteps} toggleStep={toggleStep} />
            )}
            
            {activeSection === 'phase2' && (
              <Phase2Section steps={steps.filter(s => s.phase === 'phase2')} completedSteps={completedSteps} toggleStep={toggleStep} />
            )}
            
            {activeSection === 'phase3' && (
              <Phase3Section steps={steps.filter(s => s.phase === 'phase3')} completedSteps={completedSteps} toggleStep={toggleStep} />
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
            <ChecklistCard steps={steps} completedSteps={completedSteps} toggleStep={toggleStep} setActiveSection={setActiveSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Section Component
const OverviewSection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">The "Empty Box" Problem</h2>
    
    <div className="prose max-w-none">
      <p className="text-lg mb-4">
        Welcome to the LVL UP AI ACADEMY. If you're reading this, you likely fall into one of two camps: 
        either you've dabbled with ChatGPT and found the results "generic and robotic," or you haven't 
        started because the sheer number of tools is paralyzing.
      </p>
      
      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 my-6">
        <p className="font-bold text-lg mb-2">💡 Here's the truth:</p>
        <p>
          AI models are like high-performance interns who show up on their first day with amnesia. 
          They don't know your business, your voice, your customers, or your goals. When you open a 
          fresh chat, you're handing them an empty box. If you put garbage in, you get garbage out.
        </p>
      </div>
      
      <p className="text-lg mb-4">
        In this first module, we're not just "signing up" for accounts. We're <strong>Context Engineering</strong>. 
        We're going to configure your AI's memory and settings so that every time you interact with it, 
        it already knows who you are. Then, we'll bypass the keyboard entirely to turn your scattered 
        thoughts into a cohesive project plan.
      </p>
      
      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold mb-3">🎯 By the end of this session, you will have:</h3>
        <ul className="space-y-2">
          <li>✅ A "Digital Second Brain" set up and operational</li>
          <li>✅ Custom AI instructions that eliminate robotic responses</li>
          <li>✅ Your first real project plan generated from a voice brain dump</li>
          <li>✅ A workflow you can repeat for any business challenge</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Prerequisites</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">📧</div>
          <h4 className="font-bold mb-1">Valid Email</h4>
          <p className="text-sm text-gray-600">Preferably business email for billing</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">💳</div>
          <h4 className="font-bold mb-1">Payment Method</h4>
          <p className="text-sm text-gray-600">$20/month tier recommended</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">🤔</div>
          <h4 className="font-bold mb-1">A "Messy Problem"</h4>
          <p className="text-sm text-gray-600">One business challenge to solve</p>
        </div>
      </div>
    </div>
  </div>
);

// Phase 1 Section
const Phase1Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Phase 1: The Tool Stack Selection</h2>
      <p className="text-lg text-gray-700 mb-6">
        The first hurdle is "Tool Fatigue." There are 10,000 AI tools, but you only need <strong>one</strong> to start.
      </p>
      
      <div className="bg-gray-50 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Decision Matrix: Which LLM is right for you?</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-brand-black">
                <th className="text-left p-3 font-bold">Feature</th>
                <th className="text-left p-3 font-bold bg-brand-purple/20">ChatGPT Plus</th>
                <th className="text-left p-3 font-bold bg-brand-blue/20">Claude 3.5</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-bold">Best For</td>
                <td className="p-3">Generalists, multi-modal tasks</td>
                <td className="p-3">Writers, coders, nuanced content</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-bold">Superpower</td>
                <td className="p-3">🎤 Voice Mode & Vision</td>
                <td className="p-3">✍️ Artifacts & Tone</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Weakness</td>
                <td className="p-3">Can be verbose</td>
                <td className="p-3">No web browsing, stricter limits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">💡 Recommendation:</h4>
        <ul className="space-y-2">
          <li>• <strong>Choose ChatGPT</strong> if you need to analyze images, spreadsheets, or talk while driving</li>
          <li>• <strong>Choose Claude</strong> if your primary focus is writing copy, blogs, or strategy documents</li>
        </ul>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 mt-8">Action Item: Account Security & Privacy</h3>
      <div className="space-y-4">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
      
      <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mt-6">
        <h4 className="font-bold text-lg mb-2 text-red-700">⚠️ Critical Privacy Step</h4>
        <p className="text-red-700">
          Most business owners unknowingly train public AI models with their proprietary data. 
          Go to <strong>Settings → Data Controls</strong> and toggle OFF "Improve the model for everyone."
        </p>
      </div>
    </div>
  </div>
);

// Continue in next message due to length...
export default Module1Content;

// Phase 2 Section
const Phase2Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-4">Phase 2: The Calibration (Context Engineering)</h2>
    <p className="text-lg text-gray-700 mb-6">
      This is the <strong>most critical step</strong> in the entire Academy. We're going to kill the "Robot Voice" before it starts.
    </p>
    
    <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold mb-3">The "Context Injection" Protocol</h3>
      <p className="mb-4">You need to tell the AI two things:</p>
      <ol className="list-decimal list-inside space-y-2">
        <li className="font-bold">Who you are (Context)</li>
        <li className="font-bold">How you want it to behave (Tone/Format)</li>
      </ol>
    </div>
    
    <div className="mb-6">
      <h4 className="font-bold text-lg mb-3">📍 Navigate to: Profile Icon → Custom Instructions</h4>
      
      <div className="space-y-4">
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <h5 className="font-bold mb-2">Box 1: "What would you like ChatGPT to know about you?"</h5>
          <div className="bg-white border border-gray-300 rounded p-4 font-mono text-sm">
            <p className="italic text-gray-600">Draft a bio using this structure:</p>
            <p className="mt-2">
              "I am the [ROLE] of [BUSINESS NAME], a [INDUSTRY] company that helps [TARGET AUDIENCE] 
              achieve [CORE BENEFIT]. My biggest challenges are [PAIN POINT 1] and [PAIN POINT 2]. 
              I value speed, directness, and actionable data over fluff. My audience appreciates 
              [TONE: e.g., witty, professional, empathetic] communication."
            </p>
          </div>
        </div>
        
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <h5 className="font-bold mb-2">Box 2: "How would you like ChatGPT to respond?"</h5>
          <div className="bg-white border border-gray-300 rounded p-4 font-mono text-sm">
            <p>"You are an expert consultant and world-class copywriter.</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>NEVER use generic AI words like 'delve,' 'landscape,' 'tapestry,' or 'unlock.'</li>
              <li>Be opinionated. If my idea has flaws, point them out constructively.</li>
              <li>Use formatting aggressively: specific headers, bullet points, and tables.</li>
              <li>Do not lecture me on ethics or safety for standard business queries.</li>
              <li>When asked for a plan, provide a step-by-step table with deadlines."</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mb-6">
      <p className="font-bold">💡 Why this works:</p>
      <p>You've just saved yourself from typing that paragraph 5,000 times over the next year.</p>
    </div>
    
    <div className="space-y-4 mt-6">
      {steps.map(step => (
        <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
      ))}
    </div>
  </div>
);

// Phase 3 Section
const Phase3Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-4">Phase 3: The First Win (The "Messy Brain Dump")</h2>
    <p className="text-lg text-gray-700 mb-6">
      Now we execute. We're going to use <strong>Voice Mode</strong> to convert mental clutter into a project plan.
    </p>
    
    <div className="bg-brand-blue/20 border-2 border-brand-black rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">The Workflow:</h3>
      <ol className="space-y-4">
        <li className="flex gap-3">
          <span className="font-bold text-brand-orange text-xl">1.</span>
          <div>
            <p className="font-bold">Download the Mobile App</p>
            <p className="text-sm text-gray-600">Get the official ChatGPT app (iOS/Android)</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-brand-orange text-xl">2.</span>
          <div>
            <p className="font-bold">Enter Voice Mode</p>
            <p className="text-sm text-gray-600">Tap the "Headphones" or "Waveform" icon next to the text box</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-brand-orange text-xl">3.</span>
          <div>
            <p className="font-bold">The Ramble (3-5 Minutes)</p>
            <p className="text-sm text-gray-600 mb-2">Walk around the room. Speak naturally. Don't try to structure your thoughts.</p>
            <div className="bg-white border border-gray-300 rounded p-3 text-sm italic">
              Say: "Hey, I want to do a brain dump for a new project. I'm going to just ramble for a few minutes 
              about [YOUR TOPIC]. Don't interrupt me until I say 'I'm done.' Just listen."
            </div>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-brand-orange text-xl">4.</span>
          <div>
            <p className="font-bold">The Synthesis</p>
            <p className="text-sm text-gray-600 mb-2">When you're finished, say:</p>
            <div className="bg-white border border-gray-300 rounded p-3 text-sm italic">
              "I'm done. Please organize that entire mess into a structured Project Outline. Give me a list of 
              clear objectives, a timeline, and the top 3 risks I need to watch out for."
            </div>
          </div>
        </li>
      </ol>
    </div>
    
    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
      <h4 className="font-bold text-lg mb-2 text-green-700">✨ The Result:</h4>
      <p className="text-green-700">
        You'll watch in real-time as the AI takes your anxiety-induced rambling and structures it into a 
        coherent, professional strategy document.
      </p>
    </div>
    
    <div className="space-y-4 mt-6">
      {steps.map(step => (
        <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
      ))}
    </div>
  </div>
);

// Prompts Section
const PromptsSection = ({ copyToClipboard, copiedPrompt }) => {
  const prompts = [
    {
      id: 'context-architect',
      title: 'The "Context Architect"',
      description: 'Run this once to help you write your Custom Instructions',
      text: `I need to write my Custom Instructions for your settings. Interview me. Ask me 5 questions, one by one, about my business, my role, my preferred writing style, and my goals. After I answer all 5, generate a concise, high-impact 'User Profile' and 'Response Preferences' block that I can paste into my settings.`
    },
    {
      id: 'brain-dump',
      title: 'The "Messy Brain Dump" Synthesizer',
      description: 'If typing, not using Voice Mode',
      text: `I am about to paste a stream-of-consciousness brain dump regarding [PROJECT NAME]. It is messy and unstructured. Please analyze it and output:

1. A One-Sentence Executive Summary.
2. A Prioritized Task List (categorized by 'Urgent' vs 'Important').
3. A list of Missing Information (what did I forget to mention?).

Here is the dump: [PASTE TEXT]`
    },
    {
      id: 'jargon-killer',
      title: 'The "Jargon Killer"',
      description: 'To refine your output',
      text: `Review the text you just generated. It sounds too corporate. Rewrite it to sound more [ADJECTIVE: e.g., gritty, human, casual]. Remove all buzzwords. Use short sentences. Aim for a Flesch-Kincaid grade level of 8.`
    },
    {
      id: 'devils-advocate',
      title: 'The "Devil\'s Advocate"',
      description: 'Strategic checking',
      text: `Review the plan we just created. Act as a skeptical investor or a critical customer. Poke holes in this strategy. What are the top 3 reasons this might fail? Be harsh but constructive.`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border-2 border-brand-black rounded-card p-8">
        <h2 className="text-3xl font-bold mb-4">Key Prompts (Copy & Paste)</h2>
        <p className="text-lg text-gray-700 mb-6">
          Here are the specific prompts to support the workflows in this module. Click to copy!
        </p>
      </div>
      
      {prompts.map(prompt => (
        <div key={prompt.id} className="bg-white border-2 border-brand-black rounded-card p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">{prompt.title}</h3>
              <p className="text-sm text-gray-600">{prompt.description}</p>
            </div>
            <button
              onClick={() => copyToClipboard(prompt.text, prompt.id)}
              className="px-4 py-2 bg-brand-orange text-white rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all"
            >
              {copiedPrompt === prompt.id ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
          <div className="bg-gray-50 border border-gray-300 rounded p-4 font-mono text-sm whitespace-pre-wrap">
            {prompt.text}
          </div>
        </div>
      ))}
    </div>
  );
};

// Resources Section
const ResourcesSection = () => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-6">Resource List</h2>
      
      <h3 className="text-2xl font-bold mb-4">Required Tools</h3>
      <div className="space-y-4 mb-8">
        <a href="https://openai.com" target="_blank" rel="noopener noreferrer" 
           className="block p-4 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">OpenAI ChatGPT</h4>
              <p className="text-sm text-gray-600">Recommended: Plus Subscription ($20/month)</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </a>
        
        <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer"
           className="block p-4 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">Anthropic Claude</h4>
              <p className="text-sm text-gray-600">Alternative: Great for writing and coding</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </a>
        
        <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer"
           className="block p-4 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">Perplexity AI</h4>
              <p className="text-sm text-gray-600">Search Alternative: Great for researching facts</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </a>
      </div>
      
      <h3 className="text-2xl font-bold mb-4">Related Modules</h3>
      <div className="space-y-3">
        <div className="p-4 bg-brand-orange/10 border-2 border-brand-black rounded-xl">
          <p className="font-bold">Next: Module 2</p>
          <p className="text-sm text-gray-600">Prompting Mastery Essentials (Learning the 'Mega-Prompt' structure)</p>
        </div>
        <div className="p-4 bg-gray-100 border-2 border-brand-black rounded-xl">
          <p className="font-bold">Later: Module 4</p>
          <p className="text-sm text-gray-600">Your First Automation Blueprint (Connecting these chats to your email)</p>
        </div>
      </div>
    </div>
  </div>
);

// Helper Components
const StepCheckbox = ({ step, completed, onToggle }) => (
  <div 
    onClick={() => onToggle(step.id)}
    className={`flex items-center gap-3 p-4 border-2 border-brand-black rounded-xl cursor-pointer transition-all ${
      completed ? 'bg-green-100' : 'bg-white hover:bg-gray-50'
    }`}
  >
    <div className={`w-6 h-6 rounded border-2 border-brand-black flex items-center justify-center font-bold ${
      completed ? 'bg-green-500 text-white' : 'bg-white'
    }`}>
      {completed && '✓'}
    </div>
    <span className={`flex-1 ${completed ? 'line-through text-gray-500' : 'font-medium'}`}>
      {step.title}
    </span>
  </div>
);

const QuickInfoCard = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-6 mb-6 sticky top-24">
    <h3 className="font-bold text-lg mb-4">⏱️ Quick Info</h3>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Time:</span>
        <span className="font-bold">90-120 min</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Difficulty:</span>
        <span className="font-bold text-green-600">Beginner</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Prerequisites:</span>
        <span className="font-bold">None</span>
      </div>
    </div>
  </div>
);

const ChecklistCard = ({ steps, completedSteps, toggleStep, setActiveSection }) => (
  <div className="bg-white border-2 border-brand-black rounded-card p-6">
    <h3 className="font-bold text-lg mb-4">✅ Progress Checklist</h3>
    <div className="space-y-2">
      {steps.map(step => (
        <div key={step.id} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={completedSteps.includes(step.id)}
            onChange={() => toggleStep(step.id)}
            className="w-4 h-4"
          />
          <button
            onClick={() => setActiveSection(step.phase)}
            className="text-left hover:underline"
          >
            {step.title}
          </button>
        </div>
      ))}
    </div>
  </div>
);
