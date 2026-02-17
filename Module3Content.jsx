import { useState } from 'react';
import { ArrowLeft, Play, Clock, Target, CheckCircle, Copy, Check, Download, ExternalLink } from 'lucide-react';

const Module3Content = ({ onBack }) => {
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
    { id: 'voice', label: 'Brand Voice', icon: '🎤' },
    { id: 'pillars', label: 'Content Pillars', icon: '🏛️' },
    { id: 'repurposing', label: 'Repurposing Matrix', icon: '♻️' },
    { id: 'workflow', label: 'Batch Workflow', icon: '⚡' },
    { id: 'prompts', label: 'Key Prompts', icon: '💬' },
    { id: 'resources', label: 'Resources', icon: '📚' }
  ];

  const steps = [
    { id: 'step1', title: 'Gather 3-5 examples of your best content' },
    { id: 'step2', title: 'Run the Voice Decoder prompt' },
    { id: 'step3', title: 'Define your 3 Content Pillars' },
    { id: 'step4', title: 'Generate 10 content ideas per pillar' },
    { id: 'step5', title: 'Create your first repurposed content set' },
    { id: 'step6', title: 'Generate visuals for your posts' },
    { id: 'step7', title: 'Complete a 2-hour batch production sprint' },
    { id: 'step8', title: 'Set up your content calendar' }
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
                CORE TRACK • MODULE 3
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Content & Marketing Fundamentals</h1>
              <p className="text-white/90 text-lg font-medium">"The Infinite Content Engine"</p>
            </div>

            <div className="bg-white border-2 border-brand-black rounded-xl p-3 min-w-[150px] shadow-neo-sm">
              <div className="text-xs font-bold text-gray-500 mb-1">KEY OUTCOME</div>
              <div className="font-bold text-brand-black leading-tight">
                Build a Content Supply Chain
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
                      <h3 className="font-bold">Content Engine</h3>
                      <p className="text-xs text-gray-400">Building your infinite supply chain.</p>
                    </div>
                    <button className="text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors">
                      Mark Complete
                    </button>
                  </div>
                </div>

                <OverviewSection />
              </div>
            )}

            {activeTab === 'voice' && (
              <div className="animate-slide-up">
                <VoiceSection steps={steps.filter(s => s.id === 'step1' || s.id === 'step2')} completedSteps={completedSteps} toggleStep={toggleStep} />
              </div>
            )}

            {activeTab === 'pillars' && (
              <div className="animate-slide-up">
                <PillarsSection steps={steps.filter(s => s.id === 'step3' || s.id === 'step4')} completedSteps={completedSteps} toggleStep={toggleStep} />
              </div>
            )}

            {activeTab === 'repurposing' && (
              <div className="animate-slide-up">
                <RepurposingSection steps={steps.filter(s => s.id === 'step5' || s.id === 'step6')} completedSteps={completedSteps} toggleStep={toggleStep} />
              </div>
            )}

            {activeTab === 'workflow' && (
              <div className="animate-slide-up">
                <WorkflowSection steps={steps.filter(s => s.id === 'step7' || s.id === 'step8')} completedSteps={completedSteps} toggleStep={toggleStep} />
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
                    <p className="font-bold">3-4 hours</p>
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
                  <li>Module 2 Completed</li>
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
    <h2 className="text-3xl font-bold mb-6">Consistency is the Killer</h2>

    <div className="prose max-w-none">
      <p className="text-lg mb-4">
        The #1 reason businesses fail at content marketing isn't a lack of creativity; it's a lack of <strong>consistency</strong>.
        You post three times in a "motivated" week, then ghost your audience for a month when business gets busy.
      </p>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 my-6">
        <p className="font-bold text-lg mb-2">💡 AI solves the consistency problem</p>
        <p>But most people use it wrong. They ask ChatGPT to "Write me 10 tweets about real estate," and they get garbage that sounds like a robot.</p>
      </div>

      <p className="text-lg mb-4">
        In this module, we're building a <strong>Content Supply Chain</strong>. We will not ask the AI to "be creative"
        from scratch. We will use it to multiply your best ideas, clone your unique voice, and format everything for
        every platform instantly.
      </p>

      <div className="bg-brand-purple/10 border-2 border-brand-black rounded-xl p-6 my-6">
        <h3 className="text-xl font-bold mb-3">🎯 What You'll Build:</h3>
        <ul className="space-y-2">
          <li>✅ A Brand Voice Analyzer that clones your writing style</li>
          <li>✅ 3-4 Content Pillars for consistent themes</li>
          <li>✅ The Repurposing Matrix (1 idea → 5 assets)</li>
          <li>✅ A 2-hour batch workflow for 30 days of content</li>
          <li>✅ Visual generation for scroll-stopping posts</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border-2 border-red-500 bg-red-50 rounded-xl p-4">
          <div className="text-2xl mb-2">❌</div>
          <h4 className="font-bold mb-2 text-red-700">The Old Way</h4>
          <ul className="text-sm space-y-1">
            <li>• Stare at blank screen</li>
            <li>• Write one post at a time</li>
            <li>• Inconsistent voice</li>
            <li>• 2 hours per post</li>
          </ul>
        </div>
        <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4">
          <div className="text-2xl mb-2">✅</div>
          <h4 className="font-bold mb-2 text-green-700">The AI Way</h4>
          <ul className="text-sm space-y-1">
            <li>• Batch produce 30 days</li>
            <li>• 1 idea → 5 platforms</li>
            <li>• Consistent brand voice</li>
            <li>• 2 hours total</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Prerequisites</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">📝</div>
          <h4 className="font-bold mb-1">Your Source Material</h4>
          <p className="text-sm text-gray-600">3-5 examples of your best previous content (emails, blogs, or video transcripts)</p>
        </div>
        <div className="border-2 border-brand-black rounded-xl p-4">
          <div className="text-2xl mb-2">📅</div>
          <h4 className="font-bold mb-1">A Content Calendar</h4>
          <p className="text-sm text-gray-600">Simple Google Sheet or Notion with Date, Platform, Topic, Status columns</p>
        </div>
      </div>
    </div>
  </div>
);

// Voice Section
const VoiceSection = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Step 1: The Brand Voice Analyzer</h2>
      <p className="text-lg text-gray-700 mb-6">
        Before we write a single post, we must define <strong>how</strong> you sound. If you skip this,
        your content will sound like every other AI-generated account.
      </p>

      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-3">The Strategy:</h3>
        <p>We will feed your past content into the AI and ask it to reverse-engineer your style.</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border-2 border-brand-black rounded-xl p-6 bg-blue-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-brand-blue text-brand-black w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
            <h4 className="text-xl font-bold">Gather Data</h4>
          </div>
          <p>Copy the text from your 3 best-performing posts/emails.</p>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-yellow-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-brand-yellow text-brand-black w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
            <h4 className="text-xl font-bold">Run the Analysis</h4>
          </div>
          <p>Use <strong>Prompt 1 (The Voice Decoder)</strong> from the Prompts section.</p>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-green-50">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
            <h4 className="text-xl font-bold">Save the Output</h4>
          </div>
          <p className="mb-3">The AI will give you a "Style Guide" paragraph describing your tone.</p>
          <div className="bg-white border border-gray-300 rounded p-3 text-sm italic">
            Example: "Direct, witty, uses short sentences, avoids jargon, frequently uses metaphors,
            conversational tone with occasional humor"
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-6">
        <p className="font-bold text-red-700 mb-2">⚠️ Critical Step:</p>
        <p className="text-red-700">
          <strong>Save this Style Guide!</strong> You will paste this into the "Context" section of every future content prompt.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

// Pillars Section
const PillarsSection = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Step 2: The "Content Pillar" Strategy</h2>
      <p className="text-lg text-gray-700 mb-6">
        Don't just "post stuff." Professional accounts rotate between 3-4 core themes (Pillars).
      </p>

      <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold text-lg mb-3">Example (Fitness Coach):</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white border-2 border-brand-black rounded-xl p-4">
            <div className="text-2xl mb-2">🥗</div>
            <p className="font-bold">Pillar 1</p>
            <p className="text-sm text-gray-600">Nutrition Tips</p>
          </div>
          <div className="bg-white border-2 border-brand-black rounded-xl p-4">
            <div className="text-2xl mb-2">💪</div>
            <p className="font-bold">Pillar 2</p>
            <p className="text-sm text-gray-600">Workout Mistakes</p>
          </div>
          <div className="bg-white border-2 border-brand-black rounded-xl p-4">
            <div className="text-2xl mb-2">⭐</div>
            <p className="font-bold">Pillar 3</p>
            <p className="text-sm text-gray-600">Client Success Stories</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">The Workflow:</h3>
      <div className="space-y-4 mb-6">
        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <p className="font-bold mb-2">1. Define your Pillars</p>
          <p className="text-sm text-gray-600">Pick your top 3 themes that align with your business goals and audience interests.</p>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <p className="font-bold mb-2">2. The "Ideation Avalanche"</p>
          <p className="text-sm text-gray-600 mb-2">Use <strong>Prompt 2 (The Idea Matrix)</strong>. Ask the AI to generate 10 specific, controversial, or educational sub-topics for each pillar.</p>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-gray-50">
          <p className="font-bold mb-2">3. Select</p>
          <p className="text-sm text-gray-600">Pick the best 10 ideas total. You don't need infinite ideas; you need 10 good ones that we will repurpose.</p>
        </div>
      </div>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <p className="font-bold mb-2">💡 Pro Tip:</p>
        <p>Your pillars should answer: "What do I want to be known for?" Not "What can I talk about?"</p>
      </div>

      <div className="space-y-4">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

export default Module3Content;

// Repurposing Section
const RepurposingSection = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Step 3: The Repurposing Matrix (The Multiplier)</h2>
      <p className="text-lg text-gray-700 mb-6">
        This is where you save 20 hours a week. We're going to take <strong>one</strong> core idea and turn it into <strong>five</strong> assets.
      </p>

      <div className="bg-brand-orange/10 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-3">The "Waterfall" Method:</h3>
        <p>Always start with the "Rich" format (Long-form), then cut it down.</p>
      </div>

      <div className="mb-6">
        <div className="bg-brand-blue/20 border-2 border-brand-black rounded-xl p-6 mb-4">
          <h4 className="font-bold text-lg mb-2">📥 Input:</h4>
          <p>A rough script, a brain dump, or a blog post draft about "Topic A."</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-4 bg-white border-2 border-brand-black rounded-xl">
            <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-bold">YouTube Video Script</p>
              <p className="text-sm text-gray-600">Hook, Body, CTA</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-2 border-brand-black rounded-xl">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-bold">LinkedIn Text Post</p>
              <p className="text-sm text-gray-600">Broetry style</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-2 border-brand-black rounded-xl">
            <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-bold">Twitter/X Thread</p>
              <p className="text-sm text-gray-600">Punchy, thread-style</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-2 border-brand-black rounded-xl">
            <div className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <p className="font-bold">Instagram Caption</p>
              <p className="text-sm text-gray-600">Casual + Hashtags</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-2 border-brand-black rounded-xl">
            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
            <div>
              <p className="font-bold">Newsletter Blurb</p>
              <p className="text-sm text-gray-600">Teaser</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
        <p className="font-bold text-green-700 mb-2">✨ The Magic:</p>
        <p className="text-green-700">
          You execute this using <strong>Prompt 3 (The Repurposing Engine)</strong>. You paste your rough thought once,
          and the AI formats it for all five platforms simultaneously.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8">Visuals (Brief Overview)</h3>
      <p className="mb-4">Text is only half the battle. You need scroll-stopping visuals.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
          <h4 className="font-bold mb-2">🎨 Tools:</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Midjourney</strong> (Advanced)</li>
            <li>• <strong>DALL-E 3</strong> (Inside ChatGPT Plus)</li>
          </ul>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-4 bg-gray-50">
          <h4 className="font-bold mb-2">🎯 Strategy:</h4>
          <p className="text-sm">Don't ask for "A picture of a computer." Ask for specific styles.</p>
        </div>
      </div>

      <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h4 className="font-bold mb-2">Example Prompt:</h4>
        <div className="bg-white border border-gray-300 rounded p-3 font-mono text-sm">
          "Create a flat-vector illustration style image of a chaotic office desk, using my brand colors
          (Orange and Blue), minimal background, aspect ratio 16:9."
        </div>
      </div>

      <div className="bg-brand-yellow/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <p className="font-bold mb-2">💡 Consistency Tip:</p>
        <p>Once you find a prompt style you like, use the same style keywords for <em>every</em> image to build brand recognition.</p>
      </div>

      <div className="space-y-4">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

// Workflow Section
const WorkflowSection = ({ steps, completedSteps, toggleStep }) => (
  <div className="space-y-6">
    <div className="bg-white border-2 border-brand-black rounded-card p-8">
      <h2 className="text-3xl font-bold mb-4">Step 5: Batch Production Workflow (2-Hour Sprint)</h2>
      <p className="text-lg text-gray-700 mb-6">
        Here's how you actually do this in real life:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-2 border-brand-black rounded-xl p-6 bg-blue-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-blue text-brand-black px-4 py-2 rounded-full font-bold whitespace-nowrap">0:00 - 0:20</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Ideation</h4>
              <p>Run the "Idea Matrix" prompt. Pick your 4 topics for the week.</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-purple-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-purple text-white px-4 py-2 rounded-full font-bold whitespace-nowrap">0:20 - 0:40</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Voice Calibration</h4>
              <p>Paste your "Style Guide" into a fresh chat.</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-yellow-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-yellow text-brand-black px-4 py-2 rounded-full font-bold whitespace-nowrap">0:40 - 1:20</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Drafting</h4>
              <p>Feed the 4 topics into the "Repurposing Engine." You now have drafts for LinkedIn, Twitter, and IG for the whole week.</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-orange-50">
          <div className="flex items-start gap-4">
            <div className="bg-brand-orange text-white px-4 py-2 rounded-full font-bold whitespace-nowrap">1:20 - 1:40</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Review & Edit (Crucial!)</h4>
              <p>Spend 5 minutes per post injecting your human soul—add a personal story, fix a weird phrase, or add a specific client name.</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-brand-black rounded-xl p-6 bg-green-50">
          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold whitespace-nowrap">1:40 - 2:00</div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Visuals</h4>
              <p>Generate the images or headlines.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-purple/20 border-2 border-brand-black rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-3">Optimization Tips:</h3>
        <div className="space-y-3">
          <div>
            <p className="font-bold mb-1">🔥 The "Trend Jacking" Method:</p>
            <p className="text-sm">If big news hits your industry, paste the news article into ChatGPT and ask:
              "Summarize this and give me 3 distinct 'Hot Takes' on why this matters for [MY AUDIENCE]. Formatting: LinkedIn Post."</p>
          </div>
          <div>
            <p className="font-bold mb-1">#️⃣ Hashtag Optimization:</p>
            <p className="text-sm">Don't guess hashtags. Ask the AI: "List 15 relevant, high-traffic but low-competition hashtags for this post."</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4">Troubleshooting</h3>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-red-50 border-2 border-red-500 rounded-xl">
          <p className="font-bold text-red-700 mb-2">Issue: The content sounds repetitive</p>
          <p className="text-sm text-red-700">Fix: Your "Pillars" are too similar. Force the AI to vary the "Angle."
            Ask for one post that is a "Rant," one that is a "How-To," and one that is a "Story."</p>
        </div>

        <div className="p-4 bg-yellow-50 border-2 border-yellow-500 rounded-xl">
          <p className="font-bold text-yellow-700 mb-2">Issue: The hooks are boring</p>
          <p className="text-sm text-yellow-700">Fix: Use a specific "Hook prompt": "Rewrite the first sentence of these posts.
            Make them click-baity, open loops, or counter-intuitive statements."</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map(step => (
          <StepCheckbox key={step.id} step={step} completed={completedSteps.includes(step.id)} onToggle={toggleStep} />
        ))}
      </div>
    </div>
  </div>
);

// Prompts Section
const PromptsSection = ({ copyToClipboard, copiedPrompt }) => {
  const prompts = [
    {
      id: 'voice-decoder',
      title: 'Prompt 1: The Voice Decoder',
      description: 'Run this ONCE to get your Style Guide',
      text: `I am going to paste 3 examples of my best writing below. Please analyze them for:

1. Tone and Voice (Adjectives).
2. Sentence Structure (Length, rhythm).
3. Vocabulary (Simple vs. Complex, Jargon vs. Plain English).
4. Formatting quirks (Emoji use, spacing).

Create a 'Style Guide' summary that I can paste into future prompts to teach an AI to write exactly like me.

[PASTE EXAMPLES]`
    },
    {
      id: 'idea-matrix',
      title: 'Prompt 2: The Idea Matrix',
      description: 'The "Avalanche" - Generate 30 content ideas',
      text: `I need content ideas for my business, [BUSINESS NAME]. My target audience is [AUDIENCE]. My 3 Content Pillars are: [PILLAR 1], [PILLAR 2], [PILLAR 3].

Generate a table with 10 content ideas (rows).

Columns:
1. Topic Title.
2. The 'Hook' (First sentence).
3. Which Pillar it belongs to.
4. The format (Story, Listicle, or Contrarian View).

Make them unique and high-value, not generic advice.`
    },
    {
      id: 'repurposing-engine',
      title: 'Prompt 3: The Repurposing Engine',
      description: 'The "One-to-Many" - Turn 1 idea into 5 assets',
      text: `Context: You are my Social Media Manager. My Style Guide is: [PASTE STYLE GUIDE SUMMARY].

Task: I am providing a rough draft/transcript below on the topic of [TOPIC]. Repurpose this into the following 3 assets:

1. **LinkedIn Post:** Professional, spaced out sentences, 'Broetry' style, strong hook, Call to Action at the end.
2. **Twitter Thread:** 5 connected tweets. Punchy, short, no fluff.
3. **Instagram Caption:** Casual, conversational, include 3 line breaks before hashtags.

Source Text: [PASTE TEXT]`
    },
    {
      id: 'visual-prompt',
      title: 'Prompt 4: The Visual Prompt Generator',
      description: 'Generate DALL-E prompts for your posts',
      text: `I need an image for the LinkedIn post above. Write a detailed prompt for DALL-E 3.

Description: A metaphorical representation of [TOPIC].

Style: Minimalist 3D render, isometric view, [BRAND COLORS] color palette, high definition, white background. No text in the image.`
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border-2 border-brand-black rounded-card p-8">
        <h2 className="text-3xl font-bold mb-4">Key Prompts (Copy & Paste)</h2>
        <p className="text-lg text-gray-700 mb-6">
          These are your content creation superpowers. Click to copy!
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
              className="px-4 py-2 bg-brand-purple text-white rounded-full font-bold border-2 border-brand-black hover:shadow-neo transition-all flex-shrink-0"
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
        <h4 className="font-bold text-lg mb-2">💬 Text Generation</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">ChatGPT Plus</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Claude</span>
        </div>
      </div>

      <div className="p-4 border-2 border-brand-black rounded-xl bg-gray-50">
        <h4 className="font-bold text-lg mb-2">🎨 Image Generation</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">DALL-E 3</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Midjourney</span>
        </div>
      </div>

      <div className="p-4 border-2 border-brand-black rounded-xl bg-gray-50">
        <h4 className="font-bold text-lg mb-2">📅 Scheduling Tools (Optional)</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Buffer</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">Metricool</span>
          <span className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm font-medium">HypeFury</span>
        </div>
      </div>
    </div>

    <h3 className="text-2xl font-bold mb-4">Templates</h3>
    <div className="p-4 border-2 border-brand-black rounded-xl bg-brand-yellow/10 mb-8">
      <h4 className="font-bold mb-2">📊 Content Calendar Template</h4>
      <p className="text-sm text-gray-600 mb-3">A simple Google Sheet with columns:</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-white border-2 border-brand-black rounded-lg text-sm font-bold">Date</span>
        <span className="px-3 py-1 bg-white border-2 border-brand-black rounded-lg text-sm font-bold">Pillar</span>
        <span className="px-3 py-1 bg-white border-2 border-brand-black rounded-lg text-sm font-bold">Hook</span>
        <span className="px-3 py-1 bg-white border-2 border-brand-black rounded-lg text-sm font-bold">Status</span>
        <span className="px-3 py-1 bg-white border-2 border-brand-black rounded-lg text-sm font-bold">Asset Link</span>
      </div>
    </div>

    <h3 className="text-2xl font-bold mb-4">Related Modules</h3>
    <div className="space-y-3">
      <div className="p-4 bg-gray-100 border-2 border-brand-black rounded-xl">
        <p className="font-bold">Previous: Module 2</p>
        <p className="text-sm text-gray-600">Prompting Mastery Essentials</p>
      </div>
      <div className="p-4 bg-brand-orange/10 border-2 border-brand-black rounded-xl">
        <p className="font-bold">Next: Module 4</p>
        <p className="text-sm text-gray-600">Your First Automation Blueprint (Connecting the dots)</p>
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
        <span className="font-bold">3-4 hours</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Then:</span>
        <span className="font-bold text-green-600">&lt;2h/month</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Difficulty:</span>
        <span className="font-bold text-green-600">Beginner</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Prerequisites:</span>
        <span className="font-bold">Module 2</span>
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
