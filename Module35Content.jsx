import React, { useState } from 'react';
import { Play, CheckCircle, Clock, Target, ArrowLeft } from 'lucide-react';

const Module35Content = ({ onBack }) => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: 'Overview & Video', icon: '📺' },
        { id: 'planning', label: '1. Planning Your GPT', icon: '📝' },
        { id: 'building', label: '2. Building It', icon: '🛠️' },
        { id: 'testing', label: '3. Testing & Launch', icon: '🚀' },
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
                                BONUS • MODULE 35
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Building Custom GPTs</h1>
                            <p className="text-white/90 text-lg font-medium">Create specialized AI assistants for your business</p>
                        </div>

                        <div className="bg-white border-2 border-brand-black rounded-xl p-3 min-w-[150px] shadow-neo-sm">
                            <div className="text-xs font-bold text-gray-500 mb-1">KEY OUTCOME</div>
                            <div className="font-bold text-brand-black leading-tight">
                                specialized AI assistants for repetitive tasks
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
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all border-2 ${activeSection === section.id
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
                        {activeSection === 'overview' && (
                            <div className="space-y-8 animate-slide-up">
                                {/* Video Player Card */}
                                <div className="bg-black rounded-card overflow-hidden shadow-neo border-2 border-brand-black">
                                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative group cursor-pointer">
                                        {/* Placeholder for actual video embed */}
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white">
                                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                                            </div>
                                            <p className="text-white font-bold text-xl">Watch Module Introduction</p>
                                            <p className="text-gray-400 text-sm mt-2">Duration: 12:45</p>
                                        </div>

                                        {/* Progress bar simulation */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                                            <div className="w-[0%] h-full bg-brand-orange"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gray-900 text-white border-t border-gray-800 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">Introduction to Custom GPTs</h3>
                                            <p className="text-xs text-gray-400">Learn why and when to build a custom GPT.</p>
                                        </div>
                                        <button className="text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors">
                                            Mark Complete
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-brand-black rounded-card p-6 md:p-8">
                                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Custom GPTs allow you to package specific instructions, knowledge, and skills into a tailored version of ChatGPT.
                                        In this module, we'll move beyond simple prompts and build improved workflows that persist.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                                            <h3 className="font-bold text-lg mb-2">🎯 The Goal</h3>
                                            <p className="text-gray-600">Create a GPT that handles one specific recurring task perfectly (e.g., "The Email Drafter" or "The Data Analyst").</p>
                                        </div>
                                        <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                                            <h3 className="font-bold text-lg mb-2">🛠️ The Tools</h3>
                                            <p className="text-gray-600">You will need a <strong>ChatGPT Plus</strong> subscription to build and use Custom GPTs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'planning' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">Phase 1: Planning Your GPT</h2>
                                <p className="text-gray-700 mb-4">Before clicking "Create", decide on the GPT's single purpose.</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Name:</strong> Give it a catchy, clear name.</li>
                                    <li><strong>Role:</strong> Who isn't it? (e.g., "You are a senior copy editor...")</li>
                                    <li><strong>Constraints:</strong> What should it NEVER do?</li>
                                    <li><strong>Knowledge Source:</strong> What files does it need? (PDFs, Spreadsheets)</li>
                                </ul>
                            </div>
                        )}

                        {activeSection === 'building' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">Phase 2: Building It</h2>
                                <p className="text-gray-700 mb-4">Step-by-step guide to the GPT Builder interface.</p>
                                <div className="p-4 bg-gray-100 rounded-xl border border-gray-300 font-mono text-sm">
                                    <p>1. Go to "Explore GPTs" -&gt; "Create"</p>
                                    <p>2. Use the "Configure" tab for precise control.</p>
                                    <p>3. Upload your knowledge files.</p>
                                </div>
                            </div>
                        )}

                        {activeSection === 'testing' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">Phase 3: Testing & Launch</h2>
                                <p className="text-gray-700">Test your GPT with edge cases to ensure it follows instructions before sharing it with your team.</p>
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
                                        <p className="font-bold">2-3 Hours</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Target className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Difficulty</p>
                                        <p className="font-bold text-brand-orange">Intermediate</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-200" />

                            <button className="w-full py-3 bg-brand-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                                Download Resources
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module35Content;
