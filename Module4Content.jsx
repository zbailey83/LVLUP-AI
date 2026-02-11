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
    { id: 'overview', label: 'Overview', icon: '🤖' },
    { id: 'phase1', label: 'Phase 1: Setup', icon: '🏗️' },
    { id: 'phase2', label: 'Phase 2: Intelligence', icon: '🧠' },
    { id: 'phase3', label: 'Phase 3: Action', icon: '⚡' },
    { id: 'prompts', label: 'Key Prompts', icon: '💬' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  const steps = [
    { id: 'step1', phase: 'phase1', title: 'Create Google Sheet Database' },
    { id: 'step2', phase: 'phase1', title: 'Connect Zapier Trigger' },
    { id: 'step3', phase: 'phase2', title: 'Connect OpenAI to Zapier' },
    { id: 'step4', phase: 'phase2', title: 'Configure "Lead Scorer" Prompt' },
    { id: 'step5', phase: 'phase3', title: 'Connect Gmail Action (Create Draft)' },
    { id: 'step6', phase: 'phase3', title: 'Run "Spam" Test' },
    { id: 'step7', phase: 'phase3', title: 'Run "High Value" Test' }
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
                CORE TRACK • MODULE 4
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
                className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${activeSection === section.id
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
            {activeSection === 'overview' && <OverviewSection />}

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

            {activeSection === 'resources' && <ResourcesSection />}
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

// Components
const OverviewSection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">From "Co-Pilot" to "Autopilot"</h2>
    <div className="prose max-w-none text-lg">
      <p className="mb-4">
        In Modules 1-3, you used AI as a <strong>Co-Pilot</strong>. You sat in the chair, typed the prompt, and reviewed the output.
      </p>
      <p className="mb-6">
        In Module 4, we switch to <strong>Autopilot</strong>. We are going to build a system where the AI works while you are sleeping.
      </p>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="font-bold text-xl mb-2">The Project: "Smart Lead Processor"</h3>
        <p className="mb-2">Instead of manually reading every contact form submission, your system will:</p>
        <ol className="list-decimal list-inside space-y-1 font-medium">
          <li>Detect a new lead</li>
          <li>Read their message</li>
          <li>Decide priority (High vs Low)</li>
          <li>Draft a personalized email response</li>
        </ol>
      </div>

      <h3 className="text-xl font-bold mb-4">The Automation Anatomy</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border-2 border-brand-black rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">🔫</div>
          <h4 className="font-bold">1. The Trigger</h4>
          <p className="text-sm text-gray-600">The starting gun (e.g., New Row in Sheets)</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4 text-center bg-brand-purple/10">
          <div className="text-2xl mb-2">🧠</div>
          <h4 className="font-bold">2. The Brain</h4>
          <p className="text-sm text-gray-600">The Intelligence Layer (ChatGPT analyzes/writes)</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">⚡</div>
          <h4 className="font-bold">3. The Action</h4>
          <p className="text-sm text-gray-600">The Result (Create Draft in Gmail)</p>
        </div>
      </div>
    </div>
  </div>
);

const Phase1Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Phase 1: The Setup (Trigger)</h2>
      <p className="text-lg text-gray-700 mb-6">
        First, we need a place to catch our data. We'll use Google Sheets as a simple database.
      </p>

      <div className="bg-gray-50 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="font-bold text-lg mb-3">Step 1: The Database</h3>
        <p className="mb-2">Create a new Google Sheet with these <strong>exact headers</strong> in Row 1:</p>
        <div className="flex flex-wrap gap-2 text-sm font-mono mb-4">
          {['Timestamp', 'Client Name', 'Client Email', 'Client Message', 'AI Priority Score', 'AI Draft Reply'].map(h => (
            <span key={h} className="px-2 py-1 bg-white border border-gray-300 rounded">{h}</span>
          ))}
        </div>
        <p className="text-sm text-gray-600 italic">
          *Tip: Add some dummy data in Row 2 (e.g., "John Doe", "john@test.com", "I want to buy 500 units") so we have something to test later.
        </p>
      </div>

      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="font-bold text-lg mb-3">Step 2: Connect Zapier</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Log into <strong>Zapier</strong> and click "Create Zap".</li>
          <li><strong>Trigger App:</strong> Google Sheets</li>
          <li><strong>Trigger Event:</strong> New Spreadsheet Row</li>
          <li><strong>Account:</strong> Connect your Google Account</li>
          <li><strong>Trigger:</strong> Select the Sheet you just made</li>
          <li><strong>Test:</strong> Click "Test Trigger". It should find your dummy row.</li>
        </ol>
      </div>

      <div className="space-y-4 mt-6">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

const Phase2Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Phase 2: The Intelligence Layer</h2>
      <p className="text-lg text-gray-700 mb-6">
        This is where the magic happens. We don't just move data; we <strong>transform</strong> it.
      </p>

      <div className="bg-brand-purple/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="font-bold text-lg mb-3">Connect The Brain</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Add a new Step in Zapier.</li>
          <li><strong>App:</strong> ChatGPT (or OpenAI)</li>
          <li><strong>Event:</strong> "Conversation" or "Ask ChatGPT"</li>
          <li><strong>Account:</strong> Paste your OpenAI API Key (from platform.openai.com)</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold text-lg mb-2">The Prompt Setup</h4>
        <p className="mb-4">In the "Prompt" or "User Message" field, verify you are using <strong>Dynamic Data</strong> (clicking the fields from Step 1).</p>
        <div className="bg-white border border-gray-300 rounded p-4 font-mono text-xs md:text-sm whitespace-pre-wrap">
          {`Analyze this lead.
- Name: [Select 'Client Name' from Step 1]
- Message: [Select 'Client Message' from Step 1]

Task: Determine priority (High/Low) and draft a short email reply.
Format: JSON with 'Priority' and 'DraftBody' fields.`}
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

const Phase3Section = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Phase 3: The Action & Optimization</h2>
      <p className="text-lg text-gray-700 mb-6">
        The goal is "Human-in-the-Loop". We want the AI to do 90% of the work, and you do the final 10% approval.
      </p>

      <div className="bg-brand-blue/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="font-bold text-lg mb-3">Gmail Integration</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Add the final Step in Zapier.</li>
          <li><strong>App:</strong> Gmail</li>
          <li><strong>Event:</strong> Create Draft (⚠️ Do NOT select "Send Email" yet)</li>
          <li><strong>To:</strong> [Select 'Client Email' from Step 1]</li>
          <li><strong>Body:</strong> [Select 'DraftBody' from Step 2]</li>
        </ol>
        <p className="mt-4 text-sm font-bold text-brand-blue">
          👉 ROI: You just saved 5-10 minutes per email. You are now the "Editor-in-Chief", not the writer.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4">Break The Machine (Testing)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border-2 border-brand-black rounded-xl p-4">
          <h4 className="font-bold mb-2">The "Spam" Test</h4>
          <p className="text-sm">Add a row: "Sell me SEO services."</p>
          <p className="text-sm font-bold text-green-600 mt-2">Expected: Low Priority</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <h4 className="font-bold mb-2">The "High Value" Test</h4>
          <p className="text-sm">Add a row: "I have a $50k budget."</p>
          <p className="text-sm font-bold text-green-600 mt-2">Expected: High Priority, Enthusiastic tone</p>
        </div>
      </div>

      <div className="space-y-4 mt-6">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

const PromptsSection = ({ copyToClipboard, copiedPrompt }) => {
  const prompts = [
    {
      id: 'lead-scorer',
      title: 'The "Lead Scorer & Drafter"',
      description: 'Main prompt for the ChatGPT Layer',
      text: `Role: You are a senior sales development rep.

Input Data:
- Lead Name: [INSERT NAME VARIABLE]
- Lead Message: [INSERT MESSAGE VARIABLE]

Task:
1. Analyze sentiment and intent.
2. Assign 'Priority Score' (1-5).
3. Write a response email.
   - If Priority 1-2: Polite, brief, direct to FAQ.
   - If Priority 3-5: Warm, enthusiastic, propose meeting.

Constraint: Output ONLY the email body text.`
    },
    {
      id: 'data-cleaner',
      title: 'The "Data Cleaner"',
      description: 'For fixing messy form inputs',
      text: `Role: You are a data formatting bot.

Input: [INSERT MESSY TEXT]

Task: Extract phone number and format as (XXX) XXX-XXXX. If none, return "N/A".

Constraint: Return ONLY the formatted number.`
    },
    {
      id: 'sentiment-router',
      title: 'The "Sentiment Router"',
      description: 'For Customer Support tickets',
      text: `Input: [INSERT TICKET TEXT]

Task: Classify into one category:
1. "Urgent/Angry"
2. "Billing"
3. "General"

Constraint: Return ONLY the single word category name.`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border-2 border-brand-black rounded-card p-8">
        <h2 className="text-3xl font-bold mb-4">Key Prompts for Zapier</h2>
        <p className="text-lg text-gray-700">
          These prompts are designed for API usage. They handle dynamic variables and strict output constraints.
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

const ResourcesSection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">Tools & Resources</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="block p-6 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
        <h3 className="font-bold text-xl mb-2">Zapier</h3>
        <p className="text-sm text-gray-600">The automation bridge. User-friendly and standard for business.</p>
      </a>
      <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="block p-6 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
        <h3 className="font-bold text-xl mb-2">OpenAI API</h3>
        <p className="text-sm text-gray-600">The engine. Distinct from ChatGPT Plus (pay-as-you-go).</p>
      </a>
      <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="block p-6 border-2 border-brand-black rounded-xl hover:bg-brand-yellow transition-colors">
        <h3 className="font-bold text-xl mb-2">Make (Alternatives)</h3>
        <p className="text-sm text-gray-600">Formerly Integromat. More visual, cheaper at scale.</p>
      </a>
    </div>
  </div>
);

// Helpers
const StepCheckbox = ({ step, completed, onToggle }) => (
  <div
    onClick={() => onToggle(step.id)}
    className={`flex items-center gap-3 p-4 border-2 border-brand-black rounded-xl cursor-pointer transition-all ${completed ? 'bg-green-100' : 'bg-white hover:bg-gray-50'
      }`}
  >
    <div className={`w-6 h-6 rounded border-2 border-brand-black flex items-center justify-center font-bold ${completed ? 'bg-green-500 text-white' : 'bg-white'
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
        <span className="font-bold">4-6 Hours</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Difficulty:</span>
        <span className="font-bold text-brand-orange">Intermediate</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Prerequisites:</span>
        <span className="font-bold">Modules 1, 2, 3</span>
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

export default Module4Content;
