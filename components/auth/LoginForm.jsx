import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../ui/Logo';

export default function LoginForm({ onLoginSuccess, onSwitchToSignup }) {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await signIn(email, password);

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Success
            if (onLoginSuccess) onLoginSuccess();
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-brand-offwhite p-4 font-kodchassan">
            <div className="w-full max-w-md bg-white border-3 border-brand-black rounded-card p-8 shadow-neo">
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full bg-brand-yellow text-brand-black font-bold py-3 rounded-full border-2 border-brand-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p>Don't have an account?{' '}
                        <button
                            onClick={onSwitchToSignup}
                            className="text-brand-purple font-bold hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
