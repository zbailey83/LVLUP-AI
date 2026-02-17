import { useState } from 'react';
import { ArrowLeft, Play, Clock, Target, CheckCircle, Copy, Check, Download, ExternalLink } from 'lucide-react';

const Module2Content = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
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
    { id: 'overview', label: 'Overview & Video', icon: '📺' },
    { id: 'framework', label: 'Mega-Prompt Framework', icon: '🎯' },
    { id: 'techniques', label: 'Advanced Techniques', icon: '⚡' },
    { id: 'exercises', label: 'Exercises', icon: '💪' },
    { id: 'prompts', label: 'Key Prompts', icon: '💬' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  const steps = [
    { id: 'step1', title: 'Create your Prompt Library document' },
    { id: 'step2', title: 'Master the C.P.T.C.F.S. Protocol' },
    { id: 'step3', title: 'Complete Exercise 1: Cold Outreach Email' },
    { id: 'step4', title: 'Complete Exercise 2: Meeting Summarizer' },
    { id: 'step5', title: 'Practice Few-Shot Prompting' },
    { id: 'step6', title: 'Practice Chain of Thought technique' },
    { id: 'step7', title: 'Apply the 3-Turn Rule' },
    { id: 'step8', title: 'Save your best prompts to library' }
  ];

  return (
    <div className="min-h-screen bg-brand-offwhite font-kodchassan animate-fade-in">
      {/* Header */}
      <div className="bg-brand-orange border-b-2 border-brand-black sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 text-white font-bold hover:underline"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-brand-black text-white text-xs font-bold rounded-lg mb-2">
                CORE TRACK • MODULE 2
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Prompting Mastery Essentials</h1>
              <p className="text-white/90 text-lg font-medium">"The Science of Perfect Output"</p>
            </div>

            <div className="bg-white border-2 border-brand-black rounded-xl p-3 min-w-[150px] shadow-neo-sm">
              <div className="text-xs font-bold text-gray-500 mb-1">KEY OUTCOME</div>
              <div className="font-bold text-brand-black leading-tight">
                Master "Structural Prompting"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-6 mb-6 border-b-2 border-gray-200">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all border-2 ${activeTab === section.id
                ? 'bg-brand-yellow border-brand-black shadow-neo-sm'
                : 'bg-white border-transparent hover:border-brand-black hover:bg-gray-50'
                }`}
            >
              <span>{section.icon}</span> {section.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">

            {/* Overview & Video Section */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-slide-up">
                {/* Video Player Card */}
                <div className="bg-black rounded-card overflow-hidden shadow-neo border-2 border-brand-black">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Video Placeholder</p>
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-white/20 hover:scale-110 transition-all">
                        <Play className="w-8 h-8 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-900 text-white border-t border-gray-800 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">Prompting Mastery</h3>
                      <p className="text-xs text-gray-400">The science of perfect output.</p>
                    </div>
                    <button className="text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors">
                      Mark Complete
                    </button>
                  </div>
                </div>

                <OverviewSection />
              </div>
            )}

            {activeTab === 'framework' && (
              <div className="animate-slide-up">
                <FrameworkSection />
              </div>
            )}

            {activeTab === 'techniques' && (
              <div className="animate-slide-up">
                <TechniquesSection />
              </div>
            )}

            {activeTab === 'exercises' && (
              <div className="animate-slide-up">
                <ExercisesSection steps={steps.filter(s => s.id.includes('step3') || s.id.includes('step4'))} completedSteps={completedSteps} toggleStep={toggleStep} />
              </div>
            )}

            {activeTab === 'prompts' && (
              <div className="animate-slide-up">
                <PromptsSection copyToClipboard={copyToClipboard} copiedPrompt={copiedPrompt} />
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="animate-slide-up">
                <ResourcesSection />
              </div>
            )}
          </div>

          {/* Sidebar Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white border-2 border-brand-black rounded-card p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Module Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Time</p>
                    <p className="font-bold">2-3 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Difficulty</p>
                    <p className="font-bold text-green-600">Beginner</p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <button className="w-full py-3 bg-brand-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                Download Resources
              </button>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
                <p className="font-bold mb-2">Prerequisites:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Module 1 Completed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Section
const OverviewSection = () => (
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">Stop "Chatting," Start Engineering</h2>

    <div className="prose max-w-none">
      <p className="text-lg mb-4">
        Most people treat AI like a magic 8-ball: they shake it (ask a vague question) and hope for a good answer.
        When the answer is mediocre, they blame the tool.
      </p>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 my-6">
        <p className="font-bold text-lg mb-2">💡 The difference between a novice and a pro:</p>
        <p className="text-xl font-bold">Prompt Engineering</p>
      </div>

      <p className="text-lg mb-4">
        Think of the Large Language Model (LLM) not as a smart person, but as a <strong>very fast,
          literal-minded intern</strong>. If you tell an intern "Write a blog post about coffee," you'll
        get a generic Wikipedia-style article.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-red-500 bg-red-50 rounded-xl p-4">
          <div className="text-2xl mb-2">❌</div>
          <h4 className="font-bold mb-2 text-red-700">Bad Prompt</h4>
          <p className="text-sm">"Write a blog post about coffee"</p>
          <p className="text-xs text-gray-600 mt-2">Result: Generic Wikipedia article</p>
        </div>
        <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4">
          <div className="text-2xl mb-2">✅</div>
          <h4 className="font-bold mb-2 text-green-700">Good Prompt</h4>
          <p className="text-sm">"Write a witty, 800-word guide on 'Pour Over vs. French Press' for snobby coffee enthusiasts"</p>
          <p className="text-xs text-gray-600 mt-2">Result: Usable, targeted content</p>
        </div>
      </div>

      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold mb-3">🎯 What You'll Master:</h3>
        <ul className="space-y-2">
          <li>✅ The "Mega-Prompt" Framework (C.P.T.C.F.S. Protocol)</li>
          <li>✅ The "3-Turn Rule" for iterative refinement</li>
          <li>✅ Few-Shot Prompting to clone your writing style</li>
          <li>✅ Chain of Thought for complex reasoning</li>
          <li>✅ Professional-grade outputs 90% of the time</li>
        </ul>
      </div>

      <p className="text-lg font-medium">
        In this module, we're moving from <span className="line-through text-gray-400">"Conversational Prompting"</span>
        {' '}to <strong className="text-brand-orange">"Structural Prompting"</strong> (instructing like a coder).
      </p>
    </div>
  </div>
);

// Framework Section
const FrameworkSection = () => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">The "Mega-Prompt" Framework</h2>
      <p className="text-lg text-gray-700 mb-6">
        A perfect prompt is not a sentence; it's a paragraph. To get consistent results, every major prompt
        must contain <strong>six specific components</strong>.
      </p>

      <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-bold mb-4 text-center">The C.P.T.C.F.S. Protocol</h3>
      </div>

      <div className="space-y-6">
        {/* Context */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              C
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Context (The "Who" and "Where")</h4>
              <p className="mb-3">You must ground the AI in a specific reality.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-300 rounded p-3">
                  <p className="text-xs font-bold text-red-700 mb-1">❌ Bad:</p>
                  <p className="text-sm">"Help me with marketing."</p>
                </div>
                <div className="bg-green-50 border border-green-300 rounded p-3">
                  <p className="text-xs font-bold text-green-700 mb-1">✅ Good:</p>
                  <p className="text-sm">"I am a boutique fitness studio owner in Austin, Texas. We specialize in HIIT for busy professionals."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Persona */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              P
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Persona (The "Role")</h4>
              <p className="mb-3">Who is the AI pretending to be? This activates specific subsets of its training data.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-300 rounded p-3">
                  <p className="text-xs font-bold text-red-700 mb-1">❌ Bad:</p>
                  <p className="text-sm">"Write an email."</p>
                </div>
                <div className="bg-green-50 border border-green-300 rounded p-3">
                  <p className="text-xs font-bold text-green-700 mb-1">✅ Good:</p>
                  <p className="text-sm">"Act as a Senior Direct Response Copywriter with 10 years of experience in high-ticket sales."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-yellow text-brand-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              T
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Task (The "What")</h4>
              <p className="mb-3">Be surgically precise about the action.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-300 rounded p-3">
                  <p className="text-xs font-bold text-red-700 mb-1">❌ Bad:</p>
                  <p className="text-sm">"Write a post."</p>
                </div>
                <div className="bg-green-50 border border-green-300 rounded p-3">
                  <p className="text-xs font-bold text-green-700 mb-1">✅ Good:</p>
                  <p className="text-sm">"Draft 3 variations of a LinkedIn post promoting our new summer challenge."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Constraints */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-yellow-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-orange text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              C
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Constraints (The "Guardrails") ⭐ MOST IMPORTANT</h4>
              <p className="mb-3">Tell the AI what <strong>NOT</strong> to do.</p>
              <div className="bg-white border border-gray-300 rounded p-4">
                <p className="font-bold mb-2">Examples:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "Do not use hashtags."</li>
                  <li>• "Do not use emojis."</li>
                  <li>• "Keep sentences under 15 words."</li>
                  <li>• "No fluff or preamble."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Format */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-blue text-brand-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              F
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Format (The "Output")</h4>
              <p className="mb-3">How should the data look?</p>
              <div className="bg-white border border-gray-300 rounded p-4">
                <p className="font-bold mb-2">Examples:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "A Markdown table"</li>
                  <li>• "A bulleted list"</li>
                  <li>• "A JSON code block"</li>
                  <li>• "A 5-paragraph essay"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Style */}
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              S
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Style/Tone (The "Vibe")</h4>
              <div className="bg-white border border-gray-300 rounded p-4">
                <p className="font-bold mb-2">Examples:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "Empathetic but firm"</li>
                  <li>• "Witty and sarcastic"</li>
                  <li>• "Professional and academic"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Module2Content;

// Techniques Section
const TechniquesSection = () => (
  <div className="space-y-6">
    {/* 3-Turn Rule */}
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">The "3-Turn Rule"</h2>
      <p className="text-lg text-gray-700 mb-6">
        Beginners take the first answer the AI gives. <strong>Pros know the first answer is just a draft.</strong>
      </p>

      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <p className="font-bold text-lg mb-2">The Rule:</p>
        <p>Never use the first output (Turn 1) without at least two rounds of refinement.</p>
      </div>

      <div className="space-y-4">
        <div className="border-2 border-brand-black rounded-xl p-6 bg-blue-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-brand-blue text-brand-black w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold">Turn 1: The Generative Phase</h4>
          </div>
          <p>You send your Mega-Prompt. The AI generates the draft.</p>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-yellow-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-brand-yellow text-brand-black w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold">Turn 2: The Critique Phase</h4>
          </div>
          <p className="mb-3">You critique the draft.</p>
          <div className="bg-white border border-gray-300 rounded p-3 font-mono text-sm">
            "This is good, but the tone is too salesy. Rewrite the second paragraph to sound more educational.
            Also, you missed the pricing details I mentioned."
          </div>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-green-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold">Turn 3: The Polish Phase</h4>
          </div>
          <p className="mb-3">Final formatting.</p>
          <div className="bg-white border border-gray-300 rounded p-3 font-mono text-sm">
            "Perfect. Now format this for a newsletter, bolding the key takeaways."
          </div>
        </div>
      </div>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mt-6">
        <p className="font-bold">💡 Why this matters:</p>
        <p>The AI's "context window" (memory) gets better as the conversation gets deeper. It understands
          what you want more clearly in Turn 3 than in Turn 1.</p>
      </div>
    </div>

    {/* Few-Shot Prompting */}
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Few-Shot Prompting</h2>
      <p className="text-lg text-gray-700 mb-6">
        If you want the AI to write like <strong>you</strong>, you must feed it samples of your writing.
      </p>

      <div className="bg-gray-50 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold text-lg mb-3">The Structure:</h4>
        <div className="bg-white border border-gray-300 rounded p-4 font-mono text-sm whitespace-pre-wrap">
          {`"I want you to write a tweet thread.

Here is Example 1 of a good tweet: [PASTE TWEET]

Here is Example 2 of a good tweet: [PASTE TWEET]

Now, using the same sentence structure, length, and humor style as the examples above, write a new tweet about [TOPIC]."`}
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
        <p className="font-bold text-green-700 mb-2">✨ Result:</p>
        <p className="text-green-700">This single technique solves 80% of "Tone" issues.</p>
      </div>
    </div>

    {/* Chain of Thought */}
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Chain of Thought (CoT)</h2>
      <p className="text-lg text-gray-700 mb-6">
        For complex logic or math problems, AI often hallucinates because it tries to guess the answer immediately.
        You can force it to "show its work."
      </p>

      <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold text-lg mb-3">The Instruction:</h4>
        <div className="bg-white border border-gray-300 rounded p-4 font-mono text-sm">
          "Before you give me the final answer, think step-by-step. Break down your logic for each part of
          the problem. Then, present the final recommendation."
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
        <p className="font-bold text-blue-700 mb-2">📊 When to use it:</p>
        <p className="text-blue-700">Business strategy, pricing models, coding, or legal analysis.</p>
      </div>
    </div>
  </div>
);

// Exercises Section
const ExercisesSection = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-6">Practice Exercises</h2>

      {/* Exercise 1 */}
      <div className="mb-8">
        <div className="bg-brand-orange/20 border-2 border-brand-black rounded-xl p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">Exercise 1: The "Cold Outreach" Email</h3>
          <p className="font-medium">Goal: Write an email that gets a meeting.</p>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 1: Open a new chat</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 2: Apply the Persona</p>
            <p className="text-sm text-gray-600">"Act as a B2B Sales Expert."</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 3: Apply Context</p>
            <p className="text-sm text-gray-600">"We sell AI automation services to real estate agents."</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 4: Apply Task</p>
            <p className="text-sm text-gray-600">"Write a cold email to a broker."</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-yellow-50">
            <p className="font-bold mb-2">Step 5: Apply Constraints</p>
            <p className="text-sm text-gray-600">"Under 150 words. No 'I hope this finds you well.' End with a soft call to action."</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-green-50">
            <p className="font-bold mb-2">Step 6: Evaluate</p>
            <p className="text-sm text-gray-600">Did it follow the length limit? Is the tone right?</p>
          </div>
        </div>

        {steps[0] && (
          <div className="mt-4">
            <StepCheckbox step={steps[0]} completed={completedSteps.includes(steps[0].id)} onToggle={toggleStep} />
          </div>
        )}
      </div>

      {/* Exercise 2 */}
      <div>
        <div className="bg-brand-blue/20 border-2 border-brand-black rounded-xl p-6 mb-4">
          <h3 className="text-2xl font-bold mb-2">Exercise 2: The "Meeting Summarizer"</h3>
          <p className="font-medium">Goal: Turn messy notes into a clean report.</p>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 1: Paste Notes</p>
            <p className="text-sm text-gray-600">Paste a messy block of text from a meeting.</p>
          </div>
          <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
            <p className="font-bold mb-2">Step 2: The Prompt</p>
            <div className="bg-white border border-gray-300 rounded p-3 mt-2 font-mono text-sm">
              "Organize these notes. Group them into: 1. Decisions Made, 2. Action Items (with owners),
              3. Open Questions. Use a table format."
            </div>
          </div>
        </div>

        {steps[1] && (
          <div className="mt-4">
            <StepCheckbox step={steps[1]} completed={completedSteps.includes(steps[1].id)} onToggle={toggleStep} />
          </div>
        )}
      </div>
    </div>
  </div>
);

// Prompts Section
const PromptsSection = ({ copyToClipboard, copiedPrompt }) => {
  const prompts = [
    {
      id: 'mega-prompt',
      title: 'The Universal "Mega-Prompt" Template',
      description: 'Copy this into your notes and fill in the brackets for every major task',
      text: `**Role:** You are an expert [JOB TITLE] with deep expertise in [SPECIFIC SKILL].

**Context:** I am [YOUR ROLE] trying to [GOAL] for [TARGET AUDIENCE].

**Task:** Please create [SPECIFIC OUTPUT].

**Constraints:**
• Tone should be [ADJECTIVE].
• Max length: [NUMBER] words.
• Do NOT use [FORBIDDEN WORDS/CONCEPTS].
• Focus heavily on [KEY PRIORITY].

**Format:** Present the final output as a [TABLE/LIST/CODE BLOCK].`
    },
    {
      id: 'style-thief',
      title: 'The "Style Thief" (Few-Shot Prompt)',
      description: 'Clone any writing style',
      text: `Analyze the writing style of the following text snippets. Pay attention to sentence length, vocabulary complexity, and use of humor.

[TEXT SAMPLE 1]

[TEXT SAMPLE 2]

Now, write a new paragraph about [NEW TOPIC] effectively cloning that exact style.`
    },
    {
      id: 'refiner',
      title: 'The "Refiner" (Turn 2 Correction)',
      description: 'Make the AI critique and improve its own work',
      text: `Critique your previous output. Identify 3 areas where it is weak, generic, or factually ambiguous. Then, re-write the entire response fixing those 3 issues.`
    },
    {
      id: 'chain-of-thought',
      title: 'The "Chain of Thought" (For Strategy)',
      description: 'Force step-by-step reasoning',
      text: `I need to make a decision about [PROBLEM]. Before providing a recommendation, list out the Pros, Cons, Risks, and Potential 2nd Order Effects. Think step-by-step. Once you have analyzed these factors, give me your final recommendation.`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border-2 border-brand-black rounded-card p-8">
        <h2 className="text-3xl font-bold mb-4">Key Prompts (Copy & Paste)</h2>
        <p className="text-lg text-gray-700 mb-6">
          Save these to your Prompt Library. Click to copy!
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
              className="px-4 py-2 bg-brand-orange text-white rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all flex-shrink-0"
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
  <div className="bg-white border-2 border-brand-black rounded-card p-8">
    <h2 className="text-3xl font-bold mb-6">Resources & Tools</h2>

    <h3 className="text-2xl font-bold mb-4">Required Tools</h3>
    <div className="space-y-4 mb-8">
      <div className="p-4 border-2 border-brand-black rounded-xl bg-gray-50">
        <h4 className="font-bold text-lg mb-2">📝 Prompt Library Tool</h4>
        <p className="text-sm text-gray-600 mb-3">Save your best prompts for reuse</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Notion</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Evernote</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Google Docs</span>
        </div>
      </div>

      <div className="p-4 border-2 border-brand-black rounded-xl bg-gray-50">
        <h4 className="font-bold text-lg mb-2">⚡ Text Expander (Optional)</h4>
        <p className="text-sm text-gray-600 mb-3">Paste your "Mega-Prompt" template with a keyboard shortcut</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">TextExpander</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Magical</span>
        </div>
      </div>
    </div>

    <h3 className="text-2xl font-bold mb-4">Troubleshooting Guide</h3>
    <div className="space-y-3">
      <div className="p-4 bg-red-50 border-2 border-red-500 rounded-xl">
        <p className="font-bold text-red-700 mb-2">Problem: The AI is "Hallucinating" (Making up facts)</p>
        <p className="text-sm text-red-700">Fix: Add the constraint: "If you do not know the specific answer, state 'I do not have that information' rather than guessing."</p>
      </div>

      <div className="p-4 bg-yellow-50 border-2 border-yellow-500 rounded-xl">
        <p className="font-bold text-yellow-700 mb-2">Problem: The AI is being lazy (short, incomplete answers)</p>
        <p className="text-sm text-yellow-700">Fix: The "God Mode" trick. Tell the AI: "This task is vital for my career. Take a deep breath and do this step-by-step. I need high-effort output."</p>
      </div>

      <div className="p-4 bg-blue-50 border-2 border-blue-500 rounded-xl">
        <p className="font-bold text-blue-700 mb-2">Problem: The AI forgets what you told it 10 messages ago</p>
        <p className="text-sm text-blue-700">Fix: LLMs have limited memory. If a chat gets too long, start a fresh one and paste a summary of the previous chat as context.</p>
      </div>
    </div>

    <h3 className="text-2xl font-bold mt-8 mb-4">Related Modules</h3>
    <div className="space-y-3">
      <div className="p-4 bg-gray-100 border-2 border-brand-black rounded-xl">
        <p className="font-bold">Previous: Module 1</p>
        <p className="text-sm text-gray-600">AI Quick Start for Business (Environment Setup)</p>
      </div>
      <div className="p-4 bg-brand-orange/10 border-2 border-brand-black rounded-xl">
        <p className="font-bold">Next: Module 3</p>
        <p className="text-sm text-gray-600">AI for Content & Marketing Fundamentals</p>
      </div>
    </div>
  </div>
);

// Helper Components
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
        <span className="font-bold">2-3 hours</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Difficulty:</span>
        <span className="font-bold text-green-600">Beginner</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Prerequisites:</span>
        <span className="font-bold">Module 1</span>
      </div>
    </div>
  </div>
);

const ChecklistCard = ({ steps, completedSteps, toggleStep }) => (
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
          <label className="text-left">
            {step.title}
          </label>
        </div>
      ))}
    </div>
  </div>
);
