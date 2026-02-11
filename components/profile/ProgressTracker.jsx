import { motion } from 'framer-motion';

const ProgressTracker = ({ progress = {} }) => {
    // Define modules (in a real app, this might come from a prop or context)
    const modules = [
        { id: 'module-1', title: 'AI Foundations', maxScore: 100 },
        { id: 'module-2', title: 'Agent Architecture', maxScore: 100 },
        { id: 'module-3', title: 'Generative Models', maxScore: 100 },
    ];

    // Calculate overall progress
    const totalScore = modules.reduce((acc, mod) => acc + (progress[mod.id] || 0), 0);
    const maxPossible = modules.length * 100;
    const overallPercent = Math.round((totalScore / maxPossible) * 100) || 0;

    return (
        <div className="mt-8 pt-8 border-t-2 border-brand-black w-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Course Progress</h3>
                <span className="px-3 py-1 bg-brand-yellow border-2 border-brand-black rounded-full font-bold text-sm">
                    {overallPercent}% Complete
                </span>
            </div>

            <div className="space-y-4">
                {modules.map((mod) => {
                    const currentScore = progress[mod.id] || 0;
                    const percent = Math.min(100, Math.max(0, currentScore));

                    return (
                        <div key={mod.id} className="relative">
                            <div className="flex justify-between mb-1 text-sm font-bold">
                                <span>{mod.title}</span>
                                <span>{percent}%</span>
                            </div>
                            <div className="h-4 bg-gray-200 border-2 border-brand-black rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percent}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-full bg-brand-green relative"
                                >
                                    {/* Stripe pattern overlay */}
                                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]" />
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressTracker;
