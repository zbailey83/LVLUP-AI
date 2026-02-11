import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../ui/Logo';

export default function SignupForm({ onSignupSuccess, onSwitchToLogin }) {
    const { signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [needsVerification, setNeedsVerification] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await signUp(email, password, name);

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Check if email verification is required
            if (data?.user && !data.session) {
                setNeedsVerification(true);
            } else {
                if (onSignupSuccess) onSignupSuccess();
            }
            setLoading(false);
        }
    };

    if (needsVerification) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-brand-offwhite p-4 font-kodchassan">
                <div className="w-full max-w-md bg-white border-3 border-brand-black rounded-card p-8 shadow-neo text-center">
                    <div className="flex justify-center mb-6">
                        <Logo />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Check your email</h2>
                    <p className="mb-6">We sent a verification link to <strong>{email}</strong>.</p>
                    <button
                        onClick={onSwitchToLogin}
                        className="bg-brand-blue text-brand-black font-bold py-2 px-6 rounded-full border-2 border-brand-black shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-brand-offwhite p-4 font-kodchassan">
            <div className="w-full max-w-md bg-white border-3 border-brand-black rounded-card p-8 shadow-neo">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-orange text-white font-bold py-3 rounded-full border-2 border-brand-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p>Already have an account?{' '}
                        <button
                            onClick={onSwitchToLogin}
                            className="text-brand-purple font-bold hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
