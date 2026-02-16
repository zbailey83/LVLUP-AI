import { motion } from 'framer-motion';
import Logo from '../ui/Logo';
import { ArrowRight, Zap, Target, BarChart2, Users } from 'lucide-react';

const SplashPage = ({ onGetStarted, onLogin }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const features = [
        {
            icon: Zap,
            title: "Automate Everything",
            description: "Learn to build AI agents that handle your repetitive tasks 24/7.",
            color: "bg-brand-yellow",
        },
        {
            icon: Target,
            title: "Precision Marketing",
            description: "Target the right audience with hyper-personalized AI content strategies.",
            color: "bg-brand-purple",
        },
        {
            icon: BarChart2,
            title: "Data-Driven Growth",
            description: "Make decisions backed by real-time AI analytics and insights.",
            color: "bg-brand-blue",
        },
        {
            icon: Users,
            title: "Community Power",
            description: "Join a network of AI innovators building the future of work.",
            color: "bg-brand-orange",
        },
    ];

    return (
        <div className="min-h-screen bg-brand-offwhite font-kodchassan overflow-hidden">
            {/* Navbar */}
            <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto z-50">
                <Logo className="w-10 h-10" textClassName="text-xl hidden md:block" />
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Abstract Background Elements */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-brand-purple rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-orange rounded-full blur-3xl opacity-30 animate-pulse delay-700" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-4xl"
                >
                    <motion.div variants={itemVariants} className="mb-8 inline-block">
                        <span className="px-6 py-3 bg-brand-yellow border-2 border-brand-black rounded-full font-bold text-xl shadow-neo transition-transform hover:scale-105 inline-block">
                            LVL UP AI ACADEMY
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-10 w-full max-w-2xl mx-auto">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-white rounded-card border-[3px] border-brand-black shadow-2xl overflow-hidden transform rotate-[-1deg] transition-all duration-300 hover:rotate-0 hover:shadow-xl"
                        >
                            <img
                                src="/lvl-up-logo-splash.png"
                                alt="LVL UP AI Academy"
                                className="w-full h-auto block"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button
                            onClick={onGetStarted}
                            className="px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-full border-2 border-brand-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group"
                        >
                            Start Learning Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={onLogin}
                            className="px-8 py-4 bg-white text-brand-black text-lg font-bold rounded-full border-2 border-brand-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                            View Curriculum
                        </button>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-brand-black">
                        Master AI Agents & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">
                            Scale Your Business
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join the elite community of entrepreneurs using AI to automate workflows,
                        multiply output, and reclaim their time.
                    </motion.p>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white border-t-2 border-brand-black">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-card border-2 border-brand-black ${feature.color} h-full shadow-neo`}
                            >
                                <div className="w-12 h-12 bg-white rounded-xl border-2 border-brand-black flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-brand-black" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm font-medium opacity-90">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-brand-black text-white text-center">
                <p className="opacity-50">© 2026 LVL UP AI ACADEMY. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SplashPage;
