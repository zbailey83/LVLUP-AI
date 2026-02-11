import { User } from 'lucide-react';

const UserBadge = ({ user, onClick }) => {
    if (!user) return null;

    const displayName = user.profile?.name || user.email?.split('@')[0] || 'User';
    const avatarUrl = user.profile?.avatar_url;

    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 px-4 py-2 bg-white border-2 border-brand-black rounded-full hover:bg-brand-yellow hover:shadow-neo transition-all cursor-pointer group"
        >
            <div className="w-8 h-8 rounded-full border-2 border-brand-black overflow-hidden bg-gray-100 flex items-center justify-center">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={displayName}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <User className="w-4 h-4 text-brand-black" />
                )}
            </div>

            <span className="font-bold text-brand-black hidden sm:block group-hover:underline">
                {displayName}
            </span>
        </button>
    );
};

export default UserBadge;
