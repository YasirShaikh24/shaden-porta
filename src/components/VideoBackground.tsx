import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  className?: string;
}

const VideoBackground = ({ videoUrl, posterImage, className = "" }: VideoBackgroundProps) => {
  // FIX: Simplified state logic - assume video will start loading immediately
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // FIX: Set video to show immediately
    setShowVideo(true);
    // FIX: Removed arbitrary loading timeout. We will use onCanPlayThrough to set isLoading to false.
    // If the video loads quickly, the loading overlay will disappear immediately.
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Loading Animation - Will hide once onCanPlayThrough fires or immediately if cached */}
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
          // FIX: Added 'onCanPlayThrough' to hide the loading overlay exactly when the video is ready
          onCanPlayThrough={() => setIsLoading(false)} 
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

      {/* Gradient Overlays - Better video visibility with darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95"></div> 
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
    </div>
  );
};

export default VideoBackground;