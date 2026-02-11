import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import AvatarUpload from './AvatarUpload';
import ProgressTracker from './ProgressTracker';

export default function UserProfile({ onBack }) {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user?.profile?.name || '');
    const [bio, setBio] = useState(user?.profile?.bio || '');
    const [avatarUrl, setAvatarUrl] = useState(user?.profile?.avatar_url || '');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (user?.profile) {
            setName(user.profile.name || '');
            setBio(user.profile.bio || '');
            setAvatarUrl(user.profile.avatar_url || '');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const updates = {
            name,
            bio,
            avatar_url: avatarUrl
        };

        const { error } = await updateProfile(updates);

        if (error) {
            setMessage({ type: 'error', text: error.message });
        } else {
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        }
        setLoading(false);
    };

    const handleAvatarUpload = (url) => {
        setAvatarUrl(url);
        // We could auto-save here, but let's let the user verify first
        setMessage({ type: 'success', text: 'Image uploaded! Click "Save Changes" to keep it.' });
    };

    return (
        <div className="min-h-screen bg-brand-offwhite p-8 font-kodchassan">
            <button
                onClick={onBack}
                className="mb-6 px-6 py-2 bg-white border-2 border-brand-black rounded-full font-bold hover:bg-brand-yellow transition-colors"
            >
                ← Back
            </button>

            <div className="max-w-2xl mx-auto bg-white border-3 border-brand-black rounded-card p-8 shadow-neo">
                <div className="flex flex-col items-center gap-6 mb-8">
                    <AvatarUpload
                        currentAvatarUrl={avatarUrl}
                        onUploadSuccess={handleAvatarUpload}
                    />
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">{user?.email}</h1>
                        <p className="text-gray-500">Member since {new Date(user?.created_at).toLocaleDateString()}</p>
                    </div>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-xl border-2 border-brand-black ${message.type === 'error' ? 'bg-red-100 border-red-500' : 'bg-green-100 border-green-500'
                        }`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold mb-2">Display Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple"
                        />
                    </div>



                    <div>
                        <label className="block text-sm font-bold mb-2">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows="4"
                            className="w-full p-3 border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none"
                        />
                    </div>

                    <div className="pt-4 border-t-2 border-gray-100">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full border-2 border-brand-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>

                <ProgressTracker progress={user?.profile?.progress} />
            </div>
        </div>
    );
}
