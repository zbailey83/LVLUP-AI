import toucanIcon from '../../assets/toucan-svgrepo-com.svg';

const Logo = ({ className = "w-10 h-10", showText = true, textClassName = "text-xl" }) => {
    return (
        <div className="flex items-center gap-3">
            {/* Icon Container */}
            <div className={`flex items-center justify-center bg-brand-orange border-2 border-brand-black rounded-xl shadow-neo-sm p-2 ${className}`}>
                <img src={toucanIcon} alt="LVL UP Logo" className="w-full h-full object-contain" />
            </div>

            {/* Text */}
            {showText && (
                <div className={`font-kodchassan font-bold tracking-tight leading-tight ${textClassName}`}>
                    <span className="block text-brand-black">LVL UP</span>
                    <span className="block text-brand-purple">AI ACADEMY</span>
                </div>
            )}
        </div>
    );
};

export default Logo;
