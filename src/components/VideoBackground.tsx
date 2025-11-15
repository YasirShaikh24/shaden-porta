import * as React from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  posterImage?: string;
  className?: string;
}

const VideoBackground = ({ videoUrl, posterImage, className = "" }: VideoBackgroundProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Preload and optimize video loading
    if (videoRef.current) {
      // Set video to load immediately
      videoRef.current.load();
      
      // Try to play as soon as possible
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented, video will play when user interacts
          console.log("Video autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Optimized Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95"></div> 
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
    </div>
  );
};

export default VideoBackground;