import { insforge } from '../lib/insforge';

export const getProgress = async (moduleId) => {
    const { data: { session } } = await insforge.auth.getCurrentSession();
    if (!session?.user) return { data: null, error: { message: 'No user logged in' } };

    let query = insforge
        .from('course_progress')
        .select('*')
        .eq('user_id', session.user.id);

    if (moduleId) {
        query = query.eq('module_id', moduleId);
    }

    const { data, error } = await query;
    return { data, error };
};

export const saveProgress = async ({ moduleId, lessonId, score, completed, data: extraData }) => {
    const { data: { session } } = await insforge.auth.getCurrentSession();
    if (!session?.user) return { data: null, error: { message: 'No user logged in' } };

    const { data, error } = await insforge
        .from('course_progress')
        .upsert({
            user_id: session.user.id,
            module_id: moduleId,
            lesson_id: lessonId || 'main',
            score,
            completed,
            data: extraData,
            last_accessed: new Date().toISOString()
        }, {
            onConflict: 'user_id, module_id, lesson_id'
        })
        .select();

    return { data, error };
};
