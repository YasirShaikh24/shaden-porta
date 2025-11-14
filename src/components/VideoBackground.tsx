import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  className?: string;
}

const VideoBackground = ({ videoUrl, posterImage, className = "" }: VideoBackgroundProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Show loading for 1-2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowVideo(true);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Loading Animation */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm animate-video-fade">
          <div className="text-center">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-white text-xl font-bold drop-shadow-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Video Element */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover animate-video-fade"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-header-background/70 via-transparent to-background/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
    </div>
  );
};

export default VideoBackground;
