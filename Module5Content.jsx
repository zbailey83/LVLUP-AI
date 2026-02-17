import React, { useState } from 'react';
import { Play, CheckCircle, Clock, Target, ArrowLeft } from 'lucide-react';
import { useAuth } from './context/AuthContext';

const Module5Content = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const { user } = useAuth();

    const sections = [
        { id: 'overview', label: 'Overview & Video', icon: '📺' },
        { id: 'framework', label: 'The Framework', icon: '📐' },
        { id: 'setup', label: 'Setup Guide', icon: '🛠️' },
        { id: 'automation', label: 'Automation Rules', icon: '⚡' },
    ];

    return (
        <div className="min-h-screen bg-brand-offwhite font-kodchassan animate-fade-in">
            {/* Header */}
            <div className="bg-brand-purple border-b-2 border-brand-black sticky top-0 z-20">
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
                                MARKETING TRACK • MODULE 5
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Social Media Agentic Framework</h1>
                            <p className="text-white/90 text-lg font-medium">Build a 24/7 engagement machine that never sleeps</p>
                        </div>

                        <div className="bg-white border-2 border-brand-black rounded-xl p-3 min-w-[150px] shadow-neo-sm">
                            <div className="text-xs font-bold text-gray-500 mb-1">KEY OUTCOME</div>
                            <div className="font-bold text-brand-black leading-tight">
                                24/7 social monitoring & response system
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
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            poster="/placeholder-poster.jpg" // You might want to add a poster later
                                        >
                                            <source src="/The_24_7_Engagement_Machine.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="p-4 bg-gray-900 text-white border-t border-gray-800 flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold">The 24/7 Engagement Machine</h3>
                                            <p className="text-xs text-gray-400">Introduction to automated social monitoring.</p>
                                        </div>
                                        <button className="text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors">
                                            Mark Complete
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-brand-black rounded-card p-6 md:p-8">
                                    <h2 className="text-2xl font-bold mb-4">Why Automation Matters</h2>
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        Social media never sleeps, but you do. In this module, we will build an "Agentic Framework"
                                        that monitors your channels, identifies high-value comments, and drafts responses for your approval—or sends them automatically.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                                            <h3 className="font-bold text-lg mb-2">🚫 The Problem</h3>
                                            <p className="text-gray-600">Missing leads in DMs or comments because you can't be online 24/7.</p>
                                        </div>
                                        <div className="p-4 bg-brand-offwhite rounded-xl border-2 border-brand-black">
                                            <h3 className="font-bold text-lg mb-2">✅ The Solution</h3>
                                            <p className="text-gray-600">An AI watchdog that alerts you only when it matters or responds instantly to FAQs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'framework' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">The Agentic Framework</h2>
                                <p className="text-gray-700 mb-4">Understand the flow of data from social platforms to your AI agent and back.</p>
                                <div className="p-6 bg-brand-blue/10 border-2 border-brand-black rounded-xl text-center">
                                    <p className="font-bold text-lg">Platform (e.g., LinkedIn) ➔ Webhook ➔ AI Analysis ➔ Action</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'setup' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">Tools Setup</h2>
                                <p className="text-gray-700 mb-4">We will use Make.com or Zapier to connect the pipes.</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Create account on Make.com</li>
                                    <li>Connect your Social Media Account</li>
                                    <li>Connect OpenAI API</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'automation' && (
                            <div className="bg-white border-2 border-brand-black rounded-card p-8 animate-slide-up">
                                <h2 className="text-2xl font-bold mb-4">Building the Automation</h2>
                                <p className="text-gray-700">Detailed steps on configuring the triggers and actions.</p>
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
                                        <p className="font-bold">1-2 Days</p>
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

                            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm">
                                <p className="font-bold mb-2">Tools Required:</p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Make.com / Zapier</li>
                                    <li>ChatGPT API</li>
                                    <li>Buffer / Hootsuite</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module5Content;
