import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-accent to-primary animate-gradient-shift">
      <div className="text-center">
        {/* Animated Logo or Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SH
              </span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Shaden House Porta Cabin
        </h2>
        <p className="text-white/90 text-lg mb-8">Loading your experience...</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <p className="text-white/80 text-sm mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
