import { createContext, useContext, useEffect, useState } from 'react';
import { insforge } from '../lib/insforge';
import { saveProgress, getProgress } from '../services/progress';
import { uploadAvatar } from '../services/storage';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    // Helper to transform array progress to object map
    const transformProgress = (progressData) => {
        if (!progressData) return {};
        const progressMap = {};
        progressData.forEach(p => {
            if (!progressMap[p.module_id]) progressMap[p.module_id] = {};
            progressMap[p.module_id][p.lesson_id || 'main'] = {
                score: p.score,
                completed: p.completed,
                data: p.data
            };
        });
        return progressMap;
    };

    const enhanceUserWithProgress = async (sessionUser) => {
        if (!sessionUser) return null;

        // Map user_metadata to profile if needed
        const user = { ...sessionUser };
        if (!user.profile && user.user_metadata) {
            user.profile = { ...user.user_metadata };
        } else if (!user.profile) {
            user.profile = {};
        }

        // Fetch progress from DB
        const { data: progressData } = await getProgress();
        user.profile.progress = transformProgress(progressData);

        return user;
    };

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            const { data: { session }, error } = await insforge.auth.getCurrentSession();
            setSession(session);

            if (session?.user) {
                const enhancedUser = await enhanceUserWithProgress(session.user);
                setUser(enhancedUser);
            } else {
                setUser(null);
            }
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
            const enhancedUser = await enhanceUserWithProgress(data.session.user);
            setUser(enhancedUser);
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
            const enhancedUser = await enhanceUserWithProgress(data.session.user);
            setUser(enhancedUser);
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
            setUser(prev => ({
                ...prev,
                profile: {
                    ...(prev?.profile || {}),
                    ...updates,
                    // Preserve progress which is not in the profile updates typically
                    progress: prev?.profile?.progress || {}
                }
            }));
        }
        return { data, error };
    };

    const updateProgress = async ({ moduleId, lessonId = 'main', score = 100, completed = true, data = {} }) => {
        const { error } = await saveProgress({
            moduleId,
            lessonId,
            score,
            completed,
            data
        });

        if (!error) {
            setUser(prev => {
                const newProgress = { ...(prev?.profile?.progress || {}) };
                if (!newProgress[moduleId]) newProgress[moduleId] = {};

                newProgress[moduleId][lessonId] = { score, completed, data };

                return {
                    ...prev,
                    profile: {
                        ...(prev?.profile || {}),
                        progress: newProgress
                    }
                };
            });
        }
        return { error };
    };

    const uploadProfilePic = async (file) => {
        const { data, error, publicUrl } = await uploadAvatar(file);
        if (publicUrl) {
            setUser(prev => ({
                ...prev,
                profile: {
                    ...(prev?.profile || {}), // Handle case where profile is initially null
                    avatar_url: publicUrl
                }
            }));
        }
        return { data, error, publicUrl };
    };

    const value = {
        signUp,
        signIn,
        signOut,
        updateProfile,
        updateProgress,
        uploadProfilePic,
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
