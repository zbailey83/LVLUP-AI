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

        const user = { ...sessionUser };
        user.profile = user.profile || {};

        // 1. Try to fetch from 'profiles' table (Primary Source of Truth)
        const { data: profileData, error } = await insforge
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (profileData) {
            user.profile = { ...user.profile, ...profileData };
        } else {
            // Lazy Migration: If no profile row exists for this user, create one from metadata
            const initialProfile = {
                id: user.id,
                name: user.user_metadata?.name || '',
                avatar_url: user.user_metadata?.avatar_url || '',
                bio: user.user_metadata?.bio || '',
                updated_at: new Date().toISOString()
            };

            // Fire and forget upsert to populate table
            insforge.from('profiles').upsert(initialProfile).then(({ data }) => {
                if (data) console.log('Created initial profile for user');
            });

            user.profile = { ...user.profile, ...initialProfile };
        }

        // 2. Restore from LocalStorage as backup/cache
        try {
            const localProfile = localStorage.getItem(`user_profile_${user.id}`);
            if (localProfile) {
                user.profile = { ...user.profile, ...JSON.parse(localProfile) };
            }
        } catch (e) {
            console.warn('Failed to load local profile', e);
        }

        // 3. Fetch progress from DB
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
            options: {
                data: { name } // Pass name to metadata for trigger to pick up
            }
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
        if (!user?.id) return { error: { message: "No user found" } };

        // 1. Update 'profiles' table (True Persistence)
        const { data, error } = await insforge
            .from('profiles')
            .upsert({
                id: user.id,
                ...updates,
                updated_at: new Date().toISOString()
            })
            .select()
            .single();

        // 2. Update LocalStorage (Immediate UI feedback + offline support)
        if (data || !error) {
            // If we got data back, use it; otherwise use updates mixed with current profile
            const newProfileData = data || { ...(user.profile || {}), ...updates };

            localStorage.setItem(`user_profile_${user.id}`, JSON.stringify(newProfileData));

            setUser(prev => ({
                ...prev,
                profile: {
                    ...(prev?.profile || {}),
                    ...newProfileData
                }
            }));
        }

        // Optional: Attempt to sync generic auth metadata if needed, but profiles table is now primary
        // await insforge.auth.updateUser({ data: updates }); 

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
            // Use the new updateProfile function which persists to DB and LocalStorage
            const { error: updateError } = await updateProfile({ avatar_url: publicUrl });

            if (updateError) {
                return { error: updateError };
            }
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
