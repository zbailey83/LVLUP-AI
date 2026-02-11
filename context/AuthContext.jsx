import { createContext, useContext, useEffect, useState } from 'react';
import { insforge } from '../lib/insforge';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            const { data: { session }, error } = await insforge.auth.getCurrentSession();
            setSession(session);

            // Map user_metadata to profile if profile is missing
            const authUser = session?.user;
            if (authUser && !authUser.profile && authUser.user_metadata) {
                authUser.profile = authUser.user_metadata;
            }

            setUser(authUser ?? null);
            setLoading(false);
        };

        getSession();

        // In a real app we might want to listen for auth state changes if the SDK supports it,
        // but for now we'll just check on mount.
    }, []);

    const signUp = async (email, password, name) => {
        const { data, error } = await insforge.auth.signUp({
            email,
            password,
            name,
        });

        if (data?.session) {
            setSession(data.session);

            // Map user_metadata to profile if profile is missing
            const authUser = data.session.user;
            if (authUser && !authUser.profile && authUser.user_metadata) {
                authUser.profile = authUser.user_metadata;
            }
            setUser(authUser);
        }

        return { data, error };
    };

    const signIn = async (email, password) => {
        const { data, error } = await insforge.auth.signInWithPassword({
            email,
            password,
        });

        if (data?.session) {
            setSession(data.session);

            // Map user_metadata to profile if profile is missing
            const authUser = data.session.user;
            if (authUser && !authUser.profile && authUser.user_metadata) {
                authUser.profile = authUser.user_metadata;
            }
            setUser(authUser);
        }
        return { data, error };
    };

    const signOut = async () => {
        const { error } = await insforge.auth.signOut();
        if (!error) {
            setSession(null);
            setUser(null);
        }
        return { error };
    };

    const updateProfile = async (updates) => {
        const { data, error } = await insforge.auth.setProfile(updates);
        if (data) {
            // Update local user state with new profile data
            setUser(prev => ({
                ...prev,
                profile: {
                    ...(prev?.profile || {}), // Handle case where profile is initially null
                    ...updates
                }
            }));
        }
        return { data, error };
    };

    const updateProgress = async (moduleId, score) => {
        // Get current progress or init empty object
        const currentProgress = user?.profile?.progress || {};

        // Merge updates
        const updatedProgress = {
            ...currentProgress,
            [moduleId]: score
        };

        // Save via updateProfile
        return await updateProfile({ progress: updatedProgress });
    };

    const value = {
        signUp,
        signIn,
        signOut,
        updateProfile,
        updateProgress,
        user,
        session,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
