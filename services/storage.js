import { insforge } from '../lib/insforge';

export const uploadAvatar = async (file) => {
    if (!file) return { error: { message: 'No file provided' } };

    // 1. Upload to 'avatars' bucket
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await insforge.storage
        .from('avatars')
        .upload(filePath, file);

    if (uploadError) {
        return { error: uploadError };
    }

    // 2. Get public URL
    const { data: { publicUrl } } = insforge.storage
        .from('avatars')
        .getPublicUrl(filePath);

    // 3. Update user profile
    const { data, error: updateError } = await insforge.auth.setProfile({
        avatar_url: publicUrl
    });

    return { data, error: updateError, publicUrl };
};
