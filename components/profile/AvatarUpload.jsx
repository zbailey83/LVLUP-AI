import { useState, useRef } from 'react';
import { insforge } from '../../lib/insforge';
import { Camera, Upload, X } from 'lucide-react';

export default function AvatarUpload({ currentAvatarUrl, onUploadSuccess }) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = async (event) => {
        try {
            setError(null);
            setUploading(true);

            const file = event.target.files[0];
            if (!file) return;

            // Validate file type
            if (!file.type.startsWith('image/')) {
                throw new Error('Please select an image file.');
            }

            // Validate file size (e.g., max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                throw new Error('Image must be less than 2MB.');
            }

            // Create a unique file name
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            // Upload to InsForge Storage
            const { data, error: uploadError } = await insforge.storage
                .from('avatars')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // Get Public URL
            const { data: { publicUrl } } = insforge.storage
                .from('avatars')
                .getPublicUrl(filePath);

            onUploadSuccess(publicUrl);

        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
            // Reset input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-brand-black overflow-hidden bg-gray-100 flex items-center justify-center shadow-neo">
                    {currentAvatarUrl ? (
                        <img
                            src={currentAvatarUrl}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="text-gray-300">
                            <Camera size={48} />
                        </div>
                    )}
                </div>

                {/* Overlay Button */}
                <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer disabled:cursor-not-allowed"
                >
                    <div className="bg-white p-2 rounded-full text-brand-black">
                        <Upload size={20} />
                    </div>
                </button>

                {/* Helper text if no avatar */}
                {!currentAvatarUrl && (
                    <div className="absolute -bottom-2 right-0 bg-brand-yellow p-1 rounded-full border-2 border-brand-black z-10">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <span className="text-xs font-bold">+</span>
                        </div>
                    </div>
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            <div className="text-center">
                <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="text-sm font-bold text-brand-purple hover:underline disabled:opacity-50"
                >
                    {uploading ? 'Uploading...' : 'Change Profile Photo'}
                </button>
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        </div>
    );
}
